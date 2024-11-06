import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Lottie from 'react-lottie-player';
import ahgLogoAnim from '../assets/ah-gWriteOn.json';
import './Tag.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Tag({ title1 = "Project", title2 = "Unit", logoTitle = "DR.BY" }) {
    return (
        <div className='Tag'>
            <div className='TagSection1'>
                <h1>{title1}:</h1>
                <h1>{title2}</h1>
            </div>

            <div className='TagSection2'>
                <Link to="/" className="tag-row">
                    <h1>{logoTitle}</h1>
                    <Lottie
                        loop={false}
                        play={false}
                        animationData={ahgLogoAnim}
                        goTo={100}
                        className='TagLogo'
                    />
                </Link>

                <div className="tag-row">
                    <h1>CH.BY</h1>
                    <div className="social-links">
                        <a href="https://www.instagram.com/ah_g.xyz/" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/@AH-Gxyz" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a href="https://twitter.com/@herbegeorge" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <i className="fab fa-x-twitter"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/alexander-herbe-george/" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className='TagSection3'><h1>RATING</h1></div>
        </div>
    );
}

export default Tag;
