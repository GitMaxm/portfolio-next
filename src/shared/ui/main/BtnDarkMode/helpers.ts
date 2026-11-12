import type { TTheme } from './types';

export const THEME_STORAGE_KEY = 'darkMode';

export const THEME_INIT_SCRIPT = `(function(){try{var s=localStorage.getItem("${THEME_STORAGE_KEY}");var t=s?JSON.parse(s):(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");if(t==="dark")document.body.classList.add("dark")}catch(e){}})()`;

export const detectDarkMode = (): TTheme => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  return 'light';
};

export const readStoredTheme = (): TTheme | null => {
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);

    return saved ? (JSON.parse(saved) as TTheme) : null;
  } catch {
    return null;
  }
};

export const storeTheme = (theme: TTheme) => {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(theme));
  } catch {}
};

export const applyTheme = (theme: TTheme) => {
  document.body.classList.toggle('dark', theme === 'dark');
};
