import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Experiences from './experiences'; // Assuming you have an Experiences page
import AboutMe from './about-me';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </Router>
  );
}

export default App;
