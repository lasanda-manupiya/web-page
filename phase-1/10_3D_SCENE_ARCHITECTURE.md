# 10 — 3D Scene Architecture

Implements PDF §13.3 (scene modules) and §13.4 (data flow). Built on React Three Fiber + Three.js + Drei. The scene is an explanatory instrument, never decoration (PDF §4.1, §7).

---

## Modules and responsibilities (PDF §13.3)

| Module | Responsibility |
|--------|----------------|
| **SceneController** | Owns active scene/step, active mode, selected element and camera target. Single source of 3D truth; reads visitor selection + scroll progress; tells all other modules what to show. |
| **ModelLoader** | Loads desktop or mobile GLB (capability-based), reports progress, handles errors, falls back to a static poster. Sets up draco/meshopt + KTX2 decoders. |
| **ElementMapper** | Maps GLB node names / Fragment ids → IFC GlobalId → data records (`lib/model-mapping`). The only place the GLB↔data relationship lives. |
| **SelectionManager** | Pointer + keyboard selection, highlight/outline state, drives InfoPanel updates. Maintains a focusable list of selectable elements for keyboard users. |
| **ModeManager** | Applies the visual state for Model Data / Cost / Carbon / Information Gaps / Risk (colourways, heatmaps, outlines, legends). |
| **ScrollTimeline** | Synchronises GSAP ScrollTrigger progress with camera, model state and HTML content (see 11). Drives the pinned 8-scene sequence. |
| **AccessibilityLayer** | Text summaries of each scene/mode, keyboard controls, reduced-motion path, static alternatives; announces loading/error states; keeps focus out of a WebGL trap. |
| **ResourceManager** | Disposes geometry, materials, textures, render targets and event listeners on unmount; pauses rendering when canvas off-screen. |

## Scene graph
```
<Canvas3D>            (client island, WebGL-guarded)
  <CameraRig>         (controlled camera; positions per scene; never clips geometry)
  <Lights/Environment>(professional, restrained; analytical not cinematic)
  <ModelRoot>
    <Model />         (GLB scene; nodes kept separate & selectable)
    <Highlights />    (selection outline + mode heatmaps)
    <Labels />        (Drei Html for gap/risk labels; also mirrored in DOM)
    <ScenarioLayer /> (affected zones, blocked/alt routes — scenario mode only)
  <SelectionRaycaster/>
```

## Mode visual states (ModeManager)
- **Model Data:** neutral materials; selected element outlined; property panel.
- **Cost:** cost heatmap (sequential ramp) + legend; hotspot emphasis; iCost lockup. Colour never the only signal — values + labels in panel.
- **Carbon:** carbon heatmap (distinct ramp from cost) + legend; SustainZone lockup; embodied-carbon wording.
- **Information Gaps:** amber outlines + hatch/pattern + labels on incomplete objects (PDF §6 Scene 4); pattern ensures non-colour distinction.
- **Risk:** risk heatmap + scenario layer (affected zones, blocked route, alternative route) + mitigation panel; explicit "concept demonstration" banner.

## Data flow (PDF §13.4)
```
visitor selection ──▶ pathway engine ──▶ active mode
        │                                   │
        ▼                                   ▼
   ScrollTimeline ──▶ SceneController ──▶ ModeManager + CameraRig
                              │
        selection ◀── SelectionManager ──▶ ElementMapper ──▶ data record
                              │
                              ▼
                   InfoPanel + report preview ──▶ enquiry form context
```

## Selection & mapping detail
- Selectable set is derived from `element-map.json`; non-selectable décor (furniture, ground) is grouped/flagged non-interactive so it never steals clicks (PDF data rule: "do not merge objects that must be selected independently").
- For the **placeholder GLB**, the map is synthesised from existing node names (e.g. `BLD_OFFICE_00_walls_exterior_0`) with `DEMO-*` ids; when the real IFC arrives, only `element-map.json` changes.
- Keyboard: arrow/Tab cycles the selectable list; Enter selects; Esc clears. Each has an accessible name from `elementName`.

## Reduced-motion / static path
- `prefers-reduced-motion` or user toggle → ScrollTimeline disabled; scenes become **stepped states** (buttons "next/prev scene") with no camera tweening; or fully static posters per scene.
- All scene meaning remains available via the DOM mirror (AccessibilityLayer), independent of WebGL.

## Performance hooks (detail in 15)
- Single shared canvas reused across scenes (no remount per scene).
- `frameloop="demand"` where possible; render only on state/camera change.
- Pause rendering when the pinned section leaves the viewport.
- Dispose on route change via ResourceManager.

## Open items
- Whether a **Fragments** detailed viewer is embedded on `/platform` or `/3d-demo` at launch (D-08). Architecture supports it (ElementMapper already speaks Fragment ids) but it is deferred by default.
