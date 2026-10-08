import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Package, Truck, Calendar, Home } from 'lucide-react';
import { formatPrice } from '../utils/storage';

const OrderSuccess = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId') || 'LP-2026-10482';

  return (
    <div className="min-h-screen bg-bgMain py-16 flex items-center justify-center">
      <div className="max-w-xl w-full mx-auto px-4">
        
        <div className="bg-white border border-borderColor rounded-3xl p-8 sm:p-10 text-center shadow-xl relative overflow-hidden">
          
          {/* Top Banner Gradient */}
          <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-cyanPrimary via-yellowLight to-coralSoft" />

          {/* Success Check Icon */}
          <div className="w-20 h-20 bg-cyanSoft rounded-full flex items-center justify-center text-cyanPrimary mx-auto mb-6 shadow-inner animate-bounce-short">
            <CheckCircle2 className="w-12 h-12" />
          </div>

          <span className="text-xs font-bold text-cyanPrimary uppercase tracking-wider bg-cyanSoft/50 px-3 py-1 rounded-full">
            Payment Successful
          </span>

          <h1 className="text-3xl font-extrabold text-textMain mt-3 mb-2">Order Confirmed!</h1>
          <p className="text-xs text-textSec mb-6 leading-relaxed">
            Thank you for shopping with <strong className="text-textMain">LAPNOVA</strong>. We have received your laptop order and are preparing it for express dispatch.
          </p>

          {/* Order Brief Info */}
          <div className="bg-bgSec rounded-2xl p-5 border border-borderColor text-left text-xs space-y-3 mb-8">
            <div className="flex justify-between items-center pb-2 border-b border-borderColor">
              <span className="text-textSec font-medium">Order Number:</span>
              <span className="font-extrabold text-cyanPrimary">{orderId}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-textSec font-medium">Estimated Delivery:</span>
              <span className="font-bold text-textMain flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-cyanPrimary" /> Within 2-3 Business Days
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-textSec font-medium">Shipping Carrier:</span>
              <span className="font-semibold text-textMain flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-cyanPrimary" /> BlueDart Priority Air
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              to="/orders"
              className="w-full bg-cyanPrimary hover:bg-cyan-600 text-white font-bold text-xs py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Package className="w-4 h-4" /> Track Order
            </Link>
            <Link
              to="/"
              className="w-full bg-slate-100 hover:bg-slate-200 text-textMain font-bold text-xs py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" /> Continue Shopping
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};

export default OrderSuccess;
