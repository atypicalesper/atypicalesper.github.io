'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const THEMES = ['paper', 'noir', 'midnight', 'ember'];

const ThemeContext = createContext({
  theme: 'paper',
  themes: THEMES,
  setTheme: () => {},
});

export function ThemeProvider({ children }) {
  // Always start on the default so server and first client render match;
  // the saved theme is applied after mount to avoid a hydration mismatch.
  const [theme, setTheme] = useState('paper');

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved && THEMES.includes(saved)) setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const selectTheme = (t) => {
    if (!THEMES.includes(t)) return;
    setTheme(t);
    localStorage.setItem('theme', t);
  };

  return (
    <ThemeContext.Provider value={{ theme, themes: THEMES, setTheme: selectTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
