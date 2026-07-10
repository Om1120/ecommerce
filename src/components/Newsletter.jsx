import React, { useState } from 'react';
import { toast } from 'react-toastify';
import '../css/Home.css';

function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      toast.warning('Please enter your email address.');
      return;
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    // Simulate successful subscription
    toast.success('Thank you for subscribing to our newsletter! 🎉');
    setEmail('');
  };

  return (
    <div className="newsletter-wrapper">
      <h2 className="newsletter-title">Subscribe to our Newsletter</h2>
      <p className="newsletter-desc">
        Join our mailing list to receive exclusive coupons, new product alerts, and seasonal sale updates.
      </p>
      <form onSubmit={handleSubmit} className="newsletter-form">
        <input
          type="email"
          className="newsletter-input"
          placeholder="Enter your email address..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="newsletter-btn">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
