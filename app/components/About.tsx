'use client';

import { useEffect, useState } from 'react';

export default function About() {
  const [date, setDate] = useState('');

  useEffect(() => {
    setDate(new Date().toISOString().split('T')[0]);
  }, []);

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image" data-aos="fade-right" data-aos-delay="200">
            <div className="cyber-frame">
              <img src="https://avatars.githubusercontent.com/u/176293037?s=400&u=09a691c0942acb7a9b4abf7b9bbb6f5b51872c33&v=4" alt="Kavindu" />
              <div className="scan-line"></div>
            </div>
          </div>
          <div className="about-text" data-aos="fade-left" data-aos-delay="300">
            <h2 className="mb-4" style={{ fontSize: '2rem', color: 'var(--primary-color)', fontWeight: 'bold' }}>
              Hi, I'm Kavindu Sahan Silva
            </h2>
            <p>Hello! I'm a passionate Cyber Security student specializing in network security, penetration testing, and cryptography. Currently completing my first year of undergraduate studies in Cyber Security.</p>
            <p>I'm fascinated by the ever-evolving challenges of digital security and dedicated to developing innovative solutions to protect organizations and individuals from emerging threats.</p>
            <div className="about-details">
              <div className="detail-item">
                <i className="fas fa-user-shield"></i>
                <span><strong>Name:</strong> Kavindu Sahan Silva</span>
              </div>
              <div className="detail-item">
                <i className="fas fa-map-marker-alt"></i>
                <span><strong>Location:</strong> Homagama </span>
              </div>
              <div className="detail-item">
                <i className="fas fa-envelope"></i>
                <span><strong>Email:</strong> kavindusahansilva@gmail.com</span>
              </div>
              <div className="detail-item">
                <i className="far fa-calendar-alt"></i>
                <span><strong>Last Updated:</strong> <span id="footer-date">{date}</span></span>
              </div>
            </div>
            <div className="download-resume">
              <a href="KavinduSahan_CV.pdf" className="btn primary" download>
                <i className="fas fa-file-download"></i> Download Full Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}