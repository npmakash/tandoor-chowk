import React from 'react';
import heroImg from '../assets/hero.png';
import { Coffee, Flame, ShieldCheck, HeartHandshake, Award, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function About() {
  const highlights = [
    {
      icon: Coffee,
      title: 'Earthen Kulhad Tradition',
      desc: 'Every cup of tea is brewed in small batches and served in unglazed earthen clay cups, giving a natural earthy aroma and mineral goodness.'
    },
    {
      icon: Flame,
      title: 'Live Charcoal Tandoor Grill',
      desc: 'Our Paneer Tikka, Soya Chaap, and Naan rolls are roasted in traditional clay ovens over live charcoal for that authentic smoky charred taste.'
    },
    {
      icon: ShieldCheck,
      title: '100% Hygiene & Pure Desi Butter',
      desc: 'We use premium Amul butter, cold-pressed mustard oil, and handpicked local spices sourced directly in Uttar Pradesh.'
    },
    {
      icon: HeartHandshake,
      title: 'Chandauli Hospitality',
      desc: 'Located right in the heart of Chandauli, we welcome locals and highway travelers with warm smiles and prompt service.'
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-zinc-950/60 border-y border-zinc-900">
      
      {/* Glow background */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl glass-card">
              <img
                src={heroImg}
                alt="Tandoor Chowk Restaurant Ambiance"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-zinc-950/90 backdrop-blur-md border border-amber-500/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <Award className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-100">Chandauli’s Favorite Tea & Snacks</h4>
                    <p className="text-xs text-amber-400 font-semibold">Serving authentic taste with love</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text & Features */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                Chandauli, Uttar Pradesh
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-fancy text-zinc-100">
              The Story of <span className="gold-gradient-text font-fancy">Tandoor Chowk</span>
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Founded with a passion for preserving rich North Indian tea stall traditions and charcoal grilling, <strong className="text-amber-400">Tandoor Chowk</strong> brings together the timeless comfort of <em>Kulhad Chai</em> and the fiery taste of live tandoori appetizers.
            </p>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              Whether you are meeting friends for an evening adrak chai & Maska Bun or craving a full Tandoori Paneer Tikka feast, our kitchen in Chandauli serves pure vegetarian delicacies prepared with uncompromised hygiene and passion.
            </p>

            {/* Grid of 4 Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800/80 hover:border-amber-500/40 transition-colors space-y-2"
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-amber-400" />
                    </div>
                    <h4 className="text-xs font-bold text-zinc-200">{item.title}</h4>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
