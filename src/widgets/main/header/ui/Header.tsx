import './style.css';

import Link from 'next/link';

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
          <span className="visually-hidden">, </span>
          фронтенд-разработчик
        </h1>

        <p className="header__text">
          Собираю интерфейсы на React и Next.js: от разметки до работы с данными
        </p>

        <div className="actions">
          <a href="#projects" className="btn">Смотреть проекты</a>
          <Link href="/contacts/" className="btn btn--ghost">Связаться</Link>
        </div>
      </div>
    </header>
  );
}
