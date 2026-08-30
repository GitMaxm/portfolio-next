import { useEffect, useRef } from 'react';

import { useLocalStorage } from '@/shared/lib/hooks';

import { detectDarkMode } from '../helpers';
import type { TTheme } from '../types';

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage<TTheme>('darkMode', detectDarkMode);
  const btnRef = useRef<HTMLButtonElement>(null);

  // Применение темы к body
  useEffect(() => {
    if (darkMode === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  // Класс для кнопки
  useEffect(() => {
    if (darkMode === 'dark') {
      btnRef.current?.classList.add('dark-mode-btn--active');
    } else {
      btnRef.current?.classList.remove('dark-mode-btn--active');
    }
  }, [darkMode]);

  // Слежение за системной темой
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const listener = (e: MediaQueryListEvent) => {
      setDarkMode(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', listener);

    return () => mediaQuery.removeEventListener('change', listener);
  }, [setDarkMode]);

  const handleDarkModeClick = () => {
    setDarkMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return { btnRef, handleDarkModeClick };
};
