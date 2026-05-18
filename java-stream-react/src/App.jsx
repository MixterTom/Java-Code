import { useState } from 'react';
import { javaKnowledge } from './data/javaKnowledge';
import Header from './components/Header';
import CategoryTabs from './components/CategoryTabs';
import Sidebar from './components/Sidebar';
import ContentArea from './components/ContentArea';

function App() {
  const categories = Object.keys(javaKnowledge);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [activeTopic, setActiveTopic] = useState(javaKnowledge[categories[0]][0]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setActiveTopic(javaKnowledge[category][0]);
  };

  return (
    <div className="container">
      <Header />
      <CategoryTabs 
        categories={categories} 
        activeCategory={activeCategory} 
        onSelectCategory={handleCategoryChange} 
      />

      <div className="layout">
        <Sidebar 
          activeCategory={activeCategory}
          topics={javaKnowledge[activeCategory]}
          activeTopic={activeTopic}
          onSelectTopic={setActiveTopic}
        />
        <ContentArea topic={activeTopic} />
      </div>
    </div>
  );
}

export default App;
