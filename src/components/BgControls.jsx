'use client';

import { useTheme } from './ThemeProvider';

const SHAPES = ['dot', 'grid', 'diamond', 'none'];

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
  none: (
    <svg width="13" height="13" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <line x1="2" y1="5" x2="8" y2="5" />
    </svg>
  ),
};

export default function BgControls() {
  const { bgShape, setBgShape, bgSize, setBgSize } = useTheme();

  return (
    <div className="bg-controls" aria-label="Background controls">
      <div className="bg-shapes">
        {SHAPES.map((id) => (
          <button
            key={id}
            className={`bg-shape-btn${bgShape === id ? ' active' : ''}`}
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
          title={`density: ${Math.round(1440 / bgSize)} across`}
          aria-label="background density"
        />
        <span className="bg-density-label">⠿</span>
      </div>
    </div>
  );
}
