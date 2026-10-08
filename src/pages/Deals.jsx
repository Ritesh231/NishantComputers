import React from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Tag, Sparkles, Percent } from 'lucide-react';

const Deals = () => {
  const dealProducts = products.filter(p => p.isDeal);

  return (
    <div className="min-h-screen bg-bgMain py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-yellowLight via-cyanSoft to-yellowLight rounded-3xl p-8 sm:p-12 mb-10 border border-amber-200/80 shadow-md">
          <div className="flex items-center gap-2 text-xs font-extrabold text-coralDark uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4 fill-coralDark" />
            <span>FESTIVE DISCOUNTS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-textMain mb-3">Exclusive Laptop Deals</h1>
          <p className="text-sm text-textSec max-w-xl">
            Save up to 35% on high-end laptops. Instant bank discounts, exchange offers, and no-cost EMI available on select models.
          </p>
        </div>

        {/* Product Deals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dealProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Deals;
