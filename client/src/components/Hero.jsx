import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="subtitle">Hello, I'm</p>
                    <h1 className="title">Piyush Gupta</h1>
                    <h2 className="role">Strategy Specialist | <span className="accent">AI Agent Development</span> & Data-Driven Strategy | <span className="accent">Digital Transformation</span></h2>
                    <p className="description">
                        Driving revenue growth and operational excellence through data-driven strategies and AI implementation.
                        MBA in Business Analytics with a knack for transforming complex data into actionable business insights.
                    </p>
                    <div className="cta-group">
                        <a href="#contact" className="btn btn-primary">Get in Touch <i className="fas fa-arrow-right"></i></a>
                        <a href="#projects" className="btn btn-secondary">View Projects</a>
                    </div>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/piyushg3010/" target="_blank" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://github.com/guptaji3010" target="_blank" aria-label="GitHub"><i className="fab fa-github"></i></a>
                        <a href="mailto:Piyushg1994@gmail.com" aria-label="Email"><i className="fas fa-envelope"></i></a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <img src={profileImg} alt="Piyush Gupta" />
                </motion.div>
            </div>

            <div className="scroll-down">
                <a href="#about">
                    <span className="mouse">
                        <span className="wheel"></span>
                    </span>
                </a>
            </div>
        </section>
    );
};

export default Hero;
