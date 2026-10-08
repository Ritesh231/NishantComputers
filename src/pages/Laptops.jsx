import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import MobileFilterDrawer from '../components/MobileFilterDrawer';
import ProductSkeleton from '../components/ProductSkeleton';
import { Filter, SlidersHorizontal, Grid, List, Search, X } from 'lucide-react';

const Laptops = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [sortBy, setSortBy] = useState('featured');

  // Filter State
  const [filters, setFilters] = useState({
    maxPrice: 350000,
    categories: searchParams.get('category') ? [searchParams.get('category')] : [],
    brands: searchParams.get('brand') ? [searchParams.get('brand')] : [],
    ram: [],
    storage: [],
    processors: []
  });

  // Sync URL search params
  useEffect(() => {
    const cat = searchParams.get('category');
    const bnd = searchParams.get('brand');
    const q = searchParams.get('search');

    if (cat || bnd || q) {
      setFilters(prev => ({
        ...prev,
        categories: cat ? [cat] : prev.categories,
        brands: bnd ? [bnd] : prev.brands
      }));
      if (q) setSearchQuery(q);
    }
  }, [searchParams]);

  // Simulate realistic loading state
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [filters, sortBy, searchQuery]);

  const clearFilters = () => {
    setFilters({
      maxPrice: 350000,
      categories: [],
      brands: [],
      ram: [],
      storage: [],
      processors: []
    });
    setSearchQuery('');
    setSearchParams({});
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesBrand = product.brand.toLowerCase().includes(q);
        const matchesCategory = product.category.toLowerCase().includes(q);
        const matchesProc = product.processor.toLowerCase().includes(q);
        if (!matchesName && !matchesBrand && !matchesCategory && !matchesProc) return false;
      }

      // Price
      if (product.price > filters.maxPrice) return false;

      // Categories
      if (filters.categories.length > 0 && !filters.categories.includes(product.category)) return false;

      // Brands
      if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) return false;

      // RAM
      if (filters.ram.length > 0 && !filters.ram.includes(product.ram)) return false;

      // Storage
      if (filters.storage.length > 0 && !filters.storage.includes(product.storage)) return false;

      // Processors
      if (filters.processors.length > 0) {
        const matchesProc = filters.processors.some(p => product.processor.toLowerCase().includes(p.toLowerCase()));
        if (!matchesProc) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [filters, sortBy, searchQuery]);

  return (
    <div className="min-h-screen bg-bgMain py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title & Breadcrumb */}
        <div className="mb-8">
          <span className="text-xs font-bold text-cyanPrimary uppercase tracking-wider">Catalog</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-textMain mt-1">Explore Laptops</h1>
          <p className="text-sm text-textSec mt-1">
            Compare specs, prices, and high-performance configurations across top brands.
          </p>
        </div>

        {/* Top Controls Bar */}
        <div className="bg-white border border-borderColor rounded-2xl p-4 mb-8 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search bar inside listing */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search by laptop name, processor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-borderColor rounded-xl py-2 pl-4 pr-10 text-xs text-textMain focus:outline-none focus:border-cyanPrimary"
            />
            {searchQuery ? (
              <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-textSec">
                <X className="w-4 h-4" />
              </button>
            ) : (
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-textSec" />
            )}
          </div>

          <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-4">
            
            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 bg-slate-100 text-textMain font-bold text-xs px-4 py-2.5 rounded-xl border border-borderColor"
            >
              <SlidersHorizontal className="w-4 h-4 text-cyanPrimary" />
              Filters
            </button>

            {/* Sort By Dropdown */}
            <div className="flex items-center gap-2 text-xs font-semibold text-textMain">
              <span className="text-textSec hidden sm:inline">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-50 border border-borderColor text-textMain rounded-xl py-2 px-3 text-xs font-semibold focus:outline-none focus:border-cyanPrimary cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest Arrivals</option>
              </select>
            </div>

          </div>
        </div>

        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block lg:col-span-3 sticky top-28">
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              clearFilters={clearFilters}
            />
          </div>

          {/* Product Grid Area */}
          <div className="lg:col-span-9">
            
            {/* Active Filter Chips */}
            {(filters.categories.length > 0 || filters.brands.length > 0 || searchQuery) && (
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-xs text-textSec font-medium">Active filters:</span>
                {searchQuery && (
                  <span className="bg-cyanSoft text-cyanPrimary text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    "{searchQuery}"
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setSearchQuery('')} />
                  </span>
                )}
                {filters.categories.map(c => (
                  <span key={c} className="bg-yellowLight text-amber-800 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    {c}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setFilters(p => ({ ...p, categories: p.categories.filter(x => x !== c) }))} />
                  </span>
                ))}
                {filters.brands.map(b => (
                  <span key={b} className="bg-slate-100 text-textMain text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    {b}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setFilters(p => ({ ...p, brands: p.brands.filter(x => x !== b) }))} />
                  </span>
                ))}
                <button onClick={clearFilters} className="text-xs text-coralDark font-bold hover:underline ml-2">
                  Clear All
                </button>
              </div>
            )}

            {/* Results Counter */}
            <div className="mb-4 text-xs text-textSec font-semibold">
              Showing <span className="text-textMain font-bold">{filteredProducts.length}</span> of {products.length} laptops
            </div>

            {/* Products List or Skeleton or Empty State */}
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProductSkeleton count={6} />
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-borderColor shadow-xs">
                <div className="w-16 h-16 bg-red-50 text-coralDark rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-extrabold text-textMain mb-2">No Laptops Found</h3>
                <p className="text-xs text-textSec mb-6 max-w-sm mx-auto">
                  Try adjusting your search criteria, raising max price, or clearing selected filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="bg-cyanPrimary text-white text-xs font-bold px-6 py-3 rounded-xl shadow-md hover:bg-cyan-600 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}

          </div>

        </div>

      </div>

      {/* Mobile Drawer */}
      <MobileFilterDrawer
        isOpen={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
        filters={filters}
        setFilters={setFilters}
        clearFilters={clearFilters}
      />
    </div>
  );
};

export default Laptops;
