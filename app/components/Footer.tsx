'use client';

import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Shield, Terminal, Clock } from 'lucide-react';
import QRCode from 'react-qr-code';

export default function Footer() {
  const [dateTime, setDateTime] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Get initial theme from data-theme attribute
    const getTheme = () => {
      return document.documentElement.getAttribute('data-theme') || 'dark';
    };

    setTheme(getTheme());

    // Watch for theme changes using MutationObserver
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          setTheme(getTheme());
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    // Set portfolio URL (will be the current site URL when deployed)
    setPortfolioUrl(window.location.origin);

    // Live clock
    const timer = setInterval(() => {
      const now = new Date();
      setDateTime(now.toLocaleString('en-GB', { hour12: false }).replace(',', ''));
    }, 1000);

    return () => {
      clearInterval(timer);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Journey', href: '#journey' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Badges', href: '#badges' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className={`relative border-t mt-20 ${theme === 'dark'
      ? 'bg-slate-950 border-slate-800'
      : 'bg-gray-50 border-gray-200'
      }`}>
      <div className="container mx-auto px-4 md:px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Shield className={`w-8 h-8 relative z-10 ${theme === 'dark' ? 'text-emerald-500' : 'text-gray-700'
                  }`} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className={`text-xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                  Kavindu
                </span>
                <span className={`text-[10px] font-mono tracking-widest uppercase border px-1 rounded w-fit ${theme === 'dark'
                  ? 'text-emerald-500/80 border-emerald-500/30 bg-emerald-500/5'
                  : 'text-gray-700 border-gray-300 bg-gray-100'
                  }`}>
                  SEC-SYS
                </span>
              </div>
            </div>
            <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
              }`}>
              Cyber Security Professional specializing in penetration testing, secure development, and threat analysis.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className={`font-bold text-lg flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
              <Terminal className={`w-5 h-5 ${theme === 'dark' ? 'text-emerald-500' : 'text-gray-700'
                }`} />
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`text-sm flex items-center gap-2 group transition-colors ${theme === 'dark'
                      ? 'text-slate-400 hover:text-emerald-400'
                      : 'text-gray-600 hover:text-gray-900'
                      }`}
                  >
                    <span className={`w-0 h-0.5 group-hover:w-4 transition-all duration-300 ${theme === 'dark' ? 'bg-emerald-500' : 'bg-gray-700'
                      }`}></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className={`font-bold text-lg flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
              <Mail className={`w-5 h-5 ${theme === 'dark' ? 'text-emerald-500' : 'text-gray-700'
                }`} />
              Connect
            </h3>
            <div className="space-y-3">
              <a
                href="https://github.com/kavi-ya"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 text-sm group transition-colors ${theme === 'dark'
                  ? 'text-slate-400 hover:text-emerald-400'
                  : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                <div className={`p-2 rounded-lg border transition-colors ${theme === 'dark'
                  ? 'bg-slate-900/50 border-slate-800 group-hover:border-emerald-500/30'
                  : 'bg-white border-gray-200 group-hover:border-gray-400'
                  }`}>
                  <Github className="w-4 h-4" />
                </div>
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/kavindu-sahan-silva"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 text-sm group transition-colors ${theme === 'dark'
                  ? 'text-slate-400 hover:text-emerald-400'
                  : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                <div className={`p-2 rounded-lg border transition-colors ${theme === 'dark'
                  ? 'bg-slate-900/50 border-slate-800 group-hover:border-emerald-500/30'
                  : 'bg-white border-gray-200 group-hover:border-gray-400'
                  }`}>
                  <Linkedin className="w-4 h-4" />
                </div>
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:kavindusahansilva@gmail.com"
                className={`flex items-center gap-3 text-sm group transition-colors ${theme === 'dark'
                  ? 'text-slate-400 hover:text-emerald-400'
                  : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                <div className={`p-2 rounded-lg border transition-colors ${theme === 'dark'
                  ? 'bg-slate-900/50 border-slate-800 group-hover:border-emerald-500/30'
                  : 'bg-white border-gray-200 group-hover:border-gray-400'
                  }`}>
                  <Mail className="w-4 h-4" />
                </div>
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* System Status & QR Code */}
          <div className="space-y-4">
            <h3 className={`font-bold text-lg flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
              <Clock className={`w-5 h-5 ${theme === 'dark' ? 'text-emerald-500' : 'text-gray-700'
                }`} />
              Quick Access
            </h3>

            {/* QR Code */}
            <div className="bg-white p-3 rounded-lg w-fit">
              <QRCode
                value="The key is hidden where the journey begins..."
                size={120}
                level="H"
                className="w-full h-auto"
              />
            </div>
            <p className={`text-xs ${theme === 'dark' ? 'text-slate-500' : 'text-gray-500'
              }`}>Small hint for you...</p>

            {/* System Time */}
            <div className={`mt-4 p-3 rounded-lg border ${theme === 'dark'
              ? 'bg-slate-900/50 border-slate-800'
              : 'bg-white border-gray-200'
              }`}>
              <div className={`flex items-center gap-2 text-xs font-mono mb-1 ${theme === 'dark' ? 'text-emerald-400' : 'text-gray-700'
                }`}>
                <div className={`w-2 h-2 rounded-full animate-pulse ${theme === 'dark' ? 'bg-emerald-500' : 'bg-gray-600'
                  }`}></div>
                SYSTEM ONLINE
              </div>
              <p className={`text-xs font-mono ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
                }`}>{dateTime || 'Loading...'}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`pt-8 border-t ${theme === 'dark' ? 'border-slate-800' : 'border-gray-200'
          }`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
              }`}>
              © 2026 Kavindu Sahan Silva. All rights reserved.
            </p>
            <p className={`text-xs flex items-center gap-2 ${theme === 'dark' ? 'text-slate-500' : 'text-gray-500'
              }`}>
              <span>Designed & Built with</span>
              <span className={theme === 'dark' ? 'text-emerald-500' : 'text-gray-700'}>⚡</span>
              <span>by Kavindu</span>
            </p>
          </div>
        </div>
      </div>

      {/* Cyber Grid Background Effect (only in dark mode) */}
      {theme === 'dark' && (
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      )}
    </footer>
  );
}