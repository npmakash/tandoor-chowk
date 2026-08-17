import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function FloatingWhatsapp() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 group">
      
      {/* Tooltip hint */}
      <div className="hidden sm:block bg-zinc-950/90 text-amber-300 text-[11px] font-bold px-3 py-1.5 rounded-xl border border-amber-500/40 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
        🔥 Order via WhatsApp (7266911274)
      </div>

      {/* Floating Button */}
      <a
        href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hi%20Tandoor%20Chowk!%20I%20want%20to%20place%20an%20order.`}
        target="_blank"
        rel="noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all group"
        aria-label="Direct WhatsApp Order"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping" />
        <MessageSquare className="w-7 h-7 fill-white relative z-10" />
      </a>
    </div>
  );
}
