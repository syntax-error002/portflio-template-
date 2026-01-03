import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Linkedin, Github, Mail } from 'lucide-react';

const aboutData = [
    {
        id: 1,
        title: "ABOUT",
        subtitle: "PRAGATI RANA",
        location: "LOCATION : INDIA",
        description: (
            <>
                <p>PRAGATI RANA IS A SKILLED FULL STACK DEVELOPER WITH A PASSION FOR BUILDING ROBUST WEB APPLICATIONS. SHE SPECIALIZES IN THE MERN STACK AND RELIES ON CLEAN CODE AND MODERN DESIGN PRINCIPLES.</p>

                <div className="flex flex-wrap gap-6 mt-6">
                    <a
                        href="https://www.linkedin.com/in/rana-pragati-942932325"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-all duration-300 hover:scale-110"
                        title="LinkedIn"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '56px',
                            height: '56px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(10, 102, 194, 0.1)',
                            border: '2px solid rgba(10, 102, 194, 0.3)',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(10, 102, 194, 0.2)';
                            e.currentTarget.style.boxShadow = '0 6px 12px rgba(10, 102, 194, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(10, 102, 194, 0.1)';
                            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                        }}
                    >
                        <Linkedin size={28} />
                    </a>
                    <a
                        href="https://github.com/ranapragati06-crypto"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition-all duration-300 hover:scale-110"
                        title="GitHub"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '56px',
                            height: '56px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(128, 128, 128, 0.1)',
                            border: '2px solid rgba(128, 128, 128, 0.3)',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(128, 128, 128, 0.2)';
                            e.currentTarget.style.boxShadow = '0 6px 12px rgba(128, 128, 128, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(128, 128, 128, 0.1)';
                            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                        }}
                    >
                        <Github size={28} />
                    </a>
                    <a
                        href="mailto:ranapragati06@gmail.com"
                        className="hover:text-red-400 transition-all duration-300 hover:scale-110"
                        title="Email"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '56px',
                            height: '56px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(239, 68, 68, 0.1)',
                            border: '2px solid rgba(239, 68, 68, 0.3)',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.2)';
                            e.currentTarget.style.boxShadow = '0 6px 12px rgba(239, 68, 68, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
                            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                        }}
                    >
                        <Mail size={28} />
                    </a>
                </div>
            </>
        ),
        cardImage: "/pragati_profile.png"
    },
    {
        id: 2,
        title: "EXPERIENCE",
        subtitle: "Freelancer",
        location: "2023 - PRESENT",
        description: "DEVELOPED SCALABLE WEB APPLICATIONS FOR DIVERSE CLIENTS. COLLABORATED WITH UI/UX DESIGNERS TO IMPLEMENT RESPONSIVE INTERFACES. OPTIMIZED DATABASE QUERIES FOR FASTER LOAD TIMES.",
        cardColor: "#EB141E"
    },
    {
        id: 3,
        title: "EDUCATION",
        subtitle: "B.E COMPUTER ENGINEERING (CS)",
        location: "2024 - 2028 | CPI: 9.9",
        description: (
            <>
                CURRENTLY PURSUING B.E IN COMPUTER ENGINEERING. CONSISTENT ACADEMIC PERFORMER WITH <span style={{ fontSize: '1.4em', fontWeight: 'bold', color: '#000' }}>9.9 CPI</span>. SCORED <span style={{ fontSize: '1.4em', fontWeight: 'bold', color: '#000' }}>95%</span> IN CLASS XII AND <span style={{ fontSize: '1.4em', fontWeight: 'bold', color: '#000' }}>94%</span> IN CLASS X. SPECIALIZED IN ALGORITHMS, DATA STRUCTURES, AND WEB TECHNOLOGIES.
            </>
        ),
        cardColor: "#0056FF"
    }
];

const About = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % aboutData.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + aboutData.length) % aboutData.length);
    };

    const currentSlide = aboutData[currentIndex];

    return (
        <section className="about-section">
            <div className="about-top-half"></div>
            <div className="about-bottom-half"></div>

            <div className="about-content-wrapper">
                {/* Navigation Buttons */}
                <button className="nav-btn prev-btn" onClick={handlePrev}>
                    <ChevronLeft size={32} />
                </button>
                <button className="nav-btn next-btn" onClick={handleNext}>
                    <ChevronRight size={32} />
                </button>

                {/* Central Stacked Cards - Animated key change */}
                <div className="stacked-cards" key={currentSlide.id}>
                    <div className="card card-1"></div>
                    <div className="card card-2"></div>
                    <div className="card card-3" style={{ backgroundColor: currentSlide.cardColor || 'var(--primary-red)' }}>
                        {currentSlide.cardImage ? (
                            <img src={currentSlide.cardImage} alt="Profile" className="about-card-img" />
                        ) : (
                            // Just a colored block or icon for others if no image
                            <div className="card-placeholder-content"></div>
                        )}
                    </div>
                </div>

                {/* Typography Grid */}
                <div className="about-text-grid fade-key" key={`text-${currentSlide.id}`}>
                    <div className="text-left">
                        <h2 className="big-title">{currentSlide.title}</h2>
                        <span className="small-label">{currentSlide.location}</span>
                    </div>

                    <div className="text-center-spacer"></div>

                    <div className="text-right">
                        <div className="about-description">
                            {currentSlide.description}
                        </div>
                        <h2 className="big-title name-title">{currentSlide.subtitle}</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
