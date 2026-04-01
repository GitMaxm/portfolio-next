import "./style.css";
import { COMPANY_CONTACTS } from "@/data/contacts";

// icons
import { SiTelegram } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

const socialLinks = [
  {
    title: "Telegram",
    url: COMPANY_CONTACTS.telegramLink,
    icon: <SiTelegram />,
  },
  {
    title: "E-mail",
    url: COMPANY_CONTACTS.emailLink,
    icon: <HiOutlineMail />,
  }
];


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
