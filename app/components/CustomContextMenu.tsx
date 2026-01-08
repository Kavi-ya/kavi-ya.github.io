'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Home, Briefcase, Cpu, Mail, Github, Sun, Moon } from 'lucide-react';

export default function CustomContextMenu() {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [theme, setTheme] = useState('dark');

    const handleContextMenu = useCallback((e: MouseEvent) => {
        e.preventDefault();
        setVisible(true);
        setPosition({ x: e.clientX, y: e.clientY });
    }, []);

    const handleClick = useCallback(() => {
        if (visible) setVisible(false);
    }, [visible]);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') setVisible(false);
    }, []);

    useEffect(() => {
        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('click', handleClick);
        document.addEventListener('keydown', handleKeyDown);

        // Sync initial theme
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        setTheme(currentTheme);

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('click', handleClick);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleContextMenu, handleClick, handleKeyDown]);

    const toggleTheme = (e: React.MouseEvent) => {
        e.stopPropagation();
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        // Dispatch custom event for other components to listen to
        window.dispatchEvent(new Event('themeChange'));
        setVisible(false);
    };

    const copyEmail = (e: React.MouseEvent) => {
        e.stopPropagation();
        navigator.clipboard.writeText('kavindusahansilva@gmail.com');
        setVisible(false);
        // Could add a toast notification here
    };

    if (!visible) return null;

    // Adjust position to keep menu inside viewport
    const menuWidth = 208; // w-52 is 13rem = 208px
    const menuHeight = 260; // Estimated height
    const x = typeof window !== 'undefined' && position.x + menuWidth > window.innerWidth ? window.innerWidth - menuWidth - 20 : position.x;
    const y = typeof window !== 'undefined' && position.y + menuHeight > window.innerHeight ? window.innerHeight - menuHeight - 20 : position.y;

    const menuItems = [
        { label: 'Home', icon: <Home size={16} />, href: '#home' },
        { label: 'Skills', icon: <Cpu size={16} />, href: '#skills' },
        { label: 'Projects', icon: <Briefcase size={16} />, href: '#projects' },
    ];

    return (
        <div
            className="fixed z-[9999] w-52 bg-slate-900/90 dark:bg-slate-900/90 light:bg-white/90 backdrop-blur-xl border border-slate-800 dark:border-slate-800 light:border-gray-200 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                backgroundColor: theme === 'light' ? 'rgba(255, 255, 255, 0.95)' : 'rgba(15, 23, 42, 0.95)',
                borderColor: theme === 'light' ? '#e2e8f0' : '#1e293b'
            }}
        >
            <div className="py-2">
                {menuItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-emerald-500/10 hover:text-emerald-500 text-[var(--text-color)]"
                        style={{ color: theme === 'light' ? '#1e293b' : '#f8fafc' }}
                    >
                        <span className="text-emerald-500">{item.icon}</span>
                        {item.label}
                    </a>
                ))}

                <div className="h-px bg-slate-800/50 dark:bg-slate-800/50 light:bg-gray-200 my-1"
                    style={{ backgroundColor: theme === 'light' ? '#e2e8f0' : '#1e293b' }} />

                <button
                    onClick={toggleTheme}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-emerald-500/10 hover:text-emerald-500 text-left"
                    style={{ color: theme === 'light' ? '#1e293b' : '#f8fafc' }}
                >
                    <span className="text-emerald-500">
                        {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                    </span>
                    {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </button>

                <button
                    onClick={copyEmail}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-emerald-500/10 hover:text-emerald-500 text-left"
                    style={{ color: theme === 'light' ? '#1e293b' : '#f8fafc' }}
                >
                    <span className="text-emerald-500"><Mail size={16} /></span>
                    Copy Email
                </button>

                <a
                    href="https://github.com/kavi-ya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-emerald-500/10 hover:text-emerald-500"
                    style={{ color: theme === 'light' ? '#1e293b' : '#f8fafc' }}
                >
                    <span className="text-emerald-500"><Github size={16} /></span>
                    GitHub Profile
                </a>
            </div>
        </div>
    );
}
