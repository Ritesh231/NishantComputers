import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/products';
import { Gamepad2, Briefcase, GraduationCap, Palette, Zap, ArrowUpRight } from 'lucide-react';

const CategoryCard = () => {
  const getCategoryIcon = (iconName) => {
    const iconClass = "w-6 h-6 text-red-600 group-hover:text-white transition-colors duration-300";
    switch (iconName) {
      case 'Gamepad2': return <Gamepad2 className={iconClass} />;
      case 'Briefcase': return <Briefcase className={iconClass} />;
      case 'GraduationCap': return <GraduationCap className={iconClass} />;
      case 'Palette': return <Palette className={iconClass} />;
      case 'Zap': return <Zap className={iconClass} />;
      default: return <Briefcase className={iconClass} />;
    }
  };

  return (
    <section className="py-16 bg-bgMain border-b border-borderColor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold text-cyanPrimary uppercase tracking-wider">Browse Collections</span>
            <h2 className="text-3xl font-extrabold text-textMain mt-1">Find Your Perfect Laptop</h2>
          </div>
          <p className="text-xs text-textSec max-w-md">
            Tailored configurations whether you're gaming at 240Hz, editing 4K footage, or managing enterprise business tasks.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/laptops?category=${encodeURIComponent(cat.name)}`}
              className="group relative bg-white rounded-2xl border border-borderColor overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-xl bg-red-100/80 flex items-center justify-center group-hover:bg-cyanPrimary transition-colors duration-300">
                    {getCategoryIcon(cat.icon)}
                  </div>
                  <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-textSec group-hover:bg-cyanPrimary group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-textMain mb-1.5 group-hover:text-cyanPrimary transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-textSec leading-relaxed">
                  {cat.description}
                </p>
              </div>

              {/* Category Thumbnail */}
              <div className="relative h-32 overflow-hidden bg-slate-50 mt-2 border-t border-slate-100">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CategoryCard;
