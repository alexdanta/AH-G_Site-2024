// src/pages/ConnectionsPage.jsx
import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';
import Tag from '../components/Tag';

function ConnectionsPage() {
  const [formOpen, setFormOpen] = useState(false);

  const openForm = () => setFormOpen(true);
  const closeForm = () => setFormOpen(false);

  return (
    <div className="page">
      <Tag />
      <h1>Connections</h1>
      <p>If you prefer to email directly, <a href="mailto:your-email@example.com">click here</a>.</p>
      <button onClick={openForm} className="cta-button">Reach Out via Form</button>

      {formOpen && <ContactForm onClose={closeForm} />}
    </div>
  );
}

export default ConnectionsPage;
