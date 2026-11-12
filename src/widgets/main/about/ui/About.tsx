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
          </div>
        </figure>

        <div className="about-body">
          <div className="about-text">
            <p>
              Фронтенд-разработчик, больше <span className="accent">трёх лет</span> в вебе:
              начинал с вёрстки лендингов по макетам из Figma, сейчас собираю интерфейсы
              целиком: разметку, логику, данные.
            </p>

            <p>
              Пишу на <span className="accent">React и Next.js с TypeScript</span>.
              Понимаю устройство SPA: раскладываю приложение на компоненты, подключаю
              и обрабатываю данные с API, настраиваю маршрутизацию и состояние.
            </p>

            <p>
              Работал и с нативными веб-компонентами: Custom Elements и Shadow DOM без
              фреймворка. На них хорошо видно, что именно фреймворк берёт на себя.
              Код раскладываю по слоям и стараюсь писать так, чтобы его можно было
              переиспользовать.
            </p>

            <p>
              Открыт к работе: доработать существующий проект или собрать новый с нуля.{' '}
              <a className="link" href="#contact">Напишите, что нужно сделать</a>: разберусь в задаче
              и предложу, как её решить.
            </p>
          </div>

          <aside className="about-note">
            <h3 className="about-note__title">Этот сайт тоже мой проект</h3>
            <p>
              Next.js, TypeScript и SCSS по методологии Feature-Sliced Design, со своей
              админкой: проекты и навыки редактируются через неё, а обложки снимаются
              скриншотом прямо по ссылке на сайт.
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
