import React, { useState } from 'react';
import { X, Calendar, Clock, Users, MessageSquare, Utensils, CheckCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function BookingModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [bookingType, setBookingType] = useState('Table Reservation'); // Table Reservation / Event Catering
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('7266911274');
  const [guests, setGuests] = useState('2');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('18:30');
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let text = `👋 *NEW ${bookingType.toUpperCase()} INQUIRY - Tandoor Chowk*\n\n`;
    text += `👤 *Name:* ${name || 'Guest'}\n`;
    text += `📞 *Phone:* ${phone}\n`;
    text += `👥 *Number of Guests:* ${guests} People\n`;
    text += `📅 *Date:* ${date || 'Today/Upcoming'}\n`;
    text += `⏰ *Time:* ${time}\n`;
    if (note) {
      text += `📝 *Special Requirement:* ${note}\n`;
    }
    text += `📍 *Restaurant Location:* Chandauli, Uttar Pradesh\n\nPlease confirm availability!`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-zinc-900 border border-amber-500/40 rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-amber-400 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
            <Calendar className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-serif-fancy text-zinc-100">Book Table or Catering</h3>
            <p className="text-xs text-amber-400 font-semibold">Tandoor Chowk • Chandauli UP</p>
          </div>
        </div>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <CheckCircle className="w-14 h-14 text-emerald-400 mx-auto" />
            <h4 className="text-lg font-bold text-zinc-100">Reservation Request Sent!</h4>
            <p className="text-xs text-zinc-300">
              Your inquiry has been opened on WhatsApp hotline <strong>7266911274</strong>. Our manager will reply shortly to confirm.
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold px-6 py-2.5 rounded-xl text-xs"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Booking Type Selector */}
            <div className="grid grid-cols-2 gap-2">
              {['Table Reservation', 'Event Catering'].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setBookingType(type)}
                  className={`py-2 rounded-xl text-xs font-bold transition-all ${
                    bookingType === type
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
              <label className="text-[11px] font-semibold text-zinc-400">Full Name:</label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-500"
              />
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-zinc-400">Phone Number:</label>
              <input
                type="tel"
                required
                placeholder="7266911274"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-500"
              />
            </div>

            {/* Guests & Time */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-zinc-400">No. of Guests:</label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-zinc-100 focus:outline-none focus:border-amber-500"
                >
                  {[1, 2, 3, 4, 5, 6, 8, 10, '15+ Party'].map((g) => (
                    <option key={g} value={g}>{g} {typeof g === 'number' ? 'Guests' : ''}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-zinc-400">Preferred Time:</label>
                <input
                  type="time"
                  required
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-zinc-100 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            {/* Date */}
            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-zinc-400">Date:</label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2 text-xs text-zinc-100 focus:outline-none focus:border-amber-500"
              />
            </div>

            {/* Special Request */}
            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-zinc-400">Special Notes:</label>
              <input
                type="text"
                placeholder="e.g. Birthday decoration, corner seating..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-500"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:brightness-110 text-white font-bold py-3.5 rounded-xl text-xs shadow-lg transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Send Reservation Request on WhatsApp</span>
            </button>

          </form>
        )}

      </div>
    </div>
  );
}
