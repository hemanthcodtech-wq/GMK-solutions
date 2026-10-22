import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import logoImg from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      {/* 09. Location & Quick Contact Ribbon (as in reference image) */}
      <div className="footer-top-bar">
        <div className="footer-top-container">
          <div className="info-block address-block">
            <div className="icon-wrapper">
              <MapPin className="info-icon" size={20} />
            </div>
            <div className="info-text">
              <span className="info-main">Near Municipal Office,</span>
              <span className="info-sub">Alipiri Road, Tirupati, AP</span>
            </div>
          </div>

          <div className="info-divider"></div>

          <div className="info-block startup-block">
            <div className="icon-wrapper startup-icon-wrapper">
              <ShieldCheck className="info-icon rocket-icon" size={20} />
            </div>
            <div className="info-text">
              <span className="info-main badge-text">Recognized Startup</span>
              <span className="info-sub">Innovation & Reliability</span>
            </div>
          </div>

          <div className="info-divider"></div>

          <div className="info-block phone-block">
            <div className="icon-wrapper">
              <Phone className="info-icon" size={20} />
            </div>
            <div className="footer-phone-list">
              <a href="tel:7032130328" className="footer-phone-link">7032130328</a>
              <span className="bar-sep">|</span>
              <a href="tel:7702130328" className="footer-phone-link">7702130328</a>
              <span className="bar-sep">|</span>
              <a href="tel:7287830328" className="footer-phone-link">7287830328</a>
            </div>
          </div>
        </div>
      </div>

      {/* 10. Comprehensive Footer */}
      <div className="footer-main-section">
        <div className="footer-grid-container">
          {/* Col 1: Brand & About */}
          <div className="footer-col brand-col">
            <div className="footer-logo-row">
              <img src={logoImg} alt="GMK Logo" className="footer-logo-img" />
              <div>
                <span className="footer-brand-title">GMK</span>
                <span className="footer-brand-sub">NETWORK SOLUTIONS</span>
              </div>
            </div>
            <p className="footer-about-text">
              Your trusted partner for high-performance LAN/Wi-Fi deployment, server rack installations, structured cabling, IT hardware, and thermal POS printer services across homes, offices, and commercial enterprises.
            </p>
            <div className="footer-motto-tag">
              CONNECT • SECURE • GROW
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-nav-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/gallery">Work Gallery</Link></li>
              <li><Link to="/booking">Book a Service</Link></li>
              <li><Link to="/contact">Contact & Support</Link></li>
            </ul>
          </div>

          {/* Col 3: Services List */}
          <div className="footer-col">
            <h4 className="footer-heading">Our Key Services</h4>
            <ul className="footer-nav-list">
              <li><Link to="/services">LAN & Mesh Wi-Fi Setup</Link></li>
              <li><Link to="/services">Routing & Switching (VLAN)</Link></li>
              <li><Link to="/services">Server Rack Setup & Dressing</Link></li>
              <li><Link to="/services">Patch Panel & Cat6 Cabling</Link></li>
              <li><Link to="/services">OS & Hardware Troubleshooting</Link></li>
              <li><Link to="/services">Thermal Billing Printer Sales</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact & Consultation */}
          <div className="footer-col">
            <h4 className="footer-heading">Office & Support</h4>
            <p className="footer-contact-item">
              <MapPin size={16} className="contact-accent" />
              <span>Near Municipal Office, Alipiri Road, Tirupati, AP - 517501</span>
            </p>
            <p className="footer-contact-item">
              <Phone size={16} className="contact-accent" />
              <span>+91 70321 30328 / 77021 30328</span>
            </p>
            <p className="footer-contact-item">
              <Mail size={16} className="contact-accent" />
              <span>support@gmknetworks.com</span>
            </p>
            <Link to="/booking" className="footer-book-btn">
              <span>Book an Inspection</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Legal, Privacy, Copyright & Social links */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-container">
          <p className="copyright-text">
            © {new Date().getFullYear()} GMK Network Solutions. All Rights Reserved.
          </p>

          <div className="footer-legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms">Terms & Conditions</Link>
          </div>

          <div className="social-links-group">
            <span className="follow-label">Follow Us:</span>
            <div className="social-icons">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Facebook"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917032130328"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn whatsapp-btn"
                aria-label="WhatsApp"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.086-.177.18-.076.353.101.173.45 0.742.965 1.201.662.59 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.679.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.044.073.044.42-.1 0.825z" />
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.528 3.66 1.449 5.174L2 22l4.981-1.309A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.047c-1.636 0-3.167-.478-4.46-1.303l-.32-.204-2.956.776.789-2.885-.208-.332A7.994 7.994 0 014.047 12c0-4.385 3.568-7.953 7.953-7.953 4.385 0 7.953 3.568 7.953 7.953 0 4.385-3.568 7.953-7.953 7.953z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Instagram"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
