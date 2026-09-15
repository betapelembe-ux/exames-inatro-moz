import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { QuestionCarousel } from './components/QuestionCarousel';
import { Testimonials } from './components/Testimonials';
import { OfferSection } from './components/OfferSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  const handleScrollToExamples = () => {
    const el = document.getElementById('exemplos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      <main className="flex-grow">
        {/* 1. Hero Section with Urgent Offer Banner on top, Title, Mini VSL and CTA */}
        <Hero
          onOpenCheckout={handleOpenCheckout}
          onScrollToExamples={handleScrollToExamples}
        />

        {/* 2. Interactive Carousel with Real Resolved Exam Questions */}
        <QuestionCarousel onOpenCheckout={handleOpenCheckout} />

        {/* 4. Mozambican Student Testimonials & Proof */}
        <Testimonials />

        {/* 5. Special Offer Section (197 Meticais, M-Pesa/e-Mola) */}
        <OfferSection onOpenCheckout={handleOpenCheckout} />

        {/* 6. 7-Day Money Back Guarantee Section */}
        <GuaranteeSection onOpenCheckout={handleOpenCheckout} />

        {/* 7. Frequently Asked Questions (FAQ) */}
        <FaqSection onOpenCheckout={handleOpenCheckout} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Checkout Modal with M-Pesa, e-Mola & Instant Delivery */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={handleCloseCheckout}
      />
    </div>
  );
}
