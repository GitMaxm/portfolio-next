import "./style.css";
import socialLinks from "@/constants/socialLink";

const SocialLinks = () => {
  return (
    <ul className="social">
      {socialLinks.map(({ title, url, icon }) => (
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
