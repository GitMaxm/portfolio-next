import './style.css'

import Link from 'next/link';

import { CONTACTS, PUBLIC_NAV_LINKS } from '@/shared/config';
import { SocialLinks } from '@/shared/ui/main';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">

          <div className="footer__brand">
            <span className="footer__name">Максим Иваненко</span>
            <span className="footer__role">Фронтенд-разработчик · {CONTACTS.location}</span>
          </div>

          <nav className="footer__nav" aria-label="Навигация в подвале">
            {PUBLIC_NAV_LINKS.map((item) => (
              <Link key={item.href} href={item.href} title={item.title}>
                {item.label}
              </Link>
            ))}
          </nav>

          <SocialLinks/>

        </div>

        <div className="footer__bottom">
          <span>© {year} Максим Иваненко</span>
          <a href={CONTACTS.emailLink}>{CONTACTS.email}</a>
        </div>
      </div>
    </footer>
  );
}
