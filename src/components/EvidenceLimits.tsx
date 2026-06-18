import DemoBadge from './DemoBadge';

export default function EvidenceLimits() {
  return (
    <section
      id="evidence"
      className="bg-mist bg-cover bg-center bg-no-repeat"
      aria-labelledby="evidence-heading"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(246,248,247,0.93), rgba(246,248,247,0.97)), url(https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=55)',
      }}
    >
      <div className="mx-auto max-w-content px-4 py-12">
        <div className="flex items-center gap-3">
          <h2 id="evidence-heading" className="text-2xl font-bold text-ink">
            Evidence, limitations and data requirements
          </h2>
          <DemoBadge />
        </div>
        <p className="mt-2 max-w-2xl text-muted">
          Honesty about what this prototype does and does not show is part of the platform. The
          following statements apply.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-panel border border-line bg-white p-4">
            <h3 className="font-semibold text-ink">What you are seeing</h3>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted">
              <li>A <strong>temporary demonstration model</strong> (a generic office), not a purpose-built IFC4 terminal.</li>
              <li><strong>Example values only</strong> for cost, carbon, information gaps and risk.</li>
              <li>Embodied carbon shown is <strong>A1–A3 demonstration</strong>, not whole-life carbon.</li>
              <li>The fire scenario is a <strong>concept demonstration</strong>, not an engineering-validated simulation.</li>
              <li>Placeholder identifiers stand in for real IFC GlobalIds.</li>
            </ul>
          </div>
          <div className="rounded-panel border border-line bg-white p-4">
            <h3 className="font-semibold text-ink">What we need from you</h3>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted">
              <li>A BIM or IFC model (IFC remains the semantic source of truth).</li>
              <li>Confirmation of which capabilities apply to your project.</li>
              <li>Agreed rate sources and emission factors for cost and carbon.</li>
            </ul>
            <p className="mt-3 text-sm text-muted">
              Capability statuses are not yet confirmed; nothing here should be read as a validated
              production result.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
