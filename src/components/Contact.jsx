import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, MessageSquare, ChevronDown, ChevronUp, Navigation, Send } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(0);
  const [quickName, setQuickName] = useState('');
  const [quickMsg, setQuickMsg] = useState('');

  const faqs = [
    {
      q: 'How do I place an order via WhatsApp?',
      a: 'Simply browse our menu, add your favorite Kulhad Chai & Tandoori snacks to the cart, enter your Chandauli address, and click "Send Order to WhatsApp". It will format your bill and connect directly to hotline 7266911274!'
    },
    {
      q: 'What are your delivery areas in Chandauli?',
      a: 'We deliver throughout Chandauli town, Main Market Road, Railway Station vicinity, and nearby residential colonies. Express delivery usually takes 20-30 minutes.'
    },
    {
      q: 'Are all your dishes 100% Vegetarian?',
      a: 'Yes! Tandoor Chowk is a 100% pure vegetarian restaurant. We prepare all food in clean, hygienic kitchens using pure Amul butter and fresh ingredients.'
    },
    {
      q: 'Can I book tables or party catering in advance?',
      a: 'Absolutely! You can click "Book Table" in the header or call/WhatsApp us directly at 7266911274 for birthday parties, family gatherings, or office tea snacks catering.'
    }
  ];

  const handleSendQuickMessage = (e) => {
    e.preventDefault();
    if (!quickMsg) return;
    const text = encodeURIComponent(`👋 Hi Tandoor Chowk! Message from ${quickName || 'Guest'}:\n\n${quickMsg}`);
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">
              Visit Us in Chandauli UP
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-fancy text-zinc-100">
            Get in <span className="gold-gradient-text font-fancy">Touch & Location</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Have a question, feedback, or want to order over the phone? Contact us anytime!
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: Address */}
          <div className="glass-card rounded-2xl p-6 text-center space-y-3 border-amber-500/30 hover:border-amber-500/60 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 mx-auto flex items-center justify-center">
              <MapPin className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-base font-bold text-zinc-100">Restaurant Address</h3>
            <p className="text-xs text-zinc-300 leading-relaxed font-medium">
              {RESTAURANT_INFO.address}
            </p>
            <span className="inline-block text-[11px] text-amber-400 font-semibold bg-amber-500/10 px-3 py-1 rounded-full">
              Chandauli, Uttar Pradesh
            </span>
          </div>

          {/* Card 2: Phone Hotline */}
          <div className="glass-card rounded-2xl p-6 text-center space-y-3 border-amber-500/30 hover:border-amber-500/60 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 mx-auto flex items-center justify-center">
              <Phone className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-base font-bold text-zinc-100">Phone & WhatsApp</h3>
            <p className="text-xs text-zinc-300">
              Direct Hotline: <a href={`tel:${RESTAURANT_INFO.phone}`} className="text-amber-400 font-bold hover:underline">{RESTAURANT_INFO.phone}</a>
            </p>
            <div className="pt-1">
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2 rounded-xl transition-colors shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 3: Opening Hours */}
          <div className="glass-card rounded-2xl p-6 text-center space-y-3 border-amber-500/30 hover:border-amber-500/60 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 mx-auto flex items-center justify-center">
              <Clock className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-base font-bold text-zinc-100">Working Hours</h3>
            <p className="text-xs text-zinc-300">
              Open Every Day: <strong className="text-amber-400">{RESTAURANT_INFO.openingHours}</strong>
            </p>
            <span className="inline-block text-[11px] text-emerald-400 font-semibold bg-emerald-950 border border-emerald-500/40 px-3 py-1 rounded-full">
              🟢 Currently Open for Orders
            </span>
          </div>

        </div>

        {/* FAQ & Direct Inquiry Form Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left 7 Cols: Accordion FAQs */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-2xl font-bold font-serif-fancy text-zinc-100 mb-4">
              Frequently Asked Questions
            </h3>

            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-zinc-900/90 border border-zinc-800 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-zinc-200 hover:text-amber-400 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-amber-400 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-zinc-500 flex-shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-zinc-400 leading-relaxed border-t border-zinc-800/80 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right 5 Cols: Quick Inquiry Box */}
          <div className="lg:col-span-5 bg-zinc-900 border border-amber-500/40 rounded-2xl p-6 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold font-serif-fancy text-zinc-100">
              Send Direct Message to Hotline
            </h3>
            <p className="text-xs text-zinc-400">
              Fill this quick message form to connect instantly with Tandoor Chowk management via WhatsApp (<strong>7266911274</strong>).
            </p>

            <form onSubmit={handleSendQuickMessage} className="space-y-3">
              <div>
                <label className="text-[11px] font-semibold text-zinc-400">Your Name:</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={quickName}
                  onChange={(e) => setQuickName(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2 text-xs text-zinc-100 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-zinc-400">Message / Requirement:</label>
                <textarea
                  rows={4}
                  required
                  placeholder="e.g. Do you have bulk discount for party catering tomorrow?"
                  value={quickMsg}
                  onChange={(e) => setQuickMsg(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2 text-xs text-zinc-100 focus:outline-none focus:border-amber-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-zinc-950 font-bold py-3 rounded-xl text-xs shadow-lg hover:brightness-110 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Submit to WhatsApp (7266911274)</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
