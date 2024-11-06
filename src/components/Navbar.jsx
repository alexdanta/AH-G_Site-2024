import { useState } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie-player';
import ContactForm from './ContactForm';
import ahgLogoAnim from '../assets/ah-gWriteOn.json';
import './Navbar.css';

function Navbar() {
    const [isPlaying, setIsPlaying] = useState(true);
    const [showText, setShowText] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [formOpen, setFormOpen] = useState(false); // State for form modal

    const handleAnimationComplete = () => {
        setShowText(true);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const openForm = () => setFormOpen(true);
    const closeForm = () => setFormOpen(false);

    return (
        <div className='nav'>
            <div className="logo">
                <Lottie
                    loop={false}
                    play={isPlaying}
                    animationData={ahgLogoAnim}
                    className='lottie-logo'
                    onComplete={handleAnimationComplete}
                />
                {showText && (
                    <Link to="/" className='logoName fade-in'>AH-G .</Link>
                )}
            </div>

            {/* Hamburger Icon */}
            {showText && (
                <div className="hamburger fade-in" onClick={toggleMenu}>
                    ☰
                </div>
            )}

            {/* Navigation Links */}
            <ul className={`nav-links ${menuOpen ? 'open ' : ''} ${showText ? 'fade-in' : ''}`}>
                <li><Link to="/TheStory">The Story</Link></li>
                <li><Link to="/creations">Creations</Link></li>
                <li><Link to="/alexander">Alexander</Link></li>
                <li><Link to="/FieldNotes">Field Notes</Link></li>
                <li><Link to="/connections">Connections</Link></li>

                {/* CTA button inside mobile menu */}
                <li className="cta-mobile">
                    <button onClick={openForm} className="cta-button">Reach Out</button>
                </li>
            </ul>

            {/* Main CTA button (hidden on mobile) */}
            <div className="cta">
                <button onClick={openForm} className="cta-button">Reach Out</button>
            </div>

            {/* Contact Form Modal */}
            {formOpen && <ContactForm onClose={closeForm} />}
        </div>
    );
}

export default Navbar;
