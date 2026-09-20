'use client';

import './style.scss'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { PUBLIC_NAV_LINKS } from '@/shared/config'
import { BtnDarkMode } from '@/shared/ui/main'

export const NavBar = () => {
  const pathname = usePathname();

  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">

          <Link href="/" className="logo">
            <strong>Portfolio</strong>
          </Link>

          <BtnDarkMode/>

          <ul className="nav-list">
            {PUBLIC_NAV_LINKS.map((item) => (
              <li key={item.href} className="nav-list__item">
                <Link
                  href={item.href}
                  className={isActive(item.href) ? activeLink : normalLink}
                  title={item.title}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </nav>
  );
};
