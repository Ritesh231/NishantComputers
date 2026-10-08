import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Toast from './components/Toast';

import Home from './pages/Home';
import Laptops from './pages/Laptops';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import Wishlist from './pages/Wishlist';
import Deals from './pages/Deals';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Orders from './pages/Orders';

import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen bg-bgMain text-textMain selection:bg-cyanSoft selection:text-cyanPrimary">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/laptops" element={<Laptops />} />
                <Route path="/laptops/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-success" element={<OrderSuccess />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/deals" element={<Deals />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/orders" element={<Orders />} />
              </Routes>
            </main>
            <Footer />
            <CartDrawer />
            <Toast />
          </div>
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
