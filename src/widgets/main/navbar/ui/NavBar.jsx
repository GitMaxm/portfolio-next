'use client';

import './style.scss'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BtnDarkMode } from '@/shared/ui/main'

import { NAVIGATION_LINKS } from '@/shared/constants'

export const NavBar = () => {
  const pathname = usePathname();
  const isActive = (href) => pathname === href;
  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">

          <Link href="/public" className="logo">
            <strong>Portfolio</strong>
          </Link>

          <BtnDarkMode/>

          <ul className="nav-list">
            {NAVIGATION_LINKS.map((item) => (
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
