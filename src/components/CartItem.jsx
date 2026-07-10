import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Cart.css';

function CartItem(props) {
  const { item, onIncrease, onDecrease, onRemove } = props;

  return (
    <div className="cart-item-card">
      {/* Product Thumbnail */}
      <div className="cart-item-img">
        <img src={item.thumbnail} alt={item.title} />
      </div>

      {/* Product Details info */}
      <div className="cart-item-info">
        <span className="cart-item-category">{item.category}</span>
        <Link to={`/products/${item.id}`}>
          <h3 className="cart-item-title">{item.title}</h3>
        </Link>
      </div>

      {/* Price and quantity selectors */}
      <div className="cart-item-price-qty">
        <div className="cart-item-price">${item.price}</div>
        
        {/* Quantity selector component */}
        <div className="quantity-selector" style={{ height: '36px' }}>
          <button 
            onClick={() => onDecrease(item.id)} 
            className="qty-btn" 
            style={{ width: '32px' }}
            aria-label="Decrease quantity"
          >
            <i className="fa-solid fa-minus"></i>
          </button>
          <div className="qty-value" style={{ width: '32px', fontSize: '13px' }}>
            {item.quantity}
          </div>
          <button 
            onClick={() => onIncrease(item.id)} 
            className="qty-btn" 
            style={{ width: '32px' }}
            aria-label="Increase quantity"
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>

      {/* Delete button */}
      <button 
        onClick={() => onRemove(item.id)} 
        className="cart-item-remove-btn" 
        title="Remove Item"
        aria-label="Remove item"
      >
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
}

export default CartItem;
