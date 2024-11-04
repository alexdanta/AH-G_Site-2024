import React, { useState } from 'react';
import Lottie from 'react-lottie-player';
import ahgLogoAnim from './assets/ah-gWriteOn.json';
import './Navbar.css';

function Navbar() {
    const [isPlaying, setIsPlaying] = useState(true);
    const [showText, setShowText] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleAnimationComplete = () => {
        setShowText(true);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='nav'>
            <a className="logo">
                <Lottie
                    loop={false}
                    play={isPlaying}
                    animationData={ahgLogoAnim}
                    className='lottie-logo'
                    onComplete={handleAnimationComplete}
                />
                {showText && (
                    <p className='logoName fade-in'>AH-G .</p>
                )}
            </a>

            {/* Hamburger Icon */}
            {showText && (
                <div className="hamburger fade-in" onClick={toggleMenu}>
                    ☰
                </div>
            )}

            {/* Navigation Links (conditionally rendered) */}
            <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <li><a href="#story">The Story</a></li>
                <li><a href="#creations">Creations</a></li>
                <li><a href="#alexander">Alexander</a></li>
                <li><a href="#field-notes">Field Notes</a></li>
                <li><a href="#connections">Connections</a></li>

                {/* CTA button inside mobile menu */}
                <li className="cta-mobile">
                    <a href="#reach-out" className="cta-button">Reach Out</a>
                </li>
            </ul>

            {/* Main CTA button (hidden on mobile) */}
            <div className="cta">
                <a href="#reach-out" className="cta-button">Reach Out</a>
            </div>
        </div>
    );
}

export default Navbar;
