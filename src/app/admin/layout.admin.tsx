import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";

import { Sidebar } from "@/widgets/admin/sidebar";

import styles from "./styles/admin.module.scss";

const jetBrainsMono = JetBrains_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Админка',
    template: '%s — Админка',
  },
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${jetBrainsMono.variable} ${styles.adminLayout}`}>

      <Sidebar/>

      <main className={styles.adminContent}>
        <div className={styles.adminContentInner}>
          {children}
        </div>
      </main>

    </div>
  );
}
