import React from 'react';
import { X, Check } from 'lucide-react';
import FilterSidebar from './FilterSidebar';

const MobileFilterDrawer = ({ isOpen, onClose, filters, setFilters, clearFilters }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-textMain/50 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-x-0 bottom-0 max-h-[85vh] bg-white rounded-t-3xl shadow-2xl flex flex-col justify-between">
        
        {/* Header */}
        <div className="p-5 border-b border-borderColor flex items-center justify-between">
          <h3 className="text-base font-bold text-textMain">Filter Laptops</h3>
          <button onClick={onClose} className="p-1 rounded-full text-textSec hover:bg-slate-100">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Body */}
        <div className="p-5 overflow-y-auto flex-1">
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            clearFilters={clearFilters}
            isMobile={true}
          />
        </div>

        {/* Footer buttons */}
        <div className="p-4 border-t border-borderColor bg-slate-50 flex gap-3">
          <button
            onClick={clearFilters}
            className="w-1/3 py-3 rounded-xl border border-borderColor bg-white text-xs font-bold text-textMain text-center"
          >
            Clear All
          </button>
          <button
            onClick={onClose}
            className="w-2/3 py-3 rounded-xl bg-cyanPrimary text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md"
          >
            <Check className="w-4 h-4" /> Apply Filters
          </button>
        </div>

      </div>
    </div>
  );
};

export default MobileFilterDrawer;
