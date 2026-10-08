import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Flame, Award, Wrench } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-red-50 via-white to-red-50/50 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-borderColor">
      
      {/* Decorative Glow Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-red-200/50 rounded-full filter blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-100/60 rounded-full filter blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
           
          {/* Left Hero Column */}
          <div className="lg:col-span-7 flex flex-col items-start ">
            
            {/* Store Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 border border-red-200 shadow-xs mb-6 text-xs font-bold text-red-600">
              <Flame className="w-4 h-4 fill-red-600 text-red-600" />
              <span>OFFICIAL STORE • AUTHORIZED LAPTOP & DESKTOP DEALER</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
              Nishad Computer <br />
              <span className="text-red-600">
                & Laptop Shop
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 font-normal mb-8 max-w-xl leading-relaxed">
              Find top-quality consumer & business laptops, gaming setups, assembled desktops, and expert motherboard repair services with Pan-India delivery.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <Link
                to="/laptops"
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 hover:shadow-red-600/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                Explore All Laptops
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/deals"
                className="bg-white hover:bg-red-50 text-slate-800 hover:text-red-600 font-bold px-8 py-4 rounded-xl text-sm border border-red-200 transition-all duration-200 flex items-center justify-center gap-2 shadow-xs"
              >
                Special Offers & Deals
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-slate-200/80 w-full grid grid-cols-3 gap-4 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>Pan India Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>100% Genuine Models</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>Expert Laptop Repair</span>
              </div>
            </div>

          </div>

          {/* Right Hero Column - Large Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
                  
              {/* Hero Image Card */}
              <div className="relative bg-white w-96 rounded-3xl p-4 shadow-2xl border border-red-100">
                <img
                  src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1000&auto=format&fit=crop"
                  alt="Nishad Computers Featured Laptop"
                  className="w-full h-96 object-contain rounded-2xl transition-transform duration-500 hover:scale-[1.02]"
                />
                 
                {/* Floating Highlight Card */}
                <div className="absolute -bottom-5 -left-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-red-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-red-600/30">
                    ★ 4.9
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Highly Rated Shop</h4>
                    <p className="text-[11px] text-slate-500">Trusted by 1000+ Customers</p>
                  </div>
                </div>

                {/* Floating Badge Tag */}
                <div className="absolute -top-3 -right-3 bg-red-600 text-white font-extrabold text-xs px-4 py-2 rounded-xl shadow-lg border border-white">
                  Best Price Guarantee
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
