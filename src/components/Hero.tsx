import Image from 'next/image';
import CustomerSelector from './CustomerSelector';
import PathwaySummary from './PathwaySummary';

export default function Hero() {
  return (
    <section className="bg-navy text-white" aria-labelledby="hero-heading">
      <div className="mx-auto grid max-w-content gap-8 px-4 py-12 md:grid-cols-2 md:py-16">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-accent-300">
            Integrated BIM Cost, Carbon and Risk Intelligence Platform
          </p>
          <h1 id="hero-heading" className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
            One Model. Complete Project Intelligence.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-neutral-100">
            Transform BIM and IFC models into cost, carbon, asset and risk intelligence through one
            connected platform.
          </p>

          <div className="mt-6 space-y-4">
            <CustomerSelector />
            <PathwaySummary />
          </div>
        </div>

        <div className="flex items-start">
          <figure className="w-full">
            <Image
              src="/posters/hero-poster.svg"
              alt="Stylised building model with cost, carbon, information-gap and risk markers, illustrating one model viewed through four kinds of intelligence."
              width={1200}
              height={750}
              priority
              className="w-full rounded-panel border border-navy-700"
            />
            <figcaption className="mt-2 text-xs text-neutral-300">
              Illustrative view. The interactive model appears below.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
