# 11 — Animation Timeline (GSAP ScrollTrigger)

Implements PDF §6 (storyboard), §8 (animatic timing & motion rules) and §13.3 (ScrollTimeline). The homepage hero section is **pinned**; scroll scrubs through the 8 scenes. Motion is slow, eased and professional (PDF §8.2). Scroll is an *enhancement* — manual mode switching and full HTML content work without it (PDF §19.2).

---

## Structure
- One pinned container wraps the hero/story section. A single GSAP timeline is bound to a ScrollTrigger with `scrub` (smoothed) and `pin: true`.
- Timeline progress (0–1) maps to the 8 scenes; `SceneController` reads progress and sets camera target + model/mode state.
- DOM content for each scene fades/translates in step with the model (small, eased; no parallax excess).

## Scene timeline (mapped from PDF §8.1 animatic timing → scroll progress)

| Scene | Animatic time | Scroll progress | Camera | Model/UI state | DOM heading shown |
|-------|---------------|-----------------|--------|----------------|-------------------|
| 1 Customer objective | 0–3 s | 0.00–0.11 | wide ¾, slow rotation | complete model; selectors visible | "One Model. Complete Project Intelligence." |
| 2 Model input | 3–6 s | 0.11–0.21 | slow push to isometric | analysis boundary; scan sweep | "Everything Starts with Your BIM or IFC Model." |
| 3 Property intelligence | 6–10 s | 0.21–0.36 | medium isometric + small orbit | floors separate; one element selected; side panel | "Understand What Is Inside the Model." |
| 4 Information gaps | 10–13 s | 0.36–0.46 | closer to incomplete objects | amber outlines/patterns/labels | "Identify Missing Information Before It Affects Decisions." |
| 5 Relevant intelligence | 13–18 s | 0.46–0.64 | wider analytical isometric | switch to cost/carbon/asset/risk per selection | "Apply the Intelligence Relevant to Your Project." |
| 6 Compare options | 18–21 s | 0.64–0.75 | centred comparison | slider / split current vs proposed | "Compare Before You Decide." |
| 7 Risk scenario | 21–25 s | 0.75–0.89 | move toward affected zone | fire/restricted-access demo; hazard, blocked + alt route | "Visualise Possible Impacts and Mitigation Options." |
| 8 Outputs | 25–28 s | 0.89–1.00 | stable wide final | model reforms; reports + CTA appear | "Bring Us Your Model. We Will Configure the Intelligence Around Your Project." |

(Progress bands are proportional to the animatic seconds; tuned during Phase 2.)

## Motion rules enforced (PDF §8.2)
- Slow ease-in/ease-out on all camera moves; no linear snaps.
- **Consistent model orientation** across scenes; transitions are state changes, not spins or glitches.
- **Camera never passes through walls/geometry** — paths are pre-validated waypoints.
- Interface panels remain readable throughout (no motion blur on text; panels settle before reading).
- Provide a **static poster** and a **reduced-motion sequence**.
- No particles, flares, fast cuts or gaming transitions (PDF §7.1 avoid list).

## Manual control parity (PDF §19.2)
- Mode tabs let users jump to any mode without scrolling.
- "Skip the animation" / "Pause" controls are always present.
- A scene navigator (dots/steps) allows jumping to any scene; keyboard-operable.

## Reduced motion & fallbacks
- `prefers-reduced-motion: reduce` → no pin/scrub; scenes become discrete, instant state changes triggered by in-view or buttons; camera does not tween.
- WebGL unavailable / low power → static per-scene posters with the same headings + copy; optional 28s animatic video (when produced, DEP-09) as a lightweight fallback.
- Mobile → simplified timeline (fewer camera moves), mobile GLB or posters; story still legible.

## Performance (detail in 15)
- ScrollTrigger work kept off the main-thread hot path; avoid layout thrash (transform/opacity only).
- Timeline paused when the pinned section is out of view (PDF §15.2).
- One timeline instance; killed/cleaned on unmount (ResourceManager).

## Dependencies
- Tuned against the **reference animatic** when supplied (DEP-09); until then timing follows PDF §8.1 above.
- Final camera waypoints depend on the real model's geometry/scale (DEP-01); placeholder waypoints defined for `office_building.glb` in Phase 2.
