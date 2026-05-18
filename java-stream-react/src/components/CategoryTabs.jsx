export default function CategoryTabs({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className="category-container">
      <div className="scroll-hint">Trượt ngang để xem thêm 👉</div>
      <div className="category-tabs" style={{ display: 'flex', gap: '16px', marginBottom: '32px', overflowX: 'auto', paddingBottom: '8px' }}>
        {categories.map(category => (
          <button
            key={category}
            className={`btn ${activeCategory === category ? 'active' : ''}`}
            style={{ width: 'auto', marginBottom: 0, whiteSpace: 'nowrap' }}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
