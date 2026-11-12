import './style.css';

import { FiSend } from 'react-icons/fi';

import { CONTACTS } from '@/shared/config';
import { CopyButton } from '@/shared/ui/main';

export const ContactCta = () => {
  return (
    <div className="contact-cta">
      <div className="contact-cta__text">
        <h2 className="contact-cta__title">Расскажите, что нужно сделать</h2>
        <p className="contact-cta__lead">
          Доработать существующий проект или собрать новый с нуля. Отвечаю в тот же день
          и предлагаю, как решить задачу.
        </p>
      </div>

      <div className="contact-cta__actions">
        <a
          className="btn contact-cta__primary"
          href={CONTACTS.telegramLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiSend aria-hidden="true"/>
          Написать в Telegram
        </a>

        <div className="contact-cta__email">
          <a className="link" href={CONTACTS.emailLink}>{CONTACTS.email}</a>
          <CopyButton value={CONTACTS.email} label="Скопировать почту"/>
        </div>
      </div>
    </div>
  );
};
