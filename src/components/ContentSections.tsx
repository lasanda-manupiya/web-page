// Server-rendered explanatory content (PDF §1.4, §12.2). Important text lives here, not in the canvas.

export function HowItWorks({ headingLevel = 'h2' }: { headingLevel?: 'h1' | 'h2' }) {
  const steps = [
    ['Provide your model', 'Upload or share a BIM or IFC model. It becomes one shared source for every analysis.'],
    ['Model intelligence', 'We validate the structure and extract geometry, elements, spaces, materials, properties and quantities.'],
    ['Information gaps', 'Missing, incomplete or unsuitable information is identified before it affects later work.'],
    ['Relevant intelligence', 'Cost, carbon, asset or risk analysis is applied — only the services relevant to your objective.'],
    ['Compare', 'Current and proposed materials, designs or mitigations are compared so trade-offs are clear.'],
    ['Reports & recommendations', 'You receive decision-ready outputs for your selected objective.'],
  ];
  const Heading = headingLevel;
  return (
    <section id="how" className="mx-auto max-w-content px-4 py-12" aria-labelledby="how-heading">
      <Heading id="how-heading" className="text-2xl font-bold text-ink md:text-3xl">How it works</Heading>
      <p className="mt-2 max-w-2xl text-muted">
        One model, analysed once, then read through the kinds of intelligence your project needs.
      </p>
      <ol className="mt-6 grid gap-4 md:grid-cols-3">
        {steps.map(([title, body], i) => (
          <li key={title} className="rounded-panel border border-line bg-white p-4">
            <span className="text-sm font-semibold text-accent-700">Step {i + 1}</span>
            <h3 className="mt-1 font-semibold text-ink">{title}</h3>
            <p className="mt-1 text-sm text-muted">{body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function PlatformOverview() {
  const layers = [
    ['Model intelligence', 'Interactive model, property extraction, quantity schedule and information-gap report.'],
    ['iCost commercial intelligence', 'Cost estimate, cost hotspots, commercial comparison and cost report.'],
    ['SustainZone carbon intelligence', 'Embodied carbon report, hotspots, alternatives and cost-and-carbon comparison.'],
    ['Risk & scenario intelligence', 'Risk heatmap, scenario comparison, route analysis and mitigation proposal.'],
  ];
  return (
    <section id="platform" className="bg-navy text-white" aria-labelledby="platform-heading">
      <div className="mx-auto max-w-content px-4 py-12">
        <h2 id="platform-heading" className="text-2xl font-bold">The complete platform</h2>
        <p className="mt-2 max-w-2xl text-neutral-100">
          Four connected layers built on one model. iCost provides commercial intelligence;
          SustainZone provides carbon intelligence; both share the same model source.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {layers.map(([title, body]) => (
            <div key={title} className="rounded-panel border border-line bg-navy-800 p-4">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-neutral-200">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

