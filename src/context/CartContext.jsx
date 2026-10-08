import React, { createContext, useContext, useState, useEffect } from 'react';
import { getStorageItem, setStorageItem } from '../utils/storage';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => getStorageItem('lapnova_cart', []));
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    setStorageItem('lapnova_cart', cartItems);
  }, [cartItems]);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const addToCart = (product, quantity = 1, selectedSpecs = {}) => {
    setCartItems(prevItems => {
      const existingIndex = prevItems.findIndex(item => item.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        return updated;
      } else {
        return [...prevItems, { ...product, quantity, selectedSpecs }];
      }
    });
    showToast(`${product.name} added to cart.`);
    setIsCartOpen(true);
  };

  const removeFromCart = (productId) => {
    const item = cartItems.find(i => i.id === productId);
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    if (item) {
      showToast(`${item.name} removed from cart.`);
    }
  };

  const updateQuantity = (productId, delta) => {
    setCartItems(prevItems => {
      return prevItems.map(item => {
        if (item.id === productId) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      });
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartSubtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const cartSavings = cartItems.reduce((acc, item) => acc + ((item.originalPrice - item.price) * item.quantity), 0);
  const shippingFee = cartSubtotal > 50000 || cartItems.length === 0 ? 0 : 499;
  const taxAmount = Math.round(cartSubtotal * 0.18);
  const cartTotal = cartSubtotal + shippingFee;

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      isCartOpen,
      setIsCartOpen,
      cartSubtotal,
      cartSavings,
      shippingFee,
      taxAmount,
      cartTotal,
      toastMessage,
      showToast
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
