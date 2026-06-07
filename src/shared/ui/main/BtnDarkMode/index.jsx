'use client';

import './style.css';
import { useDarkMode } from './hooks/useDarkMode';

export const BtnDarkMode = () => {
  const { btnRef, toggleDarkMode } = useDarkMode();

  return (
    <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
      <img src="/img/icons/dark-mode/sun.svg" alt="Light mode" className="dark-mode-btn__icon"/>
      <img src="/img/icons/dark-mode/moon.svg" alt="Dark mode" className="dark-mode-btn__icon"/>
    </button>
  );
};