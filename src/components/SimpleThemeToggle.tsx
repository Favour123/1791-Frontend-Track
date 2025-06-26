
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export function SimpleThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      data-theme={resolvedTheme}
      aria-label={`Switch to ${resolvedTheme === 'light' ? 'dark' : 'light'} mode`}
    >
      <Sun className="sun-icon h-[1.2rem] w-[1.2rem] absolute" />
      <Moon className="moon-icon h-[1.2rem] w-[1.2rem] absolute" />
    </button>
  );
}
