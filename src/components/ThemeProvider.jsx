'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const THEMES = ['purple', 'midnight', 'matrix', 'crimson', 'aurora', 'amber'];

const ThemeContext = createContext({ theme: 'purple', cycleTheme: () => {} });

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('purple');

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved && THEMES.includes(saved)) setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const cycleTheme = () => {
    setTheme((t) => THEMES[(THEMES.indexOf(t) + 1) % THEMES.length]);
  };

  return (
    <ThemeContext.Provider value={{ theme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
