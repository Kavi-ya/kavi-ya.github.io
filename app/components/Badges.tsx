'use client';

import React, { useState } from 'react';
import { Shield, Trophy, Bug, Box } from 'lucide-react';

export default function Badges() {
    return (
        <section id="badges" className="py-20">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white text-gray-900">
                        Certifications & Badges
                    </h2>
                    <p className="max-w-2xl mx-auto dark:text-slate-400 text-gray-600" data-aos="fade-up" data-aos-delay="200">
                        Professional certifications and achievements in the field of cyber security
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* TryHackMe Badge - Compact, No Box, Full Width with Tilt */}
                    <div className="md:col-span-3 flex justify-center" data-aos="zoom-in" data-aos-delay="300">
                        <Tilt className="w-fit">
                            <div className="transition-all duration-300 flex justify-center items-center">
                                <div className="w-[450px] overflow-hidden rounded-lg relative z-10 flex justify-center translate-x-16">
                                    <iframe
                                        src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=1332108"
                                        style={{ border: 'none', width: '450px', height: '140px' }}
                                        title="TryHackMe Profile"
                                        scrolling="no"
                                    ></iframe>
                                </div>
                            </div>
                        </Tilt>
                    </div>

                    {/* Hack The Box Badge */}
                    <div className="h-full" data-aos="zoom-in" data-aos-delay="400">
                        <Tilt className="h-full">
                            <div className="h-full p-8 dark:bg-slate-900 bg-white rounded-xl border dark:border-slate-800 border-gray-200 shadow-lg transition-all duration-300 flex flex-col items-center text-center md:items-start md:text-left group cursor-pointer">
                                <div className="text-4xl text-green-500 mb-6 dark:bg-green-500/10 bg-green-100 p-4 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                                    <Box size={40} />
                                </div>
                                <h3 className="text-xl font-bold dark:text-white text-gray-900 mb-1">Web Penetration Tester</h3>
                                <span className="inline-block px-3 py-1 text-xs font-semibold text-green-600 dark:text-green-400 dark:bg-green-500/10 bg-green-100 rounded-full mb-4">
                                    Job Role Path
                                </span>
                                <p className="dark:text-slate-400 text-gray-600 text-sm leading-relaxed">
                                    Advanced path covering core web security assessment, attack tactics, and professional vulnerability reporting using industry-proven methodologies.
                                </p>
                            </div>
                        </Tilt>
                    </div>

                    {/* Bashaway Badge */}
                    <div className="h-full" data-aos="zoom-in" data-aos-delay="500">
                        <Tilt className="h-full">
                            <div className="h-full p-8 dark:bg-slate-900 bg-white rounded-xl border dark:border-slate-800 border-gray-200 shadow-lg transition-all duration-300 flex flex-col items-center text-center md:items-start md:text-left group cursor-pointer">
                                <div className="text-4xl text-purple-500 mb-6 dark:bg-purple-500/10 bg-purple-100 p-4 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                                    <Trophy size={40} />
                                </div>
                                <h3 className="text-xl font-bold dark:text-white text-gray-900 mb-1">Bashaway 2025</h3>
                                <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-600 dark:text-purple-400 dark:bg-purple-500/10 bg-purple-100 rounded-full mb-4">
                                    1st Runner Up
                                </span>
                                <p className="dark:text-slate-400 text-gray-600 text-sm leading-relaxed">
                                    Secured 2nd place in the Inter-University CTF competition showcasing practical security skills.
                                </p>
                            </div>
                        </Tilt>
                    </div>

                    {/* CPPS Badge */}
                    <div className="h-full" data-aos="zoom-in" data-aos-delay="600">
                        <Tilt className="h-full">
                            <div className="h-full p-8 dark:bg-slate-900 bg-white rounded-xl border dark:border-slate-800 border-gray-200 shadow-lg transition-all duration-300 flex flex-col items-center text-center md:items-start md:text-left group cursor-pointer">
                                <div className="text-4xl text-red-500 mb-6 dark:bg-red-500/10 bg-red-100 p-4 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                                    <Bug size={40} />
                                </div>
                                <h3 className="text-xl font-bold dark:text-white text-gray-900 mb-1">CPPS Phishing Prevention</h3>
                                <span className="inline-block px-3 py-1 text-xs font-semibold text-green-600 dark:text-green-500 dark:bg-green-500/10 bg-green-100 rounded-full mb-4">
                                    Hack & Fix
                                </span>
                                <p className="dark:text-slate-400 text-gray-600 text-sm leading-relaxed">
                                    Specialized training in identifying and mitigating phishing attacks and security vulnerabilities.
                                </p>
                            </div>
                        </Tilt>
                    </div>

                </div>
            </div>
        </section>
    );
}

// Custom Tilt Component
function Tilt({ children, className }: { children: React.ReactNode; className?: string }) {
    const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
    const [transition, setTransition] = useState("transform 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s");

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        const centerX = width / 2;
        const centerY = height / 2;

        // Calculate rotation (max 5 degrees for subtle effect)
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        setTransition("none"); // Disable transition for instant follow
        setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`);
    };

    const handleMouseLeave = () => {
        setTransition("transform 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s"); // Smooth reset
        setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
    };

    return (
        <div
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform, transition, transformStyle: 'preserve-3d' }}
        >
            {children}
        </div>
    );
}
