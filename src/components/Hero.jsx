import React from 'react';
import heroImage from '../assets/hero.png';
import { Flame, Coffee, Phone, MessageSquare, ArrowRight, Star, MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function Hero({ onExploreMenu }) {
  return (
    <section id="hero" className="relative pt-36 md:pt-44 pb-24 md:pb-32 overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-transparent border border-amber-500/40 rounded-full px-5 py-2 backdrop-blur-md animate-pulse-glow">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-extrabold text-amber-300 tracking-widest uppercase">
                Chandauli's Favorite Kulhad Chai & Tandoori Hub
              </span>
            </div>

            {/* Fancy Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif-fancy tracking-tight leading-[1.15] text-zinc-100">
              Taste the Smoky Flame & Authentic Flavor of <br className="hidden sm:inline" />
              <span className="gold-text-gradient font-brand block mt-3 text-5xl sm:text-6xl lg:text-7xl">
                TANDOOR CHOWK
              </span>
            </h1>

            {/* Subtitle / Intro */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Serving freshly brewed thick milk <strong className="text-amber-400 font-bold">Kulhad Masala Chai</strong> alongside sizzling charcoal-roasted <strong className="text-amber-400 font-bold">Tandoori Paneer Tikka, Soya Chaap & Crispy Snacks</strong>. Prepared daily with love in Chandauli, Uttar Pradesh.
            </p>

            {/* Highlights Grid */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3.5 pt-1">
              <div className="flex items-center gap-2 bg-zinc-900/90 border border-zinc-800 rounded-xl px-4 py-2.5 shadow-md">
                <Coffee className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold text-zinc-200">100% Earthen Clay Kulhad</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-900/90 border border-zinc-800 rounded-xl px-4 py-2.5 shadow-md">
                <Flame className="w-4 h-4 text-orange-400" />
                <span className="text-xs font-bold text-zinc-200">Live Charcoal Tandoor Grill</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-900/90 border border-zinc-800 rounded-xl px-4 py-2.5 shadow-md">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold text-zinc-200">Chandauli, Uttar Pradesh</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onExploreMenu}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 btn-gold-primary text-base uppercase tracking-wider"
              >
                <span>Explore Dishes & Order</span>
                <ArrowRight className="w-5 h-5 text-zinc-950" />
              </button>

              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hello%20Tandoor%20Chowk!%20I%20would%20like%20to%20place%20an%20order.`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 btn-whatsapp text-base"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>WhatsApp Order ({RESTAURANT_INFO.phone})</span>
              </a>
            </div>

            {/* Ratings & Hotline Bar */}
            <div className="pt-6 border-t border-zinc-800/90 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="font-extrabold text-zinc-100">4.9 / 5.0</span>
                <span className="text-zinc-400 text-xs">(1,200+ Reviews in UP)</span>
              </div>
              <div className="hidden sm:block text-zinc-700">•</div>
              <div className="flex items-center gap-2 text-zinc-300">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Hotline: <strong className="text-amber-400 font-extrabold">{RESTAURANT_INFO.phone}</strong></span>
              </div>
            </div>

          </div>

          {/* Right Column Visual Banner */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Gold Ambient Glow Ring */}
              <div className="absolute -inset-3 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 rounded-3xl blur-xl opacity-40 animate-pulse-glow" />

              {/* Glass Image Container */}
              <div className="relative rounded-3xl overflow-hidden border border-amber-500/50 bg-zinc-900 shadow-2xl">
                <img
                  src={heroImage}
                  alt="Tandoor Chowk Kulhad Chai and Tandoori Tikka"
                  className="w-full h-[450px] sm:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                {/* Floating Badge Top Left */}
                <div className="absolute top-5 left-5 bg-zinc-950/90 backdrop-blur-md border border-amber-500/40 rounded-2xl p-3.5 flex items-center gap-3 shadow-2xl animate-float-smooth">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                    <Coffee className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-100">Kulhad Masala Chai</h4>
                    <p className="text-[11px] text-amber-400 font-bold">Only ₹30 • Fresh Daily</p>
                  </div>
                </div>

                {/* Floating Card Bottom */}
                <div className="absolute bottom-6 right-6 left-6 bg-zinc-950/95 backdrop-blur-md border border-amber-500/40 rounded-2xl p-4 shadow-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-black text-amber-400 tracking-wider">Fast Delivery</span>
                      <h4 className="text-sm font-bold text-zinc-100">Hot Doorstep Delivery in UP</h4>
                      <p className="text-xs text-zinc-400">Chandauli Market • Call 7266911274</p>
                    </div>
                    <a
                      href={`tel:${RESTAURANT_INFO.phone}`}
                      className="bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold px-3.5 py-2 rounded-xl text-xs transition-colors flex items-center gap-1.5 shadow"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
