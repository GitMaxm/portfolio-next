import "@/app/admin/styles/admin.scss";

import { Sidebar } from "@/widgets/admin/Sidebar";
import NavBar from "@components/main/layout/NavBar";

export default function AdminLayout({ children }) {
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