import React from 'react';
import { Github, Linkedin, Menu } from 'lucide-react';

const Header = () => {
    return (
        <header>
            <div className="logo">PRAGATI RANA</div>
            <nav>
                <a href="#" className="nav-item">SKILLS</a>
                <a href="#" className="nav-item">PROJECTS</a>
                <a href="#" className="nav-item">EXPERIENCE</a>
                <a href="#" className="nav-item">CONTACT</a>
            </nav>
            <div className="header-right">
                <Github size={24} className="icon" />
                <Linkedin size={24} className="icon" />
                <Menu size={24} className="icon" />
            </div>
        </header>
    );
};

export default Header;
