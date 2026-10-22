import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.png';
import './SplashScreen.css';

const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show splash screen once per session
    const hasSeenSplash = sessionStorage.getItem('gmk_splash_seen');
    if (hasSeenSplash) {
      setIsVisible(false);
      if (onComplete) onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('gmk_splash_seen', 'true');
      if (onComplete) onComplete();
    }, 1300);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="splash-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: 'easeInOut' } }}
        >
          {/* Gentle horizontal network pulse line */}
          <motion.div
            className="splash-network-line"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: [0, 0.8, 0.4] }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
          />

          <div className="splash-content">
            {/* Expanding Signal Rings */}
            <motion.div
              className="signal-ring ring-1"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: [0.8, 1.2, 1.4], opacity: [0, 0.6, 0] }}
              transition={{ duration: 1.2, ease: 'easeOut', repeat: Infinity }}
            />
            <motion.div
              className="signal-ring ring-2"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: [0.8, 1.2, 1.5], opacity: [0, 0.4, 0] }}
              transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut', repeat: Infinity }}
            />

            {/* Logo container with scale, fade and light sweep */}
            <motion.div
              className="splash-logo-box"
              initial={{ scale: 0.7, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={logoImg} alt="GMK Logo" className="splash-logo-img" />
              <motion.div
                className="splash-light-sweep"
                initial={{ x: '-100%', y: '-100%' }}
                animate={{ x: '100%', y: '100%' }}
                transition={{ duration: 0.9, delay: 0.35, ease: 'easeInOut' }}
              />
            </motion.div>

            {/* Brand Title reveal */}
            <motion.div
              className="splash-brand"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            >
              <h2 className="splash-brand-title">GMK</h2>
              <p className="splash-brand-subtitle">NETWORK SOLUTIONS</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
