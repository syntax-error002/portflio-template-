import React from 'react';
import { Copyright } from 'lucide-react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-badge">
                <Copyright size={16} style={{ marginRight: '8px' }} /> MADE WITH ANTIGRAVITY
            </div>
        </footer>
    );
};

export default Footer;
