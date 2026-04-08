'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';

export const POLY_DEFS = [
  { id: 'triangle', label: 'tri',  sides: 3 },
  { id: 'square',   label: 'sq',   sides: 4 },
  { id: 'pentagon', label: 'pent', sides: 5 },
  { id: 'hexagon',  label: 'hex',  sides: 6 },
  { id: 'heptagon', label: 'hept', sides: 7 },
  { id: 'octagon',  label: 'oct',  sides: 8 },
  { id: 'star5',    label: 'str5', sides: 5, star: true },
  { id: 'star6',    label: 'str6', sides: 6, star: true },
  { id: 'circle',   label: 'circ', sides: 48 },
];

function randomDef(activeIds) {
  const pool = activeIds.length > 0 ? activeIds : POLY_DEFS.map(p => p.id);
  const id   = pool[Math.floor(Math.random() * pool.length)];
  return POLY_DEFS.find(p => p.id === id) ?? POLY_DEFS[0];
}

function initParticles(w, h, count, activeIds) {
  return Array.from({ length: count }, () => ({
    x:        Math.random() * w,
    y:        Math.random() * h,
    radius:   18 + Math.random() * 48,
    def:      randomDef(activeIds),
    rotation: Math.random() * Math.PI * 2,
    rotSpeed: (0.0008 + Math.random() * 0.0022) * (Math.random() < 0.5 ? 1 : -1),
    vx:       (Math.random() - 0.5) * 0.14,
    vy:       (Math.random() - 0.5) * 0.14,
    alpha:    0.04 + Math.random() * 0.055,
  }));
}

function drawPoly(ctx, p) {
  const { x, y, radius, rotation, def } = p;
  ctx.beginPath();
  if (def.star) {
    const inner = radius * 0.42;
    const pts   = def.sides * 2;
    for (let i = 0; i < pts; i++) {
      const r     = i % 2 === 0 ? radius : inner;
      const angle = rotation + (i * Math.PI) / def.sides - Math.PI / 2;
      const px    = x + r * Math.cos(angle);
      const py    = y + r * Math.sin(angle);
      i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
  } else {
    for (let i = 0; i < def.sides; i++) {
      const angle = rotation + (i * 2 * Math.PI) / def.sides;
      const px    = x + radius * Math.cos(angle);
      const py    = y + radius * Math.sin(angle);
      i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
  }
  ctx.closePath();
  ctx.stroke();
}

export default function BgPolygons() {
  const { showPolygons, theme, polyCount, polyTypes } = useTheme();
  const canvasRef = useRef(null);
  const stateRef  = useRef({ particles: [], animId: null });

  useEffect(() => {
    if (!showPolygons) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx   = canvas.getContext('2d');
    const state = stateRef.current;

    function resize() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      state.particles = initParticles(canvas.width, canvas.height, polyCount, polyTypes);
    }

    function draw() {
      const accentRgb = getComputedStyle(document.documentElement)
        .getPropertyValue('--accent-rgb').trim() || '139,92,246';
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of state.particles) {
        p.rotation += p.rotSpeed;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -p.radius)                p.x = canvas.width  + p.radius;
        if (p.x > canvas.width  + p.radius) p.x = -p.radius;
        if (p.y < -p.radius)                p.y = canvas.height + p.radius;
        if (p.y > canvas.height + p.radius) p.y = -p.radius;
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.strokeStyle = 'rgb(' + accentRgb + ')';
        ctx.lineWidth   = 1;
        drawPoly(ctx, p);
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
  }, [showPolygons, theme, polyCount, polyTypes]);

  if (!showPolygons) return null;
  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
    />
  );
}
