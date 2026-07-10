import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';

const featuredCategories = [
  { name: "beauty", displayName: "Beauty & Makeup", icon: "fa-solid fa-wand-magic-sparkles" },
  { name: "fragrances", displayName: "Fragrances", icon: "fa-solid fa-spray-can-sparkles" },
  { name: "furniture", displayName: "Furniture", icon: "fa-solid fa-couch" },
  { name: "groceries", displayName: "Groceries", icon: "fa-solid fa-basket-shopping" },
  { name: "laptops", displayName: "Laptops & Tech", icon: "fa-solid fa-laptop" },
  { name: "smartphones", displayName: "Phones & Gadgets", icon: "fa-solid fa-mobile-screen-button" }
];

function Category() {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    navigate(`/products?category=${categoryName}`);
  };

  return (
    <div className="categories-container">
      {/* Map categories - no key prop */}
      {featuredCategories.map((cat) => (
        <button 
          onClick={() => handleCategoryClick(cat.name)}
          className="category-card"
        >
          <div className="category-icon"><i className={cat.icon}></i></div>
          <div className="category-name">{cat.displayName}</div>
        </button>
      ))}
    </div>
  );
}

export default Category;
