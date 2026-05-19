export default function Sidebar({ categories, activeCategory, onSelectCategory, topics, activeTopic, onSelectTopic, isOpen, closeMenu }) {
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

      <div className="card bg-surface mobile-only" style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '18px', color: 'var(--primary)', textShadow: '1px 1px 0px var(--text)' }}>
          📚 Danh mục
        </h2>
        <div className="button-group" style={{ flexDirection: 'row', flexWrap: 'wrap', gap: '8px' }}>
          {categories && categories.map(category => (
            <button
              key={category}
              className={`btn ${activeCategory === category ? 'active' : ''}`}
              style={{ width: 'auto', padding: '6px 12px', fontSize: '13px', margin: 0 }}
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="card bg-surface">
        <h2 style={{ fontSize: '18px' }}>📖 Bài học: {activeCategory}</h2>
        <div className="button-group">
          {topics.map(topic => (
            <button 
              key={topic.id}
              className={`btn ${activeTopic.id === topic.id ? 'active' : ''}`}
              onClick={() => {
                onSelectTopic(topic);
                // On mobile, close menu after selecting a topic
                if (window.innerWidth <= 768) {
                  closeMenu();
                }
              }}
            >
              {topic.title}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
