import React from 'react';
import { Package, Truck, CheckCircle2, Clock, Calendar, ArrowRight } from 'lucide-react';
import { formatPrice } from '../utils/storage';
import { Link } from 'react-router-dom';

const Orders = () => {
  const localOrders = JSON.parse(localStorage.getItem('lapnova_orders') || '[]');

  const defaultMockOrders = [
    {
      id: "LP-2026-10482",
      date: "2026-10-06",
      items: [
        {
          id: 2,
          name: "MacBook Air M3",
          brand: "Apple",
          price: 114900,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop"
        }
      ],
      total: 114900,
      paymentMethod: "UPI",
      status: "Shipped",
      currentStep: 3
    },
    {
      id: "LP-2026-09812",
      date: "2026-09-18",
      items: [
        {
          id: 1,
          name: "ASUS Zenbook 14 OLED",
          brand: "ASUS",
          price: 79999,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=800&auto=format&fit=crop"
        }
      ],
      total: 79999,
      paymentMethod: "CARD",
      status: "Delivered",
      currentStep: 4
    }
  ];

  const orders = localOrders.length > 0 ? localOrders : defaultMockOrders;

  const steps = ["Confirmed", "Packed", "Shipped", "Out for Delivery", "Delivered"];

  return (
    <div className="min-h-screen bg-bgMain py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <span className="text-xs font-bold text-cyanPrimary uppercase tracking-wider">Purchase History</span>
          <h1 className="text-3xl font-extrabold text-textMain mt-1">My Laptop Orders ({orders.length})</h1>
        </div>

        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white border border-borderColor rounded-3xl p-6 sm:p-8 shadow-xs">
              
              {/* Order Top Line */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-borderColor gap-2 mb-6 text-xs">
                <div>
                  <span className="text-textSec font-medium">Order ID: </span>
                  <span className="font-extrabold text-textMain">{order.id}</span>
                  <span className="mx-2 text-slate-300">•</span>
                  <span className="text-textSec">Placed on: {order.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-cyanSoft text-cyanPrimary text-xs font-bold px-3 py-1 rounded-full">
                    Total: {formatPrice(order.total)}
                  </span>
                  <span className="text-textSec font-medium uppercase">{order.paymentMethod}</span>
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-4 mb-8">
                {order.items.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-contain bg-slate-50 border border-borderColor rounded-xl p-1 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-textMain">{item.name}</h4>
                      <p className="text-xs text-textSec">Quantity: {item.quantity}</p>
                    </div>
                    <span className="text-sm font-extrabold text-textMain">{formatPrice(item.price)}</span>
                  </div>
                ))}
              </div>

              {/* Beautiful Order Tracking Timeline */}
              <div className="bg-bgSec rounded-2xl p-6 border border-borderColor">
                <h4 className="text-xs font-bold text-textMain uppercase tracking-wider mb-6">Live Delivery Tracking</h4>
                
                <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  
                  {steps.map((stepName, idx) => {
                    const isCompleted = idx <= (order.currentStep || 2);
                    return (
                      <div key={stepName} className="flex md:flex-col items-center gap-3 md:gap-2 z-10 flex-1">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                          isCompleted ? 'bg-cyanPrimary text-white shadow-md' : 'bg-white border-2 border-borderColor text-textSec'
                        }`}>
                          {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                        </div>
                        <span className={`text-xs font-bold ${isCompleted ? 'text-textMain' : 'text-slate-400'}`}>
                          {stepName}
                        </span>
                      </div>
                    );
                  })}

                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Orders;
