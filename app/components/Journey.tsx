export default function Journey() {
    return (
        <section id="journey" className="journey">
            <div className="container">
                <h2 className="section-title">My Journey</h2>
                <p className="section-description" data-aos="fade-up" data-aos-delay="200">The path I've taken in my cyber security career so far</p>

                <div className="timeline" data-aos="fade-up" data-aos-delay="300">

                    {/* Education */}
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <div className="timeline-date">Jun 2024 - Jul 2028</div>
                            <h3>BSc (Hons) Information Technology - Cyber Security</h3>
                            <p className="font-semibold" style={{ color: 'var(--primary-color)' }}>Sri Lanka Institute of Information Technology (SLIIT)</p>
                            <p>Dean's List - Semester 1 & 3</p>
                            <div className="timeline-icon"><i className="fas fa-graduation-cap"></i></div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <div className="timeline-date">2023</div>
                            <h3>G.C.E. Advanced Level - Engineering Technology</h3>
                            <p>District Rank: 10th | Presidential Award Recipient</p>
                            <div className="timeline-icon"><i className="fas fa-school"></i></div>
                        </div>
                    </div>

                    {/* Awards - 2025 */}
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <div className="timeline-date">2025</div>
                            <h3>Bashaway 2025 - 1st Runner Up</h3>
                            <p>Achieved 1st Runner-up at Bashaway 2025, a premier cyber security competition.</p>
                            <div className="timeline-icon"><i className="fas fa-trophy"></i></div>
                        </div>
                    </div>

                    {/* Projects - 2025 */}
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <div className="timeline-date">Late 2025</div>
                            <h3>Hospital Management System</h3>
                            <p>Comprehensive software for hospital administration featuring patient admission, doctor scheduling, pharmacy inventory, and billing. Built with OOP principles and secure database connectivity.</p>
                            <div className="timeline-icon"><i className="fas fa-hospital"></i></div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <div className="timeline-date">Sep 2025</div>
                            <h3>EduFix - Academic Help Desk</h3>
                            <p>Full-Stack Web Application Centralized help desk system with ticket management, real-time support tracking, and role-based access.</p>
                            <div className="timeline-icon"><i className="fas fa-chalkboard-teacher"></i></div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <div className="timeline-date">July 2025</div>
                            <h3>Exam Management System</h3>
                            <p>Enterprise Java Application Real-time examination platform with RBAC for Admins, Teachers, and Students.</p>
                            <div className="timeline-icon"><i className="fas fa-file-alt"></i></div>
                        </div>
                    </div>

                    {/* Projects - September 2024 */}
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <div className="timeline-date">September 2024</div>
                            <h3>Greenhouse Automation System</h3>
                            <p>IoT & Embedded Systems IoT-based environmental control using Arduino, C++, Firebase, and Next.js.</p>
                            <div className="timeline-icon"><i className="fas fa-leaf"></i></div>
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <div className="timeline-date">Certifications</div>
                            <ul className="course-list">
                                <li><strong>CPPS Phishing Prevention</strong> (Hack & Fix)</li>
                                <li><strong>Advent of Cyber 2025</strong> (TryHackMe)</li>
                                <li><strong>Web Penetration Tester</strong> (HTB - In Progress)</li>
                                <li><strong>Full Stack Development</strong> (UoM 2024)</li>
                            </ul>
                            <div className="timeline-icon"><i className="fas fa-certificate"></i></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
