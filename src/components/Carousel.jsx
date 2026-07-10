import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';

const slides = [
  {
    title: "Unmatched Tech Gear",
    desc: "Level up your workflow with premium laptops, monitors, and audio gear.",
    bgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    btnText: "Explore Tech",
    category: "laptops"
  },
  {
    title: "Glow & Skincare",
    desc: "Reinvigorate your routine with natural serums and beauty solutions.",
    bgUrl: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    btnText: "Shop Skincare",
    category: "beauty"
  },
  {
    title: "Active Wear & Shoes",
    desc: "Step out with style and comfort with our athletic sneakers.",
    bgUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
    btnText: "Buy Sneakers",
    category: "shoes"
  }
];

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  // Slide rotation effect
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const handleSlideClick = (categoryName) => {
    navigate(`/products?category=${categoryName}`);
  };

  return (
    <div className="carousel-wrapper">
      {/* Slides mapping - no key prop */}
      {slides.map((slide, index) => (
        <div
          className={`carousel-slide ${index === activeIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.bgUrl})` }}
        >
          <div className="carousel-slide-content">
            <h2 className="carousel-slide-title">{slide.title}</h2>
            <p className="carousel-slide-desc">{slide.desc}</p>
            <button
              onClick={() => handleSlideClick(slide.category)}
              className="carousel-slide-btn"
            >
              {slide.btnText}
            </button>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button onClick={handlePrev} className="carousel-arrow prev" aria-label="Previous slide">
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button onClick={handleNext} className="carousel-arrow next" aria-label="Next slide">
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      {/* Pagination dots - no key prop */}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            onClick={() => handleDotClick(index)}
            className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
