
import './index.css';

const Stage = () => {


    return (
        <div className="stages">
            <h1 className="title-1 title-1--home">Этапы создания эффективного лендинга</h1>

            <div className="stage-card">
                <h3 className="stage-title">1. Анализ и планирование</h3>
                <p className="stage-description">
                    На этом этапе я обсуждаю с вами цели лендинга, изучаю целевую аудиторию и определяю структуру страницы.
                    Это важно для того, чтобы лендинг был удобным и эффективно работал.
                </p>
                <div className="stage-time">2-3 дня</div>
            </div>

            <div className="stage-card">
                <h3 className="stage-title">2. Разработка дизайна</h3>
                <p className="stage-description">
                    Я создаю дизайн лендинга, который будет не только красивым, но и удобным для ваших клиентов.
                    Дизайн делаю с учетом ваших задач и особенностей аудитории.
                </p>
                <div className="stage-time">3-4 дня</div>
            </div>

            <div className="stage-card">
                <h3 className="stage-title">3. Вёрстка</h3>
                <p className="stage-description">
                    Делаю адаптивную вёрстку, чтобы лендинг корректно отображался на всех устройствах: телефонах, планшетах и компьютерах.
                    Также настраиваю сайт для быстрой загрузки.
                </p>
                <div className="stage-time">4-5 дней</div>
            </div>

            <div className="stage-card">
                <h3 className="stage-title">4. Наполнение контентом</h3>
                <p className="stage-description">
                    Добавляю тексты, изображения и другие элементы на сайт. Настраиваю формы обратной связи.
                    Весь контент будет оптимизирован для поисковых систем.
                </p>
                <div className="stage-time">2-3 дня</div>
            </div>

            <div className="stage-card">
                <h3 className="stage-title">5. Тестирование</h3>
                <p className="stage-description">
                    Проверяю все элементы лендинга: формы, скорость загрузки, корректное отображение на разных устройствах.
                </p>
                <div className="stage-time">1-2 дня</div>
            </div>

            <div className="stage-card">
                <h3 className="stage-title">6. Запуск</h3>
                <p className="stage-description">
                    Размещаю лендинг на хостинге, настраиваю домен и провожу финальную проверку. После запуска сайта я остаюсь на связи и готов помочь, если что-то потребуется.
                </p>
                <div className="stage-time">1 день</div>
            </div>
        </div>


    );
}

export default Stage;