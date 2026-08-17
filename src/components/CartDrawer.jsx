import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageSquare, ShoppingBag, MapPin, User, Phone as PhoneIcon, Utensils, CheckCircle, ArrowRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  if (!isOpen) return null;

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('7266911274');
  const [address, setAddress] = useState('Chandauli, Uttar Pradesh');
  const [orderType, setOrderType] = useState('Delivery'); // Delivery, Takeaway, Dine-in
  const [kitchenNote, setKitchenNote] = useState('');
  const [orderSent, setOrderSent] = useState(false);

  // Subtotal calculation
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = orderType === 'Delivery' ? (subtotal >= 150 || subtotal === 0 ? 0 : 25) : 0;
  const grandTotal = subtotal + deliveryFee;

  // Format WhatsApp Order Message
  const handleWhatsAppCheckout = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) return;

    let message = `👋 *NEW ORDER - Tandoor Chowk*\n\n`;
    message += `👤 *Customer Name:* ${customerName || 'Valued Guest'}\n`;
    message += `📞 *Customer Phone:* ${customerPhone || '7266911274'}\n`;
    message += `🛵 *Order Type:* ${orderType}\n`;
    message += `📍 *Location/Address:* ${address || 'Chandauli, Uttar Pradesh'}\n\n`;
    message += `📋 *ORDERED DISHES & ITEMS:*\n`;

    cartItems.forEach((item, index) => {
      let opts = '';
      if (item.selectedOptions) {
        const optionVals = Object.values(item.selectedOptions).join(', ');
        if (optionVals) opts += ` (${optionVals})`;
      }
      if (item.specialInstruction) {
        opts += ` [Note: ${item.specialInstruction}]`;
      }
      message += `${index + 1}. *${item.quantity}x ${item.name}*${opts} - ₹${item.price * item.quantity}\n`;
    });

    message += `\n💵 *Subtotal:* ₹${subtotal}\n`;
    if (orderType === 'Delivery') {
      message += `🛵 *Delivery Charges:* ${deliveryFee === 0 ? 'FREE' : '₹' + deliveryFee}\n`;
    }
    message += `💰 *GRAND TOTAL:* *₹${grandTotal}*\n`;

    if (kitchenNote) {
      message += `\n📝 *Kitchen Note:* ${kitchenNote}\n`;
    }

    message += `\nPlease confirm my order and share estimated preparation/delivery time. Thank you!`;

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
    setOrderSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-zinc-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-zinc-900 border-l border-amber-500/30 text-zinc-100 shadow-2xl flex flex-col justify-between relative">
          
          {/* Cart Header */}
          <div className="p-5 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h2 className="text-lg font-bold font-serif-fancy text-zinc-100">Your Order Cart</h2>
                <p className="text-xs text-amber-400 font-semibold">{cartItems.length} dish items selected</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-amber-400 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Body */}
          {cartItems.length === 0 ? (
            <div className="p-8 text-center flex-1 flex flex-col items-center justify-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center">
                <ShoppingBag className="w-10 h-10 text-zinc-600" />
              </div>
              <h3 className="text-lg font-bold text-zinc-300">Your cart is empty</h3>
              <p className="text-xs text-zinc-500 max-w-xs">
                Explore our delicious Kulhad Masala Chai, Tandoori Paneer Tikka, and Snacks to build your order!
              </p>
              <button
                onClick={onClose}
                className="mt-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold px-6 py-2.5 rounded-xl text-xs shadow-lg transition-colors"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto p-5 space-y-6">
              
              {/* Item List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-zinc-400 pb-1 border-b border-zinc-800">
                  <span className="font-semibold">Items in Cart</span>
                  <button
                    onClick={onClearCart}
                    className="text-xs text-red-400 hover:underline flex items-center gap-1"
                  >
                    <Trash2 className="w-3 h-3" /> Clear All
                  </button>
                </div>

                {cartItems.map((item, idx) => (
                  <div
                    key={`${item.id}-${idx}`}
                    className="bg-zinc-950 border border-zinc-800/80 rounded-xl p-3.5 flex items-center justify-between gap-3 shadow"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-lg object-cover bg-zinc-900 border border-zinc-800"
                    />

                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-zinc-100 truncate">{item.name}</h4>
                      
                      {/* Options preview */}
                      {item.selectedOptions && (
                        <p className="text-[10px] text-amber-400/90 font-medium truncate">
                          {Object.values(item.selectedOptions).join(', ')}
                        </p>
                      )}
                      
                      <p className="text-xs font-bold text-amber-400 mt-1">₹{item.price * item.quantity}</p>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-lg px-2 py-1">
                      <button
                        onClick={() => onUpdateQuantity(idx, item.quantity - 1)}
                        className="text-zinc-400 hover:text-amber-400 p-0.5"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-amber-400 w-3 text-center">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                        className="text-zinc-400 hover:text-amber-400 p-0.5"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Trash item */}
                    <button
                      onClick={() => onRemoveItem(idx)}
                      className="text-zinc-500 hover:text-red-400 p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Order Options & Checkout Form */}
              <form onSubmit={handleWhatsAppCheckout} className="space-y-4 pt-4 border-t border-zinc-800">
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <User className="w-4 h-4" /> Delivery & Customer Details
                </h3>

                {/* Order Type Tabs */}
                <div className="grid grid-cols-3 gap-2">
                  {['Delivery', 'Takeaway', 'Dine-in'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setOrderType(type)}
                      className={`py-2 rounded-lg text-xs font-bold transition-all ${
                        orderType === type
                          ? 'bg-amber-500 text-zinc-950 shadow-md'
                          : 'bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                {/* Name */}
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-zinc-400">Your Name:</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-500"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-zinc-400">Mobile Phone Number:</label>
                  <div className="relative">
                    <PhoneIcon className="w-3.5 h-3.5 text-amber-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 7266911274"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-9 pr-3 py-2 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                {/* Address in Chandauli */}
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-zinc-400">
                    {orderType === 'Delivery' ? 'Delivery Address & Landmark in Chandauli:' : 'Table No. / Note:'}
                  </label>
                  <div className="relative">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 absolute left-3 top-2.5" />
                    <textarea
                      rows={2}
                      required
                      placeholder="e.g. House No. 45, Main Market, Chandauli, UP"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-9 pr-3 py-2 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-500 resize-none"
                    />
                  </div>
                </div>

                {/* Kitchen Note */}
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-zinc-400">Special Instructions:</label>
                  <input
                    type="text"
                    placeholder="e.g. Pack chai tightly in kulhad, extra mint chutney"
                    value={kitchenNote}
                    onChange={(e) => setKitchenNote(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-500"
                  />
                </div>

                {/* Price Breakdown */}
                <div className="bg-zinc-950 p-3.5 rounded-xl border border-zinc-800 space-y-2 text-xs">
                  <div className="flex justify-between text-zinc-400">
                    <span>Items Subtotal</span>
                    <span className="text-zinc-200 font-semibold">₹{subtotal}</span>
                  </div>
                  {orderType === 'Delivery' && (
                    <div className="flex justify-between text-zinc-400">
                      <span>Chandauli Delivery Fee</span>
                      <span className="text-amber-400 font-semibold">
                        {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm font-bold text-zinc-100 pt-2 border-t border-zinc-800">
                    <span>Grand Total</span>
                    <span className="text-amber-400 font-extrabold text-base">₹{grandTotal}</span>
                  </div>
                </div>

                {/* Submit WhatsApp Order Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold py-3.5 rounded-xl text-sm shadow-xl shadow-emerald-900/40 transition-all active:scale-[0.98]"
                >
                  <MessageSquare className="w-5 h-5 fill-white" />
                  <span>Send Order to WhatsApp (7266911274)</span>
                </button>

                <p className="text-[10px] text-center text-zinc-500">
                  ⚡ Clicking will format your full order and open WhatsApp directly with Tandoor Chowk hotline <strong>+91 7266911274</strong>.
                </p>

              </form>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
