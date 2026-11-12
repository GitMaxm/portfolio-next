import './style.css';

import type { Metadata } from 'next';

import { CONTACTS } from "@/shared/config";
import { CopyButton, SectionHead } from "@/shared/ui/main";

export const metadata: Metadata = {
  title: 'Контакты',
  description:
    'Связаться с фронтенд-разработчиком Максимом Иваненко: Telegram и почта. ' +
    'Москва, открыт к работе над новыми и существующими проектами.',
  alternates: { canonical: '/contacts/' },
};

const [emailLocal, emailDomain] = CONTACTS.email.split('@');
const [gitHubHost, gitHubUser] = CONTACTS.gitHubLink.replace('https://', '').split('/');

const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <SectionHead as="h1" title="Контакты">
          Пишите в Telegram или на почту, отвечаю в тот же день.
          Расскажите про задачу, и я предложу решение.
        </SectionHead>

        <ul className="contacts">
          <li className="contact-card">
            <span className="contact-card__path">Telegram</span>
            <a
              className="contact-card__value"
              href={CONTACTS.telegramLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {CONTACTS.telegram}
            </a>
            <span className="contact-card__hint">Быстрее всего, отвечаю в тот же день</span>
          </li>

          <li className="contact-card">
            <span className="contact-card__path">Почта</span>
            <div className="contact-card__row">
              <a className="contact-card__value" href={CONTACTS.emailLink}>
                {emailLocal}<wbr/>@{emailDomain}
              </a>
              <CopyButton value={CONTACTS.email} label="Скопировать почту"/>
            </div>
            <span className="contact-card__hint">Для задач с подробным описанием и файлами</span>
          </li>

          <li className="contact-card">
            <span className="contact-card__path">GitHub</span>
            <a
              className="contact-card__value"
              href={CONTACTS.gitHubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {gitHubHost}/<wbr/>{gitHubUser}
            </a>
            <span className="contact-card__hint">Код проектов и этого сайта</span>
          </li>

          <li className="contact-card">
            <span className="contact-card__path">Город</span>
            <span className="contact-card__value">{CONTACTS.location}</span>
            <span className="contact-card__hint">Часовой пояс МСК, UTC+3</span>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
