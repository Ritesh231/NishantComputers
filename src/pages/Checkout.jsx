import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatPrice, setStorageItem } from '../utils/storage';
import { ShieldCheck, Truck, CreditCard, Check, ArrowRight, MapPin, Building, Phone, User, Smartphone, QrCode } from 'lucide-react';

const Checkout = () => {
  const { cartItems, cartSubtotal, shippingFee, taxAmount, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [step, setStep] = useState(1); // 1: Address, 2: Delivery, 3: Payment
  const [paymentMethod, setPaymentMethod] = useState('upi');

  // Address Form State
  const [formData, setFormData] = useState({
    fullName: 'Ritesh Sharma',
    mobile: '9876543210',
    email: 'ritesh@example.com',
    address: '42 Tech Park Avenue, HSR Layout Sector 1',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560102'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const mockOrderId = `LP-2026-${Math.floor(10000 + Math.random() * 90000)}`;
    const mockOrder = {
      id: mockOrderId,
      date: new Date().toISOString().split('T')[0],
      items: cartItems,
      total: cartTotal,
      shippingAddress: formData,
      paymentMethod: paymentMethod.toUpperCase(),
      status: 'Confirmed'
    };

    // Save mock order
    const existingOrders = JSON.parse(localStorage.getItem('lapnova_orders') || '[]');
    setStorageItem('lapnova_orders', [mockOrder, ...existingOrders]);

    clearCart();
    navigate(`/order-success?orderId=${mockOrderId}`);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold text-textMain mb-4">No items to checkout</h2>
        <button onClick={() => navigate('/laptops')} className="bg-cyanPrimary text-white font-bold text-xs px-6 py-3 rounded-xl">
          Browse Laptops
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bgMain py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Step Indicator Bar */}
        <div className="mb-10 max-w-2xl mx-auto">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-borderColor -z-0 -translate-y-1/2" />
            
            <div className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full font-bold text-xs ${step >= 1 ? 'bg-cyanPrimary text-white shadow-md' : 'bg-white border-2 border-borderColor text-textSec'}`}>
              1
            </div>
            <div className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full font-bold text-xs ${step >= 2 ? 'bg-cyanPrimary text-white shadow-md' : 'bg-white border-2 border-borderColor text-textSec'}`}>
              2
            </div>
            <div className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full font-bold text-xs ${step >= 3 ? 'bg-cyanPrimary text-white shadow-md' : 'bg-white border-2 border-borderColor text-textSec'}`}>
              3
            </div>
          </div>
          <div className="flex justify-between text-xs font-bold text-textSec mt-2 px-1">
            <span className={step >= 1 ? 'text-cyanPrimary' : ''}>Shipping Address</span>
            <span className={step >= 2 ? 'text-cyanPrimary' : ''}>Delivery Speed</span>
            <span className={step >= 3 ? 'text-cyanPrimary' : ''}>Payment Method</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Form Step Area */}
          <div className="lg:col-span-8 bg-white border border-borderColor rounded-3xl p-6 sm:p-8 shadow-sm">
            
            {/* Step 1: Address */}
            {step === 1 && (
              <div>
                <h2 className="text-xl font-extrabold text-textMain mb-6 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-cyanPrimary" />
                  1. Shipping & Contact Information
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="font-bold text-textMain block mb-1.5">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-borderColor rounded-xl p-3 focus:outline-none focus:border-cyanPrimary"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-bold text-textMain block mb-1.5">Mobile Number</label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-borderColor rounded-xl p-3 focus:outline-none focus:border-cyanPrimary"
                      required
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="font-bold text-textMain block mb-1.5">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-borderColor rounded-xl p-3 focus:outline-none focus:border-cyanPrimary"
                      required
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="font-bold text-textMain block mb-1.5">Flat, House No., Building, Street Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-borderColor rounded-xl p-3 focus:outline-none focus:border-cyanPrimary"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-bold text-textMain block mb-1.5">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-borderColor rounded-xl p-3 focus:outline-none focus:border-cyanPrimary"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-bold text-textMain block mb-1.5">State</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-borderColor rounded-xl p-3 focus:outline-none focus:border-cyanPrimary"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-bold text-textMain block mb-1.5">Pincode</label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-borderColor rounded-xl p-3 focus:outline-none focus:border-cyanPrimary"
                      required
                    />
                  </div>
                </div>

                <button
                  onClick={() => setStep(2)}
                  className="mt-6 bg-cyanPrimary hover:bg-cyan-600 text-white font-bold text-xs px-8 py-3.5 rounded-xl shadow-md flex items-center gap-2"
                >
                  Continue to Delivery Speed <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Step 2: Delivery Option */}
            {step === 2 && (
              <div>
                <h2 className="text-xl font-extrabold text-textMain mb-6 flex items-center gap-2">
                  <Truck className="w-5 h-5 text-cyanPrimary" />
                  2. Select Delivery Option
                </h2>

                <div className="space-y-4 mb-8">
                  <label className="flex items-center justify-between p-4 rounded-2xl border-2 border-cyanPrimary bg-cyanSoft/20 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input type="radio" name="delivery" defaultChecked className="accent-cyanPrimary w-4 h-4" />
                      <div>
                        <h4 className="text-xs font-bold text-textMain">Standard Express Delivery (FREE)</h4>
                        <p className="text-[11px] text-textSec">Delivered in 2-3 business days via BlueDart Air</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-600">FREE</span>
                  </label>

                  <label className="flex items-center justify-between p-4 rounded-2xl border border-borderColor bg-white cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input type="radio" name="delivery" className="accent-cyanPrimary w-4 h-4" />
                      <div>
                        <h4 className="text-xs font-bold text-textMain">Same-Day Rush Shipping</h4>
                        <p className="text-[11px] text-textSec">Guaranteed delivery by 9:00 PM today (Select metro cities)</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-textMain">₹499</span>
                  </label>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setStep(1)}
                    className="bg-slate-100 text-textMain font-bold text-xs px-6 py-3.5 rounded-xl"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="bg-cyanPrimary hover:bg-cyan-600 text-white font-bold text-xs px-8 py-3.5 rounded-xl shadow-md flex items-center gap-2"
                  >
                    Continue to Payment <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Payment Method */}
            {step === 3 && (
              <div>
                <h2 className="text-xl font-extrabold text-textMain mb-6 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-cyanPrimary" />
                  3. Select Payment Method
                </h2>

                <div className="space-y-3 mb-8">
                  <label 
                    onClick={() => setPaymentMethod('upi')}
                    className={`flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                      paymentMethod === 'upi' ? 'border-cyanPrimary bg-cyanSoft/20' : 'border-borderColor'
                    }`}
                  >
                    <QrCode className="w-5 h-5 text-cyanPrimary shrink-0" />
                    <div className="flex-1">
                      <h4 className="text-xs font-bold text-textMain">UPI / QR (GPay, PhonePe, Paytm)</h4>
                      <p className="text-[11px] text-textSec">Instant payment via any UPI application</p>
                    </div>
                  </label>

                  <label 
                    onClick={() => setPaymentMethod('card')}
                    className={`flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                      paymentMethod === 'card' ? 'border-cyanPrimary bg-cyanSoft/20' : 'border-borderColor'
                    }`}
                  >
                    <CreditCard className="w-5 h-5 text-cyanPrimary shrink-0" />
                    <div className="flex-1">
                      <h4 className="text-xs font-bold text-textMain">Credit / Debit Card</h4>
                      <p className="text-[11px] text-textSec">Visa, MasterCard, RuPay, American Express</p>
                    </div>
                  </label>

                  <label 
                    onClick={() => setPaymentMethod('cod')}
                    className={`flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                      paymentMethod === 'cod' ? 'border-cyanPrimary bg-cyanSoft/20' : 'border-borderColor'
                    }`}
                  >
                    <Truck className="w-5 h-5 text-cyanPrimary shrink-0" />
                    <div className="flex-1">
                      <h4 className="text-xs font-bold text-textMain">Cash on Delivery (COD)</h4>
                      <p className="text-[11px] text-textSec">Pay cash or UPI upon doorstep delivery</p>
                    </div>
                  </label>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setStep(2)}
                    className="bg-slate-100 text-textMain font-bold text-xs px-6 py-3.5 rounded-xl"
                  >
                    Back
                  </button>
                  <button
                    onClick={handlePlaceOrder}
                    className="flex-1 bg-cyanPrimary hover:bg-cyan-600 text-white font-bold text-xs py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Check className="w-4 h-4" /> Place Order ({formatPrice(cartTotal)})
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Right Column - Order Summary Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-white border border-borderColor rounded-3xl p-6 shadow-sm sticky top-28">
              <h3 className="text-sm font-extrabold text-textMain mb-4 pb-3 border-b border-borderColor">Items in Order ({cartItems.length})</h3>

              <div className="space-y-3 max-h-60 overflow-y-auto pr-1 mb-6">
                {cartItems.map(item => (
                  <div key={item.id} className="flex gap-3 items-center">
                    <img src={item.image} alt={item.name} className="w-12 h-12 object-contain bg-slate-50 border border-borderColor rounded-lg p-1 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-textMain line-clamp-1">{item.name}</h4>
                      <p className="text-[10px] text-textSec">Qty: {item.quantity}</p>
                    </div>
                    <span className="text-xs font-bold text-textMain">{formatPrice(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 text-xs text-textSec pt-4 border-t border-borderColor mb-4">
                <div className="flex justify-between"><span>Subtotal</span><span>{formatPrice(cartSubtotal)}</span></div>
                <div className="flex justify-between"><span>Shipping</span><span className="text-emerald-600 font-bold">FREE</span></div>
                <div className="flex justify-between"><span>GST (18%)</span><span>{formatPrice(taxAmount)}</span></div>
                <div className="flex justify-between text-sm font-extrabold text-textMain pt-2 border-t border-borderColor">
                  <span>Total</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
              </div>

              <div className="bg-bgSec p-3 rounded-xl border border-borderColor text-[11px] text-textSec flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyanPrimary shrink-0" />
                <span>Client Demonstration Mode (No Real Money Charged)</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Checkout;
