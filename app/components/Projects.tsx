'use client';

import { useState } from 'react';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      category: 'network',
      title: 'Network Vulnerability Scanner',
      description: 'A Python-based tool for identifying open ports and potential vulnerabilities in network infrastructure.',
      tech: ['Python', 'Scapy', 'Network Security'],
      img: 'https://images.unsplash.com/photo-1544890225-2f3faec4cd60?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=75&fm=webp'
    },
    {
      category: 'web',
      title: 'XSS Vulnerability Detector',
      description: 'A web application security tool that detects cross-site scripting vulnerabilities in web forms.',
      tech: ['JavaScript', 'Node.js', 'Web Security'],
      img: 'https://images.unsplash.com/photo-1545987796-200677ee1011?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=75&fm=webp'
    },
    {
      category: 'crypto',
      title: 'File Encryption Utility',
      description: 'A secure file encryption and decryption tool using AES-256 with a user-friendly interface.',
      tech: ['Java', 'Cryptography', 'AES'],
      img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=75&fm=webp'
    },
    {
      category: 'network',
      title: 'Network Packet Analyzer',
      description: 'A tool for capturing and analyzing network traffic to identify suspicious patterns and potential intrusions.',
      tech: ['Python', 'Pcap', 'Network Analysis'],
      img: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=75&fm=webp'
    }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Security Projects</h2>
        <div className="filter-buttons" data-aos="fade-up" data-aos-delay="200">
          <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
          <button className={`filter-btn ${filter === 'network' ? 'active' : ''}`} onClick={() => setFilter('network')}>Network</button>
          <button className={`filter-btn ${filter === 'web' ? 'active' : ''}`} onClick={() => setFilter('web')}>Web Security</button>
          <button className={`filter-btn ${filter === 'crypto' ? 'active' : ''}`} onClick={() => setFilter('crypto')}>Cryptography</button>
        </div>
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-item" data-category={project.category} data-aos="flip-up" data-aos-delay={300 + index * 100}>
              <div className="project-img">
                <img 
                  src={project.img} 
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((t, i) => <span key={i}>{t}</span>)}
                </div>
                <div className="project-links">
                  <a href="#" target="_blank"><i className="fab fa-github"></i></a>
                  <a href="#" target="_blank"><i className="fas fa-external-link-alt"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}