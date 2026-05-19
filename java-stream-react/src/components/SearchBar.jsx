import { useState, useRef, useEffect } from 'react';

export default function SearchBar({ data, onSelect }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const lowerQuery = query.toLowerCase();
    const searchResults = [];
    
    Object.keys(data).forEach(category => {
      data[category].forEach(topic => {
        if (topic.title.toLowerCase().includes(lowerQuery)) {
          searchResults.push({ category, topic, matchId: 'section-title' });
        } else if (topic.description.toLowerCase().includes(lowerQuery)) {
          searchResults.push({ category, topic, matchId: 'section-description' });
        } else if (topic.interviewSignals && topic.interviewSignals.toLowerCase().includes(lowerQuery)) {
          searchResults.push({ category, topic, matchId: 'section-interview-signals' });
        } else if (topic.memoryTrick && topic.memoryTrick.toLowerCase().includes(lowerQuery)) {
          searchResults.push({ category, topic, matchId: 'section-memory-trick' });
        } else if (topic.id.toLowerCase().includes(lowerQuery)) {
          searchResults.push({ category, topic, matchId: 'section-title' });
        }
      });
    });
    setResults(searchResults);
  }, [query, data]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  const handleSelect = (category, topic, matchId) => {
    onSelect(category, topic, matchId);
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div ref={wrapperRef} style={{ position: 'relative', marginBottom: '24px', zIndex: 50 }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        backgroundColor: 'var(--surface)', 
        border: '3px solid var(--border-color)', 
        boxShadow: '4px 4px 0px var(--shadow-color)', 
        borderRadius: '0px' 
      }}>
        <span style={{ padding: '0 12px', fontSize: '18px' }}>🔍</span>
        <input 
          type="text" 
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Tìm kiếm kiến thức (vd: HashMap, Array, OOP, memory...)" 
          style={{ 
            width: '100%', 
            padding: '14px 12px 14px 0', 
            border: 'none', 
            outline: 'none', 
            backgroundColor: 'transparent',
            color: 'var(--text)',
            fontSize: '16px',
            fontFamily: 'inherit'
          }}
        />
        {query && (
          <button 
            onClick={() => { setQuery(''); setResults([]); }}
            style={{
              background: 'transparent', border: 'none', padding: '0 16px',
              fontSize: '18px', cursor: 'pointer', color: 'var(--text)'
            }}
          >
            ✖
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="search-dropdown" style={{ 
          position: 'absolute', 
          top: '100%', 
          left: 0, 
          right: 0, 
          marginTop: '8px', 
          backgroundColor: 'var(--surface)', 
          border: '3px solid var(--border-color)',
          boxShadow: '6px 6px 0px var(--shadow-color)',
          maxHeight: '400px',
          overflowY: 'auto',
          zIndex: 1000
        }}>
          {results.map((result, idx) => (
            <div 
              key={`${result.category}-${result.topic.id}-${idx}`}
              onClick={() => handleSelect(result.category, result.topic, result.matchId)}
              style={{
                padding: '16px',
                borderBottom: idx === results.length - 1 ? 'none' : '2px solid var(--border-color)',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--primary)';
                e.currentTarget.style.color = '#1C293C';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'inherit';
              }}
            >
              <div style={{ fontWeight: '800', fontSize: '16px' }}>{result.topic.title}</div>
              <div style={{ fontSize: '14px', marginTop: '6px', opacity: 0.9 }}>
                <span className="badge" style={{ padding: '2px 6px', fontSize: '12px', marginRight: '8px' }}>
                  {result.category}
                </span>
                {result.topic.description.substring(0, 80)}...
              </div>
            </div>
          ))}
        </div>
      )}
      
      {isOpen && query.trim() && results.length === 0 && (
        <div className="search-dropdown" style={{ 
          position: 'absolute', 
          top: '100%', left: 0, right: 0, marginTop: '8px', 
          padding: '16px', backgroundColor: 'var(--surface)', 
          border: '3px solid var(--border-color)', boxShadow: '6px 6px 0px var(--shadow-color)',
          color: 'var(--text)',
          zIndex: 1000
        }}>
          Không tìm thấy kết quả nào cho "{query}" 😢
        </div>
      )}
    </div>
  );
}
