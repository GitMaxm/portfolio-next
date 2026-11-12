'use client';

import './style.scss'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { PUBLIC_NAV_LINKS } from '@/shared/config'
import type { INavigationLink } from '@/shared/model'
import { BtnDarkMode } from '@/shared/ui/main'

export const NavBar = () => {
  const pathname = usePathname();

  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";

  const isCurrent = (item: INavigationLink) => pathname === item.href;

  const isActive = (item: INavigationLink) =>
    isCurrent(item) || (item.activePrefixes ?? []).some(prefix => pathname.startsWith(prefix));

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">

          <Link href="/" className="logo">
            <svg className="logo__mark" viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
              <rect width="32" height="32" rx="7" fill="#171718"/>
              <rect x="0.75" y="0.75" width="30.5" height="30.5" rx="6.25" fill="none" stroke="#3a3a42" strokeWidth="1.5"/>
              <path d="M6.5 23V9.5l5.25 8 5.25-8V23" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="19.5" y="20.4" width="7" height="4.2" rx="1" fill="#9da1ff"/>
            </svg>
            <strong>Максим Иваненко</strong>
          </Link>

          <BtnDarkMode/>

          <ul className="nav-list">
            {PUBLIC_NAV_LINKS.map((item) => (
              <li key={item.href} className="nav-list__item">
                <Link
                  href={item.href}
                  className={isActive(item) ? activeLink : normalLink}
                  title={item.title}
                  aria-current={isCurrent(item) ? 'page' : isActive(item) ? 'true' : undefined}
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
