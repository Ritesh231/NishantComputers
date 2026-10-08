import React, { createContext, useContext, useState, useEffect } from 'react';
import { getStorageItem, setStorageItem } from '../utils/storage';
import { useCart } from './CartContext';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState(() => getStorageItem('lapnova_wishlist', []));
  const { showToast } = useCart();

  useEffect(() => {
    setStorageItem('lapnova_wishlist', wishlistItems);
  }, [wishlistItems]);

  const toggleWishlist = (product) => {
    const exists = wishlistItems.some(item => item.id === product.id);
    if (exists) {
      setWishlistItems(prev => prev.filter(item => item.id !== product.id));
      showToast(`${product.name} removed from wishlist.`);
    } else {
      setWishlistItems(prev => [...prev, product]);
      showToast(`${product.name} added to wishlist.`);
    }
  };

  const isInWishlist = (productId) => {
    return wishlistItems.some(item => item.id === productId);
  };

  return (
    <WishlistContext.Provider value={{
      wishlistItems,
      toggleWishlist,
      isInWishlist
    }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
