import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MainContent from './components/maincontent';
import Map from './Map';
import About from './About';
import Contact from './Contact';
import FAQ from './FAQ';
import Footer from './components/Footer'; // Import the Footer component
import './styles/App.css';

function AppContent() {
  const location = useLocation();

  return (
    <div className="App">
      {(location.pathname !== "/map") && <Navbar />}
      <Routes>
        <Route path="/" element={<>
          <HeroSection />
          <MainContent />
        </>} />
        <Route path="/home" element={<>
          <HeroSection />
          <MainContent />
        </>} />
        <Route path="/map" element={<Map />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      {(location.pathname !== "/map") && <Footer />} {/* Conditionally render Footer */}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
