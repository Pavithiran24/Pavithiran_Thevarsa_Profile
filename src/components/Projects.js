import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import food from '../assets/food.png';
import vehicleSales from '../assets/vehicle_sales.png';
import erpSystem from '../assets/erp_system.png';
import mobileApps from '../assets/mobile_apps.png';
import weeklyReport from '../assets/weekly_report.png';
import priceBook from '../assets/price_book.png';
const VideoModal = ({ src, title, onClose }) => (
  <AnimatePresence>
    <motion.div
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '2rem',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={e => e.stopPropagation()}
        style={{ width: '100%', maxWidth: 900 }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, color: '#F8F9FF', fontSize: '1rem' }}>{title}</span>
          <button onClick={onClose} style={{
            background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)',
            color: '#F8F9FF', borderRadius: '0.5rem', padding: '0.4rem 1rem',
            fontFamily: 'Space Grotesk', fontWeight: 700, cursor: 'pointer', fontSize: '0.85rem',
          }}>✕ Close</button>
        </div>
        <video src={src} controls autoPlay style={{ width: '100%', borderRadius: '1rem', background: '#000', display: 'block' }} />
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

const ProjectCard = ({ image, videoSrc, title, description, liveLink, githubLink, featured }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && videoSrc && (
        <VideoModal src={videoSrc} title={title} onClose={() => setShowModal(false)} />
      )}

      <motion.div
        className="proj-card-wrapper"
        style={{
          background: '#061327',
          border: '1px solid rgba(107, 177, 242, 0.12)',
          borderRadius: '1.25rem',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(107, 177, 242, 0.08)', borderColor: 'rgba(107, 177, 242, 0.3)' }}
      >
        {/* Thumbnail */}
        <div style={{ position: 'relative', height: '200px', overflow: 'hidden', background: '#0b1b2b' }}>
          <img
            src={image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&auto=format&fit=crop'}
            alt={title}
            className="project-card-img"
          />
          {videoSrc && (
            <button
              onClick={() => setShowModal(true)}
              style={{
                position: 'absolute', bottom: '0.75rem', right: '0.75rem',
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                background: '#1e6bb8', color: '#fff', border: 'none',
                borderRadius: '100px', padding: '0.4rem 1rem',
                fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.75rem',
                cursor: 'pointer', boxShadow: '0 4px 16px rgba(30, 107, 184, 0.4)',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#6bb1f2'}
              onMouseLeave={e => e.currentTarget.style.background = '#1e6bb8'}
            >
              ▶ Watch Demo
            </button>
          )}
        </div>

        {/* Body */}
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <h3 style={{
            fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1rem',
            color: '#FFFFFF', marginBottom: '0.6rem', lineHeight: 1.3,
            letterSpacing: '-0.015em',
          }}>{title}</h3>
          <p style={{
            fontFamily: 'Inter', fontSize: '0.85rem', color: '#94A3B8',
            lineHeight: 1.7, flexGrow: 1, marginBottom: '1.25rem',
          }}>{description}</p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noreferrer" style={{
                fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.8rem',
                color: '#fff', background: '#1e6bb8', padding: '0.5rem 1.1rem',
                borderRadius: '0.5rem', textDecoration: 'none', transition: 'background 0.2s',
              }}
                onMouseEnter={e => e.target.style.background = '#6bb1f2'}
                onMouseLeave={e => e.target.style.background = '#1e6bb8'}
              >Live Demo ↗</a>
            )}
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noreferrer" style={{
                fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.8rem',
                color: '#FFFFFF', background: 'transparent', padding: '0.5rem 1.1rem',
                borderRadius: '0.5rem', textDecoration: 'none', border: '1px solid rgba(255, 255, 255, 0.15)',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.target.style.background = 'rgba(107, 177, 242, 0.08)'; e.target.style.color = '#6bb1f2'; e.target.style.borderColor = '#6bb1f2'; }}
                onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#FFFFFF'; e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)'; }}
              >GitHub ↗</a>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

const projectsData = [
  {
    image: food,
    title: "AI Pest Prediction System",
    description: "Final Year Project – AI-powered pest detection and prediction system combining IoT sensor data with image-based analysis for real-time crop protection. Trained Random Forest and CNN models for prediction and image-based identification. Python, Flask API, TensorFlow, IoT (ESP32, BMP280, LDR), React.js, TypeScript.",
    liveLink: "https://relaxed-rugelach-379d7c.netlify.app/"
  },
  {
    image: vehicleSales,
    title: "Vehicle Rental & Sales System",
    description: "Full-stack vehicle rental and sales platform featuring comprehensive filtration modules, dynamic listings, and integrated price calculators. React.js, TypeScript, REST APIs.",
    liveLink: "https://car-uk.vercel.app/"
  },
  {
    image: erpSystem,
    title: "ERP System for Startup Company",
    description: "Designed complete UI/UX in Figma and developed the ERP system end-to-end (from requirements gathering to deployment). Built a React.js frontend integrated with a Laravel backend and MongoDB database.",
    liveLink: "https://www.figma.com/design/mVvKp5g7GfzsZO9xXP4bdh/ERP_Project?node-id=0-1&t=2mp8y9k03zV3uG9O-0"
  },
  {
    image: weeklyReport,
    title: "Weekly Finance Report Dashboard",
    description: "Developed structured single-page applications using Angular components, architectural services, and modular routing protocols.",
    liveLink: "https://weekly-report24.netlify.app/"
  },
  {
    image: mobileApps,
    title: "Mobile Applications",
    description: "Cross-platform mobile applications developed using Flutter alongside native Android projects. Includes a Multi Math Quiz Game (Android) and a TODO App with SQLite local storage.",
  },
  {
    title: "Hotel Management System",
    description: "Employee management system built using the MERN stack with MongoDB as the primary database. Features role-based access and CRUD operations.",
    githubLink: "https://github.com/Pavithiran24/hotel_management.git"
  },
  {
    title: "Online Food Order System",
    description: "Web application with integrated payment functionality built using PHP. Features product catalogue, cart, and order processing.",
  },
  {
    title: "Online Customer Care System",
    description: "CRM system built using Java and MongoDB to manage customer interactions and support tickets efficiently.",
  },
  {
    image: priceBook,
    title: "Teceze Price Book Calculator",
    description: "Interactive price book calculator tool built for Teceze to manage product pricings and discounts dynamically. React.js, TypeScript.",
    liveLink: "https://price-book-calculator-teceze.vercel.app/"
  }
];

const Projects = () => {
  return (
    <>
      <style>{`
        .proj-root {
          background: #0b1b2b;
          padding: 7rem 2.5rem;
        }
        .proj-inner {
          max-width: 1280px;
          margin: 0 auto;
        }
        .proj-eyebrow {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 0.72rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #6bb1f2;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .proj-eyebrow::before {
          content: '';
          display: block;
          width: 2rem;
          height: 1px;
          background: #6bb1f2;
        }
        .proj-heading {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          color: #FFFFFF;
          line-height: 1.1;
          letter-spacing: -0.04em;
          margin: 0 0 0.75rem;
        }
        .proj-subhead {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          color: #94A3B8;
          margin-bottom: 3.5rem;
        }
        .proj-subhead span {
          color: #6bb1f2;
          font-weight: 600;
        }
        .proj-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 1024px) { .proj-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .proj-grid { grid-template-columns: 1fr; } }
        
        .project-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .proj-card-wrapper:hover .project-card-img {
          transform: scale(1.08);
        }
      `}</style>

      <section className="proj-root" id="work">
        <div className="proj-inner">
          <p className="proj-eyebrow">What I've built</p>
          <h2 className="proj-heading">Projects</h2>
          <p className="proj-subhead">
            A showcase of my recent work.{' '}
            <span>Projects with ▶ Watch Demo have a live video — click to play!</span>
          </p>

          <div className="proj-grid">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                videoSrc={project.videoSrc}
                title={project.title}
                description={project.description}
                liveLink={project.liveLink}
                githubLink={project.githubLink}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;