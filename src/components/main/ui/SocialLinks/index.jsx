import "./style.css";

import { SOCIAL_LINKS } from "@/constants/socialLink";

const SocialLinks = () => {
  return (
    <ul className="social">
      {SOCIAL_LINKS.map(({ title, url, icon }) => (
        <li className="social__item" key={title}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Открыть ${title}`}
            className="social-link"
          >
            {icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
