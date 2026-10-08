import React from 'react';
import { useCart } from '../context/CartContext';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

const Toast = () => {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-short">
      <div className="flex items-center gap-3 bg-textMain text-white px-5 py-3.5 rounded-xl shadow-2xl border border-slate-700 max-w-md">
        <CheckCircle2 className="w-5 h-5 text-cyanPrimary shrink-0" />
        <span className="text-sm font-medium">{toastMessage}</span>
      </div>
    </div>
  );
};

export default Toast;
