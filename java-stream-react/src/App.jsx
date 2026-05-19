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

  const currentCategoryTopics = javaKnowledge[activeCategory];
  const currentIndex = currentCategoryTopics.findIndex(t => t.id === activeTopic.id);

  let prevTopic = null;
  if (currentIndex > 0) {
    prevTopic = currentCategoryTopics[currentIndex - 1];
  } else {
    const catIndex = categories.indexOf(activeCategory);
    if (catIndex > 0) {
      const prevCat = categories[catIndex - 1];
      const prevCatTopics = javaKnowledge[prevCat];
      prevTopic = prevCatTopics[prevCatTopics.length - 1];
    }
  }

  let nextTopic = null;
  if (currentIndex < currentCategoryTopics.length - 1) {
    nextTopic = currentCategoryTopics[currentIndex + 1];
  } else {
    const catIndex = categories.indexOf(activeCategory);
    if (catIndex < categories.length - 1) {
      const nextCat = categories[catIndex + 1];
      nextTopic = javaKnowledge[nextCat][0];
    }
  }

  const handlePrevious = () => {
    if (prevTopic) {
      const catIndex = categories.indexOf(activeCategory);
      if (currentIndex === 0 && catIndex > 0) {
        setActiveCategory(categories[catIndex - 1]);
      }
      setActiveTopic(prevTopic);
    }
  };

  const handleNext = () => {
    if (nextTopic) {
      const catIndex = categories.indexOf(activeCategory);
      if (currentIndex === currentCategoryTopics.length - 1 && catIndex < categories.length - 1) {
        setActiveCategory(categories[catIndex + 1]);
      }
      setActiveTopic(nextTopic);
    }
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
        <ContentArea 
          topic={activeTopic} 
          onPrevious={prevTopic ? handlePrevious : null}
          onNext={nextTopic ? handleNext : null}
          prevTopicTitle={prevTopic?.title}
          nextTopicTitle={nextTopic?.title}
        />
      </div>
    </div>
  );
}

export default App;
