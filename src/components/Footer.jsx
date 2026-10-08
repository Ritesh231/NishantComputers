import React from 'react';
import { Link } from 'react-router-dom';
import { Laptop, ShieldCheck, Truck, RotateCcw, Award, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-borderColor pt-16 pb-8 text-textMain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Box */}
        <div className="bg-gradient-to-r from-cyanSoft via-yellowLight to-cyanSoft rounded-3xl p-8 sm:p-10 mb-16 border border-cyanPrimary/10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold text-cyanPrimary uppercase tracking-wider">Stay Connected</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-textMain mt-1 mb-2">
              Get the Latest Laptop Deals & Tech Updates
            </h3>
            <p className="text-sm text-textSec">
              Subscribe to get exclusive discount vouchers, early access to new launch laptops, and expert buying guides.
            </p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-white text-xs font-medium px-4 py-3.5 rounded-xl border border-borderColor focus:outline-none focus:border-cyanPrimary w-full sm:w-72 shadow-xs"
              required
            />
            <button
              type="submit"
              className="bg-cyanPrimary hover:bg-cyan-600 text-white font-bold text-xs px-6 py-3.5 rounded-xl transition-all shadow-md shrink-0 flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-cyanPrimary flex items-center justify-center text-white">
                <Laptop className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-lg font-extrabold tracking-tight text-textMain">
                NISHAD <span className="text-cyanPrimary">COMPUTERS</span>
              </span>
            </Link>
            <p className="text-xs text-textSec leading-relaxed mb-6 max-w-sm">
              Your trusted shop for Consumer Series, Business Laptops, Assembled Desktops & Motherboard Repairing with Pan India Delivery.
            </p>
            <div className="flex gap-4 text-xs text-textSec font-medium">
              <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-cyanPrimary" /> Express Delivery</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-cyanPrimary" /> 100% Genuine</span>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-extrabold text-textMain uppercase tracking-wider mb-4">Shop Categories</h4>
            <ul className="space-y-2.5 text-xs text-textSec font-medium">
              <li><Link to="/laptops" className="hover:text-cyanPrimary transition-colors">All Laptops</Link></li>
              <li><Link to="/laptops?category=Gaming" className="hover:text-cyanPrimary transition-colors">Gaming Laptops</Link></li>
              <li><Link to="/laptops?category=Business" className="hover:text-cyanPrimary transition-colors">Business Laptops</Link></li>
              <li><Link to="/laptops?category=Student" className="hover:text-cyanPrimary transition-colors">Student Laptops</Link></li>
              <li><Link to="/laptops?category=Creator" className="hover:text-cyanPrimary transition-colors">Creator Workstations</Link></li>
              <li><Link to="/deals" className="hover:text-cyanPrimary transition-colors">Exclusive Deals</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs font-extrabold text-textMain uppercase tracking-wider mb-4">Customer Care</h4>
            <ul className="space-y-2.5 text-xs text-textSec font-medium">
              <li><Link to="/orders" className="hover:text-cyanPrimary transition-colors">Track Your Order</Link></li>
              <li><a href="#" className="hover:text-cyanPrimary transition-colors">Shipping & Delivery Policy</a></li>
              <li><a href="#" className="hover:text-cyanPrimary transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-cyanPrimary transition-colors">Warranty Support</a></li>
              <li><a href="#" className="hover:text-cyanPrimary transition-colors">Buying Guides</a></li>
              <li><a href="#" className="hover:text-cyanPrimary transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-extrabold text-textMain uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5 text-xs text-textSec font-medium">
              <li><a href="#" className="hover:text-cyanPrimary transition-colors">About LAPNOVA</a></li>
              <li><a href="#" className="hover:text-cyanPrimary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-cyanPrimary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyanPrimary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-cyanPrimary transition-colors">Press & News</a></li>
              <li><a href="#" className="hover:text-cyanPrimary transition-colors">Contact Us</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-borderColor pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-textSec">
          <p>© 2026 LAPNOVA Inc. All rights reserved. Power Your Next Big Idea.</p>
          <div className="flex gap-6 font-medium">
            <a href="#" className="hover:text-cyanPrimary">Privacy</a>
            <a href="#" className="hover:text-cyanPrimary">Terms</a>
            <a href="#" className="hover:text-cyanPrimary">Cookies</a>
            <a href="#" className="hover:text-cyanPrimary">Security</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
