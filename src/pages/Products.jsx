import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import ProductList from '../components/ProductList';
import Loading from '../components/Loading';
import '../css/Product.css';

function Products(props) {
  const { products, loading, error, onAddToCart } = props;
  const [searchParams, setSearchParams] = useSearchParams();
  
  // States for search and sorting
  const [searchQuery, setSearchQuery] = useState('');
  const [sortType, setSortType] = useState('default');

  // Selected category is read directly from URL search params
  const selectedCategory = searchParams.get('category') || 'all';

  if (loading) {
    return (
      <div className="container">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container" style={{ textAlign: 'center', margin: '40px auto' }}>
        <div className="error-view">
          <h3>Failed to Load Products</h3>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  // Extract unique categories from products list dynamically
  const categoriesList = [];
  products.forEach((p) => {
    if (p.category && !categoriesList.includes(p.category)) {
      categoriesList.push(p.category);
    }
  });

  // Filter products based on search and category parameters
  const filteredProducts = products.filter((item) => {
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Sort products based on sortType selection
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortType === 'price-asc') {
      return a.price - b.price;
    }
    if (sortType === 'price-desc') {
      return b.price - a.price;
    }
    if (sortType === 'name-asc') {
      return a.title.localeCompare(b.title);
    }
    if (sortType === 'name-desc') {
      return b.title.localeCompare(a.title);
    }
    return 0; // default order
  });

  const handleCategoryChange = (categoryName) => {
    if (categoryName === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryName });
    }
  };

  return (
    <div className="container">
      <div className="about-header" style={{ margin: '20px 0 30px 0' }}>
        <h1>Our Products</h1>
        <p>Browse through our collection of premium items and find the best deals today.</p>
      </div>

      {/* Control panel containing Search, Categories and Sorting */}
      <div className="controls-wrapper">
        {/* Search Bar */}
        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        {/* Filter chips */}
        <Filter 
          categories={categoriesList} 
          selectedCategory={selectedCategory} 
          onSelectCategory={handleCategoryChange} 
        />

        {/* Sort by Price chips */}
        <div className="filter-container">
          <span className="filter-label">Sort by Price</span>
          <div className="filter-chips">
            <button
              onClick={() => setSortType('default')}
              className={`filter-chip ${sortType === 'default' ? 'active' : ''}`}
            >
              Default
            </button>
            <button
              onClick={() => setSortType('price-asc')}
              className={`filter-chip ${sortType === 'price-asc' ? 'active' : ''}`}
            >
              <i className="fa-solid fa-arrow-up-wide-short"></i> Price: Low to High
            </button>
            <button
              onClick={() => setSortType('price-desc')}
              className={`filter-chip ${sortType === 'price-desc' ? 'active' : ''}`}
            >
              <i className="fa-solid fa-arrow-down-wide-short"></i> Price: High to Low
            </button>
          </div>
        </div>

        {/* Dynamic results count */}
        <div className="results-count">
          Showing <strong>{sortedProducts.length}</strong> product(s)
        </div>
      </div>

      {/* Product list grid */}
      <ProductList products={sortedProducts} onAddToCart={onAddToCart} />
    </div>
  );
}

export default Products;
