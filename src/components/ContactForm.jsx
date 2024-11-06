// src/components/ContactForm.jsx
import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm({ onClose }) {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Here you can handle form submission, e.g., send to backend
        onClose();
    };

    return (
        <div className="form-overlay">
            <div className="form-container">
                <button onClick={onClose} className="close-button">X</button>
                <h2>Reach Out</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </label>
                    <label>
                        Message:
                        <textarea name="message" value={formData.message} onChange={handleChange} required />
                    </label>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
