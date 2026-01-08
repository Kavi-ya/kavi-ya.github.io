'use client';

import { useState, useEffect } from 'react';

export default function Skills() {
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

        return () => {
            observer.disconnect();
        };
    }, []);

    // Defined specific colors for each skill for a vibrant look
    const skillCategories = [
        {
            title: 'Programming',
            icon: 'fas fa-code',
            titleColor: theme === 'dark' ? '#f472b6' : '#d81b60', // Deep pink for light theme
            skills: [
                { name: 'JavaScript/TypeScript', level: 85, icon: 'fab fa-js', color: '#facc15' },
                { name: 'Python', level: 75, icon: 'fab fa-python', color: '#38bdf8' },
                { name: 'Java', level: 80, icon: 'fab fa-java', color: '#f97316' },
                { name: 'C/C++', level: 70, icon: 'fas fa-file-code', color: '#3b82f6' }
            ]
        },
        {
            title: 'Frontend & Backend',
            icon: 'fas fa-layer-group',
            titleColor: theme === 'dark' ? '#00ff8c' : '#00a86b', // Darker green for light theme
            skills: [
                { name: 'React.js', level: 85, icon: 'fab fa-react', color: '#0ea5e9' },
                { name: 'Next.js', level: 80, icon: 'fas fa-server', color: theme === 'dark' ? '#ffffff' : '#1f2937' },
                { name: 'Node.js', level: 75, icon: 'fab fa-node', color: '#22c55e' },
                { name: 'Spring Framework', level: 65, icon: 'fas fa-leaf', color: '#84cc16' }
            ]
        },
        {
            title: 'Cloud & Database',
            icon: 'fas fa-network-wired',
            titleColor: theme === 'dark' ? '#2dd4bf' : '#008b8b', // Darker teal for light theme
            skills: [
                { name: 'GCP / AWS', level: 70, icon: 'fab fa-aws', color: '#f97316' },
                { name: 'Docker', level: 65, icon: 'fab fa-docker', color: '#0ea5e9' },
                { name: 'MongoDB', level: 80, icon: 'fas fa-database', color: '#22c55e' },
                { name: 'MySQL', level: 85, icon: 'fas fa-database', color: '#f59e0b' }
            ]
        },
        {
            title: 'Tools',
            icon: 'fas fa-tools',
            titleColor: theme === 'dark' ? '#e0e0e0' : '#4b5563', // Dark gray for light theme
            skills: [
                { name: 'Burp Suite', level: 70, icon: 'fas fa-bug', color: '#f97316' },
                { name: 'Nmap', level: 75, icon: 'fas fa-network-wired', color: '#0ea5e9' },
                { name: 'Wireshark', level: 65, icon: 'fas fa-wave-square', color: '#0284c7' },
                { name: 'Metasploit', level: 60, icon: 'fas fa-bomb', color: '#ef4444' }
            ]
        }
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title" style={{ color: theme === 'light' ? 'var(--primary-color)' : 'var(--text-color)' }}>Technical Skills</h2>
                <div className="skills-content">
                    {skillCategories.map((category, catIndex) => (
                        <div key={catIndex} className="skill-category" data-aos="fade-up" data-aos-delay={200 + catIndex * 200}>
                            {/* Category Header */}
                            <div className="flex items-center gap-4 mb-6 pb-2 border-b border-[var(--border-color)]">
                                <div
                                    className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
                                    style={{
                                        color: category.titleColor,
                                        backgroundColor: `${category.titleColor}15`,
                                        textShadow: 'none',
                                        boxShadow: 'none',
                                        filter: 'none'
                                    }}
                                >
                                    <i className={category.icon}></i>
                                </div>
                                <h3 className="text-xl font-bold m-0" style={{ color: category.titleColor, textShadow: 'none' }}>{category.title}</h3>
                            </div>

                            {/* Skills Grid - Professional Badges */}
                            <div className="grid grid-cols-2 gap-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="group flex items-center gap-3 p-3 rounded-lg border transition-all duration-300 hover:shadow-md cursor-default pointer-events-auto"
                                        style={{
                                            backgroundColor: theme === 'dark' ? 'rgba(30, 41, 59, 0.4)' : '#ffffff',
                                            borderColor: theme === 'dark' ? 'rgba(51, 65, 85, 0.5)' : '#e2e8f0',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = skill.color;
                                            e.currentTarget.style.backgroundColor = `${skill.color}10`;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = theme === 'dark' ? 'rgba(51, 65, 85, 0.5)' : '#e2e8f0';
                                            e.currentTarget.style.backgroundColor = theme === 'dark' ? 'rgba(30, 41, 59, 0.4)' : '#ffffff';
                                        }}
                                    >
                                        {/* Icon Box */}
                                        <div
                                            className="w-10 h-10 shrink-0 rounded flex items-center justify-center text-lg transition-transform duration-300 group-hover:scale-110"
                                            style={{
                                                color: skill.color,
                                                backgroundColor: `${skill.color}15`,
                                            }}
                                        >
                                            <i className={skill.icon}></i>
                                        </div>

                                        {/* Skill Name */}
                                        <span className="text-sm font-semibold text-[var(--text-color)] truncate">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}