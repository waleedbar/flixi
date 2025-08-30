// src/App.tsx

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Technology from './pages/Technology';
import Dashboard from './pages/Dashboard';
import Documentation from './pages/Documentation';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Admin from './pages/Admin';
import SignUp from './pages/SignUp';
import ConfigurationWizard from './pages/ConfigurationWizard'; // ---==[ 1. تمت إضافة هذا السطر ]==---
import './styles/globals.css';

// مكون شريط التنقل (Navbar)
function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <i className="fas fa-network-wired"></i> FlexiGate
        </Link>
        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link></li>
          <li><Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link></li>
          <li><Link to="/solutions" className={`nav-link ${isActive('/solutions') ? 'active' : ''}`}>Solutions</Link></li>
          <li><Link to="/technology" className={`nav-link ${isActive('/technology') ? 'active' : ''}`}>Technology</Link></li>
          <li><Link to="/dashboard" className={`nav-link ${isActive('/dashboard') ? 'active' : ''}`}>Dashboard</Link></li>
          <li><Link to="/documentation" className={`nav-link ${isActive('/documentation') ? 'active' : ''}`}>Docs</Link></li>
          <li><Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link></li>
        </ul>
        <div className="nav-actions">
          <Link to="/login" className="btn btn-outline">
            <i className="fas fa-sign-in-alt"></i> Login
          </Link>
          <Link to="/dashboard" className="btn btn-primary btn-glow">
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </Link>
        </div>
        <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </nav>
  );
}

// المكون الرئيسي للتطبيق
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {isLoading ? (
        <div className="loading-screen">
          <div className="loading-logo"><i className="fas fa-network-wired"></i></div>
          <div className="loading-spinner"></div>
          <div className="loading-text">Loading FlexiGate...</div>
        </div>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/configure-device" element={<ConfigurationWizard />} /> {/* ---==[ 2. تمت إضافة هذا السطر ]==--- */}
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;