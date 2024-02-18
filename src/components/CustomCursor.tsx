import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const trail = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Don't show custom cursor on touch devices
    if ('ontouchstart' in window) return;

    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
      }
    };
    const animate = () => {
      trail.current.x += (pos.current.x - trail.current.x) * 0.12;
      trail.current.y += (pos.current.y - trail.current.y) * 0.12;
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${trail.current.x - 18}px, ${trail.current.y - 18}px)`;
      }
      requestAnimationFrame(animate);
    };
    window.addEventListener('mousemove', move);
    const raf = requestAnimationFrame(animate);
    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="fixed top-0 left-0 w-3 h-3 rounded-full z-[9999] pointer-events-none hidden md:block" style={{ willChange: 'transform', background: '#0e9aa7', boxShadow: '0 0 8px rgba(14,154,167,0.4)' }} />
      <div ref={trailRef} className="fixed top-0 left-0 w-9 h-9 rounded-full z-[9998] pointer-events-none hidden md:block" style={{ willChange: 'transform', border: '1.5px solid rgba(14,154,167,0.25)', background: 'rgba(14,154,167,0.03)' }} />
    </>
  );
}
