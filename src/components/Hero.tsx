import Link from 'next/link';
import CustomerSelector from './CustomerSelector';
import PathwaySummary from './PathwaySummary';
import HeroModelStage from './HeroModelStage';
import HeroBackground from './HeroBackground';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white" aria-labelledby="hero-heading">
      <HeroBackground />
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 px-4 py-12 lg:grid-cols-[44fr_56fr] lg:py-16">
        {/* Left column ~44% */}
        <Reveal className="min-w-0">

          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent-700">
            Integrated BIM Cost, Carbon and Risk Intelligence Platform
          </p>
          <h1 id="hero-heading" className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-ink md:text-5xl">
            One Model.
            <br />
            Complete Project Intelligence<span className="text-accent">.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Transform BIM and IFC models into cost, carbon, asset and risk intelligence through one
            connected platform.
          </p>

          <div className="mt-7 space-y-4">
            <CustomerSelector />
            <PathwaySummary />
          </div>

          <p className="mt-5 flex items-center gap-2 text-sm text-muted">
            <span aria-hidden className="text-accent">◎</span>
            Prefer to explore first?{' '}
            <Link href="/platform" className="group inline-flex items-center gap-1 font-semibold text-accent-700 hover:underline">
              View the complete platform overview
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </p>
        </Reveal>

        {/* Right column ~56% */}
        <Reveal delay={0.1} className="min-w-0">
          <HeroModelStage />
        </Reveal>
      </div>
    </section>
  );
}
