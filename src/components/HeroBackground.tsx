'use client';

/**
 * Decorative hero background video (self-hosted, Mixkit free licence — no attribution required).
 * Muted, looping, plays inline. A light gradient overlay keeps the dark text readable
 * while letting the footage show through more on the right (behind the model stage).
 * Owner-requested ambient motion; a static poster covers no-JS / load-failure.
 */
export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=55"
      >
        <source src="/video/hero-bg.mp4" type="video/mp4" />
      </video>
      {/* Subtle light gradient — stronger over the text column (left), lighter on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/85 to-white/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/80" />
    </div>
  );
}
