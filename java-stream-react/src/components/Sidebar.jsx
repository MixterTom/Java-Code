export default function Sidebar({ activeCategory, topics, activeTopic, onSelectTopic, isOpen, closeMenu }) {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="mobile-sidebar-header mac-style">
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span className="dot bg-danger"></span>
          <span className="dot bg-warning"></span>
          <span className="dot bg-success"></span>
          <h2 style={{ fontSize: '18px', margin: '0 0 0 12px' }}>Menu</h2>
        </div>
        <button className="btn" onClick={closeMenu} style={{ padding: '4px 8px', fontSize: '13px' }}>Đóng ✕</button>
      </div>
      <div className="card bg-surface">
        <h2 style={{ fontSize: '18px' }}>Chủ đề: {activeCategory}</h2>
        <div className="button-group">
          {topics.map(topic => (
            <button 
              key={topic.id}
              className={`btn ${activeTopic.id === topic.id ? 'active' : ''}`}
              onClick={() => onSelectTopic(topic)}
            >
              {topic.title}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
