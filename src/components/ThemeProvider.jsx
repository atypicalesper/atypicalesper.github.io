'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const THEMES = ['paper', 'noir', 'midnight', 'ember'];

const ThemeContext = createContext({
  theme: 'paper',
  themes: THEMES,
  setTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'paper';
    const saved = localStorage.getItem('theme');
    return saved && THEMES.includes(saved) ? saved : 'paper';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const selectTheme = (t) => THEMES.includes(t) && setTheme(t);

  return (
    <ThemeContext.Provider value={{ theme, themes: THEMES, setTheme: selectTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
