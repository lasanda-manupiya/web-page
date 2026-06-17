export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200 bg-navy-950 text-neutral-100">
      <div className="mx-auto grid max-w-content gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <p className="font-semibold">iCost + SustainZone</p>
          <p className="mt-2 max-w-sm text-sm text-neutral-300">
            Integrated BIM Cost, Carbon and Risk Intelligence Platform. One model becomes connected
            cost, carbon, asset, information-gap and risk intelligence.
          </p>
        </div>
        <div className="text-sm">
          <p className="font-medium text-white">Platform</p>
          <ul className="mt-2 space-y-1 text-neutral-300">
            <li>BIM &amp; IFC model analysis</li>
            <li>Quantity takeoff &amp; cost estimation</li>
            <li>Embodied carbon assessment</li>
            <li>Information gap &amp; risk analysis</li>
          </ul>
        </div>
        <div className="text-sm text-neutral-300">
          <p className="font-medium text-white">Status</p>
          <p className="mt-2">
            Prototype (Phase 2). Contact, legal and registration details to be confirmed
            (placeholder).
          </p>
          <p className="mt-4 text-xs text-neutral-400">© 2026 iCost + SustainZone. Placeholder details.</p>
        </div>
      </div>
    </footer>
  );
}
