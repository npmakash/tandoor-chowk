import React, { useState } from 'react';
import { Star, MessageCircle, Quote, Plus, Check } from 'lucide-react';
import { CUSTOMER_REVIEWS } from '../data/menuData';

export default function Reviews() {
  const [reviewsList, setReviewsList] = useState(CUSTOMER_REVIEWS);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newName, setNewName] = useState('');
  const [newLocation, setNewLocation] = useState('Chandauli, UP');
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newName || !newComment) return;

    const newRev = {
      id: Date.now(),
      name: newName,
      location: newLocation || 'Chandauli, UP',
      rating: Number(newRating),
      comment: newComment,
      date: 'Just now'
    };

    setReviewsList([newRev, ...reviewsList]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowAddForm(false);
      setNewName('');
      setNewComment('');
    }, 2000);
  };

  return (
    <section id="reviews" className="py-20 relative bg-zinc-950/40 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1 mb-2">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                Loved by Foodies in UP
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-fancy text-zinc-100">
              Customer <span className="gold-gradient-text font-fancy">Love & Reviews</span>
            </h2>
          </div>

          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-amber-400 border border-amber-500/30 px-5 py-2.5 rounded-xl text-xs font-bold transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Write a Review</span>
          </button>
        </div>

        {/* Form Modal / Collapse */}
        {showAddForm && (
          <div className="mb-10 p-6 bg-zinc-900 border border-amber-500/40 rounded-2xl max-w-xl mx-auto shadow-2xl animate-fadeIn space-y-4">
            <h3 className="text-base font-bold text-zinc-100 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-amber-400" />
              <span>Share Your Dining Experience</span>
            </h3>

            {submitted ? (
              <div className="text-center py-4 text-emerald-400 text-sm font-bold flex items-center justify-center gap-2">
                <Check className="w-5 h-5" /> Thank you! Your review has been published.
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-zinc-400">Your Name:</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-zinc-100 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-zinc-400">City / Location:</label>
                    <input
                      type="text"
                      placeholder="e.g. Chandauli, UP"
                      value={newLocation}
                      onChange={(e) => setNewLocation(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-zinc-100 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-zinc-400">Rating:</label>
                  <div className="flex items-center gap-2 pt-1">
                    {[5, 4, 3, 2, 1].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setNewRating(num)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1 border ${
                          newRating === num
                            ? 'bg-amber-500 text-zinc-950 border-amber-400'
                            : 'bg-zinc-950 text-zinc-400 border-zinc-800'
                        }`}
                      >
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>{num} ★</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-zinc-400">Review Message:</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us what you loved about our Kulhad Chai or Tandoori Tikka..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-zinc-100 focus:outline-none focus:border-amber-500 resize-none"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="px-4 py-2 rounded-xl text-xs text-zinc-400 hover:text-zinc-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold px-6 py-2 rounded-xl text-xs"
                  >
                    Post Review
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsList.map((rev) => (
            <div
              key={rev.id}
              className="glass-card rounded-2xl p-6 space-y-4 relative flex flex-col justify-between"
            >
              <Quote className="w-8 h-8 text-amber-500/20 absolute top-4 right-4 pointer-events-none" />

              <div className="space-y-3">
                <div className="flex text-amber-400 gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-zinc-100">{rev.name}</h4>
                  <span className="text-[10px] text-amber-400 font-medium">{rev.location}</span>
                </div>
                <span className="text-[10px] text-zinc-500">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
