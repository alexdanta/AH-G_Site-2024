// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TheStory from './pages/TheStory';
import Creations from './pages/Creations';
import Alexander from './pages/Alexander';
import FieldNotes from './pages/FieldNotes';
import Connections from './pages/Connections';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TheStory" element={<TheStory />} />
        <Route path="/Creations" element={<Creations />} />
        <Route path="/Alexander" element={<Alexander />} />
        <Route path="/FieldNotes" element={<FieldNotes />} />
        <Route path="/Connections" element={<Connections />} />


      </Routes>
    </Router>
  );
}

export default App;
