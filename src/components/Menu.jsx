import React, { useState } from 'react';
import { Search, Star, Flame, Coffee, Gift, Wine, Utensils, Cookie, Plus, Check, MessageSquare } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, RESTAURANT_INFO } from '../data/menuData';

export default function Menu({ onAddToCart, onCustomizationReq }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedItemIds, setAddedItemIds] = useState([]);

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Coffee': return <Coffee className="w-4 h-4" />;
      case 'Flame': return <Flame className="w-4 h-4 text-orange-400" />;
      case 'Cookie': return <Cookie className="w-4 h-4" />;
      case 'Gift': return <Gift className="w-4 h-4 text-amber-400" />;
      case 'Wine': return <Wine className="w-4 h-4" />;
      default: return <Utensils className="w-4 h-4" />;
    }
  };

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddWithFeedback = (item) => {
    if (item.customizable && onCustomizationReq) {
      onCustomizationReq(item);
    } else {
      onAddToCart(item);
      setAddedItemIds((prev) => [...prev, item.id]);
      setTimeout(() => {
        setAddedItemIds((prev) => prev.filter((id) => id !== item.id));
      }, 1500);
    }
  };

  const handleQuickWhatsApp = (item) => {
    const text = encodeURIComponent(
      `👋 Hello Tandoor Chowk!\nI would like to order *1x ${item.name}* (₹${item.price}).\n📍 Address: Chandauli, UP.\n\nPlease confirm availability and delivery time!`
    );
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="menu" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 backdrop-blur-sm">
            <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">
              Freshly Prepared Daily in Chandauli
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold font-serif-fancy text-zinc-100">
            Explore Our <span className="gold-text-gradient font-brand">Dishes & Teas</span>
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed">
            From hot earthen Kulhad Masala Chai to sizzling charcoal-grilled Tandoori Tikka, choose your cravings and order directly via WhatsApp or Cart.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search chai, tikka, samosa..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900/90 border border-zinc-800 rounded-2xl pl-12 pr-4 py-3.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-zinc-400 hover:text-amber-400"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-zinc-950 shadow-lg shadow-amber-500/25 scale-105'
                      : 'bg-zinc-900/80 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 border border-zinc-800'
                  }`}
                >
                  {getCategoryIcon(cat.icon)}
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Dishes Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-zinc-900/50 rounded-3xl border border-zinc-800">
            <Utensils className="w-14 h-14 text-zinc-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-zinc-300">No dishes found matching your search</h3>
            <p className="text-xs text-zinc-500 mt-1">Try searching for "chai", "paneer", or "samosa".</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="mt-5 text-xs text-amber-400 font-bold hover:underline"
            >
              Show All Menu Items
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => {
              const isAdded = addedItemIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  className="glass-card-premium rounded-3xl overflow-hidden flex flex-col justify-between group"
                >
                  <div>
                    {/* Item Image Header */}
                    <div className="relative h-60 overflow-hidden bg-zinc-900">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {item.bestseller && (
                          <span className="bg-gradient-to-r from-amber-400 to-amber-600 text-zinc-950 text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-lg">
                            ★ Bestseller
                          </span>
                        )}
                        {item.veg && (
                          <span className="bg-emerald-950/90 border border-emerald-500/50 text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1.5 shadow">
                            <span className="w-2 h-2 rounded-full bg-emerald-400" />
                            100% Veg
                          </span>
                        )}
                      </div>

                      {/* Spice Indicator */}
                      {item.spiceLevel > 0 && (
                        <div className="absolute top-4 right-4 bg-zinc-950/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] text-orange-400 font-bold flex items-center gap-0.5 border border-orange-500/40 shadow">
                          {[...Array(item.spiceLevel)].map((_, i) => (
                            <Flame key={i} className="w-3 h-3 fill-orange-400 text-orange-400" />
                          ))}
                        </div>
                      )}

                      {/* Price Tag */}
                      <div className="absolute bottom-4 right-4 bg-zinc-950/90 backdrop-blur-md border border-amber-500/50 text-amber-400 font-black px-4 py-1.5 rounded-2xl text-lg shadow-xl">
                        ₹{item.price}
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-xl font-bold font-serif-fancy text-zinc-100 group-hover:text-amber-400 transition-colors">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-1 text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                          <span>{item.rating}</span>
                        </div>
                      </div>

                      <p className="text-xs text-zinc-300 leading-relaxed line-clamp-2">
                        {item.description}
                      </p>

                      {item.customizable && (
                        <span className="inline-block text-[10px] text-amber-400 font-semibold bg-zinc-900 border border-amber-500/30 px-2.5 py-1 rounded-lg">
                          ✨ Custom Choice (Sugar / Spice)
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="p-6 pt-0 grid grid-cols-2 gap-3.5">
                    <button
                      onClick={() => handleAddWithFeedback(item)}
                      className={`flex items-center justify-center gap-2 py-3 rounded-2xl font-bold text-xs transition-all shadow-md ${
                        isAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:brightness-110 text-zinc-950'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4 text-zinc-950" />
                          <span>{item.customizable ? 'Customize' : 'Add to Cart'}</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => handleQuickWhatsApp(item)}
                      className="flex items-center justify-center gap-2 bg-zinc-900 hover:bg-emerald-950 text-emerald-400 border border-emerald-500/40 py-3 rounded-2xl font-bold text-xs transition-colors"
                      title="Quick Order 1 Item on WhatsApp"
                    >
                      <MessageSquare className="w-4 h-4 fill-emerald-400" />
                      <span>WhatsApp</span>
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
