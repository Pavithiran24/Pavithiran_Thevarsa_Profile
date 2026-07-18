import React from 'react';
import { motion } from 'framer-motion';
import food from '../assets/food.png';

const innovations = [
  {
    title: 'AI-Powered Pest Detection & Prediction',
    body: 'Combines IoT sensor data with image-based analysis for real-time crop protection. Trained Random Forest and CNN models for pest prediction and image-based pest identification from crop and pest images.',
  },
  {
    title: 'IoT Sensor Integration',
    body: 'Collects real-time environmental data (temperature, pressure, light) using ESP32, BMP280, and LDR sensors, feeding live data into the prediction pipeline for accurate analysis.',
  },
  {
    title: 'Flask API Backend',
    body: 'Developed a Python Flask API to serve the ML models, exposing real-time prediction endpoints consumed by a React.js/TypeScript web application with seamless frontend-backend integration.',
  },
  {
    title: 'Full-Stack Deployment',
    body: 'End-to-end system integrating TensorFlow models, IoT hardware, and a modern web dashboard. Built with React.js, TypeScript, Python, and Flask for scalable, production-ready performance.',
  },
];

const Research = () => {
  return (
    <>
      <style>{`
        .res-root {
          background: #0b1b2b;
          padding: 7rem 2.5rem;
          position: relative;
        }
        .res-root::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: 0;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(107, 177, 242, 0.03) 0%, transparent 70%);
          pointer-events: none;
        }
        .res-inner {
          max-width: 1280px;
          margin: 0 auto;
        }
        .res-eyebrow {
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
        .res-eyebrow::before {
          content: '';
          display: block;
          width: 2rem;
          height: 1px;
          background: #6bb1f2;
        }
        .res-heading {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          color: #FFFFFF;
          line-height: 1.1;
          letter-spacing: -0.04em;
          margin: 0 0 0.75rem;
        }
        .res-subhead {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          color: #94A3B8;
          margin-bottom: 3.5rem;
        }
        .res-card {
          background: #061327;
          border: 1px solid rgba(107, 177, 242, 0.12);
          border-radius: 1.75rem;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }
        .res-card-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
        }
        @media (max-width: 900px) {
          .res-card-inner { grid-template-columns: 1fr; }
          .res-img-panel { order: -1; max-height: 300px; }
        }
        .res-content {
          padding: 3rem 3.5rem;
          position: relative;
        }
        @media (max-width: 640px) { .res-content { padding: 2rem 1.75rem; } }
        .res-title-badge {
          display: inline-block;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #F59E0B;
          background: rgba(245,158,11,0.1);
          border: 1px solid rgba(245,158,11,0.25);
          padding: 0.3rem 0.9rem;
          border-radius: 100px;
          margin-bottom: 1.25rem;
        }
        .res-title {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: 1.5rem;
          color: #FFFFFF;
          line-height: 1.25;
          letter-spacing: -0.025em;
          margin: 0 0 1.25rem;
        }
        .res-intro {
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          color: #94A3B8;
          line-height: 1.8;
          margin-bottom: 2rem;
        }
        .res-innovations-label {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 0.72rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #6bb1f2;
          margin-bottom: 1rem;
        }
        .res-innovations {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .innovation-item {
          background: #0b1b2b;
          border: 1px solid rgba(107, 177, 242, 0.08);
          border-left: 2px solid #1e6bb8;
          border-radius: 0 0.75rem 0.75rem 0;
          padding: 0.9rem 1.25rem;
          transition: border-left-color 0.2s, background 0.2s;
        }
        .innovation-item:hover {
          background: rgba(107, 177, 242, 0.05);
          border-left-color: #6bb1f2;
        }
        .innovation-title {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 0.88rem;
          color: #FFFFFF;
          margin-bottom: 0.35rem;
        }
        .innovation-body {
          font-family: 'Inter', sans-serif;
          font-size: 0.82rem;
          color: #94A3B8;
          line-height: 1.65;
        }
        /* Image panel */
        .res-img-panel {
          position: relative;
          overflow: hidden;
          background: #061327;
          min-height: 500px;
        }
        .res-img-panel img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          opacity: 0.85;
          transition: opacity 0.4s, transform 0.4s;
        }
        .res-card:hover .res-img-panel img { opacity: 0.95; transform: scale(1.02); }
        .res-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, #061327 0%, transparent 40%);
        }
        @media (max-width: 900px) {
          .res-img-overlay { background: linear-gradient(to bottom, transparent 50%, #061327 100%); }
        }
        .res-stat-pills {
          position: absolute;
          bottom: 1.5rem;
          left: 1.5rem;
          right: 1.5rem;
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        @media (max-width: 900px) { .res-stat-pills { display: none; } }
        .res-stat-pill {
          background: rgba(11, 27, 43, 0.9);
          border: 1px solid rgba(107, 177, 242, 0.25);
          border-radius: 0.75rem;
          padding: 0.6rem 1rem;
          backdrop-filter: blur(12px);
          flex: 1;
          min-width: 100px;
          text-align: center;
        }
        .pill-label {
          display: block;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 0.6rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #94A3B8;
          margin-bottom: 0.2rem;
        }
        .pill-val {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: 0.88rem;
          color: #FFFFFF;
        }
      `}</style>

      <section className="res-root" id="research">
        <div className="res-inner">
          <p className="res-eyebrow">Final year thesis</p>
          <h2 className="res-heading">Academic Research</h2>
           <p className="res-subhead">Deep analysis of my Final Year Project</p>

           <motion.div
             className="res-card"
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
           >
             <div className="res-card-inner">
               <div className="res-content">
                 <span className="res-title-badge">Final Year Project · AI & IoT</span>
                 <h3 className="res-title">
                   AI Pest Prediction System
                 </h3>
                 <p className="res-intro">
                   An AI-powered pest detection and prediction system combining IoT sensor data with image-based analysis for real-time crop protection. Trained and deployed Random Forest and CNN models for pest prediction and image-based pest identification from crop and pest images.
                 </p>

                <p className="res-innovations-label">Core Technological Innovations</p>
                <div className="res-innovations">
                  {innovations.map((item, i) => (
                    <div key={i} className="innovation-item">
                      <p className="innovation-title">{item.title}</p>
                      <p className="innovation-body">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="res-img-panel">
                <img src={food} alt="AI Pest Prediction System" />
                <div className="res-img-overlay" />
                <div className="res-stat-pills">
                   <div className="res-stat-pill">
                     <span className="pill-label">Architecture</span>
                     <span className="pill-val">React & Flask API</span>
                   </div>
                   <div className="res-stat-pill">
                     <span className="pill-label">AI Models</span>
                     <span className="pill-val">Random Forest & CNN</span>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Research;