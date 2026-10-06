import { useEffect, useRef } from 'react';

// Fixed backdrop: drifting aurora blobs, a faint grid, film grain and a cursor-following glow.
export default function Background() {
  const glowRef = useRef(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el || !window.matchMedia('(pointer: fine)').matches) return;
    let frame = 0;
    const onMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty('--mx', `${e.clientX}px`);
        el.style.setProperty('--my', `${e.clientY}px`);
      });
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink-950">
      <div className="absolute -left-[10%] -top-[20%] h-[60vmax] w-[60vmax] animate-aurora rounded-full bg-[radial-gradient(circle,rgba(110,242,196,0.13),transparent_60%)] blur-3xl" />
      <div
        className="absolute -right-[15%] top-[10%] h-[55vmax] w-[55vmax] animate-aurora rounded-full bg-[radial-gradient(circle,rgba(155,140,255,0.16),transparent_60%)] blur-3xl"
        style={{ animationDelay: '-8s', animationDuration: '28s' }}
      />
      <div
        className="absolute bottom-[-30%] left-[20%] h-[50vmax] w-[50vmax] animate-aurora rounded-full bg-[radial-gradient(circle,rgba(255,178,122,0.07),transparent_60%)] blur-3xl"
        style={{ animationDelay: '-14s', animationDuration: '34s' }}
      />

      <div className="bg-grid mask-radial absolute inset-0 opacity-60" />

      <div
        ref={glowRef}
        className="absolute inset-0"
        style={{ background: 'radial-gradient(600px circle at var(--mx, 50%) var(--my, 30%), rgba(110,242,196,0.06), transparent 45%)' }}
      />

      <svg className="absolute inset-0 h-full w-full opacity-[0.035] mix-blend-overlay">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  );
}
