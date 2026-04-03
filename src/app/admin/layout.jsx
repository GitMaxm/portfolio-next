import styles from '@/styles/admin/AdminLayout.module.scss';
import Sidebar from "@components/admin/Sidebar";
import NavBar from "@components/layout/NavBar";

export default function AdminLayout({children}) {
  return (
    <>
      <NavBar/>

      <div className={styles.layout}>

        <Sidebar/>

        <main className={styles.mainContent}>
          {children}
        </main>

      </div>
    </>
  );
}