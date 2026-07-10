import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import CartItem from '../components/CartItem';
import '../css/Cart.css';

function Cart(props) {
  const { cartItems, onIncrease, onDecrease, onRemove, onClearCart } = props;

  const handleCheckout = () => {
    // Perform dummy checkout process
    toast.success('🎉 Checkout Successful! Thank you for ordering from Ecom.');
    onClearCart(false); // clear cart quietly (toast is already handled here)
  };

  // Render empty cart layout
  if (cartItems.length === 0) {
    return (
      <div className="container">
        <div className="cart-empty-container">
          <div className="cart-empty-icon"><i className="fa-solid fa-cart-shopping"></i></div>
          <h2 className="cart-empty-title">Your Cart is Empty</h2>
          <p className="cart-empty-desc">
            Looks like you haven't added any products to your cart yet. Head back to the shop to find the best deals!
          </p>
          <Link to="/products" className="cart-empty-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="about-header" style={{ margin: '20px 0 30px 0' }}>
        <h1>Shopping Cart</h1>
        <p>Review the products you selected and complete your order.</p>
      </div>

      <div className="cart-layout">
        
        {/* Left Column: Cart Items List */}
        <div className="cart-items-column">
          {/* Map cart items - strictly no key prop */}
          {cartItems.map((item) => (
            <CartItem
              item={item}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
              onRemove={onRemove}
            />
          ))}
        </div>

        {/* Right Column: Order Summary Info */}
        <div className="cart-summary-column">
          <h2 className="summary-title">Order Summary</h2>

          <button onClick={handleCheckout} className="checkout-btn">
            Proceed to Checkout <i className="fa-solid fa-credit-card"></i>
          </button>

          <button onClick={() => onClearCart(true)} className="clear-cart-btn">
            <i className="fa-solid fa-trash-can"></i> Clear Shopping Cart
          </button>
        </div>

      </div>
    </div>
  );
}

export default Cart;
