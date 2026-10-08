import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Trash2, ShoppingBag, ArrowRight, Plus, Minus } from 'lucide-react';
import { formatPrice } from '../utils/storage';
import { useNavigate } from 'react-router-dom';

const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity, cartSubtotal } = useCart();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-textMain/40 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-borderColor">
          
          {/* Header */}
          <div className="p-5 border-b border-borderColor flex items-center justify-between bg-bgSec">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-cyanPrimary" />
              <h2 className="text-lg font-bold text-textMain">Your Shopping Cart</h2>
              <span className="bg-cyanSoft text-cyanPrimary text-xs font-bold px-2 py-0.5 rounded-full">
                {cartItems.reduce((a, b) => a + b.quantity, 0)}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-lg text-textSec hover:text-textMain hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-borderColor">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <div className="w-20 h-20 bg-cyanSoft/50 rounded-full flex items-center justify-center text-cyanPrimary mb-4">
                  <ShoppingBag className="w-10 h-10" />
                </div>
                <h3 className="text-lg font-bold text-textMain mb-1">Your cart is empty</h3>
                <p className="text-sm text-textSec mb-6">Discover our latest powerful laptops and start shopping.</p>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate('/laptops');
                  }}
                  className="bg-cyanPrimary text-white text-sm font-semibold px-6 py-2.5 rounded-xl hover:bg-cyan-600 transition-colors shadow-md"
                >
                  Explore Laptops
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="py-4 flex gap-4 items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-contain rounded-lg border border-borderColor p-1 bg-slate-50 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-textMain line-clamp-1">{item.name}</h4>
                    <p className="text-[11px] text-textSec mb-2">{item.processor} • {item.ram}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-textMain">{formatPrice(item.price)}</span>
                      
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-borderColor rounded-lg bg-slate-50">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 hover:bg-slate-200 text-textMain rounded-l-lg transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-semibold text-textMain">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 hover:bg-slate-200 text-textMain rounded-r-lg transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-slate-400 hover:text-coralDark p-1 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-borderColor bg-bgSec">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-textSec font-medium">Subtotal</span>
                <span className="text-lg font-bold text-textMain">{formatPrice(cartSubtotal)}</span>
              </div>
              <p className="text-xs text-slate-500 mb-4">Taxes and shipping calculated at checkout.</p>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate('/cart');
                  }}
                  className="w-full bg-white border border-borderColor text-textMain hover:bg-slate-100 font-semibold py-3 rounded-xl text-xs transition-colors text-center"
                >
                  View Cart
                </button>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate('/checkout');
                  }}
                  className="w-full bg-cyanPrimary hover:bg-cyan-600 text-white font-semibold py-3 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  Checkout
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
