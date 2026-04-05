import { COMPANY_CONTACTS } from "./contacts";

// icons
import { SiTelegram } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

export const SOCIAL_LINKS = [
  {
    title: "Telegram",
    url: COMPANY_CONTACTS.telegramLink,
    icon: <SiTelegram/>,
  },
  {
    title: "E-mail",
    url: COMPANY_CONTACTS.emailLink,
    icon: <HiOutlineMail/>,
  }
];