import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import { Heart, ShoppingBag, ArrowRight } from 'lucide-react';

const Wishlist = () => {
  const { wishlistItems } = useWishlist();

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-[70vh] bg-bgMain flex flex-col items-center justify-center p-6 text-center">
        <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center text-coralDark mb-6">
          <Heart className="w-12 h-12 stroke-[1.5]" />
        </div>
        <h1 className="text-3xl font-extrabold text-textMain mb-2">Your wishlist is waiting</h1>
        <p className="text-sm text-textSec mb-8 max-w-sm">
          Save your favorite laptops, compare configurations, and keep track of price drops.
        </p>
        <Link
          to="/laptops"
          className="bg-cyanPrimary hover:bg-cyan-600 text-white font-bold text-xs px-8 py-4 rounded-xl shadow-md transition-all flex items-center gap-2"
        >
          Explore Laptops
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bgMain py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <span className="text-xs font-bold text-coralDark uppercase tracking-wider">Saved Items</span>
          <h1 className="text-3xl font-extrabold text-textMain mt-1">My Saved Laptops ({wishlistItems.length})</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlistItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Wishlist;
