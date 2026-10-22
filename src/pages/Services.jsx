import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { heroStaggerContainer, heroItemRise } from '../utils/animations';
import {
  Wifi,
  Network,
  Server,
  Layers,
  Cpu,
  Monitor,
  Printer,
  HardDrive,
  CheckCircle2,
  Phone,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Clock,
  ThumbsUp,
  FileCheck
} from 'lucide-react';

// Images for each service
import imgNetworking from '../assets/svc_networking.jpg';
import imgRack from '../assets/gallery_rack_dressing.jpg';
import imgCabling from '../assets/svc_cabling.jpg';
import imgPcHardware from '../assets/svc_pc_hardware.jpg';
import imgOsSoftware from '../assets/svc_os_software.jpg';
import imgPeripherals from '../assets/svc_peripherals.jpg';
import imgDesktopLaptop from '../assets/svc_desktop_laptop.jpg';
import imgPrinter from '../assets/gallery_printer_pos.jpg';
import Reveal from '../components/Reveal';

import './Services.css';

const servicesData = [
  {
    id: 'networking-solutions',
    icon: Wifi,
    serviceKey: 'LAN network installation and configuration',
    title: 'Networking Solutions',
    heading: 'Reliable Networking for Seamless Connectivity',
    image: imgNetworking,
    content:
      'We provide networking solutions designed to keep your devices connected and your business operations running smoothly. From small office networks to structured network setups, we assist with installation, configuration, and troubleshooting.',
    bullets: [
      'LAN network installation and configuration',
      'Wi-Fi router and access point setup',
      'Network routing and switching',
      'Network connectivity troubleshooting',
      'Device connectivity and network optimization'
    ]
  },
  {
    id: 'rack-setup-cable-management',
    icon: Server,
    serviceKey: 'Rack dressing and cable organization',
    title: 'Rack Setup & Cable Management',
    heading: 'Organized Infrastructure. Professional Installation.',
    image: imgRack,
    content:
      'We help create clean, organized, and maintainable networking infrastructure for offices, commercial spaces, and other IT environments.',
    bullets: [
      'Network rack installation and setup',
      'Rack dressing and cable organization',
      'Network switch and equipment mounting',
      'Cable routing and labeling',
      'Infrastructure inspection and troubleshooting'
    ]
  },
  {
    id: 'patch-panel-lan-cabling',
    icon: Layers,
    serviceKey: 'Patch panel installation and termination',
    title: 'Patch Panel Setup & LAN Cabling',
    heading: 'Structured Cabling for Reliable Connections',
    image: imgCabling,
    content:
      'A properly installed cabling system improves network organization and makes maintenance easier. GMK Network Solutions supports structured LAN cabling for new installations and existing infrastructure upgrades.',
    bullets: [
      'Patch panel installation and termination',
      'LAN cable laying and routing',
      'RJ45 connector and network jack setup',
      'Cable testing and connectivity checks',
      'Network point installation and labeling'
    ]
  },
  {
    id: 'os-hardware-troubleshooting',
    icon: Cpu,
    serviceKey: 'OS & Hardware Troubleshooting',
    title: 'OS & Hardware Troubleshooting',
    heading: 'Get Your Systems Back on Track',
    image: imgPcHardware,
    content:
      'We help identify and resolve common computer operating system and hardware problems to reduce downtime and improve system reliability.',
    bullets: [
      'Operating system error troubleshooting',
      'Desktop and laptop hardware diagnostics',
      'Slow system and startup issue resolution',
      'RAM, storage, and peripheral checks',
      'Basic system maintenance and performance support'
    ]
  },
  {
    id: 'os-office-installation',
    icon: Monitor,
    serviceKey: 'Operating System & MS Office Installation',
    title: 'Operating System & MS Office Installation',
    heading: 'Essential Software Setup for Your Systems',
    image: imgOsSoftware,
    content:
      'We assist with operating system installation, configuration, and productivity software setup, helping customers prepare their computers for work, study, and business use.',
    bullets: [
      'Windows and supported OS installation',
      'Operating system configuration',
      'Microsoft Office installation and setup',
      'Software compatibility checks',
      'Installation using valid licenses and authorized software'
    ]
  },
  {
    id: 'drivers-peripheral-installation',
    icon: HardDrive,
    serviceKey: 'Drivers & Peripheral Installation',
    title: 'Drivers & Peripheral Installation',
    heading: 'Smooth Setup for Your Devices',
    image: imgPeripherals,
    content:
      'We help configure the drivers and peripherals needed for your computer systems to work correctly.',
    bullets: [
      'Printer and scanner driver installation',
      'Audio, graphics, and network driver setup',
      'Keyboard, mouse, and peripheral configuration',
      'Device detection and compatibility troubleshooting',
      'Connectivity and functionality testing'
    ]
  },
  {
    id: 'desktop-laptop-support',
    icon: Monitor,
    serviceKey: 'Desktop & Laptop Support',
    title: 'Desktop & Laptop Support',
    heading: 'Computer Support for Home & Business',
    image: imgDesktopLaptop,
    content:
      'From new computer setup to everyday technical troubleshooting, we provide practical assistance for desktops, laptops, and connected devices.',
    bullets: [
      'Desktop and laptop installation',
      'System setup and configuration',
      'Hardware and software troubleshooting',
      'Peripheral connectivity support',
      'Routine maintenance assistance'
    ]
  },
  {
    id: 'thermal-billing-printers',
    icon: Printer,
    serviceKey: 'Thermal Billing Printer Sales & Service',
    title: 'Thermal Billing Printer Sales & Service',
    heading: 'Reliable Billing Solutions for Your Business',
    image: imgPrinter,
    content:
      'We offer thermal billing printer sales and service to support shops, retail counters, restaurants, and other businesses that need dependable receipt printing.',
    bullets: [
      'Thermal billing printer sales',
      'Printer installation and configuration',
      'Billing software and printer connectivity assistance',
      'Print quality and paper-feed troubleshooting',
      'Printer maintenance and service support'
    ]
  }
];

const faqs = [
  {
    q: 'Do you provide on-site networking services?',
    a: 'Yes, on-site service can be arranged based on the type of work, location in Tirupati and surrounding AP regions, and technician availability.'
  },
  {
    q: 'Do you install Wi-Fi routers and access points?',
    a: 'Yes, we support router and access point setup, configuration, mesh bridging, and connectivity troubleshooting for homes and offices.'
  },
  {
    q: 'Do you sell thermal billing printers?',
    a: 'Yes, GMK Network Solutions offers thermal billing printer sales and service. Contact us directly to check available models, paper sizes, and pricing.'
  },
  {
    q: 'Can you install operating systems and MS Office?',
    a: 'We assist with operating system and MS Office installation using valid licenses and authorized software.'
  },
  {
    q: 'How do I book a service?',
    a: 'Use our website Booking page with your service preselected, or contact us by phone (7032130328) or WhatsApp to discuss your requirements.'
  }
];

const Services = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="services-page-container">
      {/* ========================================================
          01. HERO SECTION
          ======================================================== */}
      <section className="services-hero-section">
        <motion.div
          className="services-hero-content"
          variants={heroStaggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={heroItemRise} className="services-kicker">
            Our Services
          </motion.span>
          <div style={{ overflow: 'hidden' }}>
            <motion.h1 variants={heroItemRise} className="services-hero-title">
              Complete Networking & IT Solutions for Your Business
            </motion.h1>
          </div>
          <motion.p variants={heroItemRise} className="services-hero-desc">
            At GMK Network Solutions, we provide networking installations, structured cabling, computer support, software installation, and thermal billing printer services. We help homes, offices, shops, and businesses maintain reliable IT infrastructure.
          </motion.p>
          <motion.div variants={heroItemRise} className="services-hero-cta-group">
            <Link to="/booking" className="svc-cta-btn primary-btn">
              <span>Book a Service</span>
              <ArrowRight size={17} />
            </Link>
            <Link to="/contact" className="svc-cta-btn secondary-btn">
              <span>Contact Us</span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ========================================================
          02 - 09. SERVICES GRID (3-cols desktop, 2-cols tablet, 1-col mobile)
          ======================================================== */}
      <section className="services-catalog-section">
        <div className="services-catalog-grid">
          {servicesData.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <Reveal key={idx} delay={(idx % 3) * 0.08} once={false}>
                <div className="svc-full-card" id={svc.id}>
                  {/* Generated Photograph Header */}
                  <div className="svc-card-img-wrapper">
                    <img src={svc.image} alt={svc.title} className="svc-card-img" />
                    <div className="svc-card-img-overlay"></div>
                    <div className="svc-card-icon-floating">
                      <Icon size={24} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="svc-card-body">
                    <span className="svc-badge-category">{svc.title}</span>
                    <h3 className="svc-card-heading">{svc.heading}</h3>
                    <p className="svc-card-text">{svc.content}</p>

                    <div className="svc-bullets-list">
                      {svc.bullets.map((item, bIdx) => (
                        <div key={bIdx} className="svc-bullet-item">
                          <CheckCircle2 size={15} className="bullet-check-icon" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Enquire Now Link opens booking with service preselected */}
                    <div className="svc-card-action">
                      <Link
                        to={`/booking?service=${encodeURIComponent(svc.serviceKey)}`}
                        className="svc-enquire-btn"
                      >
                        <span>Enquire Now</span>
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          10. WHY CHOOSE GMK NETWORK SOLUTIONS?
          ======================================================== */}
      <section className="services-why-section">
        <div className="services-section-header">
          <span className="services-kicker">Core Strengths</span>
          <h2 className="services-section-title">Why Choose GMK Network Solutions?</h2>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon-box">
              <ShieldCheck size={28} />
            </div>
            <h4 className="why-title">Professional Approach</h4>
            <p className="why-desc">Organized installations and practical troubleshooting with industrial-grade standards.</p>
          </div>

          <div className="why-card">
            <div className="why-icon-box">
              <Network size={28} />
            </div>
            <h4 className="why-title">Networking Expertise</h4>
            <p className="why-desc">Support for seamless connectivity, structured cabling, and resilient network infrastructure.</p>
          </div>

          <div className="why-card">
            <div className="why-icon-box">
              <Cpu size={28} />
            </div>
            <h4 className="why-title">End-to-End IT Support</h4>
            <p className="why-desc">Assistance with systems, OS, software, peripherals, and commercial thermal printers.</p>
          </div>

          <div className="why-card">
            <div className="why-icon-box">
              <ThumbsUp size={28} />
            </div>
            <h4 className="why-title">Customer-Focused Service</h4>
            <p className="why-desc">Clear communication about service requirements and transparent, cost-effective solutions.</p>
          </div>
        </div>
      </section>

      {/* ========================================================
          11. OUR SERVICE PROCESS
          ======================================================== */}
      <section className="services-process-section">
        <div className="services-section-header">
          <span className="services-kicker">How We Work</span>
          <h2 className="services-section-title">Our Service Process</h2>
        </div>

        <div className="process-steps-grid">
          <div className="process-step-card">
            <span className="step-num">01</span>
            <h4 className="step-title">Tell Us Your Requirement</h4>
            <p className="step-desc">Choose the service you need and describe your issue or installation requirements.</p>
          </div>

          <div className="process-step-card">
            <span className="step-num">02</span>
            <h4 className="step-title">Discuss the Solution</h4>
            <p className="step-desc">We review the requirements and discuss the recommended service and applicable charges.</p>
          </div>

          <div className="process-step-card">
            <span className="step-num">03</span>
            <h4 className="step-title">Schedule Your Service</h4>
            <p className="step-desc">Select a preferred date and time, subject to confirmation by our dispatch team.</p>
          </div>

          <div className="process-step-card">
            <span className="step-num">04</span>
            <h4 className="step-title">Service & Testing</h4>
            <p className="step-desc">The agreed work is carried out, followed by rigorous connectivity checks and quality testing.</p>
          </div>
        </div>
      </section>

      {/* ========================================================
          12. FREQUENTLY ASKED QUESTIONS
          ======================================================== */}
      <section className="services-faq-section">
        <div className="services-section-header">
          <span className="services-kicker">Got Questions?</span>
          <h2 className="services-section-title">Frequently Asked Questions</h2>
        </div>

        <div className="faq-accordion-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openFaq === index ? 'open' : ''}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question-row">
                <span className="faq-q-text">{faq.q}</span>
                <span className="faq-toggle-icon">
                  {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </div>
              {openFaq === index && (
                <div className="faq-answer-row">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          13. FINAL CALL-TO-ACTION
          ======================================================== */}
      <section className="services-cta-banner">
        <div className="cta-banner-card">
          <h2 className="cta-banner-title">Need Reliable Networking or IT Support?</h2>
          <p className="cta-banner-desc">
            Let GMK Network Solutions help you with networking installation, computer support, and billing printer requirements.
          </p>
          <div className="cta-banner-actions">
            <Link to="/booking" className="cta-banner-btn">
              <span>Book Your Service</span>
              <ArrowRight size={17} />
            </Link>
            <div className="cta-phones-list">
              <span className="call-prompt">Call:</span>
              <a href="tel:7032130328">7032130328</a>
              <span>·</span>
              <a href="tel:7702130328">7702130328</a>
              <span>·</span>
              <a href="tel:7287830328">7287830328</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
