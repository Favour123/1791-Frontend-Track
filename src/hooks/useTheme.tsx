
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  systemTheme: 'light' | 'dark';
  resolvedTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
}

export function ThemeProvider({ children, defaultTheme = 'system' }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Check if we're in browser environment
    if (typeof window === 'undefined') return defaultTheme;
    
    // Get saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') as Theme;
    return savedTheme || defaultTheme;
  });

  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const resolvedTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // Apply theme to document
    const root = document.documentElement;
    
    // Remove existing theme attributes
    root.removeAttribute('data-theme');
    root.classList.remove('light', 'dark');
    
    if (theme === 'system') {
      // Let CSS handle system preference
      console.log('Theme: Using system preference -', systemTheme);
    } else {
      // Apply explicit theme
      root.setAttribute('data-theme', theme);
      console.log('Theme: Applied explicit theme -', theme);
    }

    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme, systemTheme]);

  const setTheme = (newTheme: Theme) => {
    console.log('Theme: Switching to', newTheme);
    setThemeState(newTheme);
  };

  const value = {
    theme,
    setTheme,
    systemTheme,
    resolvedTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
