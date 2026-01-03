import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

const ProfileCard = () => {
    return (
        <div className="center-card-container">
            <div className="tech-lines"></div>

            <div className="booking-card">
                <div className="card-header centered-header">
                    <div className="profile-img-wrapper">
                        <img src="/pragati_profile.png" alt="Pragati Rana" className="card-profile-img" />
                    </div>
                </div>

                <h1 className="profile-name">PRAGATI RANA</h1>
                <span className="profile-role">FULL STACK DEVELOPER</span>

                <div className="card-grid">
                    <div className="grid-item info-item">
                        <span className="label">LOCATION</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            {/* MapPin could be here, or just text. Original had text 'INDIA' but markup showed MapPin 'MAP' placeholder in old version. 
                                 The new portfolio version uses a text 'INDIA' inside .value?
                                 Wait, the layout in styles.css for grid-item info-item centers everything.
                             */}
                            <span className="value">INDIA</span>
                        </div>
                    </div>
                    <div className="grid-item info-item">
                        <span className="label">EXPERIENCE</span>
                        <span className="value">3+ YEARS</span>
                    </div>
                </div>

                <button className="book-now-btn">
                    VIEW PROJECTS <ArrowRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default ProfileCard;
