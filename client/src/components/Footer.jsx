import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; 2025 Piyush Gupta. All rights reserved.</p>
                <div className="social-links small" style={{ justifyContent: 'center' }}>
                    <a href="https://www.linkedin.com/in/piyushg3010/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://github.com/guptaji3010" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
