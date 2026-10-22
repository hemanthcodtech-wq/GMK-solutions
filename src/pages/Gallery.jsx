import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Filter,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  Camera
} from 'lucide-react';

// Local generated images
import imgDatacenter from '../assets/hero_datacenter_bg.jpg';
import imgRackDressing from '../assets/gallery_rack_dressing.jpg';
import imgPrinterPos from '../assets/gallery_printer_pos.jpg';
import imgWifiInstall from '../assets/gallery_wifi_install.jpg';
import imgLanCables from '../assets/gallery_lan_cables.jpg';
import imgNetworkSwitch from '../assets/gallery_network_switch.jpg';
import imgCabling from '../assets/svc_cabling.jpg';
import imgPcHardware from '../assets/svc_pc_hardware.jpg';
import imgOsSoftware from '../assets/svc_os_software.jpg';
import imgPeripherals from '../assets/svc_peripherals.jpg';
import imgDesktopLaptop from '../assets/svc_desktop_laptop.jpg';
import imgNetworking from '../assets/svc_networking.jpg';
import Reveal from '../components/Reveal';
import CountUpNumber from '../components/CountUpNumber';
import { motion } from 'framer-motion';
import { heroStaggerContainer, heroItemRise } from '../utils/animations';

import './Gallery.css';

const galleryData = [
  {
    id: 1,
    category: 'Server Racks',
    title: 'Enterprise Server Rack & Core Switch Deployment',
    desc: 'Full 42U rack installation with multi-switch stacking, UPS integration, and fiber uplinks for a commercial client datacenter.',
    location: 'Tirupati Commercial District',
    image: imgDatacenter,
    featured: true
  },
  {
    id: 2,
    category: 'Patch Panels',
    title: 'Structured Patch Panel Termination',
    desc: 'Clean Cat6 patch panel termination with numbered labels, velcro bundling, and color-coded patching for floor-wise network distribution.',
    location: 'Corporate Office, Alipiri Road',
    image: imgRackDressing,
    featured: true
  },
  {
    id: 3,
    category: 'Wi-Fi',
    title: 'UniFi Access Point Ceiling Installation',
    desc: 'Enterprise-grade Wi-Fi 6 access points ceiling-mounted for seamless wireless coverage across a 200-seat open-plan office.',
    location: 'Co-working Space, Tirupati',
    image: imgWifiInstall,
    featured: true
  },
  {
    id: 4,
    category: 'LAN Cabling',
    title: 'Structured Cat6 Cable Routing & Labeling',
    desc: 'Conduit trunking installation with individually labeled Cat6 cable runs from patch panel to network outlets across multiple floors.',
    location: 'Multi-floor IT Office',
    image: imgLanCables
  },
  {
    id: 5,
    category: 'Network Switches',
    title: 'Wall-Mount Switch Stack & PoE Distribution',
    desc: 'Compact 6U wall-mount rack with stacked managed PoE switches, color-coded patch cables, and CyberPower UPS backup.',
    location: 'Small Business, Tirupati',
    image: imgNetworkSwitch
  },
  {
    id: 6,
    category: 'Billing Printers',
    title: 'Thermal POS Billing Printer Setup',
    desc: 'Complete retail checkout deployment with high-speed thermal receipt printers, barcode scanner, and PoS desktop terminal.',
    location: 'Retail Store, Tirupati',
    image: imgPrinterPos,
    featured: true
  },
  {
    id: 7,
    category: 'LAN Cabling',
    title: 'Patch Panel Installation & Cable Dressing',
    desc: 'Professional patch panel crimping with cable tester verification, clean horizontal cable management, and labeled RJ45 ports.',
    location: 'Enterprise Office',
    image: imgCabling
  },
  {
    id: 8,
    category: 'Computer Support',
    title: 'Hardware Diagnostics & Motherboard Repair',
    desc: 'Component-level desktop troubleshooting with multimeter testing, RAM replacement, SSD upgrades, and thermal paste repasting.',
    location: 'GMK Service Center',
    image: imgPcHardware
  },
  {
    id: 9,
    category: 'Computer Support',
    title: 'Windows & MS Office Deployment',
    desc: 'Multi-workstation OS installation with licensed Windows 11, Microsoft 365 setup, and security patch deployment.',
    location: 'Client Office Setup',
    image: imgOsSoftware
  },
  {
    id: 10,
    category: 'Computer Support',
    title: 'Peripheral Drivers & Device Configuration',
    desc: 'Printer, scanner, and audio driver installation with USB hub and multi-display configuration for corporate IT fleet.',
    location: 'Corporate IT Lab',
    image: imgPeripherals
  },
  {
    id: 11,
    category: 'Computer Support',
    title: 'IT Help Desk & On-Site Laptop Support',
    desc: 'Dedicated on-site IT assistance for employee laptop setup, dual-monitor configuration, and peripheral connectivity troubleshooting.',
    location: 'Enterprise Client On-Site',
    image: imgDesktopLaptop
  },
  {
    id: 12,
    category: 'Wi-Fi',
    title: 'Office Networking & AP + Switch Integration',
    desc: 'End-to-end office networking with ceiling-mounted APs, rack-mounted switches, and structured cable backbone infrastructure.',
    location: 'Modern Office Space',
    image: imgNetworking
  }
];

const categories = ['All', 'Server Racks', 'Patch Panels', 'Wi-Fi', 'LAN Cabling', 'Network Switches', 'Billing Printers', 'Computer Support'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredItems = activeCategory === 'All'
    ? galleryData
    : galleryData.filter((item) => item.category === activeCategory);

  const openLightbox = (idx) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const goNext = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const goPrev = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div className="gallery-page">
      {/* Hero Banner */}
      <section className="gallery-hero">
        <div className="gallery-hero-bg">
          <img src={imgDatacenter} alt="GMK Project Gallery Background" />
          <div className="gallery-hero-overlay"></div>
        </div>
        <motion.div
          className="gallery-hero-content"
          variants={heroStaggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={heroItemRise} className="gallery-kicker">
            <Camera size={16} />
            <span>Our Work Portfolio</span>
          </motion.span>
          <div style={{ overflow: 'hidden' }}>
            <motion.h1 variants={heroItemRise} className="gallery-hero-title">
              Project Gallery
            </motion.h1>
          </div>
          <motion.p variants={heroItemRise} className="gallery-hero-desc">
            Real installations, real infrastructure. Browse photographs of our server rack deployments,
            structured cabling projects, Wi-Fi setups, and IT hardware work across Tirupati and Andhra Pradesh.
          </motion.p>
          <motion.div variants={heroItemRise} className="gallery-hero-stats">
            <div className="stat-item">
              <span className="stat-number">
                <CountUpNumber target={5} duration={1.5} suffix="+" />
              </span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">
                <CountUpNumber target={100} duration={1.8} suffix="%" />
              </span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">
                <CountUpNumber target={24} duration={1.5} suffix="/7" />
              </span>
              <span className="stat-label">Support Available</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Category Filter Tabs */}
      <section className="gallery-filter-section">
        <div className="gallery-container">
          <Reveal once={false}>
            <div className="filter-bar">
              <div className="filter-label">
                <Filter size={16} />
                <span>Filter by Category:</span>
              </div>
              <div className="filter-tabs">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                    {activeCategory === cat && (
                      <span className="tab-count">{cat === 'All' ? galleryData.length : galleryData.filter(i => i.category === cat).length}</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Masonry Gallery Grid */}
      <section className="gallery-grid-section">
        <div className="gallery-container">
          <div className="gallery-masonry-grid">
            {filteredItems.map((item, idx) => (
              <Reveal key={item.id} delay={(idx % 3) * 0.08} once={false}>
                <div
                  className={`gallery-card ${item.featured ? 'featured' : ''}`}
                  onClick={() => openLightbox(idx)}
                >
                  <div className="gallery-card-img-wrap">
                    <img src={item.image} alt={item.title} className="gallery-card-img" loading="lazy" />
                    <div className="gallery-card-hover-overlay">
                      <div className="hover-zoom-icon">
                        <ZoomIn size={28} />
                      </div>
                    </div>
                    <div className="gallery-card-gradient"></div>
                  </div>

                  <div className="gallery-card-info">
                    <span className="gallery-card-category">{item.category}</span>
                    <h3 className="gallery-card-title">{item.title}</h3>
                    <p className="gallery-card-desc">{item.desc}</p>
                    <div className="gallery-card-meta">
                      <MapPin size={13} />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="gallery-empty">
              <p>No projects found in this category yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="gallery-cta-section">
        <div className="gallery-container">
          <div className="gallery-cta-card">
            <div className="cta-text-side">
              <h2 className="cta-heading">
                Want Similar Results for <span className="text-glow">Your Business?</span>
              </h2>
              <p className="cta-desc">
                Every project starts with a conversation. Tell us your networking, cabling, or IT hardware requirements,
                and our engineers will design a tailored solution.
              </p>
            </div>
            <div className="cta-actions-side">
              <Link to="/booking" className="cta-primary-btn">
                <span>Book a Free Assessment</span>
                <ArrowRight size={17} />
              </Link>
              <a href="tel:7032130328" className="cta-secondary-btn">
                <span>Call Now: 7032130328</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && filteredItems[lightboxIndex] && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">
              <X size={24} />
            </button>

            <button className="lightbox-nav prev" onClick={goPrev} aria-label="Previous image">
              <ChevronLeft size={28} />
            </button>

            <div className="lightbox-content">
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="lightbox-image"
              />
              <div className="lightbox-caption">
                <span className="lightbox-cat">{filteredItems[lightboxIndex].category}</span>
                <h3 className="lightbox-title">{filteredItems[lightboxIndex].title}</h3>
                <p className="lightbox-desc">{filteredItems[lightboxIndex].desc}</p>
                <div className="lightbox-meta">
                  <MapPin size={14} />
                  <span>{filteredItems[lightboxIndex].location}</span>
                </div>
                <span className="lightbox-counter">{lightboxIndex + 1} / {filteredItems.length}</span>
              </div>
            </div>

            <button className="lightbox-nav next" onClick={goNext} aria-label="Next image">
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
