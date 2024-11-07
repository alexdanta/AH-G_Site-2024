// src/components/ContactForm.jsx
import React, { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS SDK
import lottie from 'lottie-web';
import ahgLogoAnim from '../assets/ah-gWriteOn.json';
import './ContactForm.css';

function ContactForm({ onClose }) {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const animationContainer = useRef(null);
    const animationInstance = useRef(null); // Track the animation instance
    const autoResize = (e) => {
        e.target.style.height = 'auto'; // Reset height to shrink if needed
        e.target.style.height = `${e.target.scrollHeight}px`; // Set height based on content
    };


    useEffect(() => {
        // Only initialize the animation if it doesn't already exist
        if (!animationInstance.current) {
            animationInstance.current = lottie.loadAnimation({
                container: animationContainer.current,
                renderer: 'svg',
                loop: false,
                autoplay: true,
                animationData: ahgLogoAnim,
            });
            // Play only the first half on load
            animationInstance.current.playSegments([0, 100], true);
        }

        // Cleanup on component unmount
        return () => {
            animationInstance.current?.destroy();
            animationInstance.current = null; // Reset the animation instance
        };
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Play the second half of the animation on submit
        animationInstance.current?.playSegments([50, 100], true);
        setTimeout(() => {
            console.log(formData);
            onClose(); // Close form after submission
        }, 1000);

        emailjs
            .send(
                'service_76zvlij',  // Replace with your EmailJS Service ID
                'template_fumhxzs',  // Replace with your EmailJS Template ID
                formData,            // The form data object
                'Xw7fnWPDi-d8zwkEn'       // Replace with your EmailJS User ID (Public Key)
            )
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                alert('Message sent successfully!');
                onClose(); // Close form on successful submission
            })
            .catch((error) => {
                console.error('Email send error:', error);
                alert('Failed to send message. Please try again later.');
            });
    };

    return (
        <div className="form-overlay">
            <div className="form-container">
                <button onClick={onClose} className="close-button">✕</button>
                <div className="form-header">
                    <h2>Contacting :</h2>
                    <div ref={animationContainer} className="header-logo" />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <h3 className="form-label">Hello, My Name Is :</h3>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name here"
                            required
                        />

                    </div>
                    <div className="form-group">
                        <h3 className="form-label">Here Is My Email :</h3>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email here"
                            required
                        />

                    </div>
                    <div className="form-group2">
                        <h3 className="form-label">I'm Looking For :</h3>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={(e) => { handleChange(e); autoResize(e); }}
                            placeholder="Enter your project details here"
                            required
                        />

                    </div>
                    <button type="submit" className="send-button">Send</button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
