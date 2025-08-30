// src/pages/Login.tsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom'; // ---==[ مهم: استيراد Link ]==---
import SecurityBanner from '../components/SecurityBanner';

export default function Login() {
  useEffect(() => {
    document.title = "FlexiGate - Secure Access";
  }, []);

  return (
    <main>
      <SecurityBanner />
      <section className="container section-padding">
        <div className="login-container">
          <div className="login-header">
            <h2>
              <i className="fas fa-sign-in-alt"></i> Welcome Back!
            </h2>
            <p>Sign in to access your FlexiGate Command Center.</p>
          </div>
          <form id="loginForm">
            <div className="input-group">
              <input type="email" placeholder="Email Address" required />
              <i className="fas fa-envelope"></i>
            </div>
            <div className="input-group">
              <input type="password" placeholder="Password" required />
              <i className="fas fa-lock"></i>
            </div>
            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox"/>
                <span className="checkmark"></span>
                Remember me
              </label>
              <a href="#" className="link">
                Forgot Password?
              </a>
            </div>
            <button type="submit" className="btn btn-primary btn-glow" style={{ width: '100%', justifyContent: 'center', padding: '1rem', fontSize: '1.1rem' }}>
              <i className="fas fa-sign-in-alt"></i> Sign In Securely
            </button>
          </form>
          {/* ---==[ هنا الجزء الجديد والمهم للربط ]==--- */}
          <div className="form-footer">
            <p>Don't have an account? <Link to="/signup" className="link">Create one now</Link></p>
          </div>
        </div>
      </section>
    </main>
  );
}