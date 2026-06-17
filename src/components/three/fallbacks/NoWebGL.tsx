import StaticPoster from './StaticPoster';

export default function NoWebGL() {
  return (
    <div className="rounded-panel border border-navy-200 bg-navy-50 p-4">
      <StaticPoster message="Interactive 3D is unavailable on this device or browser. The full explanation, including every element's properties, cost, carbon, gaps and risk, is available as text on this page and in the element list below." />
    </div>
  );
}
