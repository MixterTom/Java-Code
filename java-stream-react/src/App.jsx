import { useState, useEffect } from 'react';
import { javaKnowledge } from './data/javaKnowledge';
import Header from './components/Header';
import CategoryTabs from './components/CategoryTabs';
import Sidebar from './components/Sidebar';
import ContentArea from './components/ContentArea';
import SearchBar from './components/SearchBar';
import GuideModal from './components/GuideModal';

function App() {
  const categories = Object.keys(javaKnowledge);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [activeTopic, setActiveTopic] = useState(javaKnowledge[categories[0]][0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  useEffect(() => {
    const hasSeenGuide = localStorage.getItem('java_learning_guide_seen');
    if (!hasSeenGuide) {
      setIsGuideOpen(true);
    }
  }, []);

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
      <GuideModal 
        isOpen={isGuideOpen} 
        onClose={() => {
          localStorage.setItem('java_learning_guide_seen', 'true');
          setIsGuideOpen(false);
        }} 
      />

      <Header 
        toggleTheme={() => setIsDarkMode(!isDarkMode)}
        isDarkMode={isDarkMode}
        openGuide={() => setIsGuideOpen(true)}
      />
      
      {isMenuOpen && <div className="backdrop" onClick={() => setIsMenuOpen(false)}></div>}

      <SearchBar data={javaKnowledge} onSelect={handleSearchSelect} />

      <CategoryTabs 
        categories={categories} 
        activeCategory={activeCategory} 
        onSelectCategory={handleCategoryChange} 
      />

      <div className="mobile-topic-toggle">
        <button 
          className="btn" 
          style={{ width: '100%', marginBottom: '24px', backgroundColor: 'var(--primary)', color: '#1C293C' }} 
          onClick={() => setIsMenuOpen(true)}
        >
          📂 Danh sách bài học 👉 ({activeTopic.title})
        </button>
      </div>

      <div className="layout">
        <Sidebar 
          activeCategory={activeCategory}
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
