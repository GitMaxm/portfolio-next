import Link from 'next/link';

export const Header = () => {

  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>Привет, меня зовут <em>Максим</em></strong>
          фронтенд-разработчик
        </h1>

        <div className="header__text">
          <p>Собираю интерфейсы на React и Next.js — от разметки до работы с данными</p>
        </div>

        <div className="actions">
          <Link href="/projects/" className="btn">Смотреть проекты</Link>
          <Link href="/contacts/" className="btn-ghost">Связаться</Link>
        </div>
      </div>
    </header>
  );
}
