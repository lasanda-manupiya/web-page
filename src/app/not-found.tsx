import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="mx-auto max-w-content px-4 py-20 text-center">
      <p className="text-sm font-medium uppercase tracking-wide text-accent-700">404</p>
      <h1 className="mt-2 text-3xl font-bold text-navy-900">Page not found</h1>
      <p className="mt-3 text-neutral-700">
        The page you were looking for does not exist.
      </p>
      <Link href="/" className="mt-6 inline-block rounded-panel bg-navy px-4 py-2 font-medium text-white">
        Return to the platform overview
      </Link>
    </section>
  );
}
