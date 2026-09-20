import './index.css';

import { CONTACTS } from '@/shared/config';

export const About = () => {
  return (
    <div className="about">
      <h2 className="title-1">Обо мне</h2>

      <div className="about-box">
        {/* figure/figcaption — фото перестаёт быть картинкой сбоку и становится подписанным портретом. */}
        <figure className="about-card">
          <img
            src="/img/about/me.webp"
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
            <a href={CONTACTS.telegramLink} target="_blank" rel="noopener noreferrer">
              Telegram
            </a>
            <a href={CONTACTS.emailLink}>Почта</a>
          </div>
        </figure>

        <div className="about-text">
          <p>
            <span className="accent">Фронтенд-разработчик.</span> Больше{' '}
            <span className="accent">трёх лет</span> в вебе: начинал с вёрстки
            лендингов по макетам из <span className="accent">Figma</span>,
            сейчас собираю интерфейсы целиком — разметка, логика, данные.
          </p>

          <p>
            Основной стек — <span className="accent">React</span> и{' '}
            <span className="accent">Next.js</span> с{' '}
            <span className="accent">TypeScript</span>. Понимаю устройство SPA:
            раскладываю приложение на компоненты, подключаю и обрабатываю данные
            с API, настраиваю маршрутизацию и состояние.
          </p>

          <p>
            Работал и с нативными{' '}
            <span className="accent">веб-компонентами</span> — Custom Elements
            и Shadow DOM без фреймворка. На них хорошо видно, что именно
            фреймворк берёт на себя.
          </p>

          <p>
            В проектах использую: <span className="tech">HTML</span>,{' '}
            <span className="tech">SCSS</span>,{' '}
            <span className="tech">JavaScript</span>,{' '}
            <span className="tech">TypeScript</span>,{' '}
            <span className="tech">React</span>,{' '}
            <span className="tech">Next.js</span>,{' '}
            <span className="tech">Vite</span>,{' '}
            <span className="tech">Tailwind</span>,{' '}
            <span className="tech">Swiper</span>. Код раскладываю по слоям
            и стараюсь писать так, чтобы его можно было переиспользовать.
          </p>

          <p>
            <span className="accent">Открыт к работе</span> — доработать
            существующий проект или собрать новый с нуля. Напишите, что нужно
            сделать: разберусь в задаче и предложу, как её решить.
          </p>

        </div>

        <p className="about-note">
          <span className="accent">Этот сайт — тоже мой проект.</span>{' '}
          Next.js, TypeScript и SCSS по методологии Feature-Sliced Design,
          со своей админкой: проекты и навыки редактируются через неё,
          а обложки снимаются скриншотом прямо по ссылке на сайт.
        </p>
      </div>
    </div>
  );
};
