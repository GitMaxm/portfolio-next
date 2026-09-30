import "@/app/admin/styles/admin.scss";

import { JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";

import { Sidebar } from "@/widgets/admin/sidebar";

// Гарнитуру грузим здесь, а не в корневом layout: публичной части она не нужна.
const jetBrainsMono = JetBrains_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-mono',
  display: 'swap',
});

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${jetBrainsMono.variable} adminLayout`}>

      <Sidebar/>

      <main className="adminContent">
        <div className="adminContentInner">
          {children}
        </div>
      </main>

    </div>
  );
}
