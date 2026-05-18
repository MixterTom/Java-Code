export default function Sidebar({ activeCategory, topics, activeTopic, onSelectTopic }) {
  return (
    <aside className="sidebar">
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
