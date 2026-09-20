import { HiOutlineMail } from "react-icons/hi";
import { SiTelegram } from "react-icons/si";

import type { ISocialLink } from "@/shared/model";

import { CONTACTS } from "./contacts";

export const SOCIAL_LINKS: ISocialLink[] = [
  {
    title: "Telegram",
    url: CONTACTS.telegramLink,
    icon: <SiTelegram/>,
  },
  {
    title: "E-mail",
    url: CONTACTS.emailLink,
    icon: <HiOutlineMail/>,
  }
];
