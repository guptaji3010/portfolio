import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    About Me
                </motion.h2>
                <div className="about-grid">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p>
                            I am a strategic thinker with a strong foundation in Mechanical Engineering and an MBA in
                            Business Analytics from Delhi Technological University.
                            My expertise lies in bridging the gap between technical data analysis and strategic business
                            decision-making.
                        </p>
                        <p>
                            With experience in P&L management, digital transformation, and AI implementation, I have
                            successfully led initiatives that drove significant revenue growth and operational
                            efficiency.
                        </p>

                        <h3 className="subsection-title">Education</h3>
                        <div className="education-list">
                            <div className="edu-item">
                                <div className="edu-year">2023 - 2025</div>
                                <div className="edu-details">
                                    <h4>M.B.A. (Business Analytics)</h4>
                                    <p>Delhi Technological University, Delhi</p>
                                    <span className="grade">81.50%</span>
                                </div>
                            </div>
                            <div className="edu-item">
                                <div className="edu-year">2018 - 2022</div>
                                <div className="edu-details">
                                    <h4>B.Tech. (Mechanical Engineering)</h4>
                                    <p>Gautam Buddha University, UP</p>
                                    <span className="grade">86.80%</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="achievements-box"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3>Key Achievements</h3>
                        <ul className="achievement-list">
                            <li>
                                <i className="fas fa-trophy accent-icon"></i>
                                <div>
                                    <strong>DTU Hackathon Winner</strong>
                                    <p>1st Prize for 'Haptic Cane' AI assistive device.</p>
                                </div>
                            </li>
                            <li>
                                <i className="fas fa-users accent-icon"></i>
                                <div>
                                    <strong>Placement Coordinator</strong>
                                    <p>Supported 500+ students, onboarded 50+ companies.</p>
                                </div>
                            </li>
                            <li>
                                <i className="fas fa-chart-line accent-icon"></i>
                                <div>
                                    <strong>Revenue Growth</strong>
                                    <p>Targeting ₹500 Cr growth strategies.</p>
                                </div>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
