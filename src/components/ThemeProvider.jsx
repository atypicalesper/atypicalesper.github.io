'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const THEMES = ['purple', 'midnight', 'matrix', 'crimson', 'aurora', 'amber'];
const SHAPES = ['dot', 'grid', 'diamond', 'none'];

const ThemeContext = createContext({
  theme: 'purple', cycleTheme: () => {},
  bgShape: 'dot',  setBgShape: () => {},
  bgSize: 36,      setBgSize:  () => {},
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

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.body.setAttribute('data-bg-shape', bgShape);
    localStorage.setItem('bgShape', bgShape);
  }, [bgShape]);

  useEffect(() => {
    document.documentElement.style.setProperty('--bg-grid-size', `${bgSize}px`);
    localStorage.setItem('bgSize', String(bgSize));
  }, [bgSize]);

  const cycleTheme  = () => setTheme((t)  => THEMES[(THEMES.indexOf(t)  + 1) % THEMES.length]);
  const setBgShape  = (s) => SHAPES.includes(s) && setBgShapeState(s);
  const setBgSize   = (n) => n >= 16 && n <= 72  && setBgSizeState(n);

  return (
    <ThemeContext.Provider value={{ theme, cycleTheme, bgShape, setBgShape, bgSize, setBgSize }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
