import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './FloatingActions.css';

const FloatingActions = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside className="floating-actions-container" aria-label="Quick contact and navigation">
      {/* Back to top button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.25 }}
            title="Back to Top"
            aria-label="Scroll back to top of page"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Direct Call Button */}
      <motion.a
        href="tel:7032130328"
        className="floating-action-btn floating-call"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        title="Call 7032130328"
        aria-label="Call GMK primary helpline"
      >
        <Phone size={22} />
        <span className="floating-tooltip">Call: 7032130328</span>
      </motion.a>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/917032130328?text=Hello%20GMK%20Network%20Solutions,%20I%20have%20an%20enquiry%20regarding%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-action-btn floating-whatsapp"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        title="Chat on WhatsApp"
        aria-label="Chat with GMK on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.086-.177.18-.076.353.101.173.45 0.742.965 1.201.662.59 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.679.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.044.073.044.42-.1 0.825z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.528 3.66 1.449 5.174L2 22l4.981-1.309A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.047c-1.636 0-3.167-.478-4.46-1.303l-.32-.204-2.956.776.789-2.885-.208-.332A7.994 7.994 0 014.047 12c0-4.385 3.568-7.953 7.953-7.953 4.385 0 7.953 3.568 7.953 7.953 0 4.385-3.568 7.953-7.953 7.953z" />
        </svg>
        <span className="floating-tooltip">WhatsApp: 7032130328</span>
      </motion.a>
    </aside>
  );
};

export default FloatingActions;
