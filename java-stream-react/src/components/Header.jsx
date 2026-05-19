export default function Header({ toggleTheme, isDarkMode, openGuide }) {
  return (
    <header className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <h1>☕ Java Learning Tracker</h1>
        <p>Interactive Guide - Giao diện Neobrutalism</p>
      </div>
      <div style={{ display: 'flex', gap: '12px' }}>
        <button className="btn" onClick={openGuide} style={{ padding: '8px 12px', fontSize: '16px' }} title="Hướng dẫn sử dụng">
          📖
        </button>
        <button className="btn" onClick={toggleTheme} style={{ padding: '8px 12px', fontSize: '16px' }} title="Chế độ Sáng/Tối">
          {isDarkMode ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  );
}
