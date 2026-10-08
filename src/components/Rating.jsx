import React from 'react';
import { Star } from 'lucide-react';

const Rating = ({ rating, reviews, showCount = true }) => {
  return (
    <div className="flex items-center gap-1.5 text-xs font-medium">
      <div className="flex items-center text-amber-500">
        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
      </div>
      <span className="font-semibold text-textMain">{rating}</span>
      {showCount && reviews && (
        <span className="text-textSec text-[11px]">({reviews.toLocaleString()})</span>
      )}
    </div>
  );
};

export default Rating;
