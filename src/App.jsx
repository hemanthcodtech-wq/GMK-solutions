import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import SplashScreen from './components/SplashScreen';
import NetworkBackground from './components/NetworkBackground';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';

// Automatically scroll to the top of the viewport when changing pages
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  const [splashFinished, setSplashFinished] = useState(false);

  return (
    <BrowserRouter>
      {/* Scroll reset on route change */}
      <ScrollToTop />

      {/* 1. Subtle session-gated splash animation */}
      <SplashScreen onComplete={() => setSplashFinished(true)} />

      {/* 2. Low-contrast network background animation */}
      <NetworkBackground />

      {/* 3. Interactive Desktop Custom Cursor */}
      <CustomCursor />

      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', position: 'relative', zIndex: 1 }}>
        {/* Sticky Header with active indicators and Book a Service CTA */}
        <Header />

        {/* Main Routed Page Content with smooth page transition */}
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column', paddingTop: '74px' }}>
          <AnimatedRoutes />
        </main>

        {/* Multi-column Footer & ribbon */}
        <Footer />

        {/* Floating Call, WhatsApp & Back-to-Top Suite */}
        <FloatingActions />
      </div>
    </BrowserRouter>
  );
}

export default App;

