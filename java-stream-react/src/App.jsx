import { useState, useEffect } from 'react';
import { javaKnowledge } from './data/javaKnowledge';
import Header from './components/Header';
import CategoryTabs from './components/CategoryTabs';
import Sidebar from './components/Sidebar';
import ContentArea from './components/ContentArea';
import SearchBar from './components/SearchBar';

function App() {
  const categories = Object.keys(javaKnowledge);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [activeTopic, setActiveTopic] = useState(javaKnowledge[categories[0]][0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setActiveTopic(javaKnowledge[category][0]);
  };

  const handleTopicChange = (topic) => {
    setActiveTopic(topic);
    setIsMenuOpen(false);
  };

  const handleSearchSelect = (category, topic) => {
    setActiveCategory(category);
    setActiveTopic(topic);
    setIsMenuOpen(false);
  };

  return (
    <div className="container">
      <Header 
        toggleTheme={() => setIsDarkMode(!isDarkMode)}
        isDarkMode={isDarkMode}
      />
      
      {isMenuOpen && <div className="backdrop" onClick={() => setIsMenuOpen(false)}></div>}

      <SearchBar data={javaKnowledge} onSelect={handleSearchSelect} />

      <CategoryTabs 
        categories={categories} 
        activeCategory={activeCategory} 
        onSelectCategory={handleCategoryChange} 
      />

      {/* Prominent Floating Action Button for Mobile */}
      <button 
        className="mobile-fab btn" 
        onClick={() => setIsMenuOpen(true)}
        aria-label="Mở Menu Danh Mục và Bài Học"
      >
        <span>🚀</span> Đổi Danh Mục & Bài Học
      </button>

      <div className="layout">
        <Sidebar 
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={handleCategoryChange}
          topics={javaKnowledge[activeCategory]}
          activeTopic={activeTopic}
          onSelectTopic={handleTopicChange}
          isOpen={isMenuOpen}
          closeMenu={() => setIsMenuOpen(false)}
        />
        <ContentArea topic={activeTopic} />
      </div>
    </div>
  );
}

export default App;
