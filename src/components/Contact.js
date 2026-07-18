import React, { useState } from 'react';

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "235817e7-4505-485b-ae49-89769657917a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        event.target.reset();
      } else {
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <style>{`
        .contact-root {
          background: #061327;
          padding: 7rem 2.5rem;
          position: relative;
          overflow: hidden;
        }
        .contact-root::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(107, 177, 242, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        .contact-inner {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          text-align: center;
        }
        .contact-eyebrow {
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
        .contact-eyebrow::before, .contact-eyebrow::after {
          content: '';
          display: block;
          width: 1.5rem;
          height: 1px;
          background: #6bb1f2;
        }
        .contact-heading {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          color: #FFFFFF;
          line-height: 1.1;
          letter-spacing: -0.04em;
          margin: 0 0 0.75rem;
        }
        .contact-subhead {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          color: #94A3B8;
          margin-bottom: 3.5rem;
        }
        .contact-card {
          background: #0b1b2b;
          border: 1px solid rgba(107, 177, 242, 0.12);
          border-radius: 1.75rem;
          overflow: hidden;
          max-width: 600px;
          margin: 0 auto;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
        }
        /* Form panel */
        .contact-form-panel {
          padding: 3rem 3.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: left;
        }
        @media (max-width: 640px) { .contact-form-panel { padding: 2rem 1.75rem; } }
        .contact-form-title {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 1.25rem;
          color: #FFFFFF;
          margin-bottom: 0.4rem;
        }
        .contact-form-sub {
          font-family: 'Inter', sans-serif;
          font-size: 0.88rem;
          color: #94A3B8;
          margin-bottom: 2rem;
        }
        .form-group {
          margin-bottom: 1rem;
        }
        .form-input {
          width: 100%;
          background: #061327;
          border: 1px solid rgba(107, 177, 242, 0.12);
          border-radius: 0.75rem;
          padding: 0.9rem 1.25rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          color: #FFFFFF;
          outline: none;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
          box-sizing: border-box;
        }
        .form-input::placeholder { color: #64748B; }
        .form-input:focus {
          border-color: #6bb1f2;
          background: rgba(107, 177, 242, 0.04);
          box-shadow: 0 0 0 3px rgba(107, 177, 242, 0.1);
        }
        .form-textarea {
          resize: none;
          min-height: 120px;
        }
        .btn-submit {
          width: 100%;
          padding: 1rem;
          background: #1e6bb8;
          color: #fff;
          border: none;
          border-radius: 0.75rem;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.25s;
          box-shadow: 0 0 24px rgba(30, 107, 184, 0.3);
          margin-top: 0.5rem;
        }
        .btn-submit:hover {
          background: #6bb1f2;
          box-shadow: 0 0 40px rgba(107, 177, 242, 0.5);
          transform: translateY(-2px);
        }
      `}</style>

      <section className="contact-root" id="contact">
        <div className="contact-inner">
          <p className="contact-eyebrow">Get in touch</p>
          <h2 className="contact-heading">Let's Connect</h2>
          <p className="contact-subhead">Have a project in mind or want to collaborate?</p>

          <div className="contact-card">
            <div className="contact-form-panel">
              <h3 className="contact-form-title">Send a Message</h3>
              <p className="contact-form-sub">I'll get back to you as soon as possible.</p>

              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    className="form-input form-textarea"
                    rows={5}
                    required
                  />
                </div>
                <button type="submit" className="btn-submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message →"}
                </button>
                {result && (
                  <p className="form-status-msg" style={{
                    marginTop: '1.25rem',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: result.includes('successfully') ? '#10B981' : '#f59e0b',
                    textAlign: 'center'
                  }}>
                    {result}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;