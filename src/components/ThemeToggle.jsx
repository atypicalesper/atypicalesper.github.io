'use client';

import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, cycleTheme } = useTheme();

  return (
    <button className="theme-toggle" onClick={cycleTheme} title="cycle theme">
      <span className="theme-dot" />
      <span>{theme}</span>
    </button>
  );
}
