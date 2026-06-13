'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from './ThemeProvider';

const THEME_META = {
  paper:    { swatch: '#6a4bf2', label: 'paper',    desc: 'light · editorial' },
  noir:     { swatch: '#b999ff', label: 'noir',     desc: 'midnight violet' },
  midnight: { swatch: '#60a5fa', label: 'midnight', desc: 'deep ocean blue' },
  ember:    { swatch: '#fbbf24', label: 'ember',    desc: 'warm amber dusk' },
};

export default function ControlsPanel() {
  const { theme, themes, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const current = THEME_META[theme] ?? THEME_META.paper;

  return (
    <div className="cpanel-wrap" ref={wrapRef}>
      {open && (
        <div className="cpanel" role="dialog" aria-label="Choose theme">
          <h3 className="cpanel-heading">Theme</h3>
          <div className="cpanel-themes">
            {themes.map((id) => {
              const meta = THEME_META[id];
              const active = theme === id;
              return (
                <button
                  key={id}
                  className={'cpanel-theme' + (active ? ' active' : '')}
                  onClick={() => setTheme(id)}
                  aria-pressed={active}
                >
                  <span className="cpanel-theme-swatch" style={{ background: meta.swatch }} />
                  <span className="cpanel-theme-text">
                    <span className="cpanel-theme-name">{meta.label}</span>
                    <span className="cpanel-theme-desc">{meta.desc}</span>
                  </span>
                  {active && <span className="cpanel-check" aria-hidden="true">✓</span>}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <button
        className="cpanel-trigger"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Choose theme"
        title="Choose theme"
      >
        <span className="cpanel-trigger-dot" style={{ background: current.swatch }} />
        <span className="cpanel-trigger-label">{current.label}</span>
      </button>
    </div>
  );
}
