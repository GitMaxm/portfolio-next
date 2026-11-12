import './style.css';

export const Header = () => {

  return (
    <header className="header">
      <div className="container header__wrapper">
        <p className="header__status">
          <span className="header__dot" aria-hidden="true"/>
          Открыт к работе
        </p>

        <h1 className="header__title">
          <strong>Максим Иваненко<em aria-hidden="true">_</em></strong>
          <span className="visually-hidden">, </span>
          фронтенд-разработчик
        </h1>

        <p className="header__text">
          Больше трёх лет в вебе: от вёрстки лендингов по макетам до интерфейсов
          на React и Next.js. Насмотренность помогает замечать мелочи, из которых
          складывается аккуратный сайт
        </p>

        <div className="actions">
          <a href="#projects" className="btn">Смотреть проекты</a>
          <a href="#contact" className="btn btn--ghost">Связаться</a>
        </div>
      </div>
    </header>
  );
}
