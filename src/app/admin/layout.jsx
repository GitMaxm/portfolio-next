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
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <a href="/admin" style={{ color: '#fff' }}>
                
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <main style={{ flex: 1, padding: '20px' }}>
        {children}
      </main>
    </div>
  );
}