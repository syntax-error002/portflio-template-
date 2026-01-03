import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, Terminal } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form Data Transmitted:', formData);
        alert('DATA TRANSMISSION INITIATED...');
    };

    return (
        <section className="contact-section">
            <div className="contact-title-wrapper">
                <h2 className="contact-title">CONTACT <span style={{ color: '#e63946' }}>NEXUS</span></h2>
                <div className="contact-line"></div>
                <p style={{ fontFamily: 'Share Tech Mono', color: '#666' }}>// INITIATE COMMUNICATION PROTOCOL</p>
            </div>

            <div className="contact-container">
                {/* Left Panel: Contact Info */}
                <div className="contact-info-panel">
                    <a href="mailto:ranapragati06@gmail.com" className="info-card" style={{ '--accent-color': '#e63946' }}>
                        <div className="info-icon-box">
                            <Mail size={24} color="#333" />
                        </div>
                        <div className="info-content">
                            <h4>DIRECT_LINK</h4>
                            <p>ranapragati06@gmail.com</p>
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/rana-pragati-942932325" target="_blank" rel="noopener noreferrer" className="info-card" style={{ '--accent-color': '#0077b5' }}>
                        <div className="info-icon-box">
                            <Linkedin size={24} color="#333" />
                        </div>
                        <div className="info-content">
                            <h4>PROFESSIONAL_NET</h4>
                            <p>linkedin.com/in/rana-pragati</p>
                        </div>
                    </a>

                    <a href="https://github.com/ranapragati06-crypto" target="_blank" rel="noopener noreferrer" className="info-card" style={{ '--accent-color': '#333' }}>
                        <div className="info-icon-box">
                            <Github size={24} color="#333" />
                        </div>
                        <div className="info-content">
                            <h4>CODE_REPOSITORY</h4>
                            <p>github.com/ranapragati06-crypto</p>
                        </div>
                    </a>
                </div>

                {/* Right Panel: Form */}
                <div className="contact-form-wrapper">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="input-label">USER_ID [NAME]</label>
                            <input
                                type="text"
                                name="name"
                                className="tech-input"
                                placeholder="ENTER IDENTIFIER"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="input-label">COMM_CHANNEL [EMAIL]</label>
                            <input
                                type="email"
                                name="email"
                                className="tech-input"
                                placeholder="ENTER FREQUENCY"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="input-label">DATA_PACKET [MESSAGE]</label>
                            <textarea
                                name="message"
                                className="tech-input"
                                rows="4"
                                placeholder="ENTER DATA..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="tech-btn">
                            <span>TRANSMIT DATA</span>
                            <Send size={18} />
                            <div className="btn-glitch-effect"></div>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
