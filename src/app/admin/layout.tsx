import "@/app/admin/styles/admin.scss";

import type { ReactNode } from "react";

import { Sidebar } from "@/widgets/admin/sidebar";
import { NavBar } from "@/widgets/main/navbar";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar/>

      <div className="layout">

        <Sidebar/>

        <main className="mainContent">
          {children}
        </main>

      </div>
    </>
  );
}