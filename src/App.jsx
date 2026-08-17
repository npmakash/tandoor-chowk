import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import ItemModal from './components/ItemModal';
import CartDrawer from './components/CartDrawer';
import About from './components/About';
import Combos from './components/Combos';
import BookingModal from './components/BookingModal';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsapp from './components/FloatingWhatsapp';
import { ShoppingBag, Check } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [customizingItem, setCustomizingItem] = useState(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Show quick toast notification
  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  // Add Item to Cart
  const handleAddToCart = (itemToAdd) => {
    setCartItems((prevCart) => {
      // Check if exact same item with same options exists
      const existingIdx = prevCart.findIndex(
        (ci) => ci.id === itemToAdd.id && 
                JSON.stringify(ci.selectedOptions || {}) === JSON.stringify(itemToAdd.selectedOptions || {})
      );

      if (existingIdx > -1) {
        const updated = [...prevCart];
        const qtyToAdd = itemToAdd.quantity || 1;
        updated[existingIdx] = {
          ...updated[existingIdx],
          quantity: updated[existingIdx].quantity + qtyToAdd
        };
        return updated;
      } else {
        return [...prevCart, { ...itemToAdd, quantity: itemToAdd.quantity || 1 }];
      }
    });

    triggerToast(`Added "${itemToAdd.name}" to your order cart!`);
  };

  // Quantity updates in Cart
  const handleUpdateQuantity = (index, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(index);
      return;
    }
    setCartItems((prev) => {
      const updated = [...prev];
      updated[index].quantity = newQty;
      return updated;
    });
  };

  // Remove Item
  const handleRemoveItem = (index) => {
    setCartItems((prev) => prev.filter((_, idx) => idx !== index));
  };

  // Clear Cart
  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, ci) => acc + ci.quantity, 0);

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-amber-500 selection:text-zinc-950 flex flex-col justify-between">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-amber-500 text-zinc-950 font-bold px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 text-xs animate-bounce border border-amber-300">
          <Check className="w-4 h-4 text-zinc-950 stroke-[3]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header Navigation Bar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        onOpenBooking={() => setBookingOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        <Hero onExploreMenu={scrollToMenu} />
        <Menu
          onAddToCart={handleAddToCart}
          onCustomizationReq={(item) => setCustomizingItem(item)}
        />
        <Combos onAddToCart={handleAddToCart} />
        <About />
        <Reviews />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsapp />

      {/* Modals & Slide-over Drawers */}
      <ItemModal
        item={customizingItem}
        onClose={() => setCustomizingItem(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />

    </div>
  );
}
