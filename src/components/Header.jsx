import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Laptop, 
  Search, 
  Heart, 
  ShoppingCart, 
  User, 
  Menu, 
  X, 
  ChevronRight,
  Sparkles,
  Percent,
  Flame,
  Gamepad2,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { setIsCartOpen, cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/laptops?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Laptops', path: '/laptops' },
    { name: 'Gaming', path: '/laptops?category=Gaming' },
    { name: 'Business', path: '/laptops?category=Business' },
    { name: 'Student', path: '/laptops?category=Student' },
    { name: 'Deals', path: '/deals', badge: 'HOT' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-borderColor shadow-xs">
      {/* Top Banner Notice */}
      <div className="bg-yellowLight py-1.5 text-center text-xs font-medium text-textMain px-4 flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-amber-600 fill-amber-500 shrink-0" />
        <span>Festive Sale Live: Save up to 35% on Premium Intel Ultra & Apple M3 Laptops!</span>
        <Link to="/deals" className="underline font-semibold hover:text-cyanPrimary text-xs hidden sm:inline ml-1">
          Shop Deals &rarr;
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-cyanPrimary flex items-center justify-center text-white shadow-md shadow-red-600/20 group-hover:scale-105 transition-transform">
              <Laptop className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight text-textMain flex items-center gap-1">
                NISHAD <span className="text-cyanPrimary">COMPUTERS</span>
              </span>
              <span className="text-[9px] font-semibold text-textSec tracking-widest uppercase -mt-1">
                Laptop & Computer Shop
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = location.pathname + location.search === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-semibold transition-colors duration-150 flex items-center gap-1.5 py-1 ${
                    isActive ? 'text-cyanPrimary border-b-2 border-cyanPrimary' : 'text-textMain hover:text-cyanPrimary'
                  }`}
                >
                  {link.name}
                  {link.badge && (
                    <span className="bg-coralSoft text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full animate-pulse">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Search Bar */}
          <form 
            onSubmit={handleSearchSubmit} 
            className="hidden md:flex flex-1 max-w-xs xl:max-w-sm relative"
          >
            <input
              type="text"
              placeholder="Search laptops, brands, specs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-borderColor rounded-full py-2 pl-4 pr-10 text-xs text-textMain placeholder-textSec focus:outline-none focus:border-cyanPrimary focus:ring-1 focus:ring-cyanPrimary transition-all"
            />
            <button 
              type="submit" 
              className="absolute right-3 top-1/2 -translate-y-1/2 text-textSec hover:text-cyanPrimary"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* Header Action Icons */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Wishlist Icon */}
            <Link
              to="/wishlist"
              className="relative p-2.5 rounded-full hover:bg-slate-100 text-textMain transition-colors"
              title="Wishlist"
            >
              <Heart className="w-5 h-5 text-textMain hover:text-coralDark transition-colors" />
              {wishlistItems.length > 0 && (
                <span className="absolute top-1 right-1 bg-coralSoft text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            {/* Cart Icon */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full hover:bg-slate-100 text-textMain transition-colors"
              title="Shopping Cart"
            >
              <ShoppingCart className="w-5 h-5 text-textMain hover:text-cyanPrimary transition-colors" />
              {cartItemCount > 0 && (
                <span className="absolute top-1 right-1 bg-cyanPrimary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* User Profile */}
            <Link
              to="/profile"
              className="p-2.5 rounded-full hover:bg-slate-100 text-textMain transition-colors hidden sm:flex"
              title="My Account"
            >
              <User className="w-5 h-5" />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-textMain hover:bg-slate-100 lg:hidden"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="pb-3 md:hidden">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Search laptops, processors, brands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-borderColor rounded-full py-2 pl-4 pr-10 text-xs text-textMain placeholder-textSec"
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-textSec">
              <Search className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-borderColor bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-semibold text-textMain hover:bg-cyanSoft/40 hover:text-cyanPrimary transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            ))}
            <div className="pt-2 border-t border-borderColor flex justify-around">
              <Link
                to="/profile"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 text-xs font-semibold text-textMain py-2"
              >
                <User className="w-4 h-4 text-cyanPrimary" />
                Profile
              </Link>
              <Link
                to="/orders"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 text-xs font-semibold text-textMain py-2"
              >
                <Briefcase className="w-4 h-4 text-cyanPrimary" />
                My Orders
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
