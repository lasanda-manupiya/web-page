'use client';

import { useEffect, useRef } from 'react';

/**
 * Subtle scroll-reveal wrapper using GSAP where available, falling back to a CSS class.
 * Progressive enhancement: content is fully visible without JS (see globals.css `html.js .reveal`).
 * Respects prefers-reduced-motion.
 */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'li';
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      el.classList.add('is-visible');
      return;
    }
    let cancelled = false;
    let cleanup: (() => void) | undefined;

    (async () => {
      try {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);
        el.classList.add('is-visible'); // CSS no longer hides; GSAP controls it
        gsap.set(el, { opacity: 0, y: 16 });
        const tween = gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        });
        cleanup = () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      } catch {
        // Fallback: IntersectionObserver toggling the CSS class
        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                el.classList.add('is-visible');
                io.unobserve(el);
              }
            });
          },
          { rootMargin: '0px 0px -10% 0px' }
        );
        io.observe(el);
        cleanup = () => io.disconnect();
      }
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [delay]);

  return (
    <Tag ref={ref as never} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
