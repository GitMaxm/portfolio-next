'use client';

import './style.css';

import { assetPath } from '@/shared/config';

import { useDarkMode } from './hooks/useDarkMode';

export const BtnDarkMode = () => {
  const { isDark, handleDarkModeClick } = useDarkMode();

  return (
    <button
      type="button"
      className="dark-mode-btn"
      onClick={handleDarkModeClick}
      aria-label="Тёмная тема"
      aria-pressed={isDark ?? undefined}
    >
      <img src={assetPath('/img/icons/dark-mode/sun.svg')} alt="" className="dark-mode-btn__icon"/>
      <img src={assetPath('/img/icons/dark-mode/moon.svg')} alt="" className="dark-mode-btn__icon"/>
    </button>
  );
};
