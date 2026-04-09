import "@/styles/layout/admin.scss";

import Sidebar from "@components/admin/Sidebar";
import NavBar from "@components/layout/NavBar";

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