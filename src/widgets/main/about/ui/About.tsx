import './index.css';

import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

import { assetPath, CONTACTS } from '@/shared/config';
import { SectionHead } from '@/shared/ui/main';

export const About = () => {
  return (
    <div className="about">
      <SectionHead title="Обо мне"/>

      <div className="about-box">
        <figure className="about-card">
          <img
            src={assetPath('/img/about/me.webp')}
            alt="Максим Иваненко, фронтенд-разработчик"
            className="about-img"
            width={260}
            height={325}
          />

          <figcaption className="about-card__caption">
            <span className="about-card__name">Максим Иваненко</span>
            <span className="about-card__role">Фронтенд-разработчик</span>
            <span className="about-card__place">{CONTACTS.location}</span>
          </figcaption>

          <div className="about-card__links">
            <a className="link" href={CONTACTS.telegramLink} target="_blank" rel="noopener noreferrer">
              Telegram
            </a>
            <a className="link" href={CONTACTS.emailLink}>{CONTACTS.email}</a>
            <a className="link" href={CONTACTS.resumeLink} target="_blank" rel="noopener noreferrer">
              Резюме на hh.ru
            </a>
          </div>
        </figure>

        <div className="about-body">
          <div className="about-text">
            <p>
              Больше <span className="accent">трёх лет</span> в вебе. Начинал верстальщиком:
              собирал лендинги по макетам из Figma и привык доводить детали до конца. Сейчас
              работаю фронтенд-разработчиком.
            </p>

            <p>
              Много смотрю, как сделаны чужие сайты, письма и баннеры, и эта насмотренность
              помогает в работе: сразу видно, где сбился отступ, где кнопка не похожа на кнопку
              и где интерфейсом неудобно пользоваться.
            </p>

            <p>
              Пишу на <span className="accent">React и Next.js с TypeScript</span>: от разметки
              до работы с данными, маршрутизации и состояния. Работал с нативными
              веб-компонентами, собрал для этого сайта админку с автоматическими скриншотами,
              сделал приложение для macOS. ИИ-инструменты использую там, где они ускоряют работу.
            </p>

            <p>
              Открыт к работе: доработать существующий проект или собрать новый с нуля.{' '}
              <a className="link" href="#contact">Напишите, что нужно сделать</a>: разберусь
              в задаче и предложу, как её решить.
            </p>
          </div>

          <aside className="about-note">
            <h3 className="about-note__title">Этот сайт тоже мой проект</h3>
            <p>
              Next.js и TypeScript, код разложен по слоям по Feature-Sliced Design. Есть своя
              админка: проекты и навыки правятся через неё, а обложки снимаются скриншотом
              прямо по ссылке на сайт.
            </p>
            <Link href="/project/portfolio/" className="link link--arrow about-note__link">
              Как он устроен
              <FiArrowRight aria-hidden="true"/>
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
};
