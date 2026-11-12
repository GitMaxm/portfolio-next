import { SiGithub, SiTelegram } from "react-icons/si";

import type { ISocialLink } from "@/shared/model";

import { CONTACTS } from "./contacts";

export const SOCIAL_LINKS: ISocialLink[] = [
  {
    title: "Telegram",
    url: CONTACTS.telegramLink,
    icon: <SiTelegram/>,
  },
  {
    title: "GitHub",
    url: CONTACTS.gitHubLink,
    icon: <SiGithub/>,
  },
];
