import React from 'react';
import Hero from '../components/Hero';
import TrustSection from '../components/TrustSection';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import BrandCard from '../components/BrandCard';
import { products } from '../data/products';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame, Gamepad2, Briefcase, Sparkles, Tag } from 'lucide-react';

const Home = () => {
  const trendingProducts = products.filter(p => p.isFeatured).slice(0, 8);
  const gamingProducts = products.filter(p => p.category === 'Gaming').slice(0, 4);
  const businessProducts = products.filter(p => p.category === 'Business').slice(0, 4);
  const newArrivals = products.filter(p => p.isNew).slice(0, 4);

  return (
    <div className="min-h-screen bg-bgMain">
      
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust Badges */}
      <TrustSection />

      {/* 3. Categories */}
      <CategoryCard />

      {/* 4. Trending Products */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-coralDark bg-red-50 px-2.5 py-0.5 rounded-full mb-2">
              <Flame className="w-3.5 h-3.5 fill-coralDark" />
              <span>POPULAR SELECTIONS</span>
            </div>
            <h2 className="text-3xl font-extrabold text-textMain">Trending Laptops</h2>
          </div>
          <Link
            to="/laptops"
            className="text-xs font-bold text-cyanPrimary hover:text-cyan-700 flex items-center gap-1.5"
          >
            Explore All 20+ Laptops <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 5. Promotional Deals Banner Section */}
      <section className="my-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-yellowLight via-cyanSoft to-yellowLight border border-amber-200/80 p-8 sm:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <span className="bg-coralSoft text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                LIMITED TIME OFFER
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-textMain mt-3 mb-4">
                Upgrade Your Setup & <br /> Save up to 35%
              </h2>
              <p className="text-sm text-textSec mb-6 max-w-md">
                Get high performance OLED laptops, powerful RTX 40-series gaming machines, and lightweight ultrabooks at unbeatable prices.
              </p>
              <Link
                to="/deals"
                className="inline-flex items-center gap-2 bg-coralDark hover:bg-red-600 text-white font-bold text-xs px-7 py-3.5 rounded-xl shadow-md transition-all hover:scale-105"
              >
                <Tag className="w-4 h-4" />
                Shop Deals Now
              </Link>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=800&auto=format&fit=crop"
                  alt="Deals Showcase"
                  className="w-full max-w-sm rounded-2xl shadow-xl border-4 border-white transform hover:rotate-1 transition-transform"
                />
                <div className="absolute -top-3 -right-3 bg-cyanPrimary text-white font-black text-xs p-3 rounded-full shadow-lg border-2 border-white">
                  35% OFF
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Shop By Brand */}
      <BrandCard />

      {/* 7. Built for Gamers */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 bg-purple-50 px-2.5 py-0.5 rounded-full mb-2">
              <Gamepad2 className="w-3.5 h-3.5" />
              <span>HIGH REFRESH RATE & RTX GRAPHICS</span>
            </div>
            <h2 className="text-3xl font-extrabold text-textMain">Built for Gamers</h2>
          </div>
          <Link
            to="/laptops?category=Gaming"
            className="text-xs font-bold text-cyanPrimary hover:text-cyan-700 flex items-center gap-1.5"
          >
            View All Gaming Laptops <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gamingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 8. Business Laptops */}
      <section className="py-16 bg-bgSec border-t border-b border-borderColor">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full mb-2">
                <Briefcase className="w-3.5 h-3.5" />
                <span>EXECUTIVE PRODUCTIVITY</span>
              </div>
              <h2 className="text-3xl font-extrabold text-textMain">Work Without Limits</h2>
            </div>
            <Link
              to="/laptops?category=Business"
              className="text-xs font-bold text-cyanPrimary hover:text-cyan-700 flex items-center gap-1.5"
            >
              View Business Laptops <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 9. New Arrivals */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cyanPrimary bg-cyanSoft px-2.5 py-0.5 rounded-full mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>JUST LAUNCHED</span>
            </div>
            <h2 className="text-3xl font-extrabold text-textMain">New Arrivals</h2>
          </div>
          <Link
            to="/laptops"
            className="text-xs font-bold text-cyanPrimary hover:text-cyan-700 flex items-center gap-1.5"
          >
            Browse All <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
