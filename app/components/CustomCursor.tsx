'use client';

import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [isHidden, setIsHidden] = useState(true);
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsHidden(false);

            const target = e.target as HTMLElement;
            setIsPointer(
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') !== null ||
                target.closest('button') !== null
            );
        };

        const onMouseLeave = () => setIsHidden(true);
        const onMouseDown = () => setIsClicking(true);
        const onMouseUp = () => setIsClicking(false);

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseleave', onMouseLeave);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseleave', onMouseLeave);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
        };
    }, []);

    if (typeof window === 'undefined' || isHidden) return null;

    return (
        <div className="custom-cursor-wrapper pointer-events-none fixed inset-0 z-[100000]">
            {/* Main Dot */}
            <div
                className="fixed w-2 h-2 bg-emerald-500 rounded-full transition-transform duration-100 ease-out"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : (isPointer ? 1.5 : 1)})`,
                }}
            />
            {/* Outer Ring */}
            <div
                className="fixed w-8 h-8 border border-emerald-500/50 rounded-full transition-all duration-300 ease-out"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: `translate(-50%, -50%) scale(${isClicking ? 1.2 : (isPointer ? 2 : 1)})`,
                    opacity: isPointer ? 0.8 : 0.4,
                }}
            />
        </div>
    );
}
