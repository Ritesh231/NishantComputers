import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/storage';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck, Heart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartSubtotal, cartSavings, shippingFee, taxAmount, cartTotal } = useCart();
  const { toggleWishlist } = useWishlist();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] bg-bgMain flex flex-col items-center justify-center p-6 text-center">
        <div className="w-24 h-24 bg-cyanSoft rounded-full flex items-center justify-center text-cyanPrimary mb-6">
          <ShoppingBag className="w-12 h-12" />
        </div>
        <h1 className="text-3xl font-extrabold text-textMain mb-2">Your cart is empty</h1>
        <p className="text-sm text-textSec mb-8 max-w-sm">
          Looks like you haven't added any laptops to your cart yet. Explore our latest machines today!
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
        
        <h1 className="text-3xl font-extrabold text-textMain mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Cart Items List */}
          <div className="lg:col-span-8 space-y-4">
            {cartItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-white border border-borderColor rounded-2xl p-5 shadow-xs flex flex-col sm:flex-row items-center gap-6"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-contain rounded-xl bg-slate-50 border border-borderColor p-2 shrink-0"
                />

                {/* Info */}
                <div className="flex-1 min-w-0 text-center sm:text-left">
                  <span className="text-[10px] uppercase font-bold text-cyanPrimary tracking-wider">{item.brand}</span>
                  <h3 className="text-sm font-bold text-textMain line-clamp-1">{item.name}</h3>
                  <p className="text-xs text-textSec mt-0.5">{item.processor} • {item.ram} • {item.storage}</p>
                  
                  <div className="flex items-center justify-center sm:justify-start gap-4 mt-3">
                    <button
                      onClick={() => {
                        toggleWishlist(item);
                        removeFromCart(item.id);
                      }}
                      className="text-xs text-textSec hover:text-coralDark font-medium flex items-center gap-1"
                    >
                      <Heart className="w-3.5 h-3.5" /> Move to Wishlist
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-xs text-slate-400 hover:text-coralDark font-medium flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Remove
                    </button>
                  </div>
                </div>

                {/* Price & Quantity */}
                <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-4">
                  <span className="text-base font-extrabold text-textMain">{formatPrice(item.price * item.quantity)}</span>
                  
                  <div className="flex items-center border border-borderColor rounded-xl bg-slate-50">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-2.5 py-1 text-slate-600 hover:text-black font-bold"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 text-xs font-bold text-textMain">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-2.5 py-1 text-slate-600 hover:text-black font-bold"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4">
            <div className="bg-white border border-borderColor rounded-2xl p-6 shadow-xs sticky top-28">
              <h2 className="text-lg font-bold text-textMain mb-4 pb-3 border-b border-borderColor">Order Summary</h2>

              <div className="space-y-3 text-xs text-textSec mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-textMain">{formatPrice(cartSubtotal)}</span>
                </div>
                {cartSavings > 0 && (
                  <div className="flex justify-between text-coralDark font-semibold">
                    <span>Discount Savings</span>
                    <span>-{formatPrice(cartSavings)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span className="font-semibold text-emerald-600">
                    {shippingFee === 0 ? 'FREE' : formatPrice(shippingFee)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated GST (18%)</span>
                  <span className="font-semibold text-textMain">{formatPrice(taxAmount)}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-borderColor flex justify-between items-baseline mb-6">
                <span className="text-sm font-extrabold text-textMain">Total Payable</span>
                <span className="text-xl font-extrabold text-textMain">{formatPrice(cartTotal)}</span>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                className="w-full bg-cyanPrimary hover:bg-cyan-600 text-white font-bold py-4 rounded-xl text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                Proceed to Checkout
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-textSec">
                <ShieldCheck className="w-4 h-4 text-cyanPrimary" />
                <span>100% Safe & Secure Encrypted Checkout</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Cart;
