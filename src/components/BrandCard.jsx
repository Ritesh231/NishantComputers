import React from 'react';
import { Link } from 'react-router-dom';
import { brands } from '../data/products';
import { ArrowRight } from 'lucide-react';

const BrandCard = () => {
  return (
    <section className="py-16 bg-bgSec border-b border-borderColor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold text-cyanPrimary uppercase tracking-wider">Official Partners</span>
            <h2 className="text-3xl font-extrabold text-textMain mt-1">Shop by Brand</h2>
          </div>
          <Link
            to="/laptops"
            className="text-xs font-bold text-cyanPrimary hover:text-cyan-700 flex items-center gap-1.5"
          >
            View All Brands <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {brands.map((brand) => (
            <Link
              key={brand.name}
              to={`/laptops?brand=${encodeURIComponent(brand.name)}`}
              className="bg-white rounded-2xl p-4 border border-borderColor text-center flex flex-col items-center justify-center transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-cyanPrimary/40 group"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-xl mb-3 flex items-center justify-center border border-slate-100 group-hover:bg-cyanSoft/40 transition-colors">
                <span className="font-extrabold text-sm text-textMain group-hover:text-cyanPrimary transition-colors">
                  {brand.name}
                </span>
              </div>
              <span className="text-xs font-semibold text-textMain group-hover:text-cyanPrimary">{brand.name}</span>
              <span className="text-[10px] text-textSec">{brand.count} Models</span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BrandCard;
