import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, ArrowLeft, Scale, Mail, Phone, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { heroStaggerContainer, heroItemRise } from '../utils/animations';
import Reveal from '../components/Reveal';
import './Legal.css';

const TermsAndConditions = () => {
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
            <Scale size={16} />
            <span>Service Agreement & Terms</span>
          </motion.div>

          <div style={{ overflow: 'hidden' }}>
            <motion.h1 variants={heroItemRise} className="legal-title">
              Terms & Conditions
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
                    Welcome to the GMK Network Solutions website. These Terms & Conditions govern your access to and use of our website and the services offered by us.
                  </p>
                  <p>
                    By accessing our website, submitting a booking request, or engaging our services, you agree to these terms. If you do not agree, please discontinue use of the website.
                  </p>
                </section>

                <section className="legal-block">
                  <h2>2. Our Services</h2>
                  <p>GMK Network Solutions provides services that may include:</p>
                  <ul>
                    <li>LAN networking, Wi-Fi installation, access point configuration, routing, and switching.</li>
                    <li>Network rack setup, rack dressing, patch panel installation, and LAN cabling.</li>
                    <li>Desktop and laptop troubleshooting, hardware support, and operating system issue resolution.</li>
                    <li>Operating system, MS Office, and driver installation, subject to applicable licensing requirements.</li>
                    <li>Desktop and laptop sales or related hardware supply, where offered.</li>
                    <li>Thermal billing printer sales, installation, maintenance, and servicing.</li>
                    <li>Related IT support and technical consultation.</li>
                  </ul>
                  <p>
                    The availability, scope, specifications, and pricing of services may vary depending on the customer's requirements and the equipment involved.
                  </p>
                </section>

                <section className="legal-block">
                  <h2>3. Service Requests and Bookings</h2>
                  <p>
                    Submitting a booking form or enquiry does not automatically guarantee an appointment or confirm that a service has been accepted.
                  </p>
                  <p>
                    Our team may contact you to verify your details, discuss the issue, confirm availability, and provide a quotation. A booking will be considered confirmed only after confirmation from our team.
                  </p>
                  <p>
                    Customers are responsible for providing accurate contact details, service addresses, equipment information, and issue descriptions.
                  </p>
                </section>

                <section className="legal-block">
                  <h2>4. Pricing and Quotations</h2>
                  <p>
                    Prices may depend on the type of service, equipment condition, materials, travel requirements, software licensing, spare parts, and complexity of the work.
                  </p>
                  <p>
                    Any estimate provided before inspection may be revised if additional issues or requirements are discovered. Where practicable, we will inform you of additional charges and obtain approval before carrying out the extra work.
                  </p>
                  <p>
                    Taxes, transport charges, installation materials, replacement parts, and other applicable costs will be communicated as appropriate.
                  </p>
                </section>

                <section className="legal-block">
                  <h2>5. Payments</h2>
                  <p>
                    Payment terms will be communicated at the time of quotation or service confirmation.
                  </p>
                  <p>
                    Customers must pay the agreed charges using the payment methods accepted by GMK Network Solutions. Any applicable advance payment, cancellation charge, or outstanding balance will be communicated before the relevant transaction or service.
                  </p>
                  <p>
                    Invoices or payment receipts will be provided where applicable.
                  </p>
                </section>

                <section className="legal-block">
                  <h2>6. Cancellations and Rescheduling</h2>
                  <p>
                    Customers who need to cancel or reschedule an appointment should notify us as early as possible.
                  </p>
                  <p>
                    We will make reasonable efforts to accommodate changes, subject to technician availability, travel arrangements, and the status of any work already started.
                  </p>
                  <p>
                    Any non-refundable advance, cancellation fee, or charge for completed work or specially procured materials will be communicated before it applies. Refunds, where due, will be handled in accordance with the agreed terms and applicable law.
                  </p>
                </section>

                <section className="legal-block">
                  <h2>7. Customer Responsibilities</h2>
                  <p>Customers agree to:</p>
                  <ul>
                    <li>Provide accurate information about the equipment, network, and requested service.</li>
                    <li>Ensure that they are authorized to request changes to the relevant device, network, or premises.</li>
                    <li>Provide reasonable access to the equipment and service location.</li>
                    <li>Obtain necessary permissions before we access third-party systems or business networks.</li>
                    <li>Maintain backups of important data before repair, reinstallation, or other work that may affect stored information.</li>
                    <li>Use properly licensed software and provide valid license credentials where required.</li>
                    <li>Pay agreed charges for authorized services and materials.</li>
                  </ul>
                </section>

                <section className="legal-block">
                  <h2>8. Data, Devices, and Software</h2>
                  <p>
                    Computer repair, operating system installation, formatting, malware removal, and hardware replacement may carry a risk of data loss or device malfunction.
                  </p>
                  <div className="legal-notice-box">
                    <strong>Data Backup Recommendation:</strong> Customers should back up important files before service wherever possible. We will take reasonable care while handling customer equipment, but we cannot guarantee recovery of all data or the preservation of every file in circumstances beyond our reasonable control.
                  </div>
                  <p>
                    Customers must not provide software or license keys that they are not authorized to use. We do not authorize software piracy or unauthorized activation.
                  </p>
                </section>

                <section className="legal-block">
                  <h2>9. Hardware and Spare Parts</h2>
                  <p>
                    Where hardware, accessories, or spare parts are supplied, availability, specifications, compatibility, and delivery timelines are subject to supplier stock and confirmation.
                  </p>
                  <p>
                    Manufacturer warranties, where applicable, are governed by the relevant manufacturer's terms. Any separate warranty offered by GMK Network Solutions will be communicated in writing, including its duration, coverage, and exclusions.
                  </p>
                  <p>
                    Nothing in these terms excludes any warranty or consumer right that cannot legally be excluded.
                  </p>
                </section>

                <section className="legal-block">
                  <h2>10. Service Quality and Limitations</h2>
                  <p>
                    We aim to provide professional and reasonable technical support. However, some issues may depend on equipment condition, third-party software, internet service providers, power supply, manufacturer restrictions, or other factors outside our control.
                  </p>
                  <p>
                    We cannot guarantee uninterrupted network connectivity, complete elimination of every technical issue, or compatibility with all third-party products.
                  </p>
                  <p>
                    If a problem persists after service, please contact us with the service details so we can assess the issue and explain the available next steps.
                  </p>
                </section>

                <section className="legal-block">
                  <h2>11. Limitation of Liability</h2>
                  <p>
                    To the extent permitted by applicable law, GMK Network Solutions will not be responsible for indirect or consequential losses arising from the use of our website or services.
                  </p>
                  <p>
                    Nothing in these terms excludes or limits liability where such exclusion or limitation is prohibited by law, including applicable consumer rights. Any responsibility for direct loss will be assessed in accordance with the circumstances, the agreed scope of service, and applicable law.
                  </p>
                </section>

                <section className="legal-block">
                  <h2>12. Website Use and Intellectual Property</h2>
                  <p>
                    Website content, including text, branding, graphics, logos, and design elements, is owned by or used with permission by the relevant rights holder unless otherwise stated.
                  </p>
                  <p>
                    You may not reproduce, republish, distribute, or commercially exploit website content without prior authorization, except where permitted by law.
                  </p>
                  <p>
                    You agree not to misuse the website, attempt unauthorized access, interfere with its operation, or submit unlawful, misleading, or harmful content.
                  </p>
                </section>

                <section className="legal-block">
                  <h2>13. Third-Party Services</h2>
                  <p>
                    Our services may depend on third-party products, software, internet connections, hosting providers, manufacturers, or external websites. Such third-party services are governed by their own terms and policies.
                  </p>
                  <p>
                    We are not responsible for interruptions or changes caused by third parties to the extent those matters are outside our reasonable control and subject to applicable law.
                  </p>
                </section>

                <section className="legal-block">
                  <h2>14. Privacy</h2>
                  <p>
                    Any personal information collected through our website or service interactions will be handled in accordance with our <Link to="/privacy" className="legal-inline-link">Privacy Policy</Link> and applicable data protection laws.
                  </p>
                </section>

                <section className="legal-block">
                  <h2>15. Changes to These Terms</h2>
                  <p>
                    We may revise these Terms & Conditions when our services, website, or legal obligations change. Updates will be published on this page with a revised date.
                  </p>
                  <p>
                    The terms applicable to a particular service may also be documented in the relevant quotation, invoice, or written service agreement.
                  </p>
                </section>

                <section className="legal-block">
                  <h2>16. Governing Law and Disputes</h2>
                  <p>
                    These terms are subject to the laws of India. Any dispute will be addressed through good-faith discussions where practicable. The appropriate courts in Tirupati, Andhra Pradesh, will have jurisdiction, subject to applicable law and mandatory consumer protections.
                  </p>
                </section>

                <section className="legal-block legal-contact-block">
                  <h2>17. Contact Information</h2>
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
                    Thank you for choosing GMK Network Solutions.
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

export default TermsAndConditions;
