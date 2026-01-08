'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Shield, Terminal, ChevronRight } from 'lucide-react';

export default function Navbar() {
    const [theme, setTheme] = useState('dark');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle Theme
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);

        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);

        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    // Listen for global theme changes (e.g. from Context Menu)
    useEffect(() => {
        const handleThemeChange = () => {
            setTheme(document.documentElement.getAttribute('data-theme') || 'dark');
        };
        window.addEventListener('themeChange', handleThemeChange);
        return () => window.removeEventListener('themeChange', handleThemeChange);
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
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? theme === 'dark'
                    ? 'py-3 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 shadow-lg shadow-black/5'
                    : 'py-3 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-lg'
                : 'py-5 bg-transparent border-b border-transparent'
                }`}
        >
            <div className="container mx-auto px-2 sm:px-4 md:px-6">
                <div className="flex justify-between items-center gap-x-4 lg:gap-x-8 xl:gap-x-12">

                    {/* Logo Section */}
                    <a href="#home" className="group flex items-center gap-2 sm:gap-3 relative z-50 shrink-0">
                        <div className="relative">
                            <Shield
                                className={`w-8 h-8 relative z-10 ${theme === 'dark' ? 'text-emerald-500' : 'text-gray-700'}`}
                                strokeWidth={2.5}
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className={`text-xl font-bold tracking-tight transition-colors ${theme === 'dark' ? 'text-white group-hover:text-emerald-400' : 'text-gray-900 group-hover:text-gray-700'
                                }`}>
                                Kavindu
                            </span>
                            <span className={`text-[10px] font-mono tracking-widest uppercase px-1 rounded w-fit ${theme === 'dark'
                                ? 'text-emerald-500/80 border border-emerald-500/30 bg-emerald-500/5'
                                : 'text-gray-700 border border-gray-300 bg-gray-100'
                                }`}>
                                SEC-SYS
                            </span>
                        </div>
                    </a>

                    {/* Navigation and Actions Wrapper */}
                    <div className="flex items-center gap-3 sm:gap-8 xl:gap-10 group/nav-wrapper">
                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center">
                            <ul className={`flex items-center gap-2 p-1.5 rounded-full backdrop-blur-sm ${theme === 'dark'
                                ? 'bg-slate-900/50 border border-slate-800/50'
                                : 'bg-gray-100/80 border border-gray-200'
                                }`}>
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className={`relative px-3 xl:px-4 py-2 text-sm font-medium transition-colors rounded-full block group ${theme === 'dark'
                                                ? 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'
                                                }`}
                                        >
                                            {link.name}
                                            <span className={`absolute bottom-2 left-1/2 w-0 h-0.5 group-hover:w-1/2 -translate-x-1/2 transition-all duration-300 opacity-0 group-hover:opacity-100 ${theme === 'dark' ? 'bg-emerald-500' : 'bg-gray-700'
                                                }`}></span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Right Side Actions */}
                        <div className="flex items-center gap-3 sm:gap-4">
                            {/* Theme Toggle */}
                            <button
                                onClick={toggleTheme}
                                className={`p-2 rounded-full border transition-all duration-300 relative overflow-hidden group/theme ${theme === 'dark'
                                    ? 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 hover:bg-emerald-500/10'
                                    : 'bg-gray-100 border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300 hover:bg-gray-200'
                                    }`}
                                aria-label="Toggle Theme"
                            >
                                <div className="relative z-10 transition-transform duration-300 group-hover/theme:rotate-12">
                                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                                </div>
                            </button>

                            {/* Mobile Menu Button */}
                            <button
                                className={`lg:hidden p-2 relative z-50 transition-colors ${theme === 'dark'
                                    ? 'text-slate-300 hover:text-white'
                                    : 'text-gray-600 hover:text-gray-900'
                                    }`}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 backdrop-blur-xl z-40 lg:hidden transition-all duration-300 flex flex-col justify-center items-center ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                    } ${theme === 'dark' ? 'bg-slate-950/95' : 'bg-white/95'
                    }`}
            >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r opacity-50 ${theme === 'dark' ? 'from-emerald-500 via-cyan-500 to-emerald-500' : 'from-gray-400 via-gray-500 to-gray-400'
                    }`}></div>

                <nav className="w-full max-w-md px-8 flex flex-col gap-6">
                    {navLinks.map((link, index) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`group flex items-center justify-between text-2xl font-bold border-b pb-4 transition-all duration-300 ${theme === 'dark'
                                ? 'text-slate-400 hover:text-white border-slate-800'
                                : 'text-gray-600 hover:text-gray-900 border-gray-300'
                                }`}
                            style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            <span className="flex items-center gap-3">
                                <span className={`text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity ${theme === 'dark' ? 'text-emerald-500/50' : 'text-gray-500'
                                    }`}>0{index + 1}</span>
                                {link.name}
                            </span>
                            <ChevronRight className={`opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${theme === 'dark' ? 'text-emerald-500' : 'text-gray-600'
                                }`} />
                        </a>
                    ))}

                    <div className={`mt-8 p-6 rounded-2xl border text-center ${theme === 'dark'
                        ? 'bg-slate-900/50 border-slate-800'
                        : 'bg-gray-100 border-gray-200'
                        }`}>
                        <Terminal className={`mx-auto mb-3 ${theme === 'dark' ? 'text-emerald-500' : 'text-gray-600'}`} />
                        <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                            System Status: <span className={`font-mono ${theme === 'dark' ? 'text-emerald-400' : 'text-gray-900'
                                }`}>ONLINE</span>
                        </p>
                    </div>
                </nav>
            </div>
        </header>
    );
}
