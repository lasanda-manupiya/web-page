import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="mx-auto max-w-content px-4 py-20 text-center">
      <p className="text-sm font-medium uppercase tracking-wide text-accent-700">404</p>
      <h1 className="mt-2 text-3xl font-bold text-ink">Page not found</h1>
      <p className="mt-3 text-muted">
        The page you were looking for does not exist.
      </p>
      <Link href="/" className="mt-6 inline-block rounded-md bg-accent px-4 py-2 font-medium text-white hover:bg-accent-600">
        Return to the platform overview
      </Link>
    </section>
  );
}
