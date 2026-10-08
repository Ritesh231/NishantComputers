import React from 'react';
import { Truck, ShieldCheck, RotateCcw, Headphones } from 'lucide-react';

const TrustSection = () => {
  const trustFeatures = [
    {
      icon: <Truck className="w-6 h-6 text-cyanPrimary" />,
      title: "Free & Fast Delivery",
      description: "Express shipping on all orders over ₹50,000 across India"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-cyanPrimary" />,
      title: "Secure Checkout",
      description: "256-bit encrypted transactions with zero payment hassle"
    },
    {
      icon: <RotateCcw className="w-6 h-6 text-cyanPrimary" />,
      title: "Easy 14-Day Returns",
      description: "No-questions-asked doorstep return & instant refunds"
    },
    {
      icon: <Headphones className="w-6 h-6 text-cyanPrimary" />,
      title: "24/7 Warranty Support",
      description: "Dedicated laptop technical assistance & brand support"
    }
  ];

  return (
    <section className="bg-bgSec py-10 border-b border-borderColor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustFeatures.map((feature, idx) => (
            <div 
              key={idx}
              className="bg-white p-5 rounded-2xl border border-borderColor flex items-center gap-4 transition-all duration-200 hover:shadow-md hover:border-cyanPrimary/30"
            >
              <div className="w-12 h-12 rounded-xl bg-cyanSoft/60 flex items-center justify-center shrink-0">
                {feature.icon}
              </div>
              <div>
                <h4 className="text-sm font-bold text-textMain mb-0.5">{feature.title}</h4>
                <p className="text-xs text-textSec leading-snug">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
