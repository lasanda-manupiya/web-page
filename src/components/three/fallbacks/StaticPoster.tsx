import Image from 'next/image';

export default function StaticPoster({ message }: { message?: string }) {
  return (
    <div className="relative">
      <Image
        src="/posters/hero-poster.svg"
        alt="Static illustration of the building model showing cost, carbon, information-gap and risk markers."
        width={1200}
        height={750}
        className="w-full rounded-panel border border-line"
      />
      {message && (
        <p className="mt-2 text-sm text-muted">{message}</p>
      )}
    </div>
  );
}
