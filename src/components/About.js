import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
      <style>{`
        .about-root {
          background: #0b1b2b;
          padding: 7rem 2.5rem;
        }
        .about-inner {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }
        .about-eyebrow {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 0.72rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #6bb1f2;
          margin-bottom: 1.5rem;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
        }
        .about-eyebrow::before, .about-eyebrow::after {
          content: '';
          display: block;
          width: 1.5rem;
          height: 1px;
          background: #6bb1f2;
        }
        .about-heading {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          color: #FFFFFF;
          line-height: 1.1;
          letter-spacing: -0.04em;
          margin: 0 0 2rem;
        }
        .about-heading em {
          font-style: normal;
          color: #6bb1f2;
        }
        .about-body {
          font-family: 'Inter', sans-serif;
          font-size: 1.05rem;
          color: #94A3B8;
          line-height: 1.85;
          margin-bottom: 1.5rem;
        }
        .about-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          margin-top: 3rem;
        }
        @media (max-width: 640px) {
          .about-stats { grid-template-columns: 1fr; }
        }
        .stat-card {
          background: #061327;
          border: 1px solid rgba(107, 177, 242, 0.12);
          border-radius: 1rem;
          padding: 1.5rem;
          text-align: center;
          transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }
        .stat-card:hover {
          transform: translateY(-4px);
          border-color: rgba(107, 177, 242, 0.3);
          box-shadow: 0 12px 32px rgba(107, 177, 242, 0.1);
        }
        .stat-number {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: 2.5rem;
          color: #6bb1f2;
          line-height: 1;
          margin-bottom: 0.4rem;
          display: block;
        }
        .stat-number.dark { color: #FFFFFF; }
        .stat-label {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #94A3B8;
        }
      `}</style>

      <section className="about-root" id="about">
        <div className="about-inner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="about-eyebrow">Get to know me</p>
            <h2 className="about-heading">About <em>Me</em></h2>

            <p className="about-body">
              I am an Information Technology undergraduate and Full Stack Developer with hands-on industry experience at Navicode and Teceze. Proven track record of delivering complete ERP systems, photography portfolios, and e-commerce platforms from Figma design to production deployment.
            </p>
            <p className="about-body">
              Skilled in React.js, TypeScript, Laravel, Spring Boot, .NET, Flutter, and Python. Experienced in building scalable web applications, REST APIs, and AI-powered solutions using TensorFlow and IoT. Strong problem-solver with excellent analytical thinking and Agile collaboration skills.
            </p>

            <div className="about-stats">
              <div className="stat-card">
                <span className="stat-number">1</span>
                <span className="stat-label">Year Industry Exp</span>
              </div>
              <div className="stat-card">
                <span className="stat-number dark">24+</span>
                <span className="stat-label">Projects Built</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">4+</span>
                <span className="stat-label">Academic Exp</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;