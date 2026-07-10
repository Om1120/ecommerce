import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';

import NotFound from './pages/NotFound';

function App() {
  // Catalog states
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Cart state initialized from localStorage
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    // load saved items or fall back to empty list
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Fetch catalog on application load
  useEffect(() => {
    axios.get('https://dummyjson.com/products?limit=0')
      .then((res) => {
        setProducts(res.data.products || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Something went wrong while fetching products.');
        setLoading(false);
      });
  }, []);

  // Save cart state changes to LocalStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Helper: Add product to cart
  const addToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // Update item quantity
        toast.success(`Updated ${product.title} quantity to ${existingItem.quantity + quantity}! 🛒`);
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      // Add as new item
      toast.success(`${product.title} added to cart! 🛒`);
      return [
        ...prevItems,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          category: product.category,
          thumbnail: product.thumbnail,
          quantity: quantity
        }
      ];
    });
  };

  // Helper: Remove product from cart
  const removeFromCart = (productId) => {
    const itemToRemove = cartItems.find((item) => item.id === productId);
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    if (itemToRemove) {
      toast.info(`${itemToRemove.title} removed from cart. 🗑️`);
    }
  };

  // Helper: Increase cart item quantity by 1
  const increaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Helper: Decrease cart item quantity by 1 (minimum limit 1)
  const decreaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Helper: Empty the cart
  const clearCart = (showNotification = true) => {
    setCartItems([]);
    if (showNotification) {
      toast.info('Shopping cart cleared! 🧹');
    }
  };

  // Calculate dynamic quantity count for navbar badge
  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        {/* Navigation Bar */}
        <Navbar cartCount={totalCartCount} />
        
        {/* Page Content Routes */}
        <main style={{ flexGrow: 1, paddingBottom: '40px' }}>
          <Routes>
            <Route 
              path="/" 
              element={
                <Home 
                  products={products} 
                  loading={loading} 
                  error={error} 
                  onAddToCart={addToCart} 
                />
              } 
            />
            <Route 
              path="/products" 
              element={
                <Products 
                  products={products} 
                  loading={loading} 
                  error={error} 
                  onAddToCart={addToCart} 
                />
              } 
            />
            <Route 
              path="/products/:id" 
              element={
                <ProductDetails 
                  products={products} 
                  onAddToCart={addToCart} 
                />
              } 
            />
            <Route 
              path="/cart" 
              element={
                <Cart 
                  cartItems={cartItems} 
                  onIncrease={increaseQuantity} 
                  onDecrease={decreaseQuantity} 
                  onRemove={removeFromCart} 
                  onClearCart={clearCart} 
                />
              } 
            />

            
            {/* 404 Fallback page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
        
        {/* Toast Notifications Box */}
        <ToastContainer 
          position="bottom-right" 
          autoClose={3000} 
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

      </div>
    </Router>
  );
}

export default App;
