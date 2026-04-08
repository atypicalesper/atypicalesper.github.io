'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const THEMES = ['purple', 'midnight', 'matrix', 'crimson', 'aurora', 'amber'];
const SHAPES = ['dot', 'grid', 'diamond', 'square', 'wave', 'none'];
const ALL_POLY_IDS = ['triangle', 'square', 'pentagon', 'hexagon', 'heptagon', 'octagon', 'star5', 'star6', 'circle', 'cube', 'tetrahedron', 'octahedron', 'icosahedron'];

const ThemeContext = createContext({
  theme: 'purple',       cycleTheme:      () => {},
  bgShape: 'dot',        setBgShape:      () => {},
  bgSize: 36,            setBgSize:       () => {},
  showPolygons: false,   setShowPolygons: () => {},
  polyCount: 20,         setPolyCount:    () => {},
  polyTypes: ALL_POLY_IDS, togglePolyType: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'purple';
    const saved = localStorage.getItem('theme');
    return saved && THEMES.includes(saved) ? saved : 'purple';
  });

  const [bgShape, setBgShapeState] = useState(() => {
    if (typeof window === 'undefined') return 'dot';
    const saved = localStorage.getItem('bgShape');
    return saved && SHAPES.includes(saved) ? saved : 'dot';
  });

  const [bgSize, setBgSizeState] = useState(() => {
    if (typeof window === 'undefined') return 36;
    const saved = Number(localStorage.getItem('bgSize'));
    return saved >= 16 && saved <= 72 ? saved : 36;
  });

  const [showPolygons, setShowPolygonsState] = useState(() => {
    if (typeof window === 'undefined') return true;
    const v = localStorage.getItem('showPolygons');
    return v === null ? true : v === 'true';
  });

  const [polyCount, setPolyCountState] = useState(() => {
    if (typeof window === 'undefined') return 1;
    const saved = Number(localStorage.getItem('polyCount'));
    return saved >= 0 && saved <= 60 ? saved : 1;
  });

  const [polyTypes, setPolyTypesState] = useState(() => {
    if (typeof window === 'undefined') return ALL_POLY_IDS;
    try {
      const saved = JSON.parse(localStorage.getItem('polyTypes') || 'null');
      if (Array.isArray(saved) && saved.length > 0) return saved;
    } catch {}
    return ALL_POLY_IDS;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.body.setAttribute('data-bg-shape', bgShape);
    localStorage.setItem('bgShape', bgShape);
  }, [bgShape]);

  useEffect(() => {
    document.documentElement.style.setProperty('--bg-grid-size', bgSize + 'px');
    localStorage.setItem('bgSize', String(bgSize));
  }, [bgSize]);

  useEffect(() => {
    localStorage.setItem('showPolygons', String(showPolygons));
  }, [showPolygons]);

  useEffect(() => {
    localStorage.setItem('polyCount', String(polyCount));
  }, [polyCount]);

  useEffect(() => {
    localStorage.setItem('polyTypes', JSON.stringify(polyTypes));
  }, [polyTypes]);

  const cycleTheme      = () => setTheme((t) => THEMES[(THEMES.indexOf(t) + 1) % THEMES.length]);
  const setBgShape      = (s) => SHAPES.includes(s) && setBgShapeState(s);
  const setBgSize       = (n) => n >= 16 && n <= 72 && setBgSizeState(n);
  const setShowPolygons = (v) => setShowPolygonsState(Boolean(v));
  const setPolyCount    = (n) => n >= 0 && n <= 60 && setPolyCountState(n);
  const togglePolyType  = (id) => {
    setPolyTypesState(prev =>
      prev.includes(id)
        ? prev.length > 1 ? prev.filter(t => t !== id) : prev
        : [...prev, id]
    );
  };

  return (
    <ThemeContext.Provider value={{
      theme, cycleTheme,
      bgShape, setBgShape,
      bgSize, setBgSize,
      showPolygons, setShowPolygons,
      polyCount, setPolyCount,
      polyTypes, togglePolyType,
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
