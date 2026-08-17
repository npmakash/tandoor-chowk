import React, { useState } from 'react';
import { X, Plus, Minus, Star, Check } from 'lucide-react';

export default function ItemModal({ item, onClose, onAddToCart }) {
  if (!item) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState(() => {
    const initial = {};
    if (item.options) {
      Object.keys(item.options).forEach((key) => {
        initial[key] = item.options[key][0];
      });
    }
    return initial;
  });
  const [specialInstruction, setSpecialInstruction] = useState('');

  const handleOptionChange = (groupKey, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [groupKey]: value
    }));
  };

  const handleAdd = () => {
    onAddToCart({
      ...item,
      quantity,
      selectedOptions,
      specialInstruction
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-zinc-900 border border-amber-500/30 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-zinc-950/80 text-zinc-400 hover:text-amber-400 flex items-center justify-center border border-zinc-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Banner */}
        <div className="relative h-44 bg-zinc-950">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
          <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
            <div>
              <h3 className="text-xl font-bold text-zinc-100">{item.name}</h3>
              <p className="text-xs text-amber-400 font-semibold">₹{item.price} each</p>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-amber-400 bg-zinc-950/80 px-2.5 py-1 rounded-lg border border-amber-500/30">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>{item.rating}</span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 space-y-5 max-h-[60vh] overflow-y-auto">
          <p className="text-xs text-zinc-300 leading-relaxed">{item.description}</p>

          {/* Options groups if any */}
          {item.options && Object.keys(item.options).map((groupKey) => (
            <div key={groupKey} className="space-y-2">
              <h4 className="text-xs font-bold uppercase text-amber-400 tracking-wider">
                Select {groupKey}:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {item.options[groupKey].map((opt) => {
                  const isSelected = selectedOptions[groupKey] === opt;
                  return (
                    <button
                      key={opt}
                      onClick={() => handleOptionChange(groupKey, opt)}
                      className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                        isSelected
                          ? 'bg-amber-500/20 border border-amber-500 text-amber-300 font-bold'
                          : 'bg-zinc-800/80 border border-zinc-700/60 text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      <span>{opt}</span>
                      {isSelected && <Check className="w-4 h-4 text-amber-400" />}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Special Instructions Note */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-zinc-300">Kitchen Instructions (Optional):</label>
            <input
              type="text"
              placeholder="e.g. Extra adrak, serve hot, less oil..."
              value={specialInstruction}
              onChange={(e) => setSpecialInstruction(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center justify-between pt-2 border-t border-zinc-800">
            <span className="text-xs font-bold text-zinc-300">Quantity:</span>
            <div className="flex items-center gap-3 bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-1.5">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="text-zinc-400 hover:text-amber-400"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-sm font-bold text-amber-400 w-4 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="text-zinc-400 hover:text-amber-400"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase text-zinc-400 font-bold block">Total Amount</span>
            <span className="text-lg font-extrabold text-amber-400">₹{item.price * quantity}</span>
          </div>

          <button
            onClick={handleAdd}
            className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-zinc-950 font-bold px-6 py-2.5 rounded-xl text-xs shadow-lg shadow-amber-500/25 hover:brightness-110 active:scale-95 transition-all"
          >
            Confirm & Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
}
