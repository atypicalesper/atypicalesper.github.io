'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const BASE_VEL = { x: 0.15, y: 0.25, z: 0.08 };

export default function Cube() {
  const [pos, setPos]         = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [flashing, setFlashing]     = useState(false);

  const cubeRef    = useRef(null);
  const rafRef     = useRef(null);
  const dragRef    = useRef(null);   // { sx, sy, px, py }
  const draggingRef = useRef(false); // ref mirror of isDragging — no stale closure
  const wasDrag    = useRef(false);
  const rot        = useRef({ x: 20, y: 30, z: 0 });
  const extra      = useRef({ x: 0, y: 0 });

  // Set initial position
  useEffect(() => {
    setPos({
      x: window.innerWidth  * 0.88 - 80,
      y: window.innerHeight * 0.50 - 80,
    });
  }, []);

  // rAF rotation loop
  useEffect(() => {
    const tick = () => {
      const r = rot.current;
      const e = extra.current;
      r.x += BASE_VEL.x + e.x;
      r.y += BASE_VEL.y + e.y;
      r.z += BASE_VEL.z;
      e.x *= 0.96;
      e.y *= 0.96;
      if (cubeRef.current) {
        cubeRef.current.style.transform =
          `rotateX(${r.x}deg) rotateY(${r.y}deg) rotateZ(${r.z}deg)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Global mouse move → subtle rotation nudge
  useEffect(() => {
    let lx = 0, ly = 0;
    const onMove = (e) => {
      const dx = e.clientX - lx;
      const dy = e.clientY - ly;
      lx = e.clientX;
      ly = e.clientY;
      if (!draggingRef.current) {
        extra.current.x += dy * 0.018;
        extra.current.y += dx * 0.018;
      }
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // Global pointermove + pointerup so drag works even if cursor leaves the element
  useEffect(() => {
    const onMove = (e) => {
      if (!draggingRef.current || !dragRef.current) return;
      const { sx, sy, px, py } = dragRef.current;
      if (Math.abs(e.clientX - sx) > 3 || Math.abs(e.clientY - sy) > 3) {
        wasDrag.current = true;
      }
      setPos({ x: px + e.clientX - sx, y: py + e.clientY - sy });
    };
    const onUp = () => {
      draggingRef.current = false;
      setIsDragging(false);
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, []);

  const onPointerDown = useCallback((e) => {
    if (e.button !== 0) return;
    wasDrag.current = false;
    dragRef.current = {
      sx: e.clientX, sy: e.clientY,
      px: pos?.x ?? 0, py: pos?.y ?? 0,
    };
    draggingRef.current = true;
    setIsDragging(true);
    e.preventDefault();
  }, [pos]);

  const onClick = useCallback(() => {
    if (wasDrag.current) return;
    extra.current.x += (Math.random() - 0.5) * 8;
    extra.current.y += (Math.random() - 0.5) * 8;
    setFlashing(true);
    setTimeout(() => setFlashing(false), 350);
  }, []);

  if (!pos) return null;

  return (
    <div
      className={`cube-scene${flashing ? ' cube-flash' : ''}`}
      style={{
        left: pos.x,
        top:  pos.y,
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      onPointerDown={onPointerDown}
      onClick={onClick}
      aria-hidden="true"
    >
      <div className="cube-3d" ref={cubeRef}>
        <div className="cube-face face-front" />
        <div className="cube-face face-back" />
        <div className="cube-face face-left" />
        <div className="cube-face face-right" />
        <div className="cube-face face-top" />
        <div className="cube-face face-bottom" />
      </div>
    </div>
  );
}
