'use client';

import { useEffect, useMemo, useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { usePlatformStore } from '@/lib/store';
import {
  elements,
  getCost,
  getCarbon,
  getGap,
  getRisk,
  isSelectableNode,
  elementByNode,
} from '@/lib/data';
import { rampColour } from '@/lib/modes';
import { DRACO_PATH } from '@/lib/webgl';

const maxCost = Math.max(...elements.map((e) => getCost(e.ifcGlobalId)?.elementTotal ?? 0));
const maxCarbon = Math.max(...elements.map((e) => getCarbon(e.ifcGlobalId)?.elementCarbon ?? 0));

interface Props {
  url: string;
  progressRef: React.MutableRefObject<number>;
  freeLook: boolean;
  reducedMotion: boolean;
  autoRotate?: boolean;
}

const AUTO_ROTATE_SPEED = 0.12; // rad/s — slow, controlled (≈ one turn per ~52s)

interface Tracked {
  mesh: THREE.Mesh;
  guid: string;
  material: THREE.MeshStandardMaterial;
}

export default function ModelViewer({ url, progressRef, freeLook, reducedMotion, autoRotate = false }: Props) {
  const { scene } = useGLTF(url, DRACO_PATH);
  const { camera } = useThree();
  const root = useMemo(() => scene.clone(true), [scene]);
  const tracked = useRef<Tracked[]>([]);
  const center = useRef(new THREE.Vector3());
  const size = useRef(4);
  const controlsRef = useRef<any>(null);
  const autoAngle = useRef(0);

  const { mode, selectedGuid, selectElement } = usePlatformStore();

  // ---- Setup: bounds, clone materials, classify selectable vs décor ----
  useEffect(() => {
    const box = new THREE.Box3().setFromObject(root);
    box.getCenter(center.current);
    const s = new THREE.Vector3();
    box.getSize(s);
    size.current = Math.max(s.x, s.y, s.z) || 4;

    const list: Tracked[] = [];
    root.traverse((obj) => {
      const mesh = obj as THREE.Mesh;
      if (!mesh.isMesh) return;
      // resolve mapped element by walking up the name chain
      let node: THREE.Object3D | null = mesh;
      let entry = undefined;
      while (node && !entry) {
        entry = elementByNode(node.name);
        node = node.parent;
      }
      const mat = (Array.isArray(mesh.material) ? mesh.material[0] : mesh.material) as THREE.MeshStandardMaterial;
      const cloned = (mat?.clone?.() as THREE.MeshStandardMaterial) ?? new THREE.MeshStandardMaterial({ color: '#9aa6b2' });
      cloned.metalness = 0.1;
      cloned.roughness = 0.85;
      mesh.material = cloned;
      if (entry?.selectable) {
        mesh.userData.guid = entry.ifcGlobalId;
        list.push({ mesh, guid: entry.ifcGlobalId, material: cloned });
      } else {
        // décor (e.g. furniture) — dim and non-interactive
        cloned.color.multiplyScalar(0.7);
        cloned.transparent = true;
        cloned.opacity = 0.55;
        mesh.userData.guid = undefined;
      }
    });
    tracked.current = list;

    // place camera at a sensible initial framing
    setCameraFromProgress(reducedMotion ? 0.5 : 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [root]);

  // ---- Recolour on mode / selection change (not per frame) ----
  useEffect(() => {
    for (const t of tracked.current) {
      const m = t.material;
      m.emissive.setHex(0x000000);
      m.emissiveIntensity = 1;
      switch (mode) {
        case 'cost': {
          const v = getCost(t.guid)?.elementTotal;
          if (v == null) m.color.set('#9aa6b2');
          else m.color.set(rampColour('cost', v / (maxCost || 1)));
          break;
        }
        case 'carbon': {
          const v = getCarbon(t.guid)?.elementCarbon;
          if (v == null) m.color.set('#9aa6b2');
          else m.color.set(rampColour('carbon', v / (maxCarbon || 1)));
          break;
        }
        case 'gaps': {
          const g = getGap(t.guid);
          if (g) {
            m.color.set('#fcd34d');
            m.emissive.set('#b45309');
            m.emissiveIntensity = 0.35;
          } else {
            m.color.set('#cbd5e1');
          }
          break;
        }
        case 'risk': {
          const r = getRisk(t.guid);
          const sev = r?.severity;
          if (sev) {
            m.color.set(sev === 'high' ? '#ef4444' : sev === 'medium' ? '#f59e0b' : '#fca5a5');
            m.emissive.set('#7f1d1d');
            m.emissiveIntensity = sev === 'high' ? 0.4 : 0.2;
          } else {
            m.color.set('#cbd5e1');
          }
          break;
        }
        default:
          m.color.set('#9fb4c7');
      }
      // selection accent on top of mode colour
      if (t.guid === selectedGuid) {
        m.emissive.set('#2f9e6f');
        m.emissiveIntensity = 0.6;
      }
    }
  }, [mode, selectedGuid]);

  function framing(p: number, azimuthOffset = 0) {
    const c = center.current;
    const r = THREE.MathUtils.lerp(1.7, 1.25, p) * size.current; // distance as multiple of model size
    const theta = THREE.MathUtils.lerp(0.9, 0.6, p) + azimuthOffset; // azimuth (+ slow auto-rotation)
    const phi = THREE.MathUtils.lerp(1.15, 1.0, p); // polar (closer to horizontal = less top-down)
    const pos = new THREE.Vector3(
      c.x + r * Math.sin(phi) * Math.cos(theta),
      c.y + r * Math.cos(phi),
      c.z + r * Math.sin(phi) * Math.sin(theta)
    );
    return { pos, look: c };
  }

  function setCameraFromProgress(p: number) {
    const { pos, look } = framing(p);
    camera.position.copy(pos);
    camera.lookAt(look);
  }

  useFrame((_, delta) => {
    if (freeLook) {
      controlsRef.current?.update?.();
      return;
    }
    if (reducedMotion) return; // static framing — no motion under reduced-motion preference
    // gentle continuous turntable rotation
    if (autoRotate) autoAngle.current += delta * AUTO_ROTATE_SPEED;
    // ease camera toward the (optionally scroll-driven, optionally auto-rotating) framing
    const p = THREE.MathUtils.clamp(progressRef.current, 0, 1);
    const { pos, look } = framing(p, autoRotate ? autoAngle.current : 0);
    camera.position.lerp(pos, 1 - Math.pow(0.001, delta));
    camera.lookAt(look);
  });

  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 10, 7]} intensity={1.1} castShadow={false} />
      <directionalLight position={[-6, 4, -4]} intensity={0.4} />
      <primitive
        object={root}
        onClick={(e: any) => {
          e.stopPropagation();
          let node: THREE.Object3D | null = e.object;
          let guid: string | undefined;
          while (node && !guid) {
            guid = node.userData?.guid;
            if (!guid && isSelectableNode(node.name)) guid = elementByNode(node.name)?.ifcGlobalId;
            node = node.parent;
          }
          if (guid) selectElement(guid);
        }}
        onPointerMissed={() => selectElement(null)}
      />
      <OrbitControls
        ref={controlsRef}
        enabled={freeLook}
        enablePan={false}
        target={center.current}
        makeDefault
      />
    </>
  );
}
