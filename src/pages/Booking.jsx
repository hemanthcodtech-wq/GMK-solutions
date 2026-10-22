import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  MapPin,
  FileText,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Send,
  MessageSquare,
  ShieldCheck,
  Laptop,
  Server,
  Printer,
  Sparkles,
  ClipboardList,
  PhoneCall,
  CalendarCheck
} from 'lucide-react';
import Reveal from '../components/Reveal';
import TiltCard from '../components/TiltCard';
import { motion } from 'framer-motion';
import { heroStaggerContainer, heroItemRise } from '../utils/animations';
import './Booking.css';

const Booking = () => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service');

  const [formData, setFormData] = useState({
    service: 'Networking — LAN, Wi-Fi, routers and access points',
    fullName: '',
    mobileNumber: '',
    emailAddress: '',
    preferredDate: '',
    preferredTime: '10:00 AM – 12:00 PM',
    serviceType: 'On-site visit',
    location: '',
    requirement: ''
  });

  const [copiedNumber, setCopiedNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        service: preselectedService
      }));
    }
  }, [preselectedService]);

  const serviceOptions = [
    'Networking — LAN, Wi-Fi, routers and access points',
    'Rack Setup & Cable Dressing',
    'Patch Panel & LAN Cabling',
    'OS & Hardware Troubleshooting',
    'OS / MS Office Installation',
    'Drivers & Peripheral Installation',
    'Desktop / Laptop Support',
    'Thermal Billing Printer Sales & Service',
    'Other IT Requirement'
  ];

  const timeSlots = [
    '10:00 AM – 12:00 PM',
    '12:00 PM – 2:00 PM',
    '2:00 PM – 4:00 PM',
    '4:00 PM – 6:00 PM'
  ];

  const serviceTypes = [
    'On-site visit',
    'Visit to service center / office',
    'Remote support (if applicable)'
  ];

  const handleCopyPhone = (number) => {
    navigator.clipboard.writeText(number);
    setCopiedNumber(number);
    setTimeout(() => {
      setCopiedNumber('');
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomRef = 'GMK-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    setSubmitted(true);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <div className="booking-page">
      {/* 1. HERO SECTION */}
      <section className="booking-hero">
        <motion.div
          className="booking-hero-container"
          variants={heroStaggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={heroItemRise} className="booking-hero-badge">
            <Sparkles size={16} />
            <span>Fast & Dependable Dispatch</span>
          </motion.div>
          <div style={{ overflow: 'hidden' }}>
            <motion.h1 variants={heroItemRise} className="booking-hero-title">
              Book a Service
            </motion.h1>
          </div>
          <motion.p variants={heroItemRise} className="booking-hero-subtitle">
            Expert IT Support, Just a Booking Away.
          </motion.p>
          <motion.p variants={heroItemRise} className="booking-hero-desc">
            Need help with your network, computer, or billing printer? Tell us what you need,
            and our team can follow up to discuss the right solution for you.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. BOOKING FORM UI */}
      <section className="booking-main-section">
        <div className="booking-form-wrapper">
          {submitted ? (
            <div className="booking-success-box" style={{ textAlign: 'center' }}>
              <CheckCircle2 size={68} color="#34d399" style={{ margin: '0 auto 1.2rem' }} />
              <span className="status-badge status-pending">Status: Pending GMK Confirmation</span>
              <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: '2.2rem', color: '#fff', marginTop: '0.8rem', marginBottom: '0.5rem' }}>
                Booking Request Prepared!
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '1rem', maxWidth: '620px', margin: '0 auto' }}>
                Your service inquiry has been recorded. Our technical team will review your requirement and call you at{' '}
                <strong style={{ color: '#00f0ff' }}>{formData.mobileNumber}</strong> to confirm scheduling and charges.
              </p>

              <div className="booking-ref-badge">
                <span>Reference ID:</span>
                <span>{bookingRef}</span>
              </div>

              {/* Summary Details */}
              <div className="summary-details-card">
                <div className="summary-row">
                  <span className="summary-label">Customer Name:</span>
                  <span className="summary-val">{formData.fullName}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Contact Number:</span>
                  <span className="summary-val">{formData.mobileNumber}</span>
                </div>
                {formData.emailAddress && (
                  <div className="summary-row">
                    <span className="summary-label">Email:</span>
                    <span className="summary-val">{formData.emailAddress}</span>
                  </div>
                )}
                <div className="summary-row">
                  <span className="summary-label">Selected Service:</span>
                  <span className="summary-val" style={{ color: '#00f0ff' }}>{formData.service}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Service Type:</span>
                  <span className="summary-val">{formData.serviceType}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Preferred Date:</span>
                  <span className="summary-val">{formData.preferredDate || 'Earliest available'}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Preferred Time Window:</span>
                  <span className="summary-val">{formData.preferredTime}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Service Location:</span>
                  <span className="summary-val">{formData.location}</span>
                </div>
                {formData.requirement && (
                  <div className="summary-row" style={{ flexDirection: 'column', gap: '0.4rem' }}>
                    <span className="summary-label">Requirement Details:</span>
                    <span className="summary-val" style={{ fontSize: '0.9rem', color: '#cbd5e1', fontWeight: 400 }}>
                      {formData.requirement}
                    </span>
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href={`https://wa.me/917032130328?text=Hello%20GMK,%20I%20have%20submitted%20booking%20request%20${bookingRef}%20for%20${encodeURIComponent(formData.service)}.%20Please%20confirm.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    background: '#25d366',
                    color: '#fff',
                    padding: '0.85rem 1.6rem',
                    borderRadius: '50px',
                    fontWeight: 700,
                    textDecoration: 'none'
                  }}
                >
                  <MessageSquare size={18} />
                  <span>Send Confirmation via WhatsApp</span>
                </a>

                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    background: 'transparent',
                    border: '1px solid #00f0ff',
                    color: '#00f0ff',
                    padding: '0.85rem 1.6rem',
                    borderRadius: '50px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Edit / Submit Another Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="booking-form-grid">
              <div className="form-header-intro">
                <h2>Request Your Service</h2>
                <p>Fill in your details so we can understand your requirements.</p>
              </div>

              {/* 1. Choose a Service */}
              <div className="form-fieldset-group">
                <label className="form-legend-title">
                  <Server size={18} />
                  <span>Choose a Service <span className="req">*</span></span>
                </label>
                <div className="input-with-icon">
                  <Laptop className="field-icon" size={20} />
                  <select
                    className="form-select-styled"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    required
                  >
                    {serviceOptions.map((opt, i) => (
                      <option key={i} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 2. Your Details */}
              <div className="form-fieldset-group">
                <div className="form-legend-title">
                  <User size={18} />
                  <span>Your Details</span>
                </div>
                
                <div className="form-row-2col">
                  <div>
                    <label className="form-field-label">
                      Full Name <span className="req">*</span>
                    </label>
                    <div className="input-with-icon">
                      <User className="field-icon" size={18} />
                      <input
                        type="text"
                        required
                        className="form-input-styled"
                        placeholder="e.g. Ramesh Reddy"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="form-field-label">
                      Mobile Number <span className="req">*</span>
                    </label>
                    <div className="input-with-icon">
                      <Phone className="field-icon" size={18} />
                      <input
                        type="tel"
                        required
                        className="form-input-styled"
                        placeholder="e.g. 7032130328"
                        value={formData.mobileNumber}
                        onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="form-field-label">Email Address (Optional)</label>
                  <div className="input-with-icon">
                    <Mail className="field-icon" size={18} />
                    <input
                      type="email"
                      className="form-input-styled"
                      placeholder="e.g. ramesh@example.com"
                      value={formData.emailAddress}
                      onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* 3. Preferred Schedule */}
              <div className="form-fieldset-group">
                <div className="form-legend-title">
                  <Calendar size={18} />
                  <span>Preferred Schedule</span>
                </div>

                <div>
                  <label className="form-field-label">
                    Preferred Date <span className="req">*</span>
                  </label>
                  <div className="input-with-icon">
                    <Calendar className="field-icon" size={18} />
                    <input
                      type="date"
                      required
                      className="form-input-styled"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="form-field-label">Preferred Time Window</label>
                  <div className="time-slots-grid">
                    {timeSlots.map((slot, idx) => (
                      <button
                        type="button"
                        key={idx}
                        className={`time-slot-btn ${formData.preferredTime === slot ? 'active' : ''}`}
                        onClick={() => setFormData({ ...formData, preferredTime: slot })}
                      >
                        <Clock size={15} />
                        <span>{slot}</span>
                      </button>
                    ))}
                  </div>
                  <p className="slot-notice-note">
                    Preferred time only; the appointment must be confirmed by GMK.
                  </p>
                </div>
              </div>

              {/* 4. Service Type */}
              <div className="form-fieldset-group">
                <div className="form-legend-title">
                  <ShieldCheck size={18} />
                  <span>Service Type</span>
                </div>
                <div className="service-types-grid">
                  {serviceTypes.map((type, idx) => (
                    <label
                      key={idx}
                      className={`service-type-option ${formData.serviceType === type ? 'active' : ''}`}
                    >
                      <input
                        type="radio"
                        name="serviceType"
                        value={type}
                        checked={formData.serviceType === type}
                        onChange={() => setFormData({ ...formData, serviceType: type })}
                      />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 5. Service Location & Issue */}
              <div className="form-fieldset-group">
                <div className="form-legend-title">
                  <MapPin size={18} />
                  <span>Service Location & Issue</span>
                </div>

                <div>
                  <label className="form-field-label">
                    Address / Location <span className="req">*</span>
                  </label>
                  <div className="input-with-icon">
                    <MapPin className="field-icon" size={18} />
                    <input
                      type="text"
                      required
                      className="form-input-styled"
                      placeholder="e.g. Near Municipal Office, Alipiri Road, Tirupati"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="form-field-label">Describe Your Requirement</label>
                  <textarea
                    rows={4}
                    className="form-textarea-styled"
                    placeholder="Tell us what you need (e.g. 8-port switch replacement, Wi-Fi dead zones in office, 3-inch thermal printer paper jam, Windows OS reinstall)..."
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                  />
                </div>
              </div>

              {/* 6. Review & Submit */}
              <div className="booking-preview-notice">
                <AlertCircle size={22} className="notice-icon" />
                <p>
                  <strong>Review Booking Request:</strong> This is a UI preview. Submitting here prepares
                  a request summary; it does not automatically dispatch an engineer or confirm an appointment until GMK contacts you.
                </p>
              </div>

              <button type="submit" className="btn-submit-booking">
                <span>Book a Service</span>
                <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 3. HOW BOOKING WORKS */}
      <section className="booking-process-section">
        <Reveal once={false}>
          <div className="booking-section-header">
            <span className="sub-badge">Clear & Transparent Process</span>
            <h2>How Booking Works</h2>
            <p>Four simple steps from request to completed installation.</p>
          </div>
        </Reveal>

        <div className="process-steps-grid">
          <Reveal delay={0.05} once={false}>
            <div className="process-step-card">
              <span className="step-number-tag">01</span>
              <div className="step-card-icon">
                <ClipboardList size={24} />
              </div>
              <h3>Step 1 — Submit Your Request</h3>
              <p>Select the service and share your contact details and requirements.</p>
            </div>
          </Reveal>

          <Reveal delay={0.15} once={false}>
            <div className="process-step-card">
              <span className="step-number-tag">02</span>
              <div className="step-card-icon">
                <PhoneCall size={24} />
              </div>
              <h3>Step 2 — Confirmation</h3>
              <p>GMK can contact you to discuss the issue, availability, and estimated charges.</p>
            </div>
          </Reveal>

          <Reveal delay={0.25} once={false}>
            <div className="process-step-card">
              <span className="step-number-tag">03</span>
              <div className="step-card-icon">
                <CalendarCheck size={24} />
              </div>
              <h3>Step 3 — Schedule the Service</h3>
              <p>Agree on the appointment date, time, and service location.</p>
            </div>
          </Reveal>

          <Reveal delay={0.35} once={false}>
            <div className="process-step-card">
              <span className="step-number-tag">04</span>
              <div className="step-card-icon">
                <CheckCircle2 size={24} />
              </div>
              <h3>Step 4 — Service & Testing</h3>
              <p>The agreed work is performed and relevant functionality is checked.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. NEED IMMEDIATE ASSISTANCE? */}
      <section className="booking-immediate-section">
        <Reveal once={false}>
          <div className="immediate-container">
            <h2>Need Immediate Assistance?</h2>
            <p className="immediate-desc">
              Have an urgent network outage or hardware emergency? Call us directly or message us on WhatsApp.
            </p>

            <div className="contacts-cards-grid">
              <TiltCard className="contact-phone-card" maxRotation={6}>
                <span className="phone-tag-badge phone-primary">Primary Contact</span>
                <a href="tel:7032130328" className="contact-phone-num">
                  <Phone size={20} color="#00f0ff" />
                  <span>7032130328</span>
                </a>
                <button
                  type="button"
                  className="btn-copy-num"
                  onClick={() => handleCopyPhone('7032130328')}
                >
                  {copiedNumber === '7032130328' ? (
                    <>
                      <Check size={14} color="#34d399" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={14} /> Copy Number
                    </>
                  )}
                </button>
              </TiltCard>

              <TiltCard className="contact-phone-card" maxRotation={6}>
                <span className="phone-tag-badge phone-additional">Additional Contact</span>
                <a href="tel:7702130328" className="contact-phone-num">
                  <Phone size={20} color="#38bdf8" />
                  <span>7702130328</span>
                </a>
                <button
                  type="button"
                  className="btn-copy-num"
                  onClick={() => handleCopyPhone('7702130328')}
                >
                  {copiedNumber === '7702130328' ? (
                    <>
                      <Check size={14} color="#34d399" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={14} /> Copy Number
                    </>
                  )}
                </button>
              </TiltCard>

              <TiltCard className="contact-phone-card" maxRotation={6}>
                <span className="phone-tag-badge phone-additional">Additional Contact</span>
                <a href="tel:7287830328" className="contact-phone-num">
                  <Phone size={20} color="#38bdf8" />
                  <span>7287830328</span>
                </a>
                <button
                  type="button"
                  className="btn-copy-num"
                  onClick={() => handleCopyPhone('7287830328')}
                >
                  {copiedNumber === '7287830328' ? (
                    <>
                      <Check size={14} color="#34d399" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={14} /> Copy Number
                    </>
                  )}
                </button>
              </TiltCard>
            </div>

            <div className="immediate-location-bar">
              <MapPin size={18} color="#00f0ff" />
              <span>Near Municipal Office, Alipiri Road, Tirupati, Andhra Pradesh.</span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 5. BOOKING PAGE — ARCHITECTURE & IMPLEMENTATION FEATURES */}
      <section className="booking-features-section">
        <Reveal once={false}>
          <div className="booking-section-header">
            <span className="sub-badge" style={{ color: '#34d399' }}>Implementation Standards</span>
            <h2>Booking System Implementation Architecture</h2>
            <p>Key technical specifications built into the GMK customer booking workflow.</p>
          </div>
        </Reveal>

        <div className="features-grid">
          <Reveal delay={0.05} once={false}>
            <div className="feature-impl-card">
              <div className="feature-impl-icon">
                <FileText size={22} />
              </div>
              <div>
                <h4>Booking Reference ID</h4>
                <p>Generates a unique tracking ID for every submitted request (e.g. GMK-782194).</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12} once={false}>
            <div className="feature-impl-card">
              <div className="feature-impl-icon">
                <Laptop size={22} />
              </div>
              <div>
                <h4>Admin Dashboard Integration</h4>
                <p>Designed for engineers to view, accept, reschedule, or cancel bookings in real time.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.19} once={false}>
            <div className="feature-impl-card">
              <div className="feature-impl-icon">
                <Sparkles size={22} />
              </div>
              <div>
                <h4>Lifecycle Status Labels</h4>
                <p>Clear audit states: Pending, Confirmed, In Progress, Completed, or Cancelled.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.26} once={false}>
            <div className="feature-impl-card">
              <div className="feature-impl-icon">
                <Mail size={22} />
              </div>
              <div>
                <h4>Email / SMS / WhatsApp Alerts</h4>
                <p>Instant multi-channel notifications to both customer and on-call technician.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.33} once={false}>
            <div className="feature-impl-card">
              <div className="feature-impl-icon">
                <CalendarCheck size={22} />
              </div>
              <div>
                <h4>Admin-Managed Availability</h4>
                <p>Guarantees slot verification instead of treating preferred times as auto-confirmed.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4} once={false}>
            <div className="feature-impl-card">
              <div className="feature-impl-icon">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h4>Security & Validation</h4>
                <p>Spam protection, field sanitization, and secure customer record storage.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Booking;
