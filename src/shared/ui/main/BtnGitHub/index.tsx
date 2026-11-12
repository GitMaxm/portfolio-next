import './style.css';

import { FiGithub } from 'react-icons/fi';

import type { IBtnGitHubProps } from './types';

export const BtnGitHub = ({ gitHubLink, primary = false }: IBtnGitHubProps) => {

  return (
    <a
      href={gitHubLink}
      target="_blank"
      rel="noopener noreferrer"
      className={primary ? 'btn' : 'btn-outline'}
    >
      <FiGithub aria-hidden="true"/>
      Код на GitHub
    </a>
  );
}
