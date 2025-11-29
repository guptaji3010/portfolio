import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    return (
        <section id="skills" className="section bg-alt">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Skills & Certifications
                </motion.h2>
                <div className="skills-wrapper">
                    <motion.div
                        className="skills-category"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h3>Technical Skills</h3>
                        <div className="skill-tags">
                            {['Python', 'SQL', 'Power BI', 'Tableau', 'Advanced Excel', 'Data Modeling', 'Web Scraping'].map((skill, i) => (
                                <span key={i}>{skill}</span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="skills-category"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3>Business & Strategy</h3>
                        <div className="skill-tags">
                            {['Strategic Planning', 'P&L Management', 'Business Transformation', 'Financial Modeling', 'Agile & Scrum', 'Project Management', 'Change Management'].map((skill, i) => (
                                <span key={i}>{skill}</span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="skills-category"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3>Certifications</h3>
                        <ul className="cert-list">
                            <li>Google Cloud – Introduction to Generative AI (2024)</li>
                            <li>Lean Six Sigma (CSSC) (2024)</li>
                            <li>SQL (HackerRank Certified) (2024)</li>
                            <li>Microsoft Excel – Beginner to Advanced (2024)</li>
                            <li>Certification in Web Scraping in Python (2024)</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
