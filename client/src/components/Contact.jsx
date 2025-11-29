import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <motion.div
                    className="contact-box"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">Get In Touch</h2>
                    <p>I'm currently available for new opportunities. Whether you have a question or just want to say
                        hi, I'll try my best to get back to you!</p>
                    <div className="contact-info">
                        <a href="mailto:Piyushg1994@gmail.com" className="contact-item">
                            <i className="fas fa-envelope"></i>
                            <span>Piyushg1994@gmail.com</span>
                        </a>
                        <a href="tel:+917652039478" className="contact-item">
                            <i className="fas fa-phone"></i>
                            <span>+91 7652039478</span>
                        </a>
                        <div className="contact-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Noida, IN</span>
                        </div>
                    </div>
                    <a href="mailto:Piyushg1994@gmail.com" className="btn btn-primary big-btn">Say Hello</a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
