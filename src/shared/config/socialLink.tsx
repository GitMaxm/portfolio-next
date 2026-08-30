import { HiOutlineMail } from "react-icons/hi";
import { SiTelegram } from "react-icons/si";

import type { ISocialLink } from "@/shared/model";

import { COMPANY_CONTACTS } from "./contacts";

export const SOCIAL_LINKS: ISocialLink[] = [
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