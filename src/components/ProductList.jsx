import React from 'react';
import ProductCard from './ProductCard';
import '../css/Product.css';

function ProductList(props) {
  const { products, onAddToCart } = props;

  // If there are no products matching the search/filter
  if (products.length === 0) {
    return (
      <div className="empty-view">
        <h3>No Products Found</h3>
        <p>We couldn't find any products matching your selection. Try clearing search filters.</p>
      </div>
    );
  }

  return (
    <div className="products-grid">
      {/* Map products - strictly no key prop */}
      {products.map((item) => (
        <ProductCard product={item} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

export default ProductList;
