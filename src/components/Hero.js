import React, { useState, useEffect } from 'react';
import pavi from '../assets/pavi.jpeg';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  useEffect(() => {
    const canvas = document.getElementById('hero-particles');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = [];
    const particleCount = 45;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.5,
      });
    }

    let mouse = { x: null, y: null };
    const handleCanvasMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleCanvasMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };
    
    const section = canvas.parentElement;
    if (section) {
      section.addEventListener('mousemove', handleCanvasMouseMove);
      section.addEventListener('mouseleave', handleCanvasMouseLeave);
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(107, 177, 242, 0.35)';
      ctx.strokeStyle = 'rgba(107, 177, 242, 0.04)';
      ctx.lineWidth = 0.5;

      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        if (mouse.x !== null && mouse.y !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.strokeStyle = `rgba(107, 177, 242, ${0.12 * (1 - dist / 130)})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
            ctx.strokeStyle = 'rgba(107, 177, 242, 0.04)';
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (section) {
        section.removeEventListener('mousemove', handleCanvasMouseMove);
        section.removeEventListener('mouseleave', handleCanvasMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');

        .hero-root {
          min-height: 100vh;
          background: #061327;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 7rem 2.5rem 4rem;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }
        @keyframes float-circle-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(45px, -70px) scale(1.2); }
        }
        @keyframes float-circle-2 {
          0%, 100% { transform: translate(0, 0) scale(1.1); }
          50% { transform: translate(-60px, 50px) scale(0.85); }
        }
        .hero-root::before {
          content: '';
          position: absolute;
          top: -20%;
          right: -10%;
          width: min(600px, 70vw);
          height: min(600px, 70vw);
          background: radial-gradient(circle, rgba(107, 177, 242, 0.08) 0%, transparent 70%);
          pointer-events: none;
          animation: float-circle-1 20s infinite alternate ease-in-out;
        }
        .hero-root::after {
          content: '';
          position: absolute;
          bottom: -10%;
          left: -5%;
          width: min(400px, 55vw);
          height: min(400px, 55vw);
          background: radial-gradient(circle, rgba(30, 107, 184, 0.04) 0%, transparent 70%);
          pointer-events: none;
          animation: float-circle-2 15s infinite alternate ease-in-out;
        }
        .hero-inner {
          max-width: 1280px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        @media (max-width: 1024px) {
          .hero-root { padding: 6rem 1.75rem 3.5rem; }
          .hero-inner { grid-template-columns: 1fr; text-align: center; gap: 2.5rem; }
          .hero-text { order: 2; align-items: center; }
          .hero-image-wrap { order: 1; justify-content: center; }
          .hero-ctas { justify-content: center !important; }
          .hero-badge { align-self: center !important; }
        }
        @media (max-width: 600px) {
          .hero-root { padding: 5.5rem 1.25rem 3rem; }
          .hero-desc { margin-bottom: 2rem; }
          .hero-ctas { width: 100%; }
          .hero-ctas .btn-primary,
          .hero-ctas .btn-outline { flex: 1 1 auto; text-align: center; }
          /* Calm the floating background so it never overflows on small screens */
          .hero-root::before,
          .hero-root::after { animation: none; }
        }
        .hero-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .hero-badge {
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(107, 177, 242, 0.08);
          border: 1px solid rgba(107, 177, 242, 0.25);
          color: #6bb1f2;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 0.78rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.4rem 1rem;
          border-radius: 100px;
          margin-bottom: 1.75rem;
        }
        .hero-badge::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #6bb1f2;
          animation: pulse-dot 2s infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }
        .hero-name {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: clamp(3rem, 6vw, 5rem);
          color: #FFFFFF;
          line-height: 1.05;
          letter-spacing: -0.04em;
          margin: 0 0 0.25rem;
        }
        .hero-name span { color: #6bb1f2; }
        .hero-typewriter {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: clamp(1.2rem, 2.5vw, 1.6rem);
          color: #6bb1f2;
          margin-bottom: 1.5rem;
          min-height: 2.4rem;
        }
        .hero-desc {
          font-family: 'Inter', sans-serif;
          font-size: 1.05rem;
          color: #94A3B8;
          line-height: 1.8;
          max-width: 520px;
          margin-bottom: 2.5rem;
        }
        .hero-ctas {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: flex-start;
        }
        .btn-primary {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 0.9rem;
          color: #fff;
          background: #1e6bb8;
          padding: 0.85rem 2rem;
          border-radius: 0.6rem;
          text-decoration: none;
          transition: all 0.25s;
          box-shadow: 0 0 24px rgba(30,107,184,0.3);
          letter-spacing: 0.01em;
        }
        .btn-primary:hover {
          background: #6bb1f2;
          box-shadow: 0 0 36px rgba(107,177,242,0.5);
          transform: translateY(-2px);
        }
        .btn-outline {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 0.9rem;
          color: #FFFFFF;
          background: transparent;
          padding: 0.85rem 2rem;
          border-radius: 0.6rem;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.15);
          transition: all 0.25s;
        }
        .btn-outline:hover {
          border-color: #6bb1f2;
          color: #6bb1f2;
          background: rgba(107, 177, 242, 0.08);
          transform: translateY(-2px);
        }
        /* Image */
        .hero-image-wrap {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
        .hero-img-frame {
          position: relative;
          width: clamp(260px, 35vw, 420px);
          height: clamp(260px, 35vw, 420px);
        }
        .hero-img-glow {
          position: absolute;
          inset: -2px;
          border-radius: 2rem;
          background: linear-gradient(135deg, #1e6bb8, #6bb1f2);
          opacity: 0.6;
          filter: blur(1px);
        }
        .hero-img-inner {
          position: absolute;
          inset: 2px;
          border-radius: calc(2rem - 2px);
          overflow: hidden;
          background: #061327;
        }
        .hero-img-inner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .hero-img-frame:hover .hero-img-inner img { transform: scale(1.04); }
        /* Corner accents */
        .corner {
          position: absolute;
          width: 20px;
          height: 20px;
          border-color: #6366F1;
          border-style: solid;
          z-index: 2;
        }
        .corner-tl { top: -6px; left: -6px; border-width: 2px 0 0 2px; border-radius: 4px 0 0 0; }
        .corner-tr { top: -6px; right: -6px; border-width: 2px 2px 0 0; border-radius: 0 4px 0 0; }
        .corner-bl { bottom: -6px; left: -6px; border-width: 0 0 2px 2px; border-radius: 0 0 0 4px; }
        .corner-br { bottom: -6px; right: -6px; border-width: 0 2px 2px 0; border-radius: 0 0 4px 0; }
        /* Floating tag */
        .hero-float-tag {
          position: absolute;
          bottom: -1rem;
          left: -2.5rem;
          background: #0b1b2b;
          border: 1px solid rgba(107, 177, 242, 0.15);
          border-radius: 0.75rem;
          padding: 0.75rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          box-shadow: 0 8px 32px rgba(0,0,0,0.5);
        }
        .hero-float-tag .tag-label {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: 1.2rem;
          color: #6bb1f2;
          line-height: 1;
        }
        .hero-float-tag .tag-sub {
          font-family: 'Inter', sans-serif;
          font-size: 0.7rem;
          color: #94A3B8;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        @media (max-width: 480px) {
          .hero-float-tag { display: none; }
        }
      `}</style>

      <section 
        className="hero-root" 
        id="home"
        onMouseMove={handleMouseMove}
        style={{
          background: `radial-gradient(circle 400px at ${mousePos.x}px ${mousePos.y}px, rgba(107, 177, 242, 0.07), transparent), #061327`
        }}
      >
        <canvas id="hero-particles" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.5, zIndex: 1 }} />
        <div className="hero-inner">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-badge">Available for Opportunities</span>

            <h1 className="hero-name">
              Hi, I'm<br />
              <span>Pavithiran</span>
            </h1>

            <div className="hero-typewriter">
              <TypeAnimation
                sequence={[
                  'Full Stack Software Engineer', 2000,
                  'React Developer', 2000,
                  'Laravel / Spring Boot Developer', 2000,
                  'AI / IoT Engineer', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="hero-desc">
              Motivated Information Technology undergraduate and Full Stack Developer with hands-on industry experience across React, TypeScript, Laravel, Spring Boot, and .NET. Skilled in building scalable web applications and AI-powered solutions.
            </p>

            <div className="hero-ctas">
              <a href="#work" className="btn-primary">View Projects</a>
               <a href="/Pavithiran_Thevarasa_CV.pdf" download="Pavithiran_Thevarasa_CV.pdf" className="btn-outline">Download CV</a>
            </div>
          </motion.div>

          <motion.div
            className="hero-image-wrap"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -15, 0]
            }}
            transition={{ 
              opacity: { duration: 0.9, delay: 0.2 },
              scale: { duration: 0.9, delay: 0.2 },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <div className="hero-img-frame">
              <div className="hero-img-glow" />
              <div className="hero-img-inner">
                <img src={pavi} alt="Pavithiran" />
              </div>
              <div className="corner corner-tl" />
              <div className="corner corner-tr" />
              <div className="corner corner-bl" />
              <div className="corner corner-br" />
              <div className="hero-float-tag">
                <span className="tag-label">24+</span>
                <span className="tag-sub">Projects Built</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;