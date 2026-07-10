import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        
        {/* About column */}
        <div className="footer-col footer-about">
          <h3>E-Shop</h3>
          <p>
            Your ultimate destination for quality items, daily electronics, fashion trends, and beauty cosmetics. We provide top tier support and fast delivery.
          </p>
        </div>

        {/* Quick Links column */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>

          </ul>
        </div>

        {/* Contact info column */}
        <div className="footer-col">
          <h3>Contact Info</h3>
          <ul className="footer-contact-info">
            <li><i className="fa-solid fa-location-dot"></i> 123 E-Commerce St, Tech City</li>
            <li><i className="fa-solid fa-phone"></i> +1 (555) 019-2834</li>
            <li><i className="fa-solid fa-envelope"></i> support@ecom-student.com</li>
          </ul>
        </div>

        {/* Social media column */}
        <div className="footer-col">
          <h3>Follow Us</h3>
          <p style={{ fontSize: '14px', color: '#94a3b8' }}>Stay updated with our latest campaigns and discounts:</p>
          <div className="footer-social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Twitter">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

      </div>

      {/* Copyright Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ecom Inc. Project developed by a React student.</p>
        <div className="footer-bottom-links">
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
