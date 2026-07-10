import React from 'react';
import '../css/Product.css';

function SearchBar(props) {
  const { value, onChange } = props;

  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  const handleClear = () => {
    onChange('');
  };

  return (
    <div className="search-container">
      <span className="search-icon"><i className="fa-solid fa-magnifying-glass"></i></span>
      <input
        type="text"
        className="search-input"
        placeholder="Search products by title or brand..."
        value={value}
        onChange={handleInputChange}
      />
      {value && (
        <button onClick={handleClear} className="search-clear-btn" title="Clear Search">
          <i className="fa-solid fa-xmark"></i>
        </button>
      )}
    </div>
  );
}

export default SearchBar;
