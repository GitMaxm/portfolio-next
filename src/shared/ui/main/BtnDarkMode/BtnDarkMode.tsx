'use client';

import './style.css';

import { assetPath } from '@/shared/config';

import { useDarkMode } from './hooks/useDarkMode';

export const BtnDarkMode = () => {
  const { btnRef, handleDarkModeClick } = useDarkMode();

  return (
    <button ref={btnRef} className="dark-mode-btn" onClick={handleDarkModeClick}>
      <img src={assetPath('/img/icons/dark-mode/sun.svg')} alt="Light mode" className="dark-mode-btn__icon"/>
      <img src={assetPath('/img/icons/dark-mode/moon.svg')} alt="Dark mode" className="dark-mode-btn__icon"/>
    </button>
  );
};
