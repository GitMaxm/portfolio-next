import COMPANY_CONTACTS from "./contacts";

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

export default socialLinks;