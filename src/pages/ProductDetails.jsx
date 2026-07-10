import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/Loading';
import ProductList from '../components/ProductList';
import '../css/ProductDetails.css';

function ProductDetails(props) {
  const { id } = useParams();
  const { products, onAddToCart } = props;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Fetch individual product details whenever url id changes
  useEffect(() => {
    setLoading(true);
    setError('');
    
    axios.get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
        setQuantity(1); // reset selection count
      })
      .catch((err) => {
        setError(err.message || 'Could not fetch product details.');
        setLoading(false);
      });
  }, [id]);

  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddClick = () => {
    onAddToCart(product, quantity);
  };

  if (loading) {
    return (
      <div className="container">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container" style={{ margin: '40px auto', textAlign: 'center' }}>
        <div className="error-view">
          <h3>Failed to Load Product details</h3>
          <p>{error}</p>
          <Link to="/products" className="retry-btn" style={{ display: 'inline-block', marginTop: '16px' }}>
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  if (!product) return null;

  // Filter related products of same category (excluding current)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const isLowStock = product.stock < 10;

  return (
    <div className="container">
      {/* Back button link */}
      <Link to="/products" style={{ display: 'inline-block', marginBottom: '20px', fontWeight: 600, color: 'var(--primary)' }}>
        <i className="fa-solid fa-arrow-left"></i> Back to all products
      </Link>

      <div className="details-container">
        {/* Left Column: Image showcase */}
        <div className="details-image-col">
          <img src={product.thumbnail} alt={product.title} />
        </div>

        {/* Right Column: Information details */}
        <div className="details-info-col">
          <span className="details-category">{product.category}</span>
          <h1 className="details-title">{product.title}</h1>
          
          <div className="details-meta-row">
            <div className="details-rating">
              <i className="fa-solid fa-star"></i> {product.rating ? product.rating.toFixed(1) : '4.5'} Rating
            </div>
            <div className={`details-stock ${isLowStock ? 'low-stock' : 'in-stock'}`}>
              {isLowStock ? `Low Stock: Only ${product.stock} left` : 'In Stock'}
            </div>
          </div>

          <div className="details-price">${product.price}</div>
          
          <p className="details-desc">{product.description}</p>

          {/* Action elements for Quantity picker and Add Button */}
          <div className="details-action-row">
            <div className="quantity-selector">
              <button onClick={handleDecrease} className="qty-btn" aria-label="Decrease item quantity">
                <i className="fa-solid fa-minus"></i>
              </button>
              <div className="qty-value">{quantity}</div>
              <button onClick={handleIncrease} className="qty-btn" aria-label="Increase item quantity">
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>

            <button onClick={handleAddClick} className="add-to-cart-btn">
              <i className="fa-solid fa-cart-shopping"></i> Add {quantity} to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Related Products Grid */}
      {relatedProducts.length > 0 && (
        <div className="related-section">
          <div className="related-header">
            <h3>Related Products</h3>
          </div>
          <ProductList products={relatedProducts} onAddToCart={onAddToCart} />
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
