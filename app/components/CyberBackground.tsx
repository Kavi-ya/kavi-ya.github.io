'use client';

import { useEffect, useRef } from 'react';

export default function CyberBackground() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const width = window.innerWidth;
        const height = window.innerHeight;
        const nodeCount = Math.floor(width * height / 20000);
        const nodes: { element: HTMLDivElement, x: number, y: number }[] = [];

        for (let i = 0; i < nodeCount; i++) {
            const node = document.createElement('div');
            node.className = 'node';
            const x = Math.random() * width;
            const y = Math.random() * height;
            node.style.left = `${x}px`;
            node.style.top = `${y}px`;
            container.appendChild(node);
            nodes.push({ element: node, x, y });
        }

        const maxDistance = 150;
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const nodeA = nodes[i];
                const nodeB = nodes[j];
                const dx = nodeB.x - nodeA.x;
                const dy = nodeB.y - nodeA.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxDistance) {
                    const connection = document.createElement('div');
                    connection.className = 'connection';
                    connection.style.left = `${nodeA.x}px`;
                    connection.style.top = `${nodeA.y}px`;
                    connection.style.width = `${distance}px`;
                    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
                    connection.style.transform = `rotate(${angle}deg)`;
                    container.appendChild(connection);
                }
            }
        }

        return () => {
            if (container) container.innerHTML = '';
        };
    }, []);

    return <div ref={containerRef} id="cyber-background" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -100 }} />;
}
