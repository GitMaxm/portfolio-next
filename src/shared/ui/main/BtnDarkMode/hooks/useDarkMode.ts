import { useEffect, useSyncExternalStore } from 'react';

import { applyTheme, detectDarkMode, readStoredTheme, storeTheme } from '../helpers';

const subscribe = (onChange: () => void) => {
  const observer = new MutationObserver(onChange);

  observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

  return () => observer.disconnect();
};

const getSnapshot = () => document.body.classList.contains('dark');

const getServerSnapshot = () => null;

export const useDarkMode = () => {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    applyTheme(readStoredTheme() ?? detectDarkMode());

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const listener = (e: MediaQueryListEvent) => {
      if (!readStoredTheme()) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', listener);

    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  const handleDarkModeClick = () => {
    const next = getSnapshot() ? 'light' : 'dark';

    applyTheme(next);
    storeTheme(next);
  };

  return { isDark, handleDarkModeClick };
};
