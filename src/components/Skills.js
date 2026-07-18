import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { category: 'Programming Languages', skills: ['Python', 'Java', 'C#', 'C++', 'JavaScript', 'TypeScript', 'PHP', 'Kotlin', 'Dart'] },
  { category: 'Frontend Development', skills: ['React.js', 'Angular', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Figma'] },
  { category: 'Backend Development', skills: ['Laravel', 'Spring Boot', '.NET', 'Flask API', 'REST APIs'] },
  { category: 'AI & IoT', skills: ['Machine Learning', 'TensorFlow', 'CNN', 'Random Forest', 'Flask API', 'IoT (ESP32, BMP280, LDR)'] },
  { category: 'Mobile Development', skills: ['Flutter', 'Android (Java/Kotlin)', 'SQLite'] },
  { category: 'Databases', skills: ['MongoDB', 'MySQL', 'SQL Server', 'SQLite'] },
];

const categoryIcons = {
  'Programming Languages': '{ }',
  'Frontend Development': '◱',
  'Backend Development': '⬡',
  'AI & IoT': '◆',
  'Mobile Development': '⬜',
  'Databases': '◉',
};

const Skills = () => {
  return (
    <>
      <style>{`
        .skills-root {
          background: #061327;
          padding: 7rem 2.5rem;
          position: relative;
        }
        .skills-inner {
          max-width: 900px;
          margin: 0 auto;
        }
        .skills-eyebrow {
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
        .skills-eyebrow::before {
          content: '';
          display: block;
          width: 2rem;
          height: 1px;
          background: #6bb1f2;
        }
        .skills-heading {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          color: #FFFFFF;
          line-height: 1.1;
          letter-spacing: -0.04em;
          margin: 0 0 0.75rem;
        }
        .skills-subhead {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          color: #94A3B8;
          margin-bottom: 4rem;
        }
        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .skill-row {
          display: flex;
          align-items: center;
          background: #0b1b2b;
          border: 1px solid rgba(107, 177, 242, 0.12);
          border-radius: 1rem;
          padding: 1.25rem 2rem;
          gap: 2rem;
          transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }
        .skill-row:hover {
          transform: translateX(5px);
          border-color: rgba(107, 177, 242, 0.3);
          box-shadow: 0 8px 30px rgba(107, 177, 242, 0.08);
        }
        .skill-row-title-col {
          width: 220px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .skill-row-icon {
          width: 2rem;
          height: 2rem;
          background: rgba(107, 177, 242, 0.08);
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: 0.85rem;
          color: #6bb1f2;
        }
        .skill-row-name {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          color: #FFFFFF;
        }
        .skill-row-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          flex-grow: 1;
        }
        .skill-tag {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 0.8rem;
          color: #94A3B8;
          background: #061327;
          border: 1px solid rgba(107, 177, 242, 0.08);
          padding: 0.35rem 0.8rem;
          border-radius: 100px;
          cursor: default;
          transition: all 0.2s;
        }
        .skill-tag:hover {
          border-color: #6bb1f2;
          color: #6bb1f2;
          background: rgba(107, 177, 242, 0.05);
        }
        @media (max-width: 768px) {
          .skill-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
            padding: 1.25rem 1.5rem;
          }
          .skill-row:hover {
            transform: translateY(-3px);
          }
          .skill-row-title-col {
            width: 100%;
          }
        }
      `}</style>

      <section className="skills-root" id="skills">
        <div className="skills-inner">
          <p className="skills-eyebrow">What I work with</p>
          <h2 className="skills-heading">Technical Skills</h2>
          <p className="skills-subhead">My technical proficiencies across various domains</p>

          <div className="skills-list">
            {skillsData.map((item, index) => (
              <motion.div
                key={index}
                className="skill-row"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="skill-row-title-col">
                  <div className="skill-row-icon">{categoryIcons[item.category] || '◆'}</div>
                  <span className="skill-row-name">{item.category}</span>
                </div>
                <div className="skill-row-tags">
                  {item.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
