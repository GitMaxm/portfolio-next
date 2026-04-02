import "@/styles/globals.css";

import Link from 'next/link';

export default function AdminLayout({ children }) {
    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            <aside
                style={{
                    width: '220px',
                    background: '#111',
                    color: '#fff',
                    padding: '20px',
                }}
            >
                <h2>Навигаци по админке</h2>

                <nav>
                    <ul style={{ padding: 0, display: 'flex', flexDirection: 'column' }}>
                        <li>
                            <Link href="/admin" style={{ color: '#fff' }}>
                                Главная
                            </Link>
                        </li>
                        <li>
                            <Link href="/admin/projects" style={{ color: '#fff' }}>
                                Проекты
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>

            <main style={{ flex: 1, padding: '20px' }}>
                {children}
            </main>
        </div >
    );
}