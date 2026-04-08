'use client';

import { useTheme } from './ThemeProvider';
import { POLY_DEFS } from './BgPolygons';

const SHAPES = ['dot', 'grid', 'diamond', 'square', 'wave', 'none'];

const Icons = {
  dot: (
    <svg width="13" height="13" viewBox="0 0 10 10" aria-hidden="true">
      <circle cx="2"  cy="2"  r="1.5" fill="currentColor" />
      <circle cx="8"  cy="2"  r="1.5" fill="currentColor" />
      <circle cx="2"  cy="8"  r="1.5" fill="currentColor" />
      <circle cx="8"  cy="8"  r="1.5" fill="currentColor" />
    </svg>
  ),
  grid: (
    <svg width="13" height="13" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
      <line x1="0" y1="3.5" x2="10" y2="3.5" />
      <line x1="0" y1="6.5" x2="10" y2="6.5" />
      <line x1="3.5" y1="0"  x2="3.5" y2="10" />
      <line x1="6.5" y1="0"  x2="6.5" y2="10" />
    </svg>
  ),
  diamond: (
    <svg width="13" height="13" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
      <line x1="0" y1="10" x2="10" y2="0" />
      <line x1="0" y1="0"  x2="10" y2="10" />
      <line x1="5" y1="0"  x2="0"  y2="5" />
      <line x1="5" y1="0"  x2="10" y2="5" />
      <line x1="0" y1="5"  x2="5"  y2="10" />
      <line x1="10" y1="5" x2="5"  y2="10" />
    </svg>
  ),
  square: (
    <svg width="13" height="13" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
      <rect x="1"   y="1"   width="3" height="3" />
      <rect x="6"   y="6"   width="3" height="3" />
      <rect x="6"   y="1"   width="3" height="3" opacity="0.3" />
      <rect x="1"   y="6"   width="3" height="3" opacity="0.3" />
    </svg>
  ),
  wave: (
    <svg width="13" height="13" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
      <line x1="0" y1="10" x2="10" y2="0" />
      <line x1="0" y1="5"  x2="5"  y2="0" />
      <line x1="5" y1="10" x2="10" y2="5" />
    </svg>
  ),
  none: (
    <svg width="13" height="13" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <line x1="2" y1="5" x2="8" y2="5" />
    </svg>
  ),
};

function PolyPreview({ def }) {
  const cx = 5, cy = 5, r = 4, inner = r * 0.42;
  if (def.sides >= 24) {
    return (
      <svg width="13" height="13" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
        <circle cx="5" cy="5" r="4" />
      </svg>
    );
  }
  let points;
  if (def.star) {
    const pts = def.sides * 2;
    points = Array.from({ length: pts }, (_, i) => {
      const rad   = i % 2 === 0 ? r : inner;
      const angle = (i * Math.PI) / def.sides - Math.PI / 2;
      return (cx + rad * Math.cos(angle)) + ',' + (cy + rad * Math.sin(angle));
    }).join(' ');
  } else {
    points = Array.from({ length: def.sides }, (_, i) => {
      const angle = (i * 2 * Math.PI) / def.sides - Math.PI / 2;
      return (cx + r * Math.cos(angle)) + ',' + (cy + r * Math.sin(angle));
    }).join(' ');
  }
  return (
    <svg width="13" height="13" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
      <polygon points={points} />
    </svg>
  );
}

export default function BgControls() {
  const {
    bgShape, setBgShape,
    bgSize, setBgSize,
    showPolygons, setShowPolygons,
    polyCount, setPolyCount,
    polyTypes, togglePolyType,
  } = useTheme();

  return (
    <div className="bg-controls" aria-label="Background controls">
      <div className="bg-shapes">
        {SHAPES.map((id) => (
          <button
            key={id}
            className={'bg-shape-btn' + (bgShape === id ? ' active' : '')}
            onClick={() => setBgShape(id)}
            title={id}
            aria-pressed={bgShape === id}
          >
            {Icons[id]}
          </button>
        ))}
      </div>

      <div className="bg-sep" />

      <div className="bg-density">
        <span className="bg-density-label">·</span>
        <input
          type="range"
          className="bg-slider"
          min={16}
          max={72}
          step={4}
          value={bgSize}
          onChange={(e) => setBgSize(Number(e.target.value))}
          title={'density: ' + Math.round(1440 / bgSize) + ' across'}
          aria-label="background density"
        />
        <span className="bg-density-label">⠿</span>
      </div>

      <div className="bg-sep" />

      <button
        className={'bg-shape-btn' + (showPolygons ? ' active' : '')}
        onClick={() => setShowPolygons(!showPolygons)}
        title="floating polygons"
        aria-pressed={showPolygons}
      >
        <svg width="13" height="13" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
          <polygon points="5,0.5 9.5,3.5 8,8.5 2,8.5 0.5,3.5" />
        </svg>
      </button>

      {showPolygons && (
        <>
          <div className="bg-sep" />
          <div className="bg-shapes">
            {POLY_DEFS.map((def) => {
              const active = polyTypes.includes(def.id);
              return (
                <button
                  key={def.id}
                  className={'bg-shape-btn' + (active ? ' active' : '')}
                  onClick={() => togglePolyType(def.id)}
                  title={def.id}
                  aria-pressed={active}
                >
                  <PolyPreview def={def} />
                </button>
              );
            })}
          </div>
          <div className="bg-sep" />
          <div className="bg-density">
            <span className="bg-density-label" style={{ fontSize: 9 }}>1</span>
            <input
              type="range"
              className="bg-slider"
              min={5}
              max={60}
              step={5}
              value={polyCount}
              onChange={(e) => setPolyCount(Number(e.target.value))}
              title={'polygons: ' + polyCount}
              aria-label="polygon count"
            />
            <span className="bg-density-label" style={{ fontSize: 9 }}>{polyCount}</span>
          </div>
        </>
      )}
    </div>
  );
}
