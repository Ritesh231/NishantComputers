import React from 'react';
import { Filter, X, RotateCcw } from 'lucide-react';
import { brands, categories } from '../data/products';

const FilterSidebar = ({ filters, setFilters, clearFilters, isMobile = false, onClose }) => {
  const processors = [
    "Intel Core i5",
    "Intel Core i7",
    "Intel Core Ultra 7",
    "Intel Core Ultra 9",
    "AMD Ryzen 7",
    "Apple M Series"
  ];

  const rams = ["8GB", "16GB", "32GB", "64GB"];
  const storages = ["256GB", "512GB", "1TB", "2TB"];
  const displays = ['13.6-inch', '14-inch', '15.6-inch', '16-inch', '17.3-inch'];

  const handleCheckboxChange = (category, value) => {
    setFilters(prev => {
      const current = prev[category] || [];
      const updated = current.includes(value)
        ? current.filter(item => item !== value)
        : [...current, value];
      return { ...prev, [category]: updated };
    });
  };

  return (
    <div className={`bg-white border border-borderColor rounded-2xl p-5 ${isMobile ? 'border-none p-0' : 'shadow-xs'}`}>
      
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-borderColor mb-5">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-cyanPrimary" />
          <h3 className="text-sm font-bold text-textMain">Filter Products</h3>
        </div>
        <button
          onClick={clearFilters}
          className="text-xs text-coralDark hover:underline font-semibold flex items-center gap-1"
        >
          <RotateCcw className="w-3 h-3" /> Reset
        </button>
      </div>

      <div className="space-y-6">
        
        {/* Price Slider */}
        <div>
          <label className="text-xs font-bold text-textMain block mb-2">
            Max Price: ₹{filters.maxPrice.toLocaleString()}
          </label>
          <input
            type="range"
            min="40000"
            max="350000"
            step="5000"
            value={filters.maxPrice}
            onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: Number(e.target.value) }))}
            className="w-full accent-cyanPrimary cursor-pointer"
          />
          <div className="flex justify-between text-[11px] text-textSec font-medium mt-1">
            <span>₹40,000</span>
            <span>₹3,500,000</span>
          </div>
        </div>

        {/* Categories */}
        <div className="pt-4 border-t border-borderColor">
          <h4 className="text-xs font-bold text-textMain uppercase tracking-wider mb-3">Category</h4>
          <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
            {categories.map(cat => (
              <label key={cat.id} className="flex items-center gap-2.5 text-xs text-textSec hover:text-textMain cursor-pointer">
                <input
                  type="checkbox"
                  checked={(filters.categories || []).includes(cat.name)}
                  onChange={() => handleCheckboxChange('categories', cat.name)}
                  className="rounded text-cyanPrimary focus:ring-cyanPrimary w-4 h-4"
                />
                <span>{cat.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Brands */}
        <div className="pt-4 border-t border-borderColor">
          <h4 className="text-xs font-bold text-textMain uppercase tracking-wider mb-3">Brand</h4>
          <div className="space-y-2 max-h-44 overflow-y-auto pr-1">
            {brands.map(brand => (
              <label key={brand.name} className="flex items-center gap-2.5 text-xs text-textSec hover:text-textMain cursor-pointer">
                <input
                  type="checkbox"
                  checked={(filters.brands || []).includes(brand.name)}
                  onChange={() => handleCheckboxChange('brands', brand.name)}
                  className="rounded text-cyanPrimary focus:ring-cyanPrimary w-4 h-4"
                />
                <span>{brand.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* RAM */}
        <div className="pt-4 border-t border-borderColor">
          <h4 className="text-xs font-bold text-textMain uppercase tracking-wider mb-3">RAM Capacity</h4>
          <div className="grid grid-cols-2 gap-2">
            {rams.map(ram => (
              <button
                key={ram}
                onClick={() => handleCheckboxChange('ram', ram)}
                className={`py-1.5 px-3 rounded-lg text-xs font-semibold border transition-all ${
                  (filters.ram || []).includes(ram)
                    ? 'bg-cyanPrimary text-white border-cyanPrimary'
                    : 'bg-slate-50 text-textMain border-borderColor hover:border-cyanPrimary/40'
                }`}
              >
                {ram}
              </button>
            ))}
          </div>
        </div>

        {/* Storage */}
        <div className="pt-4 border-t border-borderColor">
          <h4 className="text-xs font-bold text-textMain uppercase tracking-wider mb-3">Storage</h4>
          <div className="grid grid-cols-2 gap-2">
            {storages.map(storage => (
              <button
                key={storage}
                onClick={() => handleCheckboxChange('storage', storage)}
                className={`py-1.5 px-3 rounded-lg text-xs font-semibold border transition-all ${
                  (filters.storage || []).includes(storage)
                    ? 'bg-cyanPrimary text-white border-cyanPrimary'
                    : 'bg-slate-50 text-textMain border-borderColor hover:border-cyanPrimary/40'
                }`}
              >
                {storage}
              </button>
            ))}
          </div>
        </div>

        {/* Processors */}
        <div className="pt-4 border-t border-borderColor">
          <h4 className="text-xs font-bold text-textMain uppercase tracking-wider mb-3">Processor Series</h4>
          <div className="space-y-2">
            {processors.map(proc => (
              <label key={proc} className="flex items-center gap-2.5 text-xs text-textSec hover:text-textMain cursor-pointer">
                <input
                  type="checkbox"
                  checked={(filters.processors || []).includes(proc)}
                  onChange={() => handleCheckboxChange('processors', proc)}
                  className="rounded text-cyanPrimary focus:ring-cyanPrimary w-4 h-4"
                />
                <span>{proc}</span>
              </label>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default FilterSidebar;
