import './style.css'

import { SocialLinks } from '@/shared/ui/main';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <SocialLinks/>
        </div>
      </div>
    </footer>
  );
}
