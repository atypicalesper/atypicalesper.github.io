'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const BASE_VEL = { x: 0.15, y: 0.25, z: 0.08 };
const HIT = 220; // hit area size (px) — cube is 160, extra padding for easy grabbing

export default function Cube() {
  const [pos, setPos]           = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [flashing, setFlashing]     = useState(false);

  const cubeRef     = useRef(null);
  const rafRef      = useRef(null);
  const dragRef     = useRef(null);
  const draggingRef = useRef(false);
  const wasDrag     = useRef(false);
  const rot         = useRef({ x: 20, y: 30, z: 0 });
  const extra       = useRef({ x: 0, y: 0 });

  // Initial position — centered on right side, accounting for hit area
  useEffect(() => {
    setPos({
      x: window.innerWidth  - HIT - 40,
      y: window.innerHeight * 0.5 - HIT / 2,
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

  // Global pointermove + pointerup attached to window so drag works anywhere
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
      className={`cube-scene${flashing ? ' cube-flash' : ''}${isDragging ? ' dragging' : ''}`}
      style={{ left: pos.x, top: pos.y }}
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
