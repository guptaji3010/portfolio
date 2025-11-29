import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/projects');
                const data = await res.json();
                setProjects(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section id="projects" className="section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Projects
                </motion.h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <Tilt
                            key={project._id || index}
                            tiltMaxAngleX={5}
                            tiltMaxAngleY={5}
                            scale={1.02}
                            transitionSpeed={2000}
                            className="project-card-tilt"
                        >
                            <motion.div
                                className="project-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="project-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="tags">
                                        {project.tags.map((tag, i) => (
                                            <span key={i}>{tag}</span>
                                        ))}
                                    </div>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                        {project.linkText} <i className="fas fa-external-link-alt"></i>
                                    </a>
                                </div>
                            </motion.div>
                        </Tilt>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
