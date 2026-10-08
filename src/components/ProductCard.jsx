import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, ShoppingCart, Cpu, HardDrive, MemoryStick } from 'lucide-react';
import { formatPrice } from '../utils/storage';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import Rating from './Rating';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const isWishlisted = isInWishlist(product.id);

  return (
    <div className="group relative bg-white rounded-2xl border border-borderColor p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between h-full">
      {/* Top Badges & Wishlist */}
      <div className="flex justify-between items-start mb-2">
        <div className="flex flex-col gap-1">
          {product.discount > 0 && (
            <span className="bg-coralSoft text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
              {product.discount}% OFF
            </span>
          )}
          {product.isNew && (
            <span className="bg-cyanSoft text-cyanPrimary text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-cyanPrimary/20">
              NEW
            </span>
          )}
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className={`p-2 rounded-full transition-all duration-200 ${
            isWishlisted 
              ? 'bg-red-50 text-coralDark scale-110' 
              : 'bg-slate-50 text-textSec hover:text-coralSoft hover:bg-red-50'
          }`}
          aria-label="Wishlist"
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-coralDark' : ''}`} />
        </button>
      </div>

      {/* Product Image */}
      <div 
        onClick={() => navigate(`/laptops/${product.id}`)}
        className="cursor-pointer overflow-hidden rounded-xl mb-4 bg-slate-50 p-3 flex items-center justify-center h-48 relative group"
      >
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Product Content */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center text-xs text-textSec font-medium mb-1">
            <span className="uppercase tracking-wider font-semibold text-cyanPrimary">{product.brand}</span>
            <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[10px] font-medium">{product.category}</span>
          </div>

          <h3 
            onClick={() => navigate(`/laptops/${product.id}`)}
            className="font-semibold text-textMain text-sm mb-2 line-clamp-2 hover:text-cyanPrimary cursor-pointer transition-colors"
          >
            {product.name}
          </h3>

          <div className="mb-3">
            <Rating rating={product.rating} reviews={product.reviews} />
          </div>

          {/* Quick Specs Chips */}
          <div className="flex flex-wrap gap-1.5 mb-4 text-[11px] text-textSec">
            <span className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded border border-slate-100 font-medium">
              <Cpu className="w-3 h-3 text-cyanPrimary shrink-0" /> {product.processor}
            </span>
            <span className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded border border-slate-100 font-medium">
              <MemoryStick className="w-3 h-3 text-cyanPrimary shrink-0" /> {product.ram}
            </span>
            <span className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded border border-slate-100 font-medium">
              <HardDrive className="w-3 h-3 text-cyanPrimary shrink-0" /> {product.storage}
            </span>
          </div>
        </div>

        {/* Pricing & Add to Cart */}
        <div>
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-lg font-bold text-textMain">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-xs text-slate-400 line-through font-normal">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          <button
            onClick={() => addToCart(product)}
            className="w-full bg-cyanPrimary hover:bg-cyan-600 text-white font-medium text-xs py-2.5 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md active:scale-95"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
