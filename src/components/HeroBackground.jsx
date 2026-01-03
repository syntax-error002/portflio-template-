import React from 'react';

const HeroBackground = () => {
    return (
        <div className="hero-bg">
            {/* Note: Ensure spiderman_bg.png is in the public folder */}
            <img src="/spiderman_bg.png" alt="Background Texture" className="bg-texture" />
            <div className="radial-glow"></div>
        </div>
    );
};

export default HeroBackground;
