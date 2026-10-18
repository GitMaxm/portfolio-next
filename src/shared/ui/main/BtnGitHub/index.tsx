import { FiGithub } from 'react-icons/fi';

import type { IBtnGitHubProps } from './types';

export const BtnGitHub = ({ gitHubLink }: IBtnGitHubProps) => {

  return (
    <a href={gitHubLink} target="_blank" rel="noreferrer" className="btn-outline">
      <FiGithub aria-hidden/>
      GitHub repo
    </a>
  );
}
