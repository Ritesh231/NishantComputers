import React from 'react';
import { Link } from 'react-router-dom';
import { User, Package, Heart, MapPin, Settings, ShieldCheck, Mail, Phone, LogOut } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('lapnova_user')) || {
    name: "Ritesh Sharma",
    email: "ritesh@example.com"
  };

  const { wishlistItems } = useWishlist();

  return (
    <div className="min-h-screen bg-bgMain py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Profile Header Box */}
        <div className="bg-white border border-borderColor rounded-3xl p-6 sm:p-8 shadow-xs mb-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-20 h-20 bg-gradient-to-tr from-cyanPrimary to-teal-400 rounded-full flex items-center justify-center text-white text-2xl font-black shadow-md">
            {user.name.charAt(0)}
          </div>
          <div className="text-center sm:text-left flex-1">
            <h1 className="text-2xl font-extrabold text-textMain">{user.name}</h1>
            <p className="text-xs text-textSec mt-0.5">{user.email} • Premier Member</p>
            <span className="inline-block bg-yellowLight text-amber-900 font-bold text-[10px] px-3 py-1 rounded-full mt-2 border border-amber-200">
              Gold Tier Rewards Member
            </span>
          </div>
          <Link
            to="/login"
            className="bg-slate-100 hover:bg-slate-200 text-textMain font-bold text-xs px-5 py-2.5 rounded-xl transition-colors flex items-center gap-1.5"
          >
            <LogOut className="w-3.5 h-3.5" /> Sign Out
          </Link>
        </div>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <Link to="/orders" className="bg-white border border-borderColor rounded-2xl p-6 shadow-xs hover:border-cyanPrimary/40 hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-xl bg-cyanSoft flex items-center justify-center text-cyanPrimary mb-4 group-hover:bg-cyanPrimary group-hover:text-white transition-colors">
              <Package className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-textMain mb-1">My Orders</h3>
            <p className="text-xs text-textSec">Track active laptop shipments, view invoices and order history.</p>
          </Link>

          <Link to="/wishlist" className="bg-white border border-borderColor rounded-2xl p-6 shadow-xs hover:border-cyanPrimary/40 hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-coralDark mb-4 group-hover:bg-coralDark group-hover:text-white transition-colors">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-textMain mb-1">Wishlist ({wishlistItems.length})</h3>
            <p className="text-xs text-textSec">Access your saved laptops and manage notifications.</p>
          </Link>

          <div className="bg-white border border-borderColor rounded-2xl p-6 shadow-xs hover:border-cyanPrimary/40 hover:shadow-md transition-all group cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-textMain mb-1">Saved Addresses</h3>
            <p className="text-xs text-textSec">Bengaluru, Karnataka - Primary Delivery Destination.</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Profile;
