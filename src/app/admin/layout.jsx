import "@/styles/layout/admin.scss";

import Sidebar from "@components/admin/layout/Sidebar";
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