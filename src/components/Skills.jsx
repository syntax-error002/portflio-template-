import React, { useEffect, useRef } from 'react';

const skillsData = [
    {
        category: "FRONTEND",
        direction: "left",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Redux", "Framer Motion"]
    },
    {
        category: "BACKEND",
        direction: "right",
        items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", "GraphQL", "REST API", "Socket.io"]
    },
    {
        category: "TOOLS",
        direction: "left",
        items: ["Git", "Docker", "Figma", "VS Code", "Postman", "Webpack", "Vite", "Jest"]
    }
];

const Skills = () => {
    // Simple intersection observer for fade-in on scroll
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="skills-section" ref={sectionRef}>
            <div className="section-header fade-in-up">
                <h2 className="section-title">TECHNICAL <span className="highlight-red">ARSENAL</span></h2>
                <div className="section-line"></div>
            </div>

            <div className="skills-rows-container fade-in-up delay-200">
                {skillsData.map((group, index) => (
                    <div key={index} className="skill-category-row">
                        <h3 className="category-row-title">{group.category} <span className="category-line"></span></h3>

                        <div className="skill-marquee-wrapper">
                            <div className={`skill-marquee-track scroll-${group.direction}`}>
                                {/* Triple duplicate for seamless loop */}
                                {[...group.items, ...group.items, ...group.items, ...group.items].map((skill, idx) => (
                                    <div key={idx} className="skill-pill">
                                        <i className={`devicon-${skill.toLowerCase().replace(' ', '').replace('.', '')}-plain colored skill-icon-small`}></i>
                                        <span className="skill-pill-text">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
