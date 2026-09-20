import { CONTACTS } from "@/shared/config";
import { CopyButton } from "@/shared/ui/main";

const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Контакты</h1>
        <p className="portfolio-description">
          Пишите в Telegram или на почту — отвечаю в тот же день.
          Расскажите про задачу, и я предложу решение.
        </p>

        <ul className="contacts">
          <li className="contacts__row">
            <span className="contacts__label">Локация</span>
            <span className="contacts__value">{CONTACTS.location}</span>
          </li>

          <li className="contacts__row">
            <span className="contacts__label">Telegram</span>
            <a
              className="contacts__value"
              href={CONTACTS.telegramLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {CONTACTS.telegram}
            </a>
          </li>

          <li className="contacts__row">
            <span className="contacts__label">Почта</span>
            <a className="contacts__value" href={CONTACTS.emailLink}>
              {CONTACTS.email}
            </a>
            <CopyButton value={CONTACTS.email} label="Скопировать почту"/>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
