import "./styles/main.scss";
import "./styles/projects.css";

import type { Viewport } from "next";
import type { ReactNode } from "react";

import {
  CONTACTS,
  SITE_DESCRIPTION,
  SITE_JOB_TITLE,
  SITE_NAME,
  SITE_URL,
} from "@/shared/config";
import { Footer } from "@/widgets/main/footer";
import { NavBar } from "@/widgets/main/navbar";

export const viewport: Viewport = {
  themeColor: "#5c62ec",
  width: "device-width",
  initialScale: 1,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  jobTitle: SITE_JOB_TITLE,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/img/about/me.webp`,
  email: CONTACTS.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Москва",
    addressCountry: "RU",
  },
  sameAs: [CONTACTS.gitHubLink, CONTACTS.telegramLink],
  knowsAbout: ["React", "Next.js", "TypeScript", "JavaScript", "SCSS", "Web Components"],
};

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <NavBar/>
      {children}
      <Footer/>
    </>
  );
}
