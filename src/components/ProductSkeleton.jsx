import React from 'react';

const ProductSkeleton = ({ count = 8 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div 
          key={i} 
          className="bg-white rounded-2xl p-4 border border-borderColor shadow-sm animate-pulse flex flex-col justify-between h-[420px]"
        >
          <div>
            <div className="w-full h-44 bg-slate-100 rounded-xl mb-4" />
            <div className="h-3 bg-slate-100 rounded w-1/4 mb-2" />
            <div className="h-5 bg-slate-100 rounded w-3/4 mb-3" />
            <div className="h-3 bg-slate-100 rounded w-1/2 mb-4" />
            <div className="flex gap-2 mb-4">
              <div className="h-6 bg-slate-100 rounded-lg w-16" />
              <div className="h-6 bg-slate-100 rounded-lg w-16" />
              <div className="h-6 bg-slate-100 rounded-lg w-16" />
            </div>
          </div>
          <div>
            <div className="h-6 bg-slate-100 rounded w-1/3 mb-4" />
            <div className="h-10 bg-slate-100 rounded-xl w-full" />
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductSkeleton;
