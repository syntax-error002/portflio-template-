import React, { useEffect, useRef } from 'react';
import { Trophy, Users, Mic, Star, Heart, Code } from 'lucide-react';
import './Activities.css';

const activitiesData = [
    {
        id: 1,
        title: "LEADERSHIP",
        subtitle: "PRESIDENT & MENTOR",
        location: "CODING CLUB",
        description: "LED A COMMUNITY OF 500+ STUDENTS. ORGANIZED WORKSHOPS, HACKATHONS, AND TECH TALKS. MENTORED JUNIORS IN WEB DEVELOPMENT AND DSA.",
        cardColor: "#FF4500",
        icon: Users
    },
    {
        id: 2,
        title: "ACHIEVEMENTS",
        subtitle: "HACKATHONS & AWARDS",
        location: "NATIONAL LEVEL",
        description: "WINNER OF SMART INDIA HACKATHON 2024. SECURED 1ST RANK IN UNIVERSITY CODING CONTEST. CONTRIBUTED TO MAJOR OPEN SOURCE REPOSITORIES.",
        cardColor: "#32CD32",
        icon: Trophy
    },
    {
        id: 3,
        title: "COMMUNITY",
        subtitle: "TECH SPEAKER",
        location: "EVENTS",
        description: "DELIVERED SESSIONS ON REACT AND CLOUD COMPUTING. ACTIVE WRITER ON DEV.TO AND MEDIUM. BELIEVER IN LEARNING IN PUBLIC.",
        cardColor: "#9932CC",
        icon: Mic
    }
];

const Activities = () => {
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
        <section className="activities-section-new" ref={sectionRef}>
            <div className="section-header fade-in-up" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 className="section-title">ACTIVITIES & <span className="highlight-red">ROLES</span></h2>
                <div className="section-line" style={{ margin: '1rem auto' }}></div>
            </div>

            <div className="activities-grid">
                {activitiesData.map((activity, index) => {
                    const Icon = activity.icon;
                    return (
                        <div
                            key={activity.id}
                            className="activity-card fade-in-up"
                            style={{
                                animationDelay: `${index * 200}ms`,
                                '--accent-color': activity.cardColor
                            }}
                        >
                            <div className="card-bg-glow"></div>

                            <div className="card-icon-wrapper">
                                <Icon size={40} color={activity.cardColor} />
                            </div>

                            <div className="card-content">
                                <span className="card-location">{activity.location}</span>
                                <h3 className="card-title">{activity.title}</h3>
                                <h4 className="card-subtitle">{activity.subtitle}</h4>
                                <p className="card-description">{activity.description}</p>
                            </div>

                            <div className="card-border-gradient"></div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Activities;


