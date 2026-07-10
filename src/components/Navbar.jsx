import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar(props) {
  const { cartCount } = props;
  
  // Track window width in JS instead of CSS media queries
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth < 768;
      setIsMobile(mobileView);
      if (!mobileView) {
        setIsOpen(false); // Close drawer if resizing to desktop
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar-wrapper">
      <div className="navbar-container">
        
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          E<span>com</span>
        </Link>

        {/* Desktop Navigation Links */}
        {!isMobile && (
          <ul className="navbar-links">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''}>Products</NavLink>
            </li>

          </ul>
        )}

        {/* Action icons (Cart & Toggler) */}
        <div className="navbar-actions">
          <Link to="/cart" className="cart-icon-btn" onClick={closeMenu} aria-label="Cart link">
            <i className="fa-solid fa-cart-shopping"></i>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>

          {/* Hamburger button visible only on mobile width */}
          {isMobile && (
            <button 
              onClick={toggleMenu} 
              className={`menu-toggle-btn ${isOpen ? 'open' : ''}`}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          )}
        </div>

        {/* Mobile Navigation Drawer Overlay */}
        {isMobile && (
          <ul className={`mobile-nav-menu ${isOpen ? 'open' : ''}`}>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
                Products
              </NavLink>
            </li>

          </ul>
        )}

      </div>
    </nav>
  );
}

export default Navbar;
