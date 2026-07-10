import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NotFound.css';

function NotFound() {
  return (
    <div className="container">
      <div className="notfound-container">
        <div className="notfound-code">404</div>
        <h2 className="notfound-title">Page Not Found</h2>
        <p className="notfound-desc">
          Oops! The page you are looking for doesn't exist, has been removed, or is temporarily unavailable.
        </p>
        <Link to="/" className="notfound-home-btn">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
