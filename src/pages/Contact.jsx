import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  MessageSquare,
  Send,
  Check,
  Copy,
  Network,
  Server,
  Laptop,
  Printer,
  ChevronDown,
  Sparkles,
  AlertCircle,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import Reveal from '../components/Reveal';
import TiltCard from '../components/TiltCard';
import { motion } from 'framer-motion';
import { heroStaggerContainer, heroItemRise } from '../utils/animations';
import './Contact.css';

const Contact = () => {
  const [copiedNumber, setCopiedNumber] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    emailAddress: '',
    enquiryType: 'Networking & LAN Services',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const enquiryOptions = [
    'Networking & LAN Services',
    'Rack Setup & Cabling',
    'Computer & Software Support',
    'Thermal Billing Printer Sales & Service',
    'General Enquiry'
  ];

  const handleCopyPhone = (number) => {
    navigator.clipboard.writeText(number);
    setCopiedNumber(number);
    setTimeout(() => {
      setCopiedNumber('');
    }, 2000);
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: 'What services does GMK Network Solutions provide?',
      a: 'We provide networking installation, LAN cabling, rack setup, computer and software support, and thermal billing printer sales and service.'
    },
    {
      q: 'Can I request an on-site visit?',
      a: 'You can contact us or submit a booking request. Availability and service arrangements will be confirmed with you.'
    },
    {
      q: 'How do I get a price estimate?',
      a: 'Describe your requirements by phone or through the enquiry form. Pricing can be discussed after assessing the work needed.'
    },
    {
      q: 'How can I book a service?',
      a: 'Visit the Booking page, select your service, provide your preferred schedule, and wait for confirmation.'
    }
  ];

  return (
    <div className="contact-page">
      {/* 1. HERO SECTION */}
      <section className="contact-hero">
        <motion.div
          className="contact-hero-container"
          variants={heroStaggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={heroItemRise} className="contact-hero-badge">
            <Sparkles size={16} />
            <span>Direct Client Support</span>
          </motion.div>
          <div style={{ overflow: 'hidden' }}>
            <motion.h1 variants={heroItemRise} className="contact-hero-title">
              Get in Touch With Us
            </motion.h1>
          </div>
          <motion.p variants={heroItemRise} className="contact-hero-subtitle">
            We're Here to Help With Your IT Needs.
          </motion.p>
          <motion.p variants={heroItemRise} className="contact-hero-desc">
            Have a networking issue, need computer support, or looking for thermal billing printers?
            Contact GMK Network Solutions to discuss your requirements. We're happy to help you find a suitable solution.
          </motion.p>

          <motion.div variants={heroItemRise} className="contact-hero-actions">
            <Link to="/booking" className="btn-hero-booking">
              Book a Service <ArrowRight size={17} />
            </Link>
            <button
              type="button"
              className="btn-hero-copy"
              onClick={() => handleCopyPhone('7032130328')}
            >
              {copiedNumber === '7032130328' ? (
                <>
                  <Check size={16} color="#34d399" />
                  <span>Primary Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={16} />
                  <span>Copy Primary Number</span>
                </>
              )}
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* 2 & 3. TWO-COLUMN SPLIT: CONTACT INFORMATION & ENQUIRY FORM */}
      <section className="contact-split-section">
        <div className="contact-split-container">
          {/* LEFT COLUMN: 2. Contact Information */}
          <div className="contact-info-col">
            {/* Location Card */}
            <div className="contact-info-card">
              <div className="info-card-header">
                <div className="info-icon-wrapper info-icon-teal">
                  <MapPin size={24} />
                </div>
                <h3>Our Location</h3>
              </div>
              <p>Near Municipal Office, Alipiri Road, Tirupati, Andhra Pradesh, India.</p>
              <p className="subtext">
                Contact us to confirm the exact service location or arrange an on-site visit.
              </p>
            </div>

            {/* Call Us Card */}
            <div className="contact-info-card">
              <div className="info-card-header">
                <div className="info-icon-wrapper info-icon-green">
                  <Phone size={24} />
                </div>
                <h3>Call Us</h3>
              </div>
              <p className="subtext">Direct lines to our service and technical support desk:</p>

              <div className="contact-phone-list">
                <div className="phone-item-row">
                  <div className="phone-item-info">
                    <span className="phone-item-label">Primary Contact</span>
                    <a href="tel:7032130328" className="phone-item-num">7032130328</a>
                  </div>
                  <button
                    type="button"
                    className="btn-mini-copy"
                    onClick={() => handleCopyPhone('7032130328')}
                  >
                    {copiedNumber === '7032130328' ? <Check size={13} color="#34d399" /> : <Copy size={13} />}
                    <span>{copiedNumber === '7032130328' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div className="phone-item-row">
                  <div className="phone-item-info">
                    <span className="phone-item-label">Additional Contact</span>
                    <a href="tel:7702130328" className="phone-item-num">7702130328</a>
                  </div>
                  <button
                    type="button"
                    className="btn-mini-copy"
                    onClick={() => handleCopyPhone('7702130328')}
                  >
                    {copiedNumber === '7702130328' ? <Check size={13} color="#34d399" /> : <Copy size={13} />}
                    <span>{copiedNumber === '7702130328' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div className="phone-item-row">
                  <div className="phone-item-info">
                    <span className="phone-item-label">Additional Contact</span>
                    <a href="tel:7287830328" className="phone-item-num">7287830328</a>
                  </div>
                  <button
                    type="button"
                    className="btn-mini-copy"
                    onClick={() => handleCopyPhone('7287830328')}
                  >
                    {copiedNumber === '7287830328' ? <Check size={13} color="#34d399" /> : <Copy size={13} />}
                    <span>{copiedNumber === '7287830328' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* WhatsApp Support Card */}
            <div className="contact-info-card">
              <div className="info-card-header">
                <div className="info-icon-wrapper info-icon-whatsapp">
                  <MessageSquare size={24} />
                </div>
                <h3>WhatsApp Support</h3>
              </div>
              <p>
                Have a question about networking installation, computer repairs, or printer services? Message us to explain your requirements.
              </p>
              <a
                href="https://wa.me/917032130328?text=Hello%20GMK%20Network%20Solutions,%20I%20have%20an%20enquiry%20regarding%20your%20IT%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-chat"
              >
                <MessageSquare size={18} />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: 3. Send Us a Message (Contact Form) */}
          <div className="contact-form-col">
            <div className="form-title-area">
              <h2>Send Us a Message</h2>
              <p>Tell us how we can help. Fields marked * are required.</p>
            </div>

            {formSubmitted ? (
              <div className="enquiry-success-box">
                <Sparkles size={48} color="#34d399" style={{ margin: '0 auto 1rem' }} />
                <h3>Thank You, {formData.fullName}!</h3>
                <p>
                  Your enquiry for <strong>{formData.enquiryType}</strong> has been prepared. Our team will contact you at <strong>{formData.mobileNumber}</strong> shortly.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <a
                    href={`https://wa.me/917032130328?text=Hello%20GMK,%20I%20submitted%20an%20enquiry%20for%20${encodeURIComponent(formData.enquiryType)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp-chat"
                    style={{ margin: 0 }}
                  >
                    <MessageSquare size={17} /> Fast-Track on WhatsApp
                  </a>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    style={{
                      background: 'transparent',
                      border: '1px solid #00f0ff',
                      color: '#00f0ff',
                      padding: '0.75rem 1.4rem',
                      borderRadius: '50px',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    Send Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleEnquirySubmit} className="contact-form-grid">
                <div className="form-group">
                  <label>
                    Full Name <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="form-control-input"
                    placeholder="e.g. Anand Kumar"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>
                    Mobile Number <span className="req">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    className="form-control-input"
                    placeholder="e.g. 7032130328"
                    value={formData.mobileNumber}
                    onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Email Address (Optional)</label>
                  <input
                    type="email"
                    className="form-control-input"
                    placeholder="e.g. anand@business.com"
                    value={formData.emailAddress}
                    onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>
                    Enquiry Type <span className="req">*</span>
                  </label>
                  <select
                    className="form-control-select"
                    value={formData.enquiryType}
                    onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                  >
                    {enquiryOptions.map((opt, i) => (
                      <option key={i} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>
                    Your Message <span className="req">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="form-control-textarea"
                    placeholder="Describe your requirement or problem in detail..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div className="form-impl-note">
                  <AlertCircle size={20} color="#38bdf8" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <p>
                    <strong>Review Enquiry:</strong> Website implementation note: connect this form to a secure backend or business email service before launch. This preview does not send your enquiry directly to an external server.
                  </p>
                </div>

                <button type="submit" className="btn-submit-enquiry">
                  <span>Review Enquiry</span>
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 4. OUR SERVICES */}
      <section className="contact-services-overview">
        <Reveal once={false}>
          <div className="section-title-center">
            <span className="badge-sub">Solutions Portfolio</span>
            <h2>Our Services</h2>
            <p>End-to-end practical networking, infrastructure, hardware, and printer services.</p>
          </div>
        </Reveal>

        <div className="contact-services-grid">
          <Reveal delay={0.05} once={false}>
            <div className="contact-svc-card">
              <div className="contact-svc-icon">
                <Network size={26} />
              </div>
              <h3>Networking Solutions</h3>
              <p>LAN, Wi-Fi, routers, switches, and access points.</p>
            </div>
          </Reveal>

          <Reveal delay={0.15} once={false}>
            <div className="contact-svc-card">
              <div className="contact-svc-icon">
                <Server size={26} />
              </div>
              <h3>Rack & Cabling</h3>
              <p>Rack setup, patch panels, and structured cabling.</p>
            </div>
          </Reveal>

          <Reveal delay={0.25} once={false}>
            <div className="contact-svc-card">
              <div className="contact-svc-icon">
                <Laptop size={26} />
              </div>
              <h3>Computer Support</h3>
              <p>Hardware, operating systems, drivers, and MS Office.</p>
            </div>
          </Reveal>

          <Reveal delay={0.35} once={false}>
            <div className="contact-svc-card">
              <div className="contact-svc-icon">
                <Printer size={26} />
              </div>
              <h3>Billing Printers</h3>
              <p>Thermal printer sales, setup, and service.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. FIND US ON THE MAP */}
      <section className="contact-map-section">
        <Reveal once={false}>
          <div className="contact-map-container">
            <div className="map-header-bar">
              <div className="map-header-info">
                <h3>GMK Network Solutions</h3>
                <p>
                  <MapPin size={16} color="#00f0ff" />
                  <span>Near Municipal Office, Alipiri Road, Tirupati, Andhra Pradesh, India.</span>
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Alipiri+Road+Tirupati+Andhra+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gmaps"
              >
                <span>Find on Google Maps</span>
                <ExternalLink size={15} />
              </a>
            </div>

            <div className="map-iframe-wrapper">
              <iframe
                title="GMK Network Solutions Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15509.704207914807!2d79.40356885!3d13.63189915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b18dfaeefb3%3A0xea89bb8c5a4db82b!2sAlipiri%20Rd%2C%20Tirupati%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* 6. FREQUENTLY ASKED QUESTIONS */}
      <section className="contact-faqs-section">
        <Reveal once={false}>
          <div className="section-title-center">
            <span className="badge-sub">Got Questions?</span>
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions about our services and booking process.</p>
          </div>
        </Reveal>

        <Reveal once={false}>
          <div className="faqs-accordion-list">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`faq-accordion-item ${openFaq === idx ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-accordion-header"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={20} className="faq-accordion-icon" />
                </button>
                {openFaq === idx && (
                  <div className="faq-accordion-body">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 7. FINAL CTA */}
      <section className="contact-cta-section">
        <Reveal once={false}>
          <div className="contact-cta-container">
            <h2>Let's Get Your Systems Connected</h2>
            <p>
              From network installations to computer support, GMK Network Solutions is ready to discuss your IT requirements.
            </p>

            <div className="cta-btn-row">
              <Link to="/gallery" className="btn-cta-gallery">
                Explore Our Work <ArrowRight size={17} />
              </Link>
              <Link to="/booking" className="btn-cta-gallery" style={{ background: 'transparent', border: '1px solid #00f0ff', color: '#00f0ff' }}>
                Book an Appointment
              </Link>
            </div>

            <div className="cta-numbers-bar">
              <a href="tel:7032130328">7032130328</a>
              <span style={{ color: '#64748b' }}>•</span>
              <a href="tel:7702130328">7702130328</a>
              <span style={{ color: '#64748b' }}>•</span>
              <a href="tel:7287830328">7287830328</a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Contact;
