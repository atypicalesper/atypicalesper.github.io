'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';

// ── 3D mesh definitions ───────────────────────────────────────────────────────

const CUBE = {
  verts: [
    [-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],
    [-1,-1, 1],[1,-1, 1],[1,1, 1],[-1,1, 1],
  ],
  edges: [
    [0,1],[1,2],[2,3],[3,0],
    [4,5],[5,6],[6,7],[7,4],
    [0,4],[1,5],[2,6],[3,7],
  ],
};

const TETRAHEDRON = {
  verts: [
    [0, 1, 0],
    [ Math.sqrt(8 / 9), -1 / 3, 0],
    [-Math.sqrt(2 / 9), -1 / 3,  Math.sqrt(2 / 3)],
    [-Math.sqrt(2 / 9), -1 / 3, -Math.sqrt(2 / 3)],
  ],
  edges: [[0,1],[0,2],[0,3],[1,2],[2,3],[3,1]],
};

const OCTAHEDRON = {
  verts: [
    [0,1,0],[0,-1,0],
    [1,0,0],[-1,0,0],
    [0,0,1],[0,0,-1],
  ],
  edges: [
    [0,2],[0,3],[0,4],[0,5],
    [1,2],[1,3],[1,4],[1,5],
    [2,4],[4,3],[3,5],[5,2],
  ],
};

const ICOSAHEDRON = (() => {
  const t = (1 + Math.sqrt(5)) / 2;
  const raw = [
    [-1, t,0],[1, t,0],[-1,-t,0],[1,-t,0],
    [0,-1, t],[0,1, t],[0,-1,-t],[0,1,-t],
    [ t,0,-1],[ t,0,1],[-t,0,-1],[-t,0,1],
  ];
  const verts = raw.map(([x,y,z]) => { const l = Math.hypot(x,y,z); return [x/l,y/l,z/l]; });
  const edges = [
    [0,1],[0,5],[0,7],[0,10],[0,11],
    [1,5],[1,7],[1,8],[1,9],
    [2,3],[2,4],[2,6],[2,10],[2,11],
    [3,4],[3,6],[3,8],[3,9],
    [4,5],[4,9],[4,11],
    [5,9],[5,11],
    [6,7],[6,8],[6,10],
    [7,8],[7,10],
    [8,9],[10,11],
  ];
  return { verts, edges };
})();

// ── shape catalog ─────────────────────────────────────────────────────────────

export const POLY_DEFS = [
  { id: 'triangle',    label: 'tri',  sides: 3 },
  { id: 'square',      label: 'sq',   sides: 4 },
  { id: 'pentagon',    label: 'pent', sides: 5 },
  { id: 'hexagon',     label: 'hex',  sides: 6 },
  { id: 'heptagon',    label: 'hept', sides: 7 },
  { id: 'octagon',     label: 'oct',  sides: 8 },
  { id: 'star5',       label: 'str5', sides: 5, star: true },
  { id: 'star6',       label: 'str6', sides: 6, star: true },
  { id: 'circle',      label: 'circ', sides: 48 },
  { id: 'cube',        label: 'cube', mesh: CUBE },
  { id: 'tetrahedron', label: 'tet',  mesh: TETRAHEDRON },
  { id: 'octahedron',  label: 'octa', mesh: OCTAHEDRON },
  { id: 'icosahedron', label: 'ico',  mesh: ICOSAHEDRON },
];

// ── math ──────────────────────────────────────────────────────────────────────

function rotVert([x, y, z], rx, ry, rz) {
  const y1 = y * Math.cos(rx) - z * Math.sin(rx);
  const z1 = y * Math.sin(rx) + z * Math.cos(rx);
  const x2 =  x * Math.cos(ry) + z1 * Math.sin(ry);
  const z2 = -x * Math.sin(ry) + z1 * Math.cos(ry);
  const x3 = x2 * Math.cos(rz) - y1 * Math.sin(rz);
  const y3 = x2 * Math.sin(rz) + y1 * Math.cos(rz);
  return [x3, y3, z2];
}

// ── particle factory ──────────────────────────────────────────────────────────

function randomDef(activeIds) {
  const pool = activeIds.length > 0 ? activeIds : POLY_DEFS.map(p => p.id);
  const id   = pool[Math.floor(Math.random() * pool.length)];
  return POLY_DEFS.find(p => p.id === id) ?? POLY_DEFS[0];
}

function initParticles(w, h, count, activeIds) {
  return Array.from({ length: count }, () => {
    const def  = randomDef(activeIds);
    const base = {
      x:      Math.random() * w,
      y:      Math.random() * h,
      radius: 18 + Math.random() * 48,
      def,
      vx:     (Math.random() - 0.5) * 0.14,
      vy:     (Math.random() - 0.5) * 0.14,
      alpha:  0.04 + Math.random() * 0.055,
    };
    if (def.mesh) {
      return {
        ...base,
        rx:      Math.random() * Math.PI * 2,
        ry:      Math.random() * Math.PI * 2,
        rz:      Math.random() * Math.PI * 2,
        rxSpeed: (0.003 + Math.random() * 0.007) * (Math.random() < 0.5 ? 1 : -1),
        rySpeed: (0.004 + Math.random() * 0.008) * (Math.random() < 0.5 ? 1 : -1),
        rzSpeed: (0.002 + Math.random() * 0.005) * (Math.random() < 0.5 ? 1 : -1),
      };
    }
    return {
      ...base,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (0.0008 + Math.random() * 0.0022) * (Math.random() < 0.5 ? 1 : -1),
    };
  });
}

// ── draw ──────────────────────────────────────────────────────────────────────

function drawPoly(ctx, p) {
  const { x, y, radius, rotation, def } = p;

  if (def.mesh) {
    const projected = def.mesh.verts.map(v => {
      const [px, py] = rotVert(v, p.rx, p.ry, p.rz);
      return [x + px * radius, y + py * radius];
    });
    for (const [a, b] of def.mesh.edges) {
      ctx.beginPath();
      ctx.moveTo(projected[a][0], projected[a][1]);
      ctx.lineTo(projected[b][0], projected[b][1]);
      ctx.stroke();
    }
    return;
  }

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
        if (p.def.mesh) {
          p.rx += p.rxSpeed;
          p.ry += p.rySpeed;
          p.rz += p.rzSpeed;
        } else {
          p.rotation += p.rotSpeed;
        }
        if (!p.dragging) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < -p.radius)                p.x = canvas.width  + p.radius;
          if (p.x > canvas.width  + p.radius) p.x = -p.radius;
          if (p.y < -p.radius)                p.y = canvas.height + p.radius;
          if (p.y > canvas.height + p.radius) p.y = -p.radius;
        }
        ctx.save();
        ctx.globalAlpha = p.dragging ? Math.min(p.alpha * 4, 0.4) : p.alpha;
        ctx.strokeStyle = 'rgb(' + accentRgb + ')';
        ctx.lineWidth   = p.dragging ? 1.5 : 1;
        drawPoly(ctx, p);
        ctx.restore();
      }
      state.animId = requestAnimationFrame(draw);
    }

    // ── drag interaction ──────────────────────────────────────────────────────

    const drag = { current: null };

    function nearestParticle(mx, my) {
      let nearest = null;
      let nearestDist = Infinity;
      for (const p of state.particles) {
        const d = Math.hypot(p.x - mx, p.y - my);
        if (d < p.radius + 12 && d < nearestDist) {
          nearest = p;
          nearestDist = d;
        }
      }
      return nearest;
    }

    function getXY(e) {
      const src = e.touches ? e.touches[0] : e;
      return [src.clientX, src.clientY];
    }

    function onDown(e) {
      const [mx, my] = getXY(e);
      const p = nearestParticle(mx, my);
      if (!p) return;
      drag.current = { particle: p, prevX: mx, prevY: my, velX: 0, velY: 0 };
      p.dragging = true;
      canvas.style.cursor = 'grabbing';
    }

    function onMove(e) {
      const [mx, my] = getXY(e);
      if (drag.current) {
        const d = drag.current;
        d.velX = mx - d.prevX;
        d.velY = my - d.prevY;
        d.prevX = mx;
        d.prevY = my;
        d.particle.x = mx;
        d.particle.y = my;
      } else {
        canvas.style.cursor = nearestParticle(mx, my) ? 'grab' : 'default';
      }
    }

    function onUp() {
      if (!drag.current) return;
      const { particle, velX, velY } = drag.current;
      particle.vx = velX * 0.5;
      particle.vy = velY * 0.5;
      particle.dragging = false;
      drag.current = null;
      canvas.style.cursor = 'default';
    }

    canvas.addEventListener('mousedown', onDown);
    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('mouseup', onUp);
    canvas.addEventListener('mouseleave', onUp);
    canvas.addEventListener('touchstart', onDown, { passive: true });
    canvas.addEventListener('touchmove', onMove, { passive: true });
    canvas.addEventListener('touchend', onUp);

    resize();
    window.addEventListener('resize', resize);
    draw();
    return () => {
      cancelAnimationFrame(state.animId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousedown', onDown);
      canvas.removeEventListener('mousemove', onMove);
      canvas.removeEventListener('mouseup', onUp);
      canvas.removeEventListener('mouseleave', onUp);
      canvas.removeEventListener('touchstart', onDown);
      canvas.removeEventListener('touchmove', onMove);
      canvas.removeEventListener('touchend', onUp);
    };
  }, [showPolygons, theme, polyCount, polyTypes]);

  if (!showPolygons) return null;
  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', pointerEvents: 'auto', zIndex: 0 }}
    />
  );
}
