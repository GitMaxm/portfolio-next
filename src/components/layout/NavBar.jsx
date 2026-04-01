'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // хук для получения текущего пути
import BtnDarkMode from '../ui/BtnDarkMode';
import Image from "next/image";

const NavBar = () => {
    const pathname = usePathname();
    const isActive = (href) => pathname === href;
    const activeLink = "nav-list__link nav-list__link--active";
    const normalLink = "nav-list__link";

    // Массив маршрутов для навигации
    const navItems = [
        { href: '/', label: 'Главная', title: 'Обо мне и моих навыках' },
        // { href: '/price', label: 'Услуги' },
        { href: '/projects/', label: 'Проекты', title: 'Мои работы и проекты' },
        { href: '/contacts/', label: 'Контакты', title: 'Как со мной связаться' }
    ];

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">

                    <Link href="/" className="logo">
                        {/* <strong>Portfolio</strong> */}
                        <Image
                            src="/img/logo/logo.png"
                            alt="Logo"
                            width={200}
                            height={40}
                            priority
                        />
                    </Link>

                    <BtnDarkMode />

                    <ul className="nav-list">
                        {navItems.map((item) => (
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

export default NavBar;
