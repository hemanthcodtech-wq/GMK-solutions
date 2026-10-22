import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, ArrowLeft, Lock, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { heroStaggerContainer, heroItemRise } from '../utils/animations';
import Reveal from '../components/Reveal';
import './Legal.css';

const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      {/* Hero Header */}
      <section className="legal-hero">
        <motion.div
          className="legal-hero-container"
          variants={heroStaggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={heroItemRise} className="legal-breadcrumb">
            <Link to="/" className="breadcrumb-link">
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>
          </motion.div>

          <motion.div variants={heroItemRise} className="legal-badge">
            <Lock size={16} />
            <span>Legal & Data Protection</span>
          </motion.div>

          <div style={{ overflow: 'hidden' }}>
            <motion.h1 variants={heroItemRise} className="legal-title">
              Privacy Policy
            </motion.h1>
          </div>

          <motion.div variants={heroItemRise} className="legal-meta-row">
            <span className="legal-company">GMK Network Solutions</span>
            <span className="meta-sep">•</span>
            <span className="legal-date">
              <Calendar size={14} />
              Last Updated: 23 October 2026
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* Main Legal Content */}
      <section className="legal-content-section">
        <div className="legal-container">
          <Reveal once={false}>
            <div className="legal-card">
              <div className="legal-body-prose">
                <section className="legal-block">
                  <h2>1. Introduction</h2>
                  <p>
                    GMK Network Solutions (“we,” “our,” or “us”) respects your privacy and is committed to protecting the personal information you share with us through our website, service-booking forms, phone calls, WhatsApp communications, and other business interactions.
                  </p>
                  <p>
                    This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website or request our services.
                  </p>
                </section>

                <section className="legal-block">
                  <h2>2. Information We Collect</h2>
                  <p>Depending on how you interact with us, we may collect the following information:</p>
                  <ul>
                    <li><strong>Personal information:</strong> Name, phone number, email address, and other contact details.</li>
                    <li><strong>Service information:</strong> Selected service, preferred appointment date and time, service address, and details of your technical issue.</li>
                    <li><strong>Device information:</strong> Computer or laptop model, operating system, hardware details, and information relevant to the requested repair.</li>
                    <li><strong>Website information:</strong> Basic technical information such as browser type, device type, and website usage data, where applicable.</li>
                    <li><strong>Communication records:</strong> Messages, enquiries, booking details, and feedback you provide to us.</li>
                  </ul>
                  <div className="legal-notice-box">
                    <strong>Important Note:</strong> Please do not submit passwords, banking credentials, personal identification documents, or other sensitive information through website forms unless specifically necessary and handled through an appropriate secure process.
                  </div>
                </section>

                <section className="legal-block">
                  <h2>3. How We Use Your Information</h2>
                  <p>We may use your information to:</p>
                  <ul>
                    <li>Respond to enquiries and service requests.</li>
                    <li>Schedule and manage appointments.</li>
                    <li>Provide networking, LAN cabling, Wi-Fi, computer repair, software installation, hardware, and printer services.</li>
                    <li>Contact you regarding bookings, service updates, quotations, and technical support.</li>
                    <li>Prepare quotations, invoices, and service records.</li>
                    <li>Improve our website, services, and customer experience.</li>
                    <li>Prevent misuse, fraud, and unauthorized access.</li>
                    <li>Comply with applicable legal requirements.</li>
                  </ul>
                  <p>
                    We will use your information for purposes reasonably connected to your interaction with us and as otherwise permitted by applicable law.
                  </p>
                </section>

                <section className="legal-block">
                  <h2>4. Sharing of Information</h2>
                  <p><strong>We do not sell your personal information.</strong></p>
                  <p>
                    We may share relevant information with trusted service providers when necessary to operate our website, communicate with you, deliver requested services, or maintain business records. We may also disclose information when required by law or to protect our lawful rights.
                  </p>
                  <p>
                    Where third-party services such as hosting providers, analytics tools, maps, or messaging platforms are used, their own privacy policies may also apply.
                  </p>
                </section>

                <section className="legal-block">
                  <h2>5. Cookies and Website Technologies</h2>
                  <p>
                    Our website may use cookies or similar technologies to maintain website functionality, understand visitor activity, and improve performance.
                  </p>
                  <p>
                    You can manage cookies through your browser settings. Disabling certain cookies may affect some website features.
                  </p>
                  <p>
                    Any analytics or advertising technologies will be used according to the tools actually implemented on our website and applicable consent requirements.
                  </p>
                </section>

                <section className="legal-block">
                  <h2>6. Data Security</h2>
                  <p>
                    We take reasonable technical and organizational measures to protect personal information against unauthorized access, loss, misuse, alteration, or disclosure.
                  </p>
                  <p>
                    However, no website, electronic transmission, or storage system can be guaranteed to be completely secure. Please exercise care when sharing information online.
                  </p>
                </section>

                <section className="legal-block">
                  <h2>7. Data Retention</h2>
                  <p>
                    We retain personal information only for as long as reasonably necessary to respond to enquiries, complete services, maintain business and financial records, resolve disputes, and meet applicable legal obligations.
                  </p>
                  <p>
                    When information is no longer required, we will take reasonable steps to delete it or otherwise dispose of it securely, subject to legal retention requirements.
                  </p>
                </section>

                <section className="legal-block">
                  <h2>8. Your Privacy Rights</h2>
                  <p>
                    Subject to applicable law, you may request access to, correction of, or deletion of your personal information. You may also raise concerns about how your information is being used.
                  </p>
                  <p>
                    Some records may need to be retained where required by law or for legitimate business purposes.
                  </p>
                  <p>
                    To submit a privacy-related request, contact us using the details below.
                  </p>
                </section>

                <section className="legal-block">
                  <h2>9. Third-Party Links</h2>
                  <p>
                    Our website may contain links to third-party websites or services. We are not responsible for their content, security, or privacy practices. Please review their policies before providing personal information.
                  </p>
                </section>

                <section className="legal-block">
                  <h2>10. Children's Privacy</h2>
                  <p>
                    Our website and services are not specifically directed at children. We do not knowingly seek to collect children's personal information without appropriate authorization where required by law.
                  </p>
                </section>

                <section className="legal-block">
                  <h2>11. Changes to This Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our services, website features, or legal requirements. The revised policy will be published on this page with an updated revision date.
                  </p>
                </section>

                <section className="legal-block legal-contact-block">
                  <h2>12. Contact Us</h2>
                  <p>For privacy questions, requests, or complaints, contact:</p>
                  <div className="legal-contact-grid">
                    <div className="contact-spec-item">
                      <span className="spec-label">Business Name:</span>
                      <strong className="spec-val">GMK Network Solutions</strong>
                    </div>
                    <div className="contact-spec-item">
                      <span className="spec-label"><MapPin size={15} /> Address:</span>
                      <span className="spec-val">Near Municipal Office, Alipiri Road, Tirupati, Andhra Pradesh, India</span>
                    </div>
                    <div className="contact-spec-item">
                      <span className="spec-label"><Phone size={15} /> Primary Phone:</span>
                      <a href="tel:7032130328" className="spec-link">7032130328</a>
                    </div>
                    <div className="contact-spec-item">
                      <span className="spec-label">Additional Numbers:</span>
                      <span className="spec-val">
                        <a href="tel:7702130328" className="spec-link">7702130328</a>,{' '}
                        <a href="tel:7287830328" className="spec-link">7287830328</a>
                      </span>
                    </div>
                    <div className="contact-spec-item">
                      <span className="spec-label"><Mail size={15} /> Official Email:</span>
                      <span className="spec-val">info@gmknetworksolutions.com</span>
                    </div>
                  </div>
                  <p className="legal-closing-ack">
                    By using our website, you acknowledge that you have read this Privacy Policy.
                  </p>
                </section>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
