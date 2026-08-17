import React, { useState, useEffect } from 'react';
import { ShoppingBag, Phone, Flame, Menu as MenuIcon, X, Calendar, MessageSquare, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function Navbar({ cartCount, onOpenCart, onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Dishes & Menu', href: '#menu' },
    { name: 'Special Combos', href: '#combos' },
    { name: 'About Story', href: '#about' },
    { name: 'Customer Reviews', href: '#reviews' },
    { name: 'Contact & Location', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-nav py-3.5 shadow-2xl shadow-amber-500/10' : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Branding */}
          <a href="#hero" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-105 transition-transform duration-300">
              <Flame className="w-6 h-6 text-zinc-950 fill-zinc-950" />
            </div>
            <div>
              <span className="font-brand text-2xl sm:text-3xl font-extrabold tracking-wider gold-text-gradient block leading-none">
                TANDOOR CHOWK
              </span>
              <span className="text-[10px] tracking-widest text-amber-400/90 font-bold uppercase block mt-1">
                Chandauli • Kulhad Chai & Snacks
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-zinc-300 hover:text-amber-400 transition-colors tracking-wide relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-amber-400 after:to-amber-600 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-4">
            
            {/* Quick Phone Call */}
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="hidden xl:flex items-center gap-2 text-xs font-bold text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 px-4 py-2.5 rounded-xl transition-all"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>

            {/* Reserve Table Trigger */}
            <button
              onClick={onOpenBooking}
              className="flex items-center gap-2 text-xs font-bold text-zinc-200 hover:text-amber-400 bg-zinc-900/90 border border-zinc-800 hover:border-amber-500/40 px-4 py-2.5 rounded-xl transition-all"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Book Table</span>
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2.5 btn-gold-primary text-xs tracking-wider uppercase font-extrabold shadow-lg hover:shadow-amber-500/30 active:scale-95 transition-all"
            >
              <ShoppingBag className="w-4.5 h-4.5 text-zinc-950" />
              <span>Cart Order</span>
              {cartCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-zinc-950 text-amber-400 text-xs font-black flex items-center justify-center shadow">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex sm:hidden items-center gap-3">
            <button
              onClick={onOpenCart}
              className="relative p-2.5 text-amber-400 bg-zinc-900/90 border border-amber-500/30 rounded-xl"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-amber-400 text-zinc-950 text-xs font-black flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-zinc-300 hover:text-amber-400 bg-zinc-900/90 border border-zinc-800 rounded-xl"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950/98 border-b border-amber-500/30 px-6 py-6 space-y-4 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-zinc-200 hover:text-amber-400 py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-zinc-800/80 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-amber-500/40 text-amber-300 text-sm font-bold bg-amber-500/10"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Table / Event Catering</span>
            </button>

            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hi%20Tandoor%20Chowk!%20I%20want%20to%20place%20an%20order.`}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 btn-whatsapp text-sm font-bold shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Order ({RESTAURANT_INFO.phone})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
