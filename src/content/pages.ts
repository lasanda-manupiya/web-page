// Page content registry (UK English). Each page targets a distinct search intent (see phase-1/06).
// Structure follows PDF §12.2: problem · input · analysis · output · limitations · next action.
// No invented customers, results, savings, accuracy or certifications.

export interface PageContent {
  slug: string;
  url: string;
  navLabel: string;
  group: 'capability' | 'solution';
  title: string; // <title> (unique)
  metaDescription: string; // unique
  h1: string;
  intent: string; // short lede under H1
  problem: string;
  inputs: string[];
  analysis: string[];
  outputs: string[];
  limitations: string[];
  related: { href: string; label: string }[];
  cta: { href: string; label: string };
}

export const CAPABILITIES: PageContent[] = [
  {
    slug: 'bim-ifc-model-analysis',
    url: '/bim-ifc-model-analysis',
    navLabel: 'Model analysis',
    group: 'capability',
    title: 'BIM and IFC Model Analysis',
    metaDescription:
      'Validate a BIM or IFC model and extract its geometry, elements, spaces and structure as the shared foundation for cost, carbon and risk analysis.',
    h1: 'BIM and IFC model analysis',
    intent:
      'Understand what a model actually contains before any cost, carbon or risk work begins.',
    problem:
      'Project decisions are often made on models whose structure and completeness are unknown. Before a model can support reliable cost, carbon or risk analysis, its spatial hierarchy and contents need to be validated and read.',
    inputs: ['A BIM or IFC model (IFC is treated as the semantic source of truth)'],
    analysis: [
      'Validate the spatial hierarchy (project, site, building, storey, space).',
      'Extract geometry, building elements, spaces, materials and relationships.',
      'Establish IFC GlobalId as the key that links every later analysis back to the model.',
    ],
    outputs: ['An interactive model view', 'A structured inventory of elements and spaces', 'A basis for property, quantity, cost, carbon and risk work'],
    limitations: [
      'Outputs depend on what the supplied model contains; gaps are reported, not invented.',
      'The interactive model shown on this site uses a demonstration model with example data.',
    ],
    related: [
      { href: '/ifc-property-extraction', label: 'IFC property extraction' },
      { href: '/bim-information-gap-analysis', label: 'Information gap analysis' },
      { href: '/platform', label: 'The complete platform' },
    ],
    cta: { href: '/contact', label: 'Discuss your model' },
  },
  {
    slug: 'ifc-property-extraction',
    url: '/ifc-property-extraction',
    navLabel: 'Property extraction',
    group: 'capability',
    title: 'IFC Property Extraction',
    metaDescription:
      'Extract IFC properties, classifications and element data, keyed by GlobalId, so each element carries the information later analysis needs.',
    h1: 'IFC property extraction',
    intent: 'See the properties, classifications and element data carried by each object.',
    problem:
      'Quantities and rates are only as reliable as the properties behind them. Teams need to know which property sets, classifications and identifiers each element actually carries.',
    inputs: ['A valid IFC model with property sets'],
    analysis: [
      'Read property sets and classifications per element.',
      'Associate properties with the element’s IFC GlobalId.',
      'Flag where expected properties are absent (feeds gap analysis).',
    ],
    outputs: ['A property view per element', 'Classification and identifier listings', 'Inputs for quantity, cost and carbon mapping'],
    limitations: [
      'Which entity types and property sets are supported is confirmed per engagement.',
      'Demonstration values on this site are examples only.',
    ],
    related: [
      { href: '/bim-ifc-model-analysis', label: 'Model analysis' },
      { href: '/bim-quantity-takeoff', label: 'Quantity takeoff' },
      { href: '/bim-information-gap-analysis', label: 'Information gap analysis' },
    ],
    cta: { href: '/contact', label: 'Discuss your model' },
  },
  {
    slug: 'bim-quantity-takeoff',
    url: '/bim-quantity-takeoff',
    navLabel: 'Quantity takeoff',
    group: 'capability',
    title: 'BIM Quantity Takeoff',
    metaDescription:
      'Produce model-based quantities and schedules from a BIM or IFC model — read from the model or derived from geometry, with the source made explicit.',
    h1: 'BIM quantity takeoff',
    intent: 'Turn model elements into quantities and schedules for estimating and tendering.',
    problem:
      'Manual takeoff is slow and easy to get wrong. A model can produce quantities quickly, but only if it is clear whether each quantity was read from the model or computed from geometry.',
    inputs: ['Model elements with quantities or measurable geometry'],
    analysis: [
      'Read quantities from IFC where present, or derive them from geometry.',
      'Group quantities by element, storey and space.',
      'State the source of each quantity so it can be checked.',
    ],
    outputs: ['Quantity schedules by element and storey', 'A basis for cost and carbon calculation'],
    limitations: [
      'Whether quantities are read, computed or both is confirmed per model.',
      'Demonstration quantities on this site are examples only.',
    ],
    related: [
      { href: '/bim-cost-estimation', label: '5D cost estimation' },
      { href: '/bim-carbon-assessment', label: 'Embodied carbon assessment' },
      { href: '/ifc-property-extraction', label: 'Property extraction' },
    ],
    cta: { href: '/contact', label: 'Request a quantity review' },
  },
  {
    slug: 'bim-cost-estimation',
    url: '/bim-cost-estimation',
    navLabel: 'Cost estimation',
    group: 'capability',
    title: '5D BIM Cost Estimation (iCost)',
    metaDescription:
      'iCost commercial intelligence maps model quantities to rates to estimate element, floor and project cost and identify cost hotspots.',
    h1: '5D BIM cost estimation',
    intent: 'iCost commercial intelligence built on model quantities — with rate sources made explicit.',
    problem:
      'Cost certainty depends on connecting quantities to credible rates. Teams need element, floor and project cost views, and a clear picture of where the main cost hotspots are.',
    inputs: ['Model quantities', 'Agreed rate sources'],
    analysis: [
      'Map quantities to material, labour and installation rates.',
      'Aggregate cost by element, floor and project.',
      'Highlight cost hotspots and support commercial comparison.',
    ],
    outputs: ['Element and project cost estimates', 'Cost hotspots', 'Commercial comparison and a cost report'],
    limitations: [
      'Rate sources, update process and calculation coverage are confirmed before any factual cost claim.',
      'All cost figures shown on this site are demonstration values only.',
    ],
    related: [
      { href: '/bim-quantity-takeoff', label: 'Quantity takeoff' },
      { href: '/bim-carbon-assessment', label: 'Embodied carbon assessment' },
      { href: '/solutions/contractors', label: 'For contractors and QS' },
    ],
    cta: { href: '/contact', label: 'Request a cost demonstration' },
  },
  {
    slug: 'bim-carbon-assessment',
    url: '/bim-carbon-assessment',
    navLabel: 'Carbon assessment',
    group: 'capability',
    title: 'BIM Embodied Carbon Assessment (SustainZone)',
    metaDescription:
      'SustainZone embodied carbon intelligence: apply emission factors to model materials and quantities, find hotspots and compare lower-carbon options.',
    h1: 'BIM embodied carbon assessment',
    intent: 'SustainZone carbon intelligence from the same model — embodied carbon, clearly scoped.',
    problem:
      'Reducing embodied carbon means knowing which materials and elements contribute most, and being clear about which life-cycle stages are included.',
    inputs: ['Materials and quantities', 'Agreed emission factors and life-cycle modules'],
    analysis: [
      'Apply emission factors per material and module.',
      'Aggregate carbon by element and project; identify hotspots.',
      'Compare lower-carbon alternatives.',
    ],
    outputs: ['Embodied carbon report', 'Carbon hotspots', 'Alternative comparison and calculation assumptions'],
    limitations: [
      'This is embodied carbon; whole-life carbon is only claimed when all relevant stages are included.',
      'Emission-factor sources and modules are confirmed; figures on this site are demonstration values.',
    ],
    related: [
      { href: '/solutions/sustainability', label: 'For sustainability teams' },
      { href: '/bim-cost-estimation', label: 'Cost estimation' },
      { href: 'https://sustainzone.earth/', label: 'SustainZone ↗' },
    ],
    cta: { href: '/contact', label: 'Request a carbon demonstration' },
  },
  {
    slug: 'bim-information-gap-analysis',
    url: '/bim-information-gap-analysis',
    navLabel: 'Information gaps',
    group: 'capability',
    title: 'BIM Information Gap Analysis',
    metaDescription:
      'Identify missing, incomplete or unsuitable model information — fire ratings, materials, cost codes, identifiers — before it affects cost, carbon or risk work.',
    h1: 'BIM information gap analysis',
    intent: 'Find what is missing before it affects later decisions.',
    problem:
      'Incomplete model data quietly undermines cost, carbon and risk outputs. Teams need missing or unsuitable information surfaced early, with its impact made clear.',
    inputs: ['A model with expected property and classification rules'],
    analysis: [
      'Check completeness against expected properties (automated rules and manual review).',
      'Classify each gap by severity and the analysis it affects.',
      'Recommend remediation.',
    ],
    outputs: ['A gap schedule with severity', 'Which analyses each gap affects', 'An improvement plan'],
    limitations: [
      'The split between automated rules and manual review is confirmed per engagement.',
      'Gaps shown on this site are deliberate demonstration examples.',
    ],
    related: [
      { href: '/bim-ifc-model-analysis', label: 'Model analysis' },
      { href: '/bim-cost-estimation', label: 'Cost estimation' },
      { href: '/digital-twin-risk-modelling', label: 'Risk modelling' },
    ],
    cta: { href: '/contact', label: 'Request a completeness review' },
  },
  {
    slug: 'digital-twin-risk-modelling',
    url: '/digital-twin-risk-modelling',
    navLabel: 'Risk modelling',
    group: 'capability',
    title: 'Digital Twin Risk Modelling',
    metaDescription:
      'Visualise asset risk and scenarios on the model — affected zones, routes and mitigations. Concept demonstration, clearly distinguished from operational digital twins.',
    h1: 'Digital twin risk modelling',
    intent: 'Visualise risk and readiness on the model — with honest scope.',
    problem:
      'Owners of complex assets need to see where risk concentrates and how scenarios could affect spaces, assets and routes — without overstating what a model-based view can claim.',
    inputs: ['Spatial geometry, assets and routes', 'Scenario assumptions'],
    analysis: [
      'Map risk to spaces, assets and routes.',
      'Visualise affected zones and alternative routes.',
      'Support readiness review.',
    ],
    outputs: ['Risk heatmap', 'Scenario visualisation', 'Affected-asset summary and route review'],
    limitations: [
      '“Digital twin” is used only where scenario or operational data integration is genuinely relevant.',
      'A static model view is not an operational digital twin; scenarios here are concept demonstrations, not validated engineering simulations.',
    ],
    related: [
      { href: '/scenario-modelling', label: 'Scenario modelling' },
      { href: '/solutions/aviation', label: 'For aviation' },
      { href: '/solutions/insurance-risk', label: 'For insurance and risk' },
    ],
    cta: { href: '/contact', label: 'Discuss a risk review' },
  },
  {
    slug: 'scenario-modelling',
    url: '/scenario-modelling',
    navLabel: 'Scenario modelling',
    group: 'capability',
    title: 'BIM Scenario Modelling',
    metaDescription:
      'Model specialist scenarios — fire, restricted access and others — on the model to visualise impact zones, affected assets, blocked and alternative routes.',
    h1: 'BIM scenario modelling',
    intent: 'Walk through specialist scenarios on the model to understand possible impacts.',
    problem:
      'For specialist projects, teams need to visualise how an event could affect spaces, assets and routes, and what mitigations might apply — clearly framed as a demonstration, not a validated simulation.',
    inputs: ['Spatial data, assets and routes', 'A defined scenario'],
    analysis: [
      'Identify origin, affected zones and affected assets.',
      'Show blocked primary routes and alternative routes.',
      'Propose mitigations for discussion.',
    ],
    outputs: ['Affected-zone visualisation', 'Route analysis', 'A mitigation summary'],
    limitations: [
      'Scenarios are concept demonstrations, explicitly not engineering-validated simulations.',
      'The fire scenario shown is demonstration data only.',
    ],
    related: [
      { href: '/digital-twin-risk-modelling', label: 'Risk modelling' },
      { href: '/solutions/aviation', label: 'For aviation' },
      { href: '/solutions/transport-infrastructure', label: 'For transport & infrastructure' },
    ],
    cta: { href: '/contact', label: 'Discuss a scenario' },
  },
];

export const SOLUTIONS: PageContent[] = [
  {
    slug: 'contractors',
    url: '/solutions/contractors',
    navLabel: 'Contractors & QS',
    group: 'solution',
    title: 'BIM Cost and Carbon Software for Contractors and QS',
    metaDescription:
      'For contractors and quantity surveyors: model-based quantities, cost estimates, comparison and a commercial summary from one model.',
    h1: 'For contractors and quantity surveyors',
    intent: 'Quantities, estimates and cost impacts for tendering and delivery.',
    problem:
      'Contractors and QS teams need fast, defensible quantities and cost estimates, and a clear view of cost impacts when designs change.',
    inputs: ['A BIM or IFC model', 'Agreed rate sources'],
    analysis: [
      'Model analysis and quantity extraction.',
      'Gap review so estimates rest on complete data.',
      'iCost cost assessment and cost comparison.',
    ],
    outputs: ['Quantity schedule', 'Cost estimate', 'Comparison and a commercial summary'],
    limitations: ['Cost figures shown are demonstration values; rate sources are confirmed per engagement.'],
    related: [
      { href: '/bim-quantity-takeoff', label: 'Quantity takeoff' },
      { href: '/bim-cost-estimation', label: 'Cost estimation' },
      { href: '/bim-information-gap-analysis', label: 'Information gaps' },
    ],
    cta: { href: '/contact', label: 'Request a model review' },
  },
  {
    slug: 'asset-managers',
    url: '/solutions/asset-managers',
    navLabel: 'Asset & FM',
    group: 'solution',
    title: 'BIM Asset Information Management',
    metaDescription:
      'For asset and facilities managers: asset data, system mapping, completeness review and digital-twin readiness from a model.',
    h1: 'For asset and facilities managers',
    intent: 'Asset information, maintenance data and digital-twin readiness.',
    problem:
      'Asset and FM teams need reliable asset information and a clear picture of how ready a model is to support operations.',
    inputs: ['A model with asset properties and identifiers'],
    analysis: ['Asset property extraction and system mapping.', 'Completeness review.', 'Readiness and risk review.'],
    outputs: ['Asset report', 'Gap schedule', 'Route review and a digital-twin readiness summary'],
    limitations: ['“Digital twin” readiness describes data completeness, not an operational live-data twin unless integrated.'],
    related: [
      { href: '/bim-information-gap-analysis', label: 'Information gaps' },
      { href: '/digital-twin-risk-modelling', label: 'Risk modelling' },
      { href: '/ifc-property-extraction', label: 'Property extraction' },
    ],
    cta: { href: '/contact', label: 'Request an asset data review' },
  },
  {
    slug: 'aviation',
    url: '/solutions/aviation',
    navLabel: 'Aviation',
    group: 'solution',
    title: 'Airport BIM Risk and Scenario Modelling',
    metaDescription:
      'For airports and aviation operators: spatial and asset data extraction, scenario modelling, impact assessment and route analysis on the model.',
    h1: 'For aviation and airport operators',
    intent: 'Complex assets, emergency routes and resilience scenarios.',
    problem:
      'Airport operators manage complex assets where understanding spatial relationships, routes and scenario impacts matters — provided the scope is honest.',
    inputs: ['An airport or terminal model', 'Scenario assumptions'],
    analysis: ['Model analysis and spatial/asset data extraction.', 'Scenario modelling.', 'Impact assessment.'],
    outputs: ['Risk heatmap', 'Scenario visualisation', 'Affected-asset summary and route analysis'],
    limitations: ['Scenarios are concept demonstrations, not validated engineering simulations.'],
    related: [
      { href: '/scenario-modelling', label: 'Scenario modelling' },
      { href: '/digital-twin-risk-modelling', label: 'Risk modelling' },
      { href: '/solutions/insurance-risk', label: 'For insurance & risk' },
    ],
    cta: { href: '/contact', label: 'Discuss an airport model' },
  },
  {
    slug: 'transport-infrastructure',
    url: '/solutions/transport-infrastructure',
    navLabel: 'Transport & infrastructure',
    group: 'solution',
    title: 'Infrastructure BIM Cost, Carbon and Risk',
    metaDescription:
      'For transport and infrastructure: assets, cost and carbon, route analysis and resilience from one connected model.',
    h1: 'For transport and infrastructure',
    intent: 'Assets, access, route disruption, cost, carbon and resilience.',
    problem:
      'Infrastructure owners balance cost, carbon and resilience across assets where access and route disruption carry real consequences.',
    inputs: ['An infrastructure model', 'Rate and emission-factor sources', 'Scenario assumptions'],
    analysis: ['Model analysis.', 'Cost and carbon assessment.', 'Scenario modelling and risk evaluation.'],
    outputs: ['Asset report', 'Cost and carbon outputs', 'Route analysis and resilience recommendations'],
    limitations: ['Cost and carbon figures shown are demonstration values; scenarios are concept demonstrations.'],
    related: [
      { href: '/bim-cost-estimation', label: 'Cost estimation' },
      { href: '/bim-carbon-assessment', label: 'Carbon assessment' },
      { href: '/scenario-modelling', label: 'Scenario modelling' },
    ],
    cta: { href: '/contact', label: 'Discuss an infrastructure model' },
  },
  {
    slug: 'insurance-risk',
    url: '/solutions/insurance-risk',
    navLabel: 'Insurance & risk',
    group: 'solution',
    title: 'BIM Asset Risk Assessment for Insurers',
    metaDescription:
      'For insurance and risk organisations: vulnerability assessment, scenario impact visualisation, mitigation comparison and an evidence report.',
    h1: 'For insurance and risk organisations',
    intent: 'Vulnerability, event impacts, mitigation and evidence.',
    problem:
      'Insurers and risk teams need a clear, evidenced view of asset vulnerability and the effect of possible mitigations.',
    inputs: ['An asset model', 'Scenario assumptions'],
    analysis: ['Model analysis and vulnerability assessment.', 'Scenario modelling and impact visualisation.', 'Mitigation evidence.'],
    outputs: ['Risk heatmap', 'Affected-asset report', 'Mitigation comparison and an evidence report'],
    limitations: ['Outputs are demonstrations for discussion, not validated engineering or actuarial conclusions.'],
    related: [
      { href: '/digital-twin-risk-modelling', label: 'Risk modelling' },
      { href: '/scenario-modelling', label: 'Scenario modelling' },
      { href: '/solutions/aviation', label: 'For aviation' },
    ],
    cta: { href: '/contact', label: 'Request a risk evidence review' },
  },
  {
    slug: 'sustainability',
    url: '/solutions/sustainability',
    navLabel: 'Sustainability',
    group: 'solution',
    title: 'BIM Carbon Assessment for Sustainability Teams',
    metaDescription:
      'For sustainability teams: embodied carbon by material, hotspot analysis, lower-carbon alternatives and clear calculation assumptions.',
    h1: 'For sustainability teams',
    intent: 'Embodied carbon, material contribution and lower-carbon alternatives.',
    problem:
      'Sustainability teams need to know which materials drive embodied carbon and where credible reductions are available, with assumptions stated plainly.',
    inputs: ['Materials and quantities', 'Agreed emission factors'],
    analysis: ['Material and quantity extraction.', 'SustainZone carbon assessment and hotspot analysis.', 'Alternative comparison.'],
    outputs: ['Material carbon schedule', 'Hotspot summary', 'Alternatives and calculation assumptions'],
    limitations: ['Embodied carbon only unless all life-cycle stages are included; figures shown are demonstration values.'],
    related: [
      { href: '/bim-carbon-assessment', label: 'Carbon assessment' },
      { href: '/bim-cost-estimation', label: 'Cost estimation' },
      { href: 'https://sustainzone.earth/', label: 'SustainZone ↗' },
    ],
    cta: { href: '/contact', label: 'Request a carbon demonstration' },
  },
];

export const ALL_PAGES = [...CAPABILITIES, ...SOLUTIONS];

export function findPage(url: string): PageContent | undefined {
  return ALL_PAGES.find((p) => p.url === url);
}

// Routes for sitemap (content pages + standalone pages).
export const STANDALONE_ROUTES = [
  '/',
  '/platform',
  '/how-it-works',
  '/3d-demo',
  '/resources',
  '/about',
  '/contact',
];

export const ALL_ROUTES = [...STANDALONE_ROUTES, ...ALL_PAGES.map((p) => p.url)];
