import React from 'react';
import '../css/Product.css';

function Filter(props) {
  const { categories, selectedCategory, onSelectCategory } = props;

  return (
    <div className="filter-container">
      <span className="filter-label">Filter by Category</span>
      <div className="filter-chips">
        
        {/* 'All' option chip */}
        <button
          onClick={() => onSelectCategory('all')}
          className={`filter-chip ${selectedCategory === 'all' ? 'active' : ''}`}
        >
          All Categories
        </button>

        {/* Categories loop - no key prop */}
        {categories.map((cat) => (
          <button
            onClick={() => onSelectCategory(cat)}
            className={`filter-chip ${selectedCategory === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}

      </div>
    </div>
  );
}

export default Filter;
