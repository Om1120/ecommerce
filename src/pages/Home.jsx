import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import Category from '../components/Category';
import ProductList from '../components/ProductList';
import Newsletter from '../components/Newsletter';
import Loading from '../components/Loading';
import '../css/Home.css';

function Home(props) {
  const { products, loading, error, onAddToCart } = props;

  // Render loading state if API call is in progress
  if (loading) {
    return (
      <div className="container">
        <Loading />
      </div>
    );
  }

  // Render error message if API fails
  if (error) {
    return (
      <div className="container" style={{ margin: '40px auto', textAlign: 'center' }}>
        <div className="error-view">
          <h3>Failed to Load Products</h3>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  // Slice products for Home page displays (first 4 for Featured, next 4 for Latest)
  const featuredProducts = products.slice(0, 4);
  const latestProducts = products.slice(4, 8);

  return (
    <div className="container">
      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <div className="section-title-wrapper">
        <h2>Shop by Category</h2>
      </div>
      <Category />

      {/* Carousel Banner */}
      <Carousel />

      {/* Featured Products */}
      <div className="section-title-wrapper">
        <h2>Featured Products</h2>
      </div>
      <ProductList products={featuredProducts} onAddToCart={onAddToCart} />

      {/* Special Offer Banner */}
      <div className="special-offer-wrapper">
        <div className="offer-content">
          <span className="offer-badge">Mega Sale</span>
          <h2 className="offer-title">Summer Clearance Sale! Up to 50% Off</h2>
          <p className="offer-desc">
            Grab our highest rated gadgets, skin essentials, and accessories at unbelievable prices. Free delivery on orders over $50.
          </p>
          <div className="offer-countdown">
            <div className="countdown-box">
              <span className="countdown-time">02</span>
              <span className="countdown-label">Days</span>
            </div>
            <div className="countdown-box">
              <span className="countdown-time">14</span>
              <span className="countdown-label">Hrs</span>
            </div>
            <div className="countdown-box">
              <span className="countdown-time">45</span>
              <span className="countdown-label">Mins</span>
            </div>
          </div>
        </div>
        <button className="offer-btn" onClick={() => window.scrollTo(0, 400)}>
          Shop Now <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      {/* Latest Products */}
      <div className="section-title-wrapper">
        <h2>Latest Additions</h2>
      </div>
      <ProductList products={latestProducts} onAddToCart={onAddToCart} />

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}

export default Home;
