import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Laptop, Lock, Mail, User, Phone, ArrowRight } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: 'Ritesh Sharma',
    email: 'ritesh@example.com',
    mobile: '9876543210',
    password: 'password123',
    confirmPassword: 'password123'
  });

  const { showToast } = useCart();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('lapnova_user', JSON.stringify({ name: formData.fullName, email: formData.email }));
    showToast("Registration successful. Welcome to LAPNOVA!");
    navigate('/profile');
  };

  return (
    <div className="min-h-screen bg-bgMain py-16 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto px-4">
        
        <div className="bg-white border border-borderColor rounded-3xl p-8 shadow-xl">
          
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-cyanPrimary rounded-2xl flex items-center justify-center text-white mx-auto mb-3 shadow-md">
              <Laptop className="w-6 h-6 stroke-[2.2]" />
            </div>
            <h1 className="text-2xl font-extrabold text-textMain">Create Account</h1>
            <p className="text-xs text-textSec mt-1">Join LAPNOVA to unlock VIP laptop deals</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="font-bold text-textMain block mb-1.5">Full Name</label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData(p => ({ ...p, fullName: e.target.value }))}
                  className="w-full bg-slate-50 border border-borderColor rounded-xl py-3 pl-10 pr-4 text-xs text-textMain focus:outline-none focus:border-cyanPrimary"
                  required
                />
                <User className="w-4 h-4 text-textSec absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="font-bold text-textMain block mb-1.5">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                  className="w-full bg-slate-50 border border-borderColor rounded-xl py-3 pl-10 pr-4 text-xs text-textMain focus:outline-none focus:border-cyanPrimary"
                  required
                />
                <Mail className="w-4 h-4 text-textSec absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="font-bold text-textMain block mb-1.5">Mobile Number</label>
              <div className="relative">
                <input
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) => setFormData(p => ({ ...p, mobile: e.target.value }))}
                  className="w-full bg-slate-50 border border-borderColor rounded-xl py-3 pl-10 pr-4 text-xs text-textMain focus:outline-none focus:border-cyanPrimary"
                  required
                />
                <Phone className="w-4 h-4 text-textSec absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="font-bold text-textMain block mb-1.5">Password</label>
              <div className="relative">
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData(p => ({ ...p, password: e.target.value }))}
                  className="w-full bg-slate-50 border border-borderColor rounded-xl py-3 pl-10 pr-4 text-xs text-textMain focus:outline-none focus:border-cyanPrimary"
                  required
                />
                <Lock className="w-4 h-4 text-textSec absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-cyanPrimary hover:bg-cyan-600 text-white font-bold py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              Create Account
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="text-center text-xs text-textSec mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-cyanPrimary font-bold hover:underline">Log In</Link>
          </p>

        </div>

      </div>
    </div>
  );
};

export default Register;
