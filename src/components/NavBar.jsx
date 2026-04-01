'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // хук для получения текущего пути
import BtnDarkMode from './BtnDarkMode';

const NavBar = () => {
    const pathname = usePathname();

    const isActive = (href) => pathname === href;
    const activeLink = "nav-list__link nav-list__link--active";
    const normalLink = "nav-list__link";

    // Массив маршрутов для навигации
    const navItems = [
        { href: '/', label: 'Главная' },
        { href: '/price', label: 'Услуги' },
        { href: '/projects', label: 'Проекты' },
        { href: '/contacts', label: 'Контакты' }
    ];

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">

                    <Link href="/" className="logo">
                        <strong>Web</strong> Max
                    </Link>

                    <BtnDarkMode />

                    <ul className="nav-list">
                        {navItems.map((item) => (
                            <li key={item.href} className="nav-list__item">
                                <Link
                                    href={item.href}
                                    className={isActive(item.href) ? activeLink : normalLink}
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

export default NavBar;
