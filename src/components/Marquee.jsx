import React from 'react';

const Marquee = () => {
    const icons = [
        "devicon-react-original colored",
        "devicon-nodejs-plain-wordmark colored",
        "devicon-javascript-plain colored",
        "devicon-html5-plain-wordmark colored",
        "devicon-css3-plain-wordmark colored",
        "devicon-nextjs-plain active-light",
        "devicon-typescript-plain colored",
        "devicon-mongodb-plain-wordmark colored",
        "devicon-git-plain colored",
        "devicon-docker-plain colored",
    ];

    // Triple duplication for seamless loop
    const displayIcons = [...icons, ...icons, ...icons];

    return (
        <div className="tech-marquee-container">
            <div className="tech-marquee-track">
                {displayIcons.map((iconClass, index) => (
                    <i key={index} className={iconClass}></i>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
