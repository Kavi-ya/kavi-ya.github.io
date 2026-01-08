'use client';

import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<React.ReactNode>('');
  const [statusType, setStatusType] = useState<'success' | 'error' | '' | 'encrypting'>('');
  const [progress, setProgress] = useState(0);

  // EmailJS Configuration
  const SERVICE_ID = 'service_nm63n0n';
  const TEMPLATE_ID = 'template_iiohxyi';
  const PUBLIC_KEY = 'Kepv455SPYPiCZp4Y'; // Replace with your actual public key

  const generateAuthCode = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 16; i++) {
      if (i > 0 && i % 4 === 0) code += "-";
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      // You would typically show a toast here, but for now we'll rely on the existing UI structure
      alert('Email copied to clipboard!');
    });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setStatus('ENCRYPTING MESSAGE...');
    setStatusType('encrypting');
    setProgress(0);

    // Simulate encryption progress
    let currentProgress = 0;
    const encryptionInterval = setInterval(() => {
      currentProgress += 5;
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(encryptionInterval);
        setStatus('TRANSMITTING SECURE MESSAGE...');

        const formData = new FormData(form.current!);
        const authCode = generateAuthCode();

        const templateParams = {
          from_name: formData.get('from_name'),
          from_email: formData.get('from_email'),
          subject: formData.get('subject'),
          message: formData.get('message'),
          timestamp: new Date().toISOString(),
          user: "IT24102083",
          auth_code: authCode
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
          .then(() => {
            const successMessage = (
              <div className="success-message" style={{ position: 'relative', zIndex: 1000 }}>
                <i className="fas fa-check-circle"></i>
                <div>
                  <h3>TRANSMISSION SUCCESSFUL</h3>
                  <p>Your message has been securely sent to kavindusahansilva@gmail.com. Encryption verified.</p>
                  <div className="verification-code">AUTH-CODE: {authCode}</div>
                </div>
              </div>
            );
            setStatus(successMessage);
            setStatusType('success');
            form.current?.reset();
            setTimeout(() => {
              setStatus('');
              setStatusType('');
            }, 8000);
          })
          .catch((error) => {
            console.error('Email send error:', error);
            const errorMessage = (
              <div className="error-message" style={{ position: 'relative', zIndex: 1000 }}>
                <i className="fas fa-exclamation-triangle"></i>
                <div>
                  <h3>EMAIL SERVICE UNAVAILABLE</h3>
                  <p>Secure mail service not available. Please try contacting directly at:</p>
                  <p className="error-code">kavindusahansilva@gmail.com</p>
                  <button type="button" onClick={() => copyToClipboard('kavindusahansilva@gmail.com')} className="copy-email-btn">
                    <i className="fas fa-copy"></i> Copy Email
                  </button>
                </div>
              </div>
            );
            setStatus(errorMessage);
            setStatusType('error');
            setTimeout(() => {
              setStatus('');
              setStatusType('');
            }, 10000);
          });
      }
    }, 50);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Secure Communication Channel</h2>
        <div className="contact-content">
          <div className="contact-info" data-aos="fade-right" data-aos-delay="300">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Location</h3>
                <p>Homagama, Sri Lanka</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>kavindusahansilva@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <h3>Phone</h3>
                <p>+94 XXX XXX XXX</p>
              </div>
            </div>

            <div className="download-resume">
              <a href="resume.pdf" className="btn primary" download>
                <i className="fas fa-file-download"></i> Download Resume
              </a>
            </div>

            <div className="social-links">
              <a href="https://github.com/kavi-ya" target="_blank" rel="noopener noreferrer" title="GitHub"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/kavindu-sahan-silva" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://www.instagram.com/kavi_y.a/" target="_blank" rel="noopener noreferrer" title="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="https://discord.com/users/gxkavindu" target="_blank" rel="noopener noreferrer" title="Discord"><i className="fab fa-discord"></i></a>
            </div>
          </div>

          <div className="contact-form" data-aos="fade-left" data-aos-delay="400">
            <div className="form-header">
              <div className="terminal-bar">
                <div className="terminal-buttons">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="terminal-title">secure_message.sh</div>
              </div>
            </div>

            <form ref={form} onSubmit={sendEmail} id="contactForm">
              <div className="form-group">
                <label htmlFor="from_name">IDENTITY:</label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="from_email">COMM CHANNEL:</label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  placeholder="your.email@domain.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">SUBJECT:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Message Subject"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">ENCRYPTED MESSAGE:</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your secure message..."
                  required
                ></textarea>
              </div>

              {statusType === 'encrypting' && (
                <div className="encryption-status" style={{ position: 'relative', zIndex: 1000, marginBottom: '1rem' }}>
                  <div className="encryption-progress" style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)', overflow: 'hidden' }}>
                    <div className="encryption-bar" style={{ width: `${progress}%`, height: '100%', background: 'var(--primary-color)', transition: 'width 0.05s linear' }}></div>
                  </div>
                  <div className="encryption-text" style={{ fontSize: '0.8rem', marginTop: '0.5rem', fontFamily: 'monospace', color: 'var(--primary-color)' }}>{status}</div>
                </div>
              )}

              {(statusType === 'success' || statusType === 'error') && (
                <div id="form-status" className={statusType} style={{ marginBottom: '1rem' }}>
                  {status}
                </div>
              )}

              <button type="submit" className="btn primary w-full" disabled={statusType === 'encrypting'}>
                <i className="fas fa-lock"></i> TRANSMIT SECURE MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}