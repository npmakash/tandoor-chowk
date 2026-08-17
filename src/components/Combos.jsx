import React from 'react';
import { Gift, Star, Plus, MessageSquare, Sparkles } from 'lucide-react';
import { MENU_ITEMS, RESTAURANT_INFO } from '../data/menuData';

export default function Combos({ onAddToCart }) {
  const combos = MENU_ITEMS.filter((item) => item.category === 'combos');

  const handleQuickWhatsApp = (combo) => {
    const text = encodeURIComponent(
      `👋 Hello Tandoor Chowk!\nI would like to order the special combo: *${combo.name}* (₹${combo.price}).\n📍 Address: Chandauli, UP.\n\nPlease confirm delivery time!`
    );
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="combos" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1">
            <Gift className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">
              Best Savings & Delight
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-fancy text-zinc-100">
            Special Value <span className="gold-gradient-text font-fancy">Combos & Offers</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Pair your favorite Kulhad Chai with authentic Tandoori snacks and crispy street chaat for the best price.
          </p>
        </div>

        {/* Combo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {combos.map((combo) => (
            <div
              key={combo.id}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between border-amber-500/40 relative group"
            >
              {/* Top Banner Tag */}
              <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-amber-400 to-amber-600 text-zinc-950 font-black text-[11px] uppercase px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 fill-zinc-950" />
                <span>Popular Combo</span>
              </div>

              <div>
                <div className="relative h-48 overflow-hidden bg-zinc-900">
                  <img
                    src={combo.image}
                    alt={combo.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold font-serif-fancy text-zinc-100 group-hover:text-amber-400 transition-colors">
                      {combo.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-extrabold text-amber-400">₹{combo.price}</span>
                    <div className="flex items-center gap-1 text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{combo.rating}</span>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed">{combo.description}</p>
                </div>
              </div>

              <div className="p-6 pt-0 grid grid-cols-2 gap-3">
                <button
                  onClick={() => onAddToCart(combo)}
                  className="flex items-center justify-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold py-2.5 rounded-xl text-xs shadow-md transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Combo</span>
                </button>

                <button
                  onClick={() => handleQuickWhatsApp(combo)}
                  className="flex items-center justify-center gap-1.5 bg-zinc-900 hover:bg-emerald-950 text-emerald-400 border border-emerald-500/40 py-2.5 rounded-xl font-semibold text-xs transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
