const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Контакты</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Локация</h2>
            <p>Москва, Россия</p>
          </li>

          <li className="content-list__item">
            <h2 className="title-2">Telegram</h2>
            <p>
              <a
                href="https://t.me/sonyfox"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Написать сообщение в Telegram пользователю sonyfox"
              >
                Написать мне
              </a>
            </p>
          </li>

          <li className="content-list__item">
            <h2 className="title-2">E-mail</h2>
            <p>
              <a
                href="mailto:ivanmax29@yandex.ru"
                aria-label="Отправить электронное письмо на ivanmax29@yandex.ru"
              >
                ivanmax29@yandex.ru
              </a>
            </p>
          </li>

          <li className="content-list__item">
            <h2 className="title-2">Мое резюме на hh.ru</h2>
            <p>
              <a
                href="https://hh.ru/resume/13813e49ff0b87afde0039ed1f68456973776c"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Открыть резюме на hh.ru в новом окне"
              >
                Посмотреть резюме
              </a>
            </p>

          </li>

        </ul>

      </div>
    </main>
  );
}

export default Contacts;