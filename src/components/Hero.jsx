import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero_electronics.png';
import '../css/Home.css';

function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="hero-content">
        <span className="hero-tag">Limited Time Offers</span>
        <h1 className="hero-title">Experience the Future of Shopping</h1>
        <p className="hero-desc">
          Discover curated collections of tech gadgets, stylish sneakers, premium cosmetics, and everyday essentials. Crafted to elevate your lifestyle.
        </p>
        <Link to="/products" className="hero-btn">
          Shop Categories <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Featured electronics and wearables catalog" />
      </div>
    </div>
  );
}

export default Hero;
