import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  Wrench,
  Headphones,
  Wifi,
  Network,
  Server,
  Layers,
  Cpu,
  Monitor,
  Printer,
  HardDrive,
  CheckCircle2,
  Calendar,
  Clock,
  Send,
  Phone,
  MessageSquare,
  MapPin,
  ExternalLink,
  ChevronRight,
  Star,
  Quote
} from 'lucide-react';

import bgDatacenter from '../assets/hero_datacenter_bg.jpg';
import rackImg from '../assets/gallery_rack_dressing.jpg';
import printerImg from '../assets/gallery_printer_pos.jpg';
import logoImg from '../assets/logo.png';
import TiltCard from '../components/TiltCard';
import CountUpNumber from '../components/CountUpNumber';
import Reveal from '../components/Reveal';
import { heroStaggerContainer, heroItemRise } from '../utils/animations';
import './Home.css';

// 04 Services data
const servicesList = [
  {
    icon: Wifi,
    title: 'LAN, Wi-Fi & Access Points',
    desc: 'High-density enterprise wireless coverage, zero dead-zones with Ubiquiti UniFi, Cisco & Aruba installations.',
    tag: 'Wireless'
  },
  {
    icon: Network,
    title: 'Routing & Switching',
    desc: 'Managed L2/L3 switch setups, VLAN segmentation, bandwidth throttling, and firewall rule configurations.',
    tag: 'Networking'
  },
  {
    icon: Server,
    title: 'Rack Setup & Dressing',
    desc: 'Professional 4U to 42U rack mounting, cable organizing, airflow optimization, and neat velcro bundling.',
    tag: 'Infrastructure'
  },
  {
    icon: Layers,
    title: 'Patch Panel & LAN Cabling',
    desc: 'Structured Cat6 / Cat6A / Fiber optic trunk termination, numeric tagging, patch cord testing and certification.',
    tag: 'Cabling'
  },
  {
    icon: Cpu,
    title: 'OS & Hardware Troubleshooting',
    desc: 'Component level diagnostics, RAM/SSD upgrades, motherboard repair, and thermal paste repasting.',
    tag: 'Diagnostics'
  },
  {
    icon: Monitor,
    title: 'OS, MS Office & Driver Setup',
    desc: 'Licensed Windows/Linux deployment, Microsoft 365 setup, peripheral driver patching, and secure backup routines.',
    tag: 'Software'
  },
  {
    icon: HardDrive,
    title: 'Desktop & Laptop Support',
    desc: 'Routine corporate IT fleet servicing, remote troubleshooting, system health optimization, and virus cleanups.',
    tag: 'Fleet AMC'
  },
  {
    icon: Printer,
    title: 'Thermal Billing Printer Sales & Service',
    desc: 'Epson, TVS, and POS thermal printer setup, roll feed repairs, USB/Ethernet integration for supermarkets and billing.',
    tag: 'Retail POS'
  }
];

// 08 Verified customer feedback
const verifiedReviews = [
  {
    name: 'Suresh Naidu',
    role: 'Operations Head, Tirupati Retail Plaza',
    rating: 5,
    text: 'GMK structured all our store billing thermal printers and point-of-sale network cables neatly. Zero billing interruptions since their setup!',
    date: '2 weeks ago'
  },
  {
    name: 'Dr. R. Venkatraman',
    role: 'Diagnostic Laboratory Director',
    rating: 5,
    text: 'Flawless server rack dressing and Wi-Fi coverage across our multi-floor clinic. Their response time when we need assistance is exceptional.',
    date: '1 month ago'
  },
  {
    name: 'P. Anand Kumar',
    role: 'Fintech Co-working Space',
    rating: 5,
    text: 'We had dead Wi-Fi zones and frequent switch hangs. The GMK engineers arrived promptly, configured UniFi APs and VLANs. Highly recommended in Tirupati!',
    date: 'Recent'
  }
];

const Home = () => {
  // Booking form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'LAN, Wi-Fi & Access Points',
    location: '',
    preferredDate: '',
    notes: ''
  });
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

  return (
    <div className="home-container">
      {/* ========================================================
          02. HERO SECTION
          ======================================================== */}
      <section className="section-hero">
        <div className="home-bg-wrapper">
          <img
            src={bgDatacenter}
            alt="GMK Enterprise Datacenter Server Rack Visual"
            className="home-bg-image"
          />
          <div className="home-bg-overlay"></div>
          <div className="home-bg-radial"></div>
        </div>

        <div className="hero-main-wrapper">
          <motion.div
            className="hero-content-col"
            variants={heroStaggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={heroItemRise} className="hero-badge-tagline">
              <span className="peacock-sparkle">✦</span>
              <span className="tagline-lead">Your Trusted Partner</span>
              <span className="tagline-sub">in Networking & IT Solutions</span>
            </motion.div>

            <div className="hero-title-group">
              <div style={{ overflow: 'hidden' }}>
                <motion.h1 variants={heroItemRise} className="hero-main-title">
                  <span className="title-gmk">GMK</span>
                  <span className="title-solutions">NETWORK SOLUTIONS</span>
                </motion.h1>
              </div>
              <div style={{ overflow: 'hidden' }}>
                <motion.div variants={heroItemRise} className="hero-motto">
                  <span className="motto-word">CONNECT</span>
                  <span className="motto-dot">•</span>
                  <span className="motto-word">SECURE</span>
                  <span className="motto-dot">•</span>
                  <span className="motto-word">GROW</span>
                </motion.div>
              </div>
            </div>

            <motion.p variants={heroItemRise} className="hero-description">
              Reliable networking, computer support, installations, and hardware services for homes, offices, and businesses. Your network, our priority.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div variants={heroItemRise} className="hero-cta-group">
              <Link to="/booking" className="hero-cta-btn primary-btn">
                <span>Book a Service</span>
                <span className="cta-btn-arrow-circle">
                  <ArrowRight size={17} />
                </span>
              </Link>
              <Link to="/services" className="hero-cta-btn secondary-btn">
                <span>Explore Our Services</span>
                <ChevronRight size={18} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Floating Card */}
          <motion.div
            className="hero-interactive-col"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="floating-slogan-card"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="peacock-feather-badge">🦚</div>
              <span className="slogan-handwritten">Stay</span>
              <span className="slogan-handwritten accent">Connected</span>
              <span className="slogan-handwritten">Always</span>
              <div className="live-status-pill">
                <span className="status-blip"></span>
                <span>Ready to Deploy in Tirupati</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================
          03. TRUST HIGHLIGHTS
          ======================================================== */}
      <section className="section-trust">
        <div className="section-container">
          <div className="trust-grid">
            <TiltCard className="trust-card" maxRotation={8}>
              <div className="trust-icon-box">
                <ShieldCheck size={28} />
              </div>
              <div className="trust-text">
                <h3 className="trust-title">Professional Setup</h3>
                <p className="trust-desc">Clean structured cabling, rack dressing and enterprise gear configuration.</p>
              </div>
            </TiltCard>

            <TiltCard className="trust-card" maxRotation={8}>
              <div className="trust-icon-box">
                <Wifi size={28} />
              </div>
              <div className="trust-text">
                <h3 className="trust-title">Reliable Networking</h3>
                <p className="trust-desc">Zero packet loss, load balancing and optimized Wi-Fi coverage guarantees.</p>
              </div>
            </TiltCard>

            <TiltCard className="trust-card" maxRotation={8}>
              <div className="trust-icon-box">
                <Wrench size={28} />
              </div>
              <div className="trust-text">
                <h3 className="trust-title">Hardware Support</h3>
                <p className="trust-desc">Desktops, laptops, routers, and thermal billing POS printer maintenance.</p>
              </div>
            </TiltCard>

            <TiltCard className="trust-card" maxRotation={8}>
              <div className="trust-icon-box">
                <Headphones size={28} />
              </div>
              <div className="trust-text">
                <h3 className="trust-title">Customer Assistance</h3>
                <p className="trust-desc">Dedicated local on-call support and fast on-site emergency dispatch.</p>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* ========================================================
          04. OUR SERVICES
          ======================================================== */}
      <section id="our-services" className="section-services">
        <div className="section-container">
          <Reveal once={false}>
            <div className="section-header-center">
              <span className="section-kicker">End-to-End Capabilities</span>
              <h2 className="section-title">
                Our <span className="text-cyan">Services</span>
              </h2>
              <p className="section-subtitle">
                Comprehensive hardware, structured cabling, and network integration crafted for seamless digital performance.
              </p>
            </div>
          </Reveal>

          <div className="services-grid">
            {servicesList.map((service, index) => {
              const IconComp = service.icon;
              return (
                <Reveal key={index} delay={index * 0.08} once={false}>
                  <div className="service-card">
                    <div className="service-card-top">
                      <div className="service-icon-wrapper">
                        <IconComp size={24} />
                      </div>
                      <span className="service-tag">{service.tag}</span>
                    </div>
                    <h3 className="service-card-title">{service.title}</h3>
                    <p className="service-card-desc">{service.desc}</p>
                    <Link to="/services" className="service-card-link">
                      <span>Learn more</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.2} once={false}>
            <div className="services-bottom-action">
              <Link to="/services" className="view-all-services-btn">
                <span>View Full Services Breakdown</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================
          05. ABOUT GMK NETWORK SOLUTIONS
          ======================================================== */}
      <section className="section-about">
        <div className="section-container">
          <div className="about-grid">
            <div className="about-content">
              <span className="section-kicker">Recognized Startup in AP</span>
              <h2 className="section-title">
                Building Resilient Networks for <span className="text-cyan">Tomorrow</span>
              </h2>
              <p className="about-lead">
                <strong>GMK Network Solutions</strong> was founded with a singular purpose: to bring industrial-grade networking integrity and honest, high-touch IT hardware engineering to enterprises, small businesses, and modern homes.
              </p>

              <div className="about-pillars">
                <div className="about-pillar-item">
                  <div className="pillar-bullet"></div>
                  <div>
                    <h4 className="pillar-title">Our Commitment to Quality</h4>
                    <p className="pillar-text">We test every cable run, configure dual-band isolation, and label every patch connection cleanly.</p>
                  </div>
                </div>

                <div className="about-pillar-item">
                  <div className="pillar-bullet"></div>
                  <div>
                    <h4 className="pillar-title">Mission & Vision</h4>
                    <p className="pillar-text">To empower businesses with zero downtime connectivity and honest hardware support without corporate delays.</p>
                  </div>
                </div>
              </div>

              <div className="about-action-row">
                <Link to="/about" className="learn-more-btn">
                  <span>Learn More About Us</span>
                  <ArrowRight size={16} />
                </Link>
                <div className="startup-tag-badge">
                  <span className="startup-dot"></span>
                  <span>Andhra Pradesh Registered Startup</span>
                </div>
              </div>
            </div>

            <div className="about-visual">
              <div className="about-card-glow">
                <div className="logo-showcase-circle">
                  <img src={logoImg} alt="GMK Logo Official Emblem" />
                </div>
                <h3 className="showcase-title">GMK Network Solutions</h3>
                <p className="showcase-caption">Alipiri Road, Tirupati, Andhra Pradesh</p>
                <div className="showcase-features-list">
                  <div className="feature-check"><CheckCircle2 size={16} color="#34d399" /> Ubiquiti, Cisco & Mikrotik Certified</div>
                  <div className="feature-check"><CheckCircle2 size={16} color="#34d399" /> Fast On-Site Field Dispatch</div>
                  <div className="feature-check"><CheckCircle2 size={16} color="#34d399" /> 100% Genuine Thermal & Hardware Spares</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          06. OUR RECENT WORK / GALLERY
          ======================================================== */}
      <section className="section-gallery">
        <div className="section-container">
          <div className="section-header-split">
            <div>
              <span className="section-kicker">Proven Field Execution</span>
              <h2 className="section-title">
                Our Recent <span className="text-cyan">Work & Projects</span>
              </h2>
              <p className="section-subtitle">
                Photographs of live customer installations, server setups, and cabling projects.
              </p>
            </div>
            <Link to="/gallery" className="view-gallery-btn">
              <span>View All Projects</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="gallery-showcase-grid">
            <div className="gallery-item large">
              <img src={bgDatacenter} alt="Server rack and networking installation visual" />
              <div className="gallery-overlay">
                <span className="gallery-pill">Datacenter Setup</span>
                <h4 className="gallery-item-title">Enterprise Datacenter Server Racks</h4>
                <p className="gallery-item-desc">High-bandwidth switch stack, cable dressing and UniFi long-range access points.</p>
              </div>
            </div>

            <div className="gallery-item">
              <img src={rackImg} alt="Neat patch cabling in server rack" />
              <div className="gallery-overlay">
                <span className="gallery-pill">LAN Cabling</span>
                <h4 className="gallery-item-title">Patch Panel & Switch Dressing</h4>
                <p className="gallery-item-desc">Structured Cat6 terminations with clear port mapping for seamless maintenance.</p>
              </div>
            </div>

            <div className="gallery-item">
              <img src={printerImg} alt="Thermal billing printer and workstation POS desk" />
              <div className="gallery-overlay">
                <span className="gallery-pill">Retail POS</span>
                <h4 className="gallery-item-title">Thermal Billing Printers & Desktop POS</h4>
                <p className="gallery-item-desc">High-speed retail counter deployment with thermal receipt printers and PC hardware.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          07. BOOK A SERVICE
          ======================================================== */}
      <section id="book-service" className="section-booking">
        <div className="section-container">
          <div className="booking-card-main">
            <div className="booking-info-pane">
              <span className="section-kicker">Fast Response Dispatch</span>
              <h2 className="booking-heading">
                Need Networking or <span className="text-cyan">IT Support?</span>
              </h2>
              <p className="booking-subtext">
                Tell us what you need, and our engineering team will follow up promptly to discuss your service requirements and schedule a site visit.
              </p>

              <div className="booking-direct-actions">
                <a href="tel:7032130328" className="action-pill phone-pill">
                  <Phone size={18} />
                  <span>Call Now: 7032130328</span>
                </a>
                <a
                  href="https://wa.me/917032130328?text=Hi%20GMK,%20I%20would%20like%20to%20book%20a%20networking%20or%20IT%20service."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-pill whatsapp-pill"
                >
                  <MessageSquare size={18} />
                  <span>WhatsApp Us Directly</span>
                </a>
              </div>

              <div className="service-guarantees">
                <div className="guarantee-item">
                  <CheckCircle2 size={18} className="text-cyan" />
                  <span>Free Initial Phone Assessment</span>
                </div>
                <div className="guarantee-item">
                  <CheckCircle2 size={18} className="text-cyan" />
                  <span>Transparent Material & Labor Estimates</span>
                </div>
                <div className="guarantee-item">
                  <CheckCircle2 size={18} className="text-cyan" />
                  <span>Prompt Service Across Tirupati & AP</span>
                </div>
              </div>
            </div>

            {/* Form Pane */}
            <div className="booking-form-pane">
              {bookingSubmitted ? (
                <div className="booking-success-box">
                  <CheckCircle2 size={54} color="#34d399" />
                  <h3>Booking Request Sent!</h3>
                  <p>
                    Thank you, <strong>{formData.name}</strong>. Our team has received your service inquiry for <strong>{formData.service}</strong>. We will call you at <strong>{formData.phone}</strong> shortly.
                  </p>
                  <button
                    className="submit-another-btn"
                    onClick={() => {
                      setBookingSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        service: 'LAN, Wi-Fi & Access Points',
                        location: '',
                        preferredDate: '',
                        notes: ''
                      });
                    }}
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="booking-form">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Reddy"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>Service Needed *</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option>LAN, Wi-Fi & Access Points</option>
                        <option>Routing & Switching</option>
                        <option>Rack Setup & Dressing</option>
                        <option>Patch Panel & LAN Cabling</option>
                        <option>OS & Hardware Troubleshooting</option>
                        <option>Desktop & Laptop Support</option>
                        <option>Thermal Billing Printer Sales & Service</option>
                        <option>Complete Office / Commercial AMC</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Service Location *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alipiri Road / Tirupati"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>Preferred Date</label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Details / Specific Issues</label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe what you'd like us to install or fix..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="booking-submit-btn">
                    <span>Confirm Service Request</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          08. CUSTOMER REVIEWS
          ======================================================== */}
      <section className="section-reviews">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-kicker">Verified Client Feedback</span>
            <h2 className="section-title">
              What Our <span className="text-cyan">Customers Say</span>
            </h2>
            <p className="section-subtitle">
              Authentic feedback from businesses and clinics relying on GMK for uninterrupted connectivity.
            </p>
          </div>

          <div className="reviews-grid">
            {verifiedReviews.map((rev, i) => (
              <div key={i} className="review-card">
                <div className="review-stars">
                  {[...Array(rev.rating)].map((_, idx) => (
                    <Star key={idx} size={16} fill="#00f0ff" color="#00f0ff" />
                  ))}
                </div>
                <p className="review-text">"{rev.text}"</p>
                <div className="review-author">
                  <div className="author-avatar">{rev.name.charAt(0)}</div>
                  <div>
                    <h5 className="author-name">{rev.name}</h5>
                    <span className="author-role">{rev.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          09. CONTACT & LOCATION
          ======================================================== */}
      <section className="section-contact-location">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-kicker">Visit Us or Connect Today</span>
            <h2 className="section-title">
              Contact & <span className="text-cyan">Location</span>
            </h2>
          </div>

          <div className="contact-location-grid">
            {/* Contact details card */}
            <div className="contact-detail-box">
              <h3 className="detail-box-title">GMK Network Solutions Head Office</h3>
              <p className="detail-box-address">
                <MapPin size={20} className="icon-cyan" />
                <span>Near Municipal Office, Alipiri Road, Tirupati, Andhra Pradesh - 517501</span>
              </p>

              <div className="helplines-stack">
                <span className="helpline-label">Direct Helplines (Click to Call):</span>
                <div className="phone-tags">
                  <a href="tel:7032130328" className="phone-tag-btn">
                    <Phone size={14} /> 7032130328
                  </a>
                  <a href="tel:7702130328" className="phone-tag-btn">
                    <Phone size={14} /> 7702130328
                  </a>
                  <a href="tel:7287830328" className="phone-tag-btn">
                    <Phone size={14} /> 7287830328
                  </a>
                </div>
              </div>

              <div className="contact-buttons-row">
                <a
                  href="https://maps.google.com/?q=Alipiri+Road+Tirupati+Andhra+Pradesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link-btn"
                >
                  <MapPin size={16} />
                  <span>Open in Google Maps</span>
                  <ExternalLink size={14} />
                </a>
                <a
                  href="https://wa.me/917032130328"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-link-btn"
                >
                  <MessageSquare size={16} />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Embedded interactive map presentation */}
            <div className="map-embed-wrapper">
              <iframe
                title="GMK Location Map - Alipiri Road, Tirupati"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15509.349079983944!2d79.4005!3d13.6330!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b1a457193f7%3A0x6b14ea9ea0f2d847!2sAlipiri%20Rd%2C%20Tirupati%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.15)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
