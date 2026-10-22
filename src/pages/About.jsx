import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Network, 
  Server, 
  Cpu, 
  Printer, 
  ShieldCheck, 
  Sparkles, 
  FileText, 
  HeartHandshake, 
  GraduationCap, 
  Building2, 
  Store, 
  Home, 
  Phone, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  Compass, 
  MessageSquare
} from 'lucide-react';
import logoImg from '../assets/logo.png';
import svcNetworkingImg from '../assets/svc_networking.jpg';
import Reveal from '../components/Reveal';
import { motion } from 'framer-motion';
import { heroStaggerContainer, heroItemRise } from '../utils/animations';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* 1. HERO SECTION */}
      <section className="about-hero">
        <motion.div
          className="about-hero-container"
          variants={heroStaggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={heroItemRise} className="about-logo-wrapper">
            <img src={logoImg} alt="GMK Network Solutions" />
          </motion.div>
          <motion.div variants={heroItemRise} className="about-hero-badge">
            <Sparkles size={16} />
            <span>Startup Technology Provider</span>
          </motion.div>
          <div style={{ overflow: 'hidden' }}>
            <motion.h1 variants={heroItemRise} className="about-hero-title">
              About GMK Network Solutions
            </motion.h1>
          </div>
          <motion.p variants={heroItemRise} className="about-hero-tagline">
            Connecting Businesses. Empowering Technology.
          </motion.p>
          <motion.p variants={heroItemRise} className="about-hero-desc">
            At GMK Network Solutions, we are a startup focused on delivering reliable networking,
            computer support, and IT infrastructure solutions. We aim to help businesses, offices,
            retail stores, and individuals stay connected and work efficiently through practical technology services.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. WHO WE ARE */}
      <section className="about-who">
        <div className="about-who-container">
          <Reveal once={false}>
            <div className="about-who-text">
              <span className="section-tag">Who We Are</span>
              <h2>Technology Solutions You Can Rely On</h2>
              <p>
                GMK Network Solutions provides networking and IT support services designed to meet everyday
                technology needs. From LAN cabling and Wi-Fi configuration to system troubleshooting and thermal
                billing printer services, we aim to make technology easier to set up, manage, and maintain.
              </p>
              
              <div className="about-who-location">
                <MapPin size={24} className="loc-icon" />
                <div>
                  <h4>Local Presence in Tirupati</h4>
                  <p>Based near Municipal Office, Alipiri Road, Tirupati, Andhra Pradesh.</p>
                </div>
              </div>

              <p>
                We serve customers looking for practical networking installations, computer maintenance,
                software setup, and business technology support.
              </p>
              <div className="about-who-focus">
                <p style={{ margin: 0 }}>
                  <strong>Our focus is simple:</strong> understand each customer's requirements, recommend suitable solutions, and deliver service with care and professionalism.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} once={false}>
            <div className="about-who-visual">
              <div className="about-who-img-frame">
                <img src={svcNetworkingImg} alt="GMK Network Engineering" />
                <div className="about-who-badge-overlay">
                  <span className="badge-title">Local Support</span>
                  <p>Practical installations & responsive assistance in Tirupati.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. OUR MISSION, VISION & VALUES */}
      <section className="about-mvv">
        <Reveal once={false}>
          <div className="about-section-header">
            <span className="sub-tag">Guiding Principles</span>
            <h2>Our Mission, Vision & Values</h2>
            <p>The foundation of how we build trust and serve our customers every day.</p>
          </div>
        </Reveal>

        {/* Mission & Vision Cards */}
        <div className="mv-grid">
          <Reveal delay={0.1} once={false}>
            <div className="mv-card mv-mission">
              <div className="mv-icon-box">
                <Target size={28} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To provide dependable networking and IT services that help customers maintain
                reliable connectivity, productive systems, and efficient business operations.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2} once={false}>
            <div className="mv-card mv-vision">
              <div className="mv-icon-box">
                <Compass size={28} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To grow into a trusted networking and IT solutions provider known for quality
                service, customer satisfaction, and practical technology support.
              </p>
            </div>
          </Reveal>
        </div>

        {/* 5 Core Values */}
        <div className="values-container">
          <Reveal once={false}>
            <h3 className="values-title">Our Values</h3>
          </Reveal>
          <div className="values-grid">
            <Reveal delay={0.05} once={false}>
              <div className="value-card">
                <div className="value-icon">
                  <ShieldCheck size={24} />
                </div>
                <h4>Reliability</h4>
                <p>We prioritize dependable solutions.</p>
              </div>
            </Reveal>

            <Reveal delay={0.12} once={false}>
              <div className="value-card">
                <div className="value-icon">
                  <Sparkles size={24} />
                </div>
                <h4>Quality</h4>
                <p>We value careful installation and testing.</p>
              </div>
            </Reveal>

            <Reveal delay={0.19} once={false}>
              <div className="value-card">
                <div className="value-icon">
                  <FileText size={24} />
                </div>
                <h4>Transparency</h4>
                <p>We aim to communicate service requirements and charges clearly.</p>
              </div>
            </Reveal>

            <Reveal delay={0.26} once={false}>
              <div className="value-card">
                <div className="value-icon">
                  <HeartHandshake size={24} />
                </div>
                <h4>Customer Focus</h4>
                <p>We work to understand each customer's needs.</p>
              </div>
            </Reveal>

            <Reveal delay={0.33} once={false}>
              <div className="value-card">
                <div className="value-icon">
                  <GraduationCap size={24} />
                </div>
                <h4>Continuous Learning</h4>
                <p>We strive to keep improving our technical capabilities.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE DO */}
      <section className="about-what">
        <div className="about-section-header">
          <span className="sub-tag">Our Core Offerings</span>
          <h2>What We Do</h2>
          <p>Practical networking, computer, and POS hardware support for your daily workflow.</p>
        </div>

        <div className="what-grid">
          <div className="what-card">
            <div className="what-card-header">
              <div className="what-icon">
                <Network size={26} />
              </div>
              <h3>Networking Solutions</h3>
            </div>
            <p>LAN, Wi-Fi, access points, routing, switching, and connectivity support.</p>
            <Link to="/services" className="what-card-link">
              Learn More <ArrowRight size={15} />
            </Link>
          </div>

          <div className="what-card">
            <div className="what-card-header">
              <div className="what-icon">
                <Server size={26} />
              </div>
              <h3>Network Infrastructure</h3>
            </div>
            <p>Rack setup, cable management, patch panels, and structured LAN cabling.</p>
            <Link to="/services" className="what-card-link">
              Learn More <ArrowRight size={15} />
            </Link>
          </div>

          <div className="what-card">
            <div className="what-card-header">
              <div className="what-icon">
                <Cpu size={26} />
              </div>
              <h3>Computer & Software Support</h3>
            </div>
            <p>Operating systems, MS Office, drivers, hardware troubleshooting, and system setup.</p>
            <Link to="/services" className="what-card-link">
              Learn More <ArrowRight size={15} />
            </Link>
          </div>

          <div className="what-card">
            <div className="what-card-header">
              <div className="what-icon">
                <Printer size={26} />
              </div>
              <h3>Thermal Billing Printers</h3>
            </div>
            <p>Printer sales, installation, configuration, troubleshooting, and service.</p>
            <Link to="/services" className="what-card-link">
              Learn More <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE GMK NETWORK SOLUTIONS? */}
      <section className="about-why">
        <div className="about-section-header">
          <span className="sub-tag" style={{ color: '#34d399' }}>Why GMK</span>
          <h2>Why Choose GMK Network Solutions?</h2>
          <p>Committed to honest service, organized craftsmanship, and clear communication.</p>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <span className="why-num">01</span>
            <div className="why-icon">
              <CheckCircle2 size={24} />
            </div>
            <h3>Practical Solutions</h3>
            <p>Services tailored to your networking and IT requirements.</p>
          </div>

          <div className="why-card">
            <span className="why-num">02</span>
            <div className="why-icon">
              <Server size={24} />
            </div>
            <h3>Complete IT Support</h3>
            <p>Networking, systems, software, and printer assistance in one place.</p>
          </div>

          <div className="why-card">
            <span className="why-num">03</span>
            <div className="why-icon">
              <Sparkles size={24} />
            </div>
            <h3>Attention to Detail</h3>
            <p>A focus on organized installations and appropriate testing.</p>
          </div>

          <div className="why-card">
            <span className="why-num">04</span>
            <div className="why-icon">
              <FileText size={24} />
            </div>
            <h3>Clear Communication</h3>
            <p>Straightforward discussions about requirements, costs, and service scheduling.</p>
          </div>
        </div>
      </section>

      {/* 6. WHO WE SERVE */}
      <section className="about-serve">
        <div className="about-section-header">
          <span className="sub-tag">Our Clients</span>
          <h2>Who We Serve</h2>
          <p>We aim to support a wide range of customers across Tirupati and surrounding regions.</p>
        </div>

        <div className="serve-grid">
          <div className="serve-card">
            <div className="serve-icon">
              <Building2 size={26} />
            </div>
            <h4>Small and Medium-Sized Businesses</h4>
            <p>Robust networking and daily IT maintenance for expanding companies.</p>
          </div>

          <div className="serve-card">
            <div className="serve-icon">
              <Server size={26} />
            </div>
            <h4>Offices and Commercial Establishments</h4>
            <p>Organized structured cabling, rack management, and workstation setups.</p>
          </div>

          <div className="serve-card">
            <div className="serve-icon">
              <Store size={26} />
            </div>
            <h4>Retail Shops and Billing Counters</h4>
            <p>Thermal billing printers, POS connectivity, and barcode scanner setups.</p>
          </div>

          <div className="serve-card">
            <div className="serve-icon">
              <GraduationCap size={26} />
            </div>
            <h4>Educational Institutions</h4>
            <p>Campus Wi-Fi coverage, lab networking, and system software installations.</p>
          </div>

          <div className="serve-card">
            <div className="serve-icon">
              <Home size={26} />
            </div>
            <h4>Home Users and Individuals</h4>
            <p>Wi-Fi range extension, PC repair, OS reinstalls, and printer drivers.</p>
          </div>
        </div>
      </section>

      {/* 7. OUR COMMITMENT */}
      <section className="about-commitment">
        <div className="commitment-container">
          <div className="commitment-badge">Our Promise</div>
          <h2>Your Connectivity. Our Priority.</h2>
          <p>
            At GMK Network Solutions, we believe that reliable technology starts with understanding the customer's needs.
            Whether you need a new network installation, organized cabling, computer troubleshooting, or billing printer support,
            we strive to provide practical solutions with a professional approach.
          </p>
          <p>
            We look forward to building lasting customer relationships through dependable service and continuous improvement.
          </p>
        </div>
      </section>

      {/* 8. FINAL CALL TO ACTION */}
      <section className="about-cta">
        <div className="about-cta-container">
          <h2>Let's Build a Better Connected Future</h2>
          <p className="cta-sub">
            Have a networking or IT requirement? Get in touch with GMK Network Solutions to discuss the right solution for your needs.
          </p>

          <div className="cta-actions">
            <Link to="/contact" className="btn-cta-primary">
              Contact Us <ArrowRight size={18} />
            </Link>
            <a 
              href="https://wa.me/917032130328?text=Hello%20GMK%20Network%20Solutions,%20I%20would%20like%20to%20enquire%20about%20your%20services." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-cta-whatsapp"
            >
              <MessageSquare size={18} /> WhatsApp Us
            </a>
          </div>

          <div className="cta-contact-details">
            <div className="cta-phones">
              <span className="phone-label"><Phone size={15} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> Call Us:</span>
              <a href="tel:7032130328">7032130328</a>
              <a href="tel:7702130328">7702130328</a>
              <a href="tel:7287830328">7287830328</a>
            </div>
            <div className="cta-address">
              <MapPin size={16} color="#00f0ff" />
              <span>Near Municipal Office, Alipiri Road, Tirupati, Andhra Pradesh</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
