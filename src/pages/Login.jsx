import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Laptop, Lock, Mail, ArrowRight } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('ritesh@example.com');
  const [password, setPassword] = useState('password123');
  const { showToast } = useCart();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('lapnova_user', JSON.stringify({ name: 'Ritesh Sharma', email }));
    showToast("Login successful. Welcome back!");
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
            <h1 className="text-2xl font-extrabold text-textMain">Welcome Back</h1>
            <p className="text-xs text-textSec mt-1">Sign in to manage your LAPNOVA orders and wishlist</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="font-bold text-textMain block mb-1.5">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-borderColor rounded-xl py-3 pl-10 pr-4 text-xs text-textMain focus:outline-none focus:border-cyanPrimary"
                  required
                />
                <Mail className="w-4 h-4 text-textSec absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="font-bold text-textMain block mb-1.5">Password</label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-50 border border-borderColor rounded-xl py-3 pl-10 pr-4 text-xs text-textMain focus:outline-none focus:border-cyanPrimary"
                  required
                />
                <Lock className="w-4 h-4 text-textSec absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div className="flex items-center justify-between py-1">
              <label className="flex items-center gap-2 cursor-pointer text-textSec font-medium">
                <input type="checkbox" defaultChecked className="rounded text-cyanPrimary w-4 h-4" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-cyanPrimary font-bold hover:underline">Forgot Password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-cyanPrimary hover:bg-cyan-600 text-white font-bold py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              Sign In
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="relative my-6 text-center">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-borderColor" /></div>
            <span className="relative bg-white px-3 text-[11px] text-textSec font-medium">Or continue with</span>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-slate-50 border border-borderColor hover:bg-slate-100 text-textMain font-bold py-3 rounded-xl text-xs transition-colors flex items-center justify-center gap-2"
          >
            Google Account
          </button>

          <p className="text-center text-xs text-textSec mt-6">
            Don't have an account?{' '}
            <Link to="/register" className="text-cyanPrimary font-bold hover:underline">Register Now</Link>
          </p>

        </div>

      </div>
    </div>
  );
};

export default Login;
