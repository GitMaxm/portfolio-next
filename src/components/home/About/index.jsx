import './index.css';

const About = () => {
    return (
        <div className="about">
            <h2 className="title-1">Обо мне</h2>

            <div className="about-box">
                <img
                    src="/img/logo/about-logo.jpg"
                    alt="мое фото"
                    className="about-img"
                />

                <div className="about-text">
                    <p>
                        Уже больше <span className="accent">двух лет</span> верстаю лендинги —
                        работаю с макетами в <span className="accent">Figma</span>,
                        пишу чистый и понятный код. Сейчас работаю в{' '}
                        <span className="accent">DatsTeam</span>, где делаю рекламные и промо-сайты.
                    </p>

                    <p>
                        В последнее время активно развиваюсь как{' '}
                        <span className="accent">frontend-разработчик</span>.
                        Уверенно работаю с <span className="accent">React</span> и{' '}
                        <span className="accent">Next.js</span>, понимаю структуру SPA,
                        подключаю и обрабатываю данные с API, настраиваю маршрутизацию
                        и логику на клиенте.
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
                        <span className="tech">Swiper</span>. Следую компонентному подходу
                        и стараюсь писать переиспользуемый код.
                    </p>

                    <p>
                        Постоянно учусь — прохожу курсы, читаю документацию и пробую
                        новые вещи на практике. Мне важно понимать, как и зачем всё работает.
                    </p>

                    <p>
                        <span className="accent">Открыт для сотрудничества</span> —
                        могу доработать сайт или сделать новый с нуля. Стараюсь понять
                        задачу и предложить оптимальное решение.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;