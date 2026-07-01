import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

/** Dark/light mode toggle button */
export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex h-10 w-10 items-center justify-center rounded-xl glass transition-colors hover:bg-white/90 dark:hover:bg-slate-800/90"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
