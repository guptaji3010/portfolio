import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            role: "Business Strategy Executive",
            company: "Bhargava Phytolab, Noida",
            date: "Jul 2025 – Present",
            details: [
                "Developed comprehensive strategic roadmaps targeting ₹500 Cr revenue growth with financial modeling.",
                "Deployed AI-Agent for patient appointment automation system across HA subsidiary with upselling capabilities.",
                "Created Sehat Up subsidiary expansion strategy targeting ₹100 Cr with mission-vision framework.",
                "Led digital transformation implementing e-tablets for MRs, achieving 25% operational efficiency improvement.",
                "Designed quick commerce strategy leveraging Delhi NCR clinic network for last-mile delivery.",
                "Analyzed 2 quarters’ sales of 1,000+ doctors and 550+ sales parties using Python/Excel for actionable insights.",
                "Designed data-driven loyalty and voucher campaigns for HA subsidiary, improving marketing ROI by up to +1,000%."
            ]
        },
        {
            role: "Business Analyst Trainee",
            company: "Algo8 AI, Noida",
            date: "Dec 2024 – Jun 2025",
            details: [
                "Collaborated with stakeholders to gather requirements and write user stories for an AI-based vehicle inspection tool (10K+ cars/month).",
                "Led BOM cost analysis and vendor negotiations, reducing hardware cost by 40%.",
                "Built supplier performance algorithm in Python, driving 20% improvement in procurement KPIs.",
                "Created 700+ UAT test cases and facilitated Agile sprint delivery.",
                "Improved traceability for 2M+ units/month via QR-based tracking system.",
                "Built dashboards for leadership reporting and client reviews; awarded Team of the Month."
            ]
        },
        {
            role: "Summer Intern – Strategy & Analytics",
            company: "EdCIL (India) Limited, Noida",
            date: "Jul 2024 - Sept 2024",
            details: [
                "Pitched and conceptualized an AI-enabled smart recycling system using Green Coins and video validation.",
                "Led market analysis and procurement strategy for MoE sports kit distribution, unlocking ₹14L+ in margin.",
                "Drafted proposals for Flipped Classroom initiative in 150+ Mauritian schools.",
                "Verified compatibility of 130+ devices/components for use in Virtual Skill Labs."
            ]
        }
    ];

    return (
        <section id="experience" className="section bg-alt">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Work Experience
                </motion.h2>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <motion.div
                            className="timeline-item"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-date">{exp.date}</div>
                            <div className="timeline-content">
                                <h3>{exp.role}</h3>
                                <h4>{exp.company}</h4>
                                <ul className="job-details">
                                    {exp.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
