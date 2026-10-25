import './style.css';

import Link from 'next/link';

const STACK = ['React', 'Next.js', 'TypeScript', 'SCSS'];

export const Header = () => {

  return (
    <header className="header">
      <div className="container header__wrapper">
        <p className="header__status">
          <span className="header__dot" aria-hidden="true"/>
          Открыт к работе
        </p>

        <h1 className="header__title">
          <strong>Привет, меня зовут <em>Максим</em></strong>
          фронтенд-разработчик
        </h1>

        <p className="header__text">
          Собираю интерфейсы на React и Next.js — от разметки до работы с данными
        </p>

        <div className="actions">
          <Link href="/projects/" className="btn">Смотреть проекты</Link>
          <Link href="/contacts/" className="btn btn--ghost">Связаться</Link>
        </div>
      </div>

      <div className="container header__bottom">
        <ul className="header__stack" aria-label="Основной стек">
          {STACK.map(item => <li key={item}>{item}</li>)}
        </ul>

        <a href="#about" className="header__scroll">
          ~/about
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </header>
  );
}
