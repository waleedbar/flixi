// src/pages/Contact.tsx
import { useEffect } from 'react';
import SecurityBanner from '../components/SecurityBanner';
export default function Contact() {
  useEffect(() => {
    document.title = "FlexiGate - Contact";
  }, []);

  return (
    <main>
      <SecurityBanner />
      <section className="container section-padding">
        <h1 className="page-title">Get In Touch</h1>
        <p className="page-subtitle">This is an academic prototype under active development.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginTop: '3rem' }}>
          <div className="dashboard-card">
            <h3><i className="fas fa-paper-plane"></i> Send Message</h3>
            <form id="contactForm">
              <div className="input-group">
                <input type="text" placeholder="Full Name" required />
                <i className="fas fa-user"></i>
              </div>
              <div className="input-group">
                <input type="email" placeholder="Email Address" required />
                <i className="fas fa-envelope"></i>
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-input form-textarea" placeholder="Describe your inquiry..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-glow" style={{ width: '100%', justifyContent: 'center' }}>
                <i className="fas fa-paper-plane"></i> Send Message
              </button>
            </form>
          </div>
          
          <div className="dashboard-card">
            <h3><i className="fas fa-info-circle"></i> Contact Information</h3>
            <div style={{ margin: '2rem 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', padding: '1.5rem', background: 'var(--light-gray)', borderRadius: '16px' }}>
                <div style={{ width: '50px', height: '50px', background: 'linear-gradient(135deg, var(--secondary-blue), var(--accent-orange))', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1.5rem' }}>
                  <i className="fas fa-envelope" style={{ color: 'white', fontSize: '1.2rem' }}></i>
                </div>
                <div>
                  <h4 style={{ margin: 0, color: 'var(--primary-blue)' }}>Email</h4>
                  <p style={{ margin: 0, color: 'var(--text-light)' }}>support@flexigate.local</p>
                  <small style={{ color: 'var(--text-muted)' }}>We respond as time allows during development.</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}