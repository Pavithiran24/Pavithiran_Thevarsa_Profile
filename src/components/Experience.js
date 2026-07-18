import React from 'react';
import { motion } from 'framer-motion';

const bulletsNavicode = [
  'Delivered a complete ERP System end-to-end – designed the full UI/UX in Figma, developed the frontend and backend, and deployed the application to production for a startup client.',
  'Built and deployed a full-stack photography portfolio website using React.js on the frontend with a Laravel and MongoDB backend for content and media management.',
  'Developed a local client project using the .NET framework, delivering a stable, production-ready business solution.',
  'Designed user-friendly, responsive interfaces using Figma and translated them into pixel-accurate React.js components.',
  'Built and maintained REST APIs and backend services powering multiple client applications.',
  'Worked extensively with relational and NoSQL databases, performing data modelling and analysis to support application features.',
  'Followed Agile development practices and used Git for version control across all projects.',
];

const bulletsTeceze = [
  'Developed the Field Techy and Trincos e-commerce platforms, building responsive frontends with TypeScript and React.js and robust backend services using Spring Boot (Java) and SQL.',
  'Designed and consumed REST APIs connecting the TypeScript frontend with Java/Spring Boot backend services, ensuring reliable data flow across both platforms.',
  'Managed version control using Git/GitHub across multi-developer teams, resolving merge conflicts and maintaining clean branch history.',
  'Performed manual testing and bug fixing across both platforms web and mobile to ensure system reliability and a smooth end-user experience.',
];

const bulletsFreelance = [
  'Developed a Vehicle Sales Management System with separate client and admin panels, including a Price Calculator App and Car Listing Platform.',
  'Built responsive web applications using React.js and TypeScript, with full API integration and vehicle management features.',
  'Improved application performance, debugging, and stability through iterative UI enhancements.',
];

const Experience = () => {
  return (
    <>
      <style>{`
        .exp-root {
          background: #061327;
          padding: 7rem 2.5rem;
          position: relative;
          overflow: hidden;
        }
        .exp-root::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          height: 100%;
          background: linear-gradient(to bottom, transparent, rgba(107, 177, 242, 0.15), transparent);
        }
        .exp-inner {
          max-width: 900px;
          margin: 0 auto;
        }
        .exp-eyebrow {
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
        .exp-eyebrow::before {
          content: '';
          display: block;
          width: 2rem;
          height: 1px;
          background: #6bb1f2;
        }
        .exp-heading {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          color: #FFFFFF;
          line-height: 1.1;
          letter-spacing: -0.04em;
          margin: 0 0 0.75rem;
        }
        .exp-subhead {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          color: #94A3B8;
          margin-bottom: 3.5rem;
        }
        .exp-card {
          background: #0b1b2b;
          border: 1px solid rgba(107, 177, 242, 0.12);
          border-radius: 1.5rem;
          padding: 2.75rem 3rem;
          position: relative;
          overflow: hidden;
          margin-bottom: 2.5rem;
          transition: border-color 0.3s, box-shadow 0.3s;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }
        .exp-card:last-child {
          margin-bottom: 0;
        }
        .exp-card:hover { border-color: rgba(107, 177, 242, 0.3); box-shadow: 0 10px 30px rgba(107, 177, 242, 0.08); }
        .exp-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(to bottom, #1e6bb8, #6bb1f2);
          border-radius: 4px 0 0 4px;
        }
        .exp-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2rem;
          padding-bottom: 1.75rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .exp-role {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: 1.6rem;
          color: #FFFFFF;
          margin: 0 0 0.3rem;
          letter-spacing: -0.02em;
        }
        .exp-company {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 1rem;
          color: #6bb1f2;
        }
        .exp-period {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 0.78rem;
          letter-spacing: 0.08em;
          color: #6bb1f2;
          background: rgba(107, 177, 242, 0.08);
          border: 1px solid rgba(107, 177, 242, 0.25);
          padding: 0.4rem 1rem;
          border-radius: 100px;
          white-space: nowrap;
        }
        .exp-bullets {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .exp-bullet {
          display: flex;
          align-items: flex-start;
          gap: 0.9rem;
        }
        .bullet-arrow {
          color: #6bb1f2;
          font-size: 0.7rem;
          margin-top: 0.35rem;
          flex-shrink: 0;
        }
        .bullet-text {
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          color: #94A3B8;
          line-height: 1.7;
          transition: color 0.2s;
        }
        .exp-bullet:hover .bullet-text { color: #FFFFFF; }
        @media (max-width: 640px) {
          .exp-card { padding: 2rem 1.5rem; }
          .exp-card-top { flex-direction: column; }
        }
      `}</style>

      <section className="exp-root" id="experience">
        <div className="exp-inner">
          <p className="exp-eyebrow">Where I've worked</p>
          <h2 className="exp-heading">Experience</h2>
          <p className="exp-subhead">My professional journey</p>

          <motion.div
            className="exp-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="exp-card-top">
              <div>
                <h3 className="exp-role">Full Stack Engineer Intern</h3>
                <p className="exp-company">Navicode</p>
              </div>
              <span className="exp-period">Jan 2025 – Sep 2025</span>
            </div>

            <ul className="exp-bullets">
              {bulletsNavicode.map((b, i) => (
                <li key={i} className="exp-bullet">
                  <span className="bullet-arrow">▹</span>
                  <span className="bullet-text">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="exp-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="exp-card-top">
              <div>
                <h3 className="exp-role">Software Engineer Intern</h3>
                <p className="exp-company">Teceze</p>
              </div>
              <span className="exp-period">Nov 2025 – Feb 2026</span>
            </div>

            <ul className="exp-bullets">
              {bulletsTeceze.map((b, i) => (
                <li key={i} className="exp-bullet">
                  <span className="bullet-arrow">▹</span>
                  <span className="bullet-text">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="exp-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="exp-card-top">
              <div>
                <h3 className="exp-role">Freelance Full Stack Developer</h3>
                <p className="exp-company">Independent Projects</p>
              </div>
              <span className="exp-period">Jan 2024 – Present</span>
            </div>

            <ul className="exp-bullets">
              {bulletsFreelance.map((b, i) => (
                <li key={i} className="exp-bullet">
                  <span className="bullet-arrow">▹</span>
                  <span className="bullet-text">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Experience;