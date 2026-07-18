import React from 'react';

const Footer = () => {
  const navLinks = [
    ['About', '#about'],
    ['Experience', '#experience'],
    ['Research', '#research'],
    ['Projects', '#work'],
    ['Contact', '#contact'],
  ];

  const contactItems = [
    ['✉', 'thevarasapavi@gmail.com'],
    ['🔗', 'linkedin.com/in/thevarasa-pavithiran-581006241'],
    ['💻', 'github.com/Pavithiran24'],
    ['📍', 'Jaffna, Sri Lanka'],
  ];

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/Pavithiran24' },
    { label: 'LinkedIn', href: 'https://lk.linkedin.com/in/thevarasa-pavithiran-581006241' },
    { label: 'Email', href: 'mailto:thevarasapavi@gmail.com' },
  ];

  return (
    <>
      <style>{`
        .footer-root {
          background: #0b1220;
          border-top: 1px solid rgba(107, 177, 242, 0.12);
        }
        .footer-top {
          max-width: 1280px;
          margin: 0 auto;
          padding: 5rem 2.5rem 4rem;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 4rem;
        }
        @media (max-width: 768px) {
          .footer-top { grid-template-columns: 1fr; gap: 2.5rem; }
        }
        /* Brand col */
        .footer-brand {
          display: flex;
          flex-direction: column;
        }
        .footer-logo {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: 2rem;
          color: #FFFFFF;
          letter-spacing: -0.04em;
          margin-bottom: 1rem;
        }
        .footer-logo span { color: #6bb1f2; }
        .footer-tagline {
          font-family: 'Inter', sans-serif;
          font-size: 0.88rem;
          color: #94A3B8;
          line-height: 1.75;
          max-width: 300px;
          margin-bottom: 1.5rem;
        }
        .footer-socials {
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
        }
        .footer-social-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 0.75rem;
          color: #94A3B8;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 0.4rem 1rem;
          border-radius: 0.5rem;
          text-decoration: none;
          transition: all 0.2s;
        }
        .footer-social-btn:hover {
          background: #1e6bb8;
          color: #fff;
          border-color: #1e6bb8;
        }
        /* Nav col */
        .footer-col-label {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 0.68rem;
          color: #6bb1f2;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          margin-bottom: 1.25rem;
        }
        .footer-nav-links {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-nav-link {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 0.88rem;
          color: #94A3B8;
          text-decoration: none;
          transition: color 0.2s;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .footer-nav-link::before {
          content: '';
          display: block;
          width: 0;
          height: 1px;
          background: #6bb1f2;
          transition: width 0.2s;
          margin-top: 1px;
        }
        .footer-nav-link:hover { color: #6bb1f2; }
        .footer-nav-link:hover::before { width: 12px; }
        /* Contact col */
        .footer-contact-items {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }
        .footer-contact-icon { font-size: 0.85rem; color: #6bb1f2; }
        .footer-contact-text {
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          color: #94A3B8;
        }
        /* Bottom bar */
        .footer-bottom {
          max-width: 1280px;
          margin: 0 auto;
          padding: 1.5rem 2.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .footer-copy {
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          color: #475569;
        }
        .footer-built {
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          color: #475569;
        }
        .footer-built span { color: #6bb1f2; }
      `}</style>

      <footer className="footer-root">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
             <div className="footer-logo">Pavithiran<span>.</span></div>
             <p className="footer-tagline">
               Full Stack Software Engineer. Building scalable web applications, REST APIs, and AI-powered solutions with a passion for clean code and great user experience.
             </p>
            <div className="footer-socials">
              {socialLinks.map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="footer-col-label">Navigation</p>
            <ul className="footer-nav-links">
              {navLinks.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="footer-nav-link">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="footer-col-label">Contact</p>
            <div className="footer-contact-items">
              {contactItems.map(([icon, text]) => (
                <div key={text} className="footer-contact-item">
                  <span className="footer-contact-icon">{icon}</span>
                  <span className="footer-contact-text">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© {new Date().getFullYear()} Pavithiran Thevarasa. All rights reserved.</p>
          <p className="footer-built">Designed & built with <span>React</span> · Tailwind CSS · Framer Motion</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;