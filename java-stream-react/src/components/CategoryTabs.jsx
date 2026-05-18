export default function CategoryTabs({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className="category-container">
      <div className="category-tabs" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '32px' }}>
        {categories.map(category => (
          <button
            key={category}
            className={`btn ${activeCategory === category ? 'active' : ''}`}
            style={{ width: 'auto', marginBottom: 0, padding: '8px 16px', fontSize: '14px' }}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
