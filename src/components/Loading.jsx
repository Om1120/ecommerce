import React from 'react';

function Loading() {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Loading products, please wait...</p>
    </div>
  );
}

export default Loading;
