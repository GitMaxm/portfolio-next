import './style.css';

const socialLinks = [
    { title: 'Instagram', url: 'https://instagram.com/imax_iv?igshid=YmMyMTA2M2Y=', img: 'instagram.svg' },
    { title: 'Telegram', url: 'https://t.me/sonyfox', img: 'telegram.svg' },
    { title: 'VK', url: 'https://vk.com/ivanenkomax', img: 'vk.svg' },
    { title: 'GitHub', url: 'https://github.com/GitMaxm', img: 'gitHub.svg' },
];

const SocialLinks = () => {
    return (
        <ul className="social">

            {socialLinks.map(({ title, url, img }) => (
                <li className="social__item"
                    key={title}>
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Перейти на страницу ${title}`}
                        className="social-link"
                    >
                        <img src={`/img/icons/${img}`}
                            alt={`Иконка ${title}`} />
                    </a>
                </li>

            ))}

        </ul>
    );
};

export default SocialLinks;
