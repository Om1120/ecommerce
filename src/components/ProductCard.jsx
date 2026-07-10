import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Product.css';

function ProductCard(props) {
  const { product, onAddToCart } = props;

  const handleAddClick = (e) => {
    e.preventDefault(); // Prevent navigating when clicking add to cart
    onAddToCart(product);
  };

  return (
    <div className="product-card">
      
      {/* Product Image Link */}
      <Link to={`/products/${product.id}`} className="card-img-link">
        <img src={product.thumbnail} alt={product.title} loading="lazy" />
      </Link>
      
      {/* Card Details */}
      <div className="card-details">
        {/* Rating */}
        <div className="card-rating-badge">
          <i className="fa-solid fa-star"></i> {product.rating ? product.rating.toFixed(1) : '4.5'}
        </div>
        
        {/* Title Link */}
        <Link to={`/products/${product.id}`}>
          <h3 className="card-title">{product.title}</h3>
        </Link>
        
        {/* Bottom row: Price and Add Button */}
        <div className="card-price-row">
          <span className="card-price">${product.price}</span>
          <button 
            onClick={handleAddClick} 
            className="card-add-btn" 
            title="Add to Cart"
            aria-label="Add to cart button"
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
