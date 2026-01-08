'use client';

import { useEffect, useRef, useState } from 'react';

export default function MatrixBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        // Listen for theme changes
        const checkTheme = () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
            setTheme(currentTheme);
        };

        checkTheme();
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const chars = '01αβγδεζηθικλμνξοπρστυφχψω$+-*/=%"\'#&_(),.;:?!\\|{}<>[]^~';
        const fontSize = 12;
        const columns = Math.floor(canvas.width / fontSize);
        const drops: number[] = [];

        for (let i = 0; i < columns; i++) {
            drops[i] = Math.floor(Math.random() * -100);
        }

        const isDark = theme === 'dark';
        const baseColor = isDark ? [0, 255, 140] : [0, 168, 107];
        const bgAlpha = isDark ? 0.05 : 0.08;

        const colors = [
            `rgba(${baseColor[0]}, ${baseColor[1]}, ${baseColor[2]}, 1)`,
            `rgba(${baseColor[0]}, ${baseColor[1]}, ${baseColor[2]}, 0.9)`,
            `rgba(${baseColor[0]}, ${baseColor[1]}, ${baseColor[2]}, 0.8)`,
            `rgba(${baseColor[0]}, ${baseColor[1]}, ${baseColor[2]}, 0.7)`,
        ];

        const draw = () => {
            ctx.fillStyle = isDark ? `rgba(0, 0, 0, ${bgAlpha})` : `rgba(255, 255, 255, ${bgAlpha})`;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < drops.length; i++) {
                const text = chars.charAt(Math.floor(Math.random() * chars.length));
                const color = colors[Math.floor(Math.random() * colors.length)];
                ctx.fillStyle = color;

                const size = fontSize + (Math.random() * 2 - 1);
                ctx.font = `${size}px monospace`;

                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (Math.random() > 0.975) {
                    ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.6)';
                    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                }

                drops[i]++;

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = Math.floor(Math.random() * -100);
                }
            }
        };

        const interval = setInterval(draw, 33);

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, [theme]);

    const opacity = theme === 'dark' ? 0.08 : 0.02;

    return <canvas ref={canvasRef} id="matrix-canvas" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -100, opacity }} />;
}
