'use client';

import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Hero() {
  const typedEl = useRef(null);
  const [currentTime, setCurrentTime] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    AOS.init();

    const typed = new Typed(typedEl.current, {
      strings: ['Undergraduate', 'CTF Player', 'Network Enthusiast'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true
    });

    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleString('en-GB', { hour12: false }).replace(',', ''));
    }, 1000);

    // Animated particles background
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      interface Particle {
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;
        opacity: number;
      }

      const particles: Particle[] = [];
      const particleCount = 80;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2
        });
      }

      const drawParticles = () => {
        if (!ctx || !canvas) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Get current theme
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const isDark = currentTheme === 'dark';
        const particleColor = isDark ? [0, 255, 140] : [0, 168, 107];

        // Draw connections
        particles.forEach((particle, i) => {
          particles.slice(i + 1).forEach(otherParticle => {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
              const lineOpacity = isDark ? 0.15 : 0.1;
              ctx.strokeStyle = `rgba(${particleColor[0]}, ${particleColor[1]}, ${particleColor[2]}, ${lineOpacity * (1 - distance / 120)})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          });
        });

        // Draw particles
        particles.forEach(particle => {
          ctx.fillStyle = `rgba(${particleColor[0]}, ${particleColor[1]}, ${particleColor[2]}, ${particle.opacity})`;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();

          // Update position
          particle.x += particle.speedX;
          particle.y += particle.speedY;

          // Wrap around edges
          if (particle.x < 0) particle.x = canvas.width;
          if (particle.x > canvas.width) particle.x = 0;
          if (particle.y < 0) particle.y = canvas.height;
          if (particle.y > canvas.height) particle.y = 0;
        });

        requestAnimationFrame(drawParticles);
      }

      drawParticles();

      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }

    return () => {
      typed.destroy();
      clearInterval(timer);
    };
  }, []);

  return (
    <section id="home" className="hero">
      <canvas ref={canvasRef} className="hero-particles" />
      <div className="container">
        <div className="hero-content" data-aos="fade-up" data-aos-duration="1000">
          <div className="cyber-text">CYBER SECURITY</div>
          <h1>Hi, I'm <span className="highlight">Kavindu</span></h1>
          <h2>I'm a <span ref={typedEl} className="typed-text"></span></h2>
          <p>Securing the digital world, one byte at a time</p>
          <div className="cta-buttons">

            <a href="resume.pdf" className="btn secondary" download>Download CV</a>
          </div>
          <div className="live-date">
            <div className="cyber-badge">
              <i className="fas fa-shield-alt"></i> LIVE SYSTEM
            </div>
            <div id="current-time">{currentTime}</div>
          </div>
        </div>
      </div>
      <div className="scroll-down">
        <a href="#about"><i className="fas fa-chevron-down"></i></a>
      </div>
    </section>
  );
}