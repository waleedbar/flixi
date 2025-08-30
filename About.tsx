// src/pages/About.tsx
import { useEffect } from 'react';
import SecurityBanner from '../components/SecurityBanner';
export default function About() {
  useEffect(() => {
    document.title = "FlexiGate - About";
  }, []);

  return (
    <main>
      <SecurityBanner />
      <section className="container section-padding">
        <h1 className="page-title">Pioneering Practical, Modular Industrial Communication</h1>
        <p className="page-subtitle"></p>
        
        <div className="features-grid">
          <div className="feature-card slide-in-left">
            <div className="feature-icon">
              <i className="fas fa-eye"></i>
            </div>
            <h3>Our Vision</h3>
            <p>Build a flexible IoT gateway that unifies legacy field buses and modern messaging with minimal hardware changes.</p>
            <div className="status-indicator">
              <div className="status-dot online"></div>
              <span>Innovation Active</span>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-bullseye"></i>
            </div>
            <h3>Our Mission</h3>
            <p>Simplify integration by using a consistent web configuration model (JSON) delivered via MQTT, enabling fast on-site setup and iterative improvements.</p>
            <div className="status-indicator">
              <div className="status-dot online"></div>
              <span>Mission Critical</span>
            </div>
          </div>
          <div className="feature-card slide-in-right">
            <div className="feature-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3>Our Team</h3>
            <p>Academic project team focused on embedded systems, networking, and web engineering.</p>
            <div className="status-indicator">
              <div className="status-dot online"></div>
              <span>Team Excellence</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}