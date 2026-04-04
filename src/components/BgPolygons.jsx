'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';

const SIDES_OPTIONS = [3, 4, 5, 6, 8];
const COUNT = 20;

function initParticles(w, h) {
  return Array.from({ length: COUNT }, () => ({
    x:        Math.random() * w,
    y:        Math.random() * h,
    radius:   20 + Math.random() * 44,
    sides:    SIDES_OPTIONS[Math.floor(Math.random() * SIDES_OPTIONS.length)],
    rotation: Math.random() * Math.PI * 2,
    rotSpeed: (0.0008 + Math.random() * 0.0022) * (Math.random() < 0.5 ? 1 : -1),
    vx:       (Math.random() - 0.5) * 0.14,
    vy:       (Math.random() - 0.5) * 0.14,
    alpha:    0.04 + Math.random() * 0.055,
  }));
}

export default function BgPolygons() {
  const { showPolygons, theme } = useTheme();
  const canvasRef = useRef(null);
  const stateRef  = useRef({ particles: [], animId: null });

  useEffect(() => {
    if (!showPolygons) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const state = stateRef.current;

    function resize() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      state.particles = initParticles(canvas.width, canvas.height);
    }

    function draw() {
      const accentRgb = getComputedStyle(document.documentElement)
        .getPropertyValue('--accent-rgb').trim() || '139,92,246';

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of state.particles) {
        p.rotation += p.rotSpeed;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -p.radius)                   p.x = canvas.width  + p.radius;
        if (p.x > canvas.width  + p.radius)    p.x = -p.radius;
        if (p.y < -p.radius)                   p.y = canvas.height + p.radius;
        if (p.y > canvas.height + p.radius)    p.y = -p.radius;

        ctx.save();
        ctx.globalAlpha  = p.alpha;
        ctx.strokeStyle  = `rgb(${accentRgb})`;
        ctx.lineWidth    = 1;
        ctx.beginPath();
        for (let i = 0; i < p.sides; i++) {
          const angle = p.rotation + (i * 2 * Math.PI) / p.sides;
          const px = p.x + p.radius * Math.cos(angle);
          const py = p.y + p.radius * Math.sin(angle);
          i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
      }

      state.animId = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener('resize', resize);
    draw();

    return () => {
      cancelAnimationFrame(state.animId);
      window.removeEventListener('resize', resize);
    };
  }, [showPolygons, theme]);

  if (!showPolygons) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
