import React from 'react';
import { Flame, Phone, MapPin, MessageSquare, Coffee, Heart } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-amber-500/20 pt-16 pb-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-zinc-900">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
                <Flame className="w-6 h-6 text-zinc-950 fill-zinc-950" />
              </div>
              <span className="font-fancy text-2xl font-bold gold-gradient-text">
                TANDOOR CHOWK
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Chandauli’s premier restaurant specializing in earthen Kulhad Masala Chai, charcoal-grilled Tandoori Paneer Tikka, Soya Chaap, and mouthwatering street bites.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
              <Coffee className="w-4 h-4" />
              <span>Served Fresh Daily in Earthen Kulhad</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-200">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-amber-400 transition-colors">Dishes & Menu</a></li>
              <li><a href="#combos" className="hover:text-amber-400 transition-colors">Special Combos</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About Story</a></li>
              <li><a href="#reviews" className="hover:text-amber-400 transition-colors">Customer Reviews</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Popular Menu */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-200">Customer Favorites</h4>
            <ul className="space-y-2 text-xs">
              <li>Special Kulhad Masala Chai (₹30)</li>
              <li>Tandoori Paneer Tikka (₹190)</li>
              <li>Tandoori Malai Soya Chaap (₹180)</li>
              <li>Amul Maska Bun (₹45)</li>
              <li>Samosa with Spicy Chole (₹60)</li>
            </ul>
          </div>

          {/* Col 4: Reach Us */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-200">Contact Hotline</h4>
            <p className="text-xs text-zinc-300 leading-relaxed flex items-start gap-2">
              <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <span>{RESTAURANT_INFO.address}</span>
            </p>
            <p className="text-xs text-zinc-300 flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Hotline: <strong className="text-amber-400">{RESTAURANT_INFO.phone}</strong></span>
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hi%20Tandoor%20Chowk!`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2 rounded-xl transition-colors shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Order (7266911274)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Tandoor Chowk Restaurant. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>for Chandauli, Uttar Pradesh</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
