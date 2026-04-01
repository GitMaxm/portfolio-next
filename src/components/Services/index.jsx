import './style.css'
import Link from 'next/link'

const Services = () => {
    return (
        <div className="services">
            <h2 className="title-1 title-1--home">Услуги</h2>
            <div className="services-text">
                <p> Создаю лендинги с нуля или верстаю по вашим готовым макетам. Если у вас нет макета — предложу решение, исходя из ваших пожеланий.</p>
                <p>Также предлагаю полностью адаптировать свои <Link href={`/projects`}>готовые проекты</Link> под ваш продукт. Это не только сократит сроки разработки, но и поможет сэкономить бюджет, сохраняя высокое качество.
                    Быстрая и эффективная адаптация под ваши потребности — идеальное решение для запуска успешного проекта.</p>
            </div>

            <ul className='services-list'>
                <li>
                    <div >
                        <svg width={50} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <path d="M3 9h18" />
                        </svg>
                    </div>
                    <h3>Адаптивный сайт</h3>
                    <p>Создание полностью отзывчивых сайтов для всех устройств</p>
                </li>
                <li>
                    <div >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="2" width="20" height="8" rx="2" />
                            <rect x="2" y="14" width="20" height="8" rx="2" />
                        </svg>
                    </div>
                    <h3>Сопровождение сайта</h3>
                    <p>Техническая поддержка и обновление контента</p>
                </li>
                <li>
                    <div >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <path d="M3 9h18" />
                        </svg>
                    </div>
                    <h3>Макет и дизайн</h3>
                    <p>Разработка уникального дизайна под ваши потребности</p>
                </li>
                <li>
                    <div >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="16 18 22 12 16 6" />
                            <polyline points="8 6 2 12 8 18" />
                        </svg>
                    </div>
                    <h3>Установка на хостинг</h3>
                    <p>Размещение сайта и настройка домена</p>
                </li>
            </ul>

            <div className='services-more'>
                <Link href={`/price`}>
                    Подробнее
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                    </svg></Link>
            </div>
        </div>
    );
}

export default Services;