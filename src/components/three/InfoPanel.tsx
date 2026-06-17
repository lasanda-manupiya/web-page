'use client';

import { usePlatformStore } from '@/lib/store';
import {
  elementByGuid,
  getProperties,
  getQuantities,
  getCost,
  getCarbon,
  getGap,
  getRisk,
  fireScenario,
  costSummary,
  carbonSummary,
} from '@/lib/data';
import DemoBadge from '@/components/DemoBadge';

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex justify-between gap-4 border-b border-neutral-100 py-1 text-sm last:border-0">
      <dt className="text-muted">{label}</dt>
      <dd className="text-right font-medium text-ink">{value}</dd>
    </div>
  );
}

export default function InfoPanel() {
  const { selectedGuid, mode } = usePlatformStore();
  const el = selectedGuid ? elementByGuid(selectedGuid) : undefined;

  return (
    <aside
      aria-label="Element information"
      className="rounded-panel border border-line bg-white p-4"
    >
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
          Information panel
        </h3>
        <DemoBadge />
      </div>

      <div aria-live="polite">
        {!el && (
          <div className="text-sm text-muted">
            <p>No element selected. Choose an element in the model, or from the list below it.</p>
            <dl className="mt-3">
              <Row label="Demo project cost" value={`£${costSummary.projectTotal.toLocaleString('en-GB')}`} />
              <Row label="Demo embodied carbon" value={`${carbonSummary.projectTotal} tCO₂e`} />
            </dl>
          </div>
        )}

        {el && (
          <div>
            <p className="text-base font-semibold text-ink">{el.elementName}</p>
            <p className="text-xs text-muted">
              {el.ifcClass} · {el.storey} · {el.space}
            </p>
            <p className="mt-1 text-[11px] text-muted">IFC GlobalId: {el.ifcGlobalId} (placeholder)</p>

            <dl className="mt-3">
              {mode === 'data' && <DataView guid={el.ifcGlobalId} />}
              {mode === 'cost' && <CostView guid={el.ifcGlobalId} />}
              {mode === 'carbon' && <CarbonView guid={el.ifcGlobalId} />}
              {mode === 'gaps' && <GapView guid={el.ifcGlobalId} />}
              {mode === 'risk' && <RiskView guid={el.ifcGlobalId} />}
            </dl>
          </div>
        )}
      </div>
    </aside>
  );
}

function DataView({ guid }: { guid: string }) {
  const p = getProperties(guid);
  const q = getQuantities(guid);
  return (
    <>
      <Row label="Material" value={p?.material ?? <Missing />} />
      <Row label="Classification" value={p?.classification ?? <Missing />} />
      <Row label="Fire rating" value={p?.fireRating ?? <Missing />} />
      <Row label="Asset id" value={p?.assetIdentifier ?? <Missing />} />
      {q?.area != null && <Row label="Area" value={`${q.area} m²`} />}
      {q?.volume != null && <Row label="Volume" value={`${q.volume} m³`} />}
      {q?.count != null && <Row label="Count" value={`${q.count} ${q.unit}`} />}
    </>
  );
}

function CostView({ guid }: { guid: string }) {
  const c = getCost(guid);
  if (!c) return <p className="text-sm text-muted">No cost data.</p>;
  return (
    <>
      <Row label="Element total" value={c.elementTotal != null ? `£${c.elementTotal.toLocaleString('en-GB')}` : <Missing />} />
      <Row label="Material" value={c.materialCost != null ? `£${c.materialCost.toLocaleString('en-GB')}` : <Missing />} />
      <Row label="Labour" value={c.labourCost != null ? `£${c.labourCost.toLocaleString('en-GB')}` : <Missing />} />
      <Row label="Installation" value={c.installationCost != null ? `£${c.installationCost.toLocaleString('en-GB')}` : <Missing />} />
      <Row label="Rate source" value={c.rateSource} />
      {c.note && <p className="mt-1 text-xs text-amber-700">{c.note}</p>}
    </>
  );
}

function CarbonView({ guid }: { guid: string }) {
  const c = getCarbon(guid);
  if (!c) return <p className="text-sm text-muted">No carbon data.</p>;
  return (
    <>
      <Row label="Embodied carbon" value={c.elementCarbon != null ? `${c.elementCarbon} tCO₂e` : <Missing />} />
      <Row label="Module" value={c.lifeCycleModule} />
      <Row label="Material ref" value={c.materialReference ?? <Missing />} />
      <Row label="Factor source" value={c.factorSource ?? <Missing />} />
      {c.note && <p className="mt-1 text-xs text-amber-700">{c.note}</p>}
    </>
  );
}

function GapView({ guid }: { guid: string }) {
  const g = getGap(guid);
  if (!g) return <p className="text-sm text-accent-700">No information gaps recorded for this element.</p>;
  return (
    <>
      <Row label="Missing field" value={<span className="text-amber-800">{g.missingField}</span>} />
      <Row label="Severity" value={<SeverityTag sev={g.severity} />} />
      <Row label="Affects" value={g.affectedAnalysis.join(', ')} />
      <p className="mt-2 text-sm text-muted">{g.recommendation}</p>
    </>
  );
}

function RiskView({ guid }: { guid: string }) {
  const r = getRisk(guid);
  return (
    <>
      {r ? (
        <>
          <Row label="Risk severity" value={<SeverityTag sev={r.severity} />} />
          <Row label="Reason" value={r.reason} />
        </>
      ) : (
        <p className="text-sm text-muted">No specific risk recorded for this element.</p>
      )}
      <div className="mt-3 rounded border border-amber-300 bg-amber-50 p-2 text-xs text-amber-900">
        <p className="font-medium">Scenario: {fireScenario.scenarioId}</p>
        <p>{fireScenario.validationStatement}</p>
      </div>
    </>
  );
}

function Missing() {
  return <span className="text-amber-700">Missing</span>;
}

function SeverityTag({ sev }: { sev: 'high' | 'medium' | 'low' }) {
  const map = {
    high: 'border-red-300 bg-red-50 text-red-800',
    medium: 'border-amber-300 bg-amber-50 text-amber-800',
    low: 'border-neutral-300 bg-neutral-50 text-muted',
  };
  return <span className={`rounded border px-1.5 py-0.5 text-xs ${map[sev]}`}>{sev}</span>;
}
