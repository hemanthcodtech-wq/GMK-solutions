import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, CalendarCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.png';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const drawerRef = useRef(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle Escape key to close mobile menu & prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="site-header">
      <div className="header-container">
        {/* GMK Logo */}
        <Link to="/" className="header-logo-group" aria-label="GMK Network Solutions Home">
          <div className="logo-badge-wrapper">
            <img src={logoImg} alt="GMK Network Solutions Logo" className="header-logo-img" />
          </div>
          <div className="brand-text" style={{ overflow: 'hidden' }}>
            <span className="brand-title" style={{ display: 'block', transform: 'translateY(0)', animation: 'slideUpTitle 0.6s cubic-bezier(0.22, 1, 0.36, 1) both' }}>
              <span className="brand-highlight">GMK</span>
            </span>
            <span className="brand-subtitle" style={{ display: 'block', transform: 'translateY(0)', animation: 'slideUpSubtitle 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.1s both' }}>
              NETWORK SOLUTIONS
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="header-nav" aria-label="Main Navigation">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Home
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Services
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            About Us
          </NavLink>
          <NavLink to="/gallery" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Recent Projects
          </NavLink>
          <NavLink to="/booking" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Booking
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Contact
          </NavLink>
        </nav>

        {/* Header Right Actions: Book a Service CTA + Phone Call Shortcut */}
        <div className="header-actions-group">
          <Link to="/booking" className="btn-header-booking">
            <CalendarCheck size={16} />
            <span>Book a Service</span>
          </Link>

          <div className="header-contacts">
            <a
              href="https://wa.me/917032130328"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-icon-btn"
              title="Chat on WhatsApp"
              aria-label="WhatsApp Us"
            >
              <div className="whatsapp-circle">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.086-.177.18-.076.353.101.173.45 0.742.965 1.201.662.59 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.679.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.044.073.044.42-.1 0.825z" />
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.528 3.66 1.449 5.174L2 22l4.981-1.309A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.047c-1.636 0-3.167-.478-4.46-1.303l-.32-.204-2.956.776.789-2.885-.208-.332A7.994 7.994 0 014.047 12c0-4.385 3.568-7.953 7.953-7.953 4.385 0 7.953 3.568 7.953 7.953 0 4.385-3.568 7.953-7.953 7.953z" />
                </svg>
              </div>
            </a>
            <div className="phone-numbers">
              <a href="tel:7032130328" className="phone-item">
                <Phone size={13} className="phone-inline-icon" /> 7032130328
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with AnimatePresence & Staggered Item Reveals */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {[
              { to: '/', label: 'Home' },
              { to: '/services', label: 'Services' },
              { to: '/about', label: 'About Us' },
              { to: '/gallery', label: 'Recent Projects' },
              { to: '/booking', label: 'Booking' },
              { to: '/contact', label: 'Contact' }
            ].map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05 + 0.05,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <NavLink
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) => (isActive ? 'mobile-nav-link active' : 'mobile-nav-link')}
                >
                  {item.label}
                </NavLink>
              </motion.div>
            ))}

            <motion.div
              className="mobile-contacts"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.35 }}
            >
              <div className="mobile-whatsapp-label">
                <Phone size={16} /> Tap to Call / WhatsApp:
              </div>
              <div className="mobile-phones">
                <a href="tel:7032130328" className="mobile-phone-cta">
                  <Phone size={14} /> 7032130328
                </a>
                <a href="tel:7702130328" className="mobile-phone-cta">
                  <Phone size={14} /> 7702130328
                </a>
                <a href="tel:7287830328" className="mobile-phone-cta">
                  <Phone size={14} /> 7287830328
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
