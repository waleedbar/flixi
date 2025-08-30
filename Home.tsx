// src/pages/Home.tsx

import { useEffect } from 'react';
import SecurityBanner from '../components/SecurityBanner';

// ---==[ أسماء الملفات صحيحة ومطابقة لملفاتك ]==---
import multiProtocolImage from '../assets/images/multi.png';
import dashboardImage from '../assets/images/web-driven-configuration.jpeg';
import otaUpdateImage from '../assets/images/cloud.png';

export default function Home() {
  useEffect(() => {
    document.title = "FlexiGate — Modular Multi-Protocol IoT Gateway";
  }, []);

  return (
    <main>
      <SecurityBanner />
      {/* ===== لم يتم تعديل أي شيء في هذا القسم العلوي ===== */}
      <section className="hero">
        <div className="hero-particles" id="heroParticles"></div>
        <div className="hero-content">
          <div className="hero-badge floating">
            <i className="fas fa-star"></i>
            Next-Generation IoT Gateway
          </div>
          <h1 className="floating">FlexiGate — Modular Multi-Protocol IoT Gateway (RS485 / LoRa / CAN) built on ESP32-S3</h1>
          <p className="hero-subtitle">Web-configured via MQTT with JSON profiles and prototype OTA updates. Built for practical bridging between field devices and cloud services.</p>
          <div className="hero-actions">
            <a href="/solutions" className="btn btn-primary btn-hero btn-glow">
              <i className="fas fa-rocket"></i> Explore Solutions
            </a>
            <a href="/dashboard" className="btn btn-secondary btn-hero">
              <i className="fas fa-tachometer-alt"></i> Live Demo
            </a>
            <a href="/documentation" className="btn btn-outline btn-hero">
              <i className="fas fa-download"></i> Get Started
            </a>
          </div>
        </div>
      </section>

      {/* ===== لم يتم تعديل أي شيء في قسم الإحصائيات هذا ===== */}
      <section className="container section-padding">
        <div className="dashboard-stats">
          <div className="stat-card scale-in">
            <div className="stat-number" data-target="99.9" style={{ fontSize: '1.5rem', lineHeight: '1.4' }}>RS485, LoRa, CAN</div>
            <div className="stat-label">Protocols Supported</div>
          </div>
          <div className="stat-card scale-in">
            <div className="stat-number" data-target="1000" style={{ fontSize: '1.5rem', lineHeight: '1.4' }}>MQTT (JSON profiles)</div>
            <div className="stat-label">Config Delivery</div>
          </div>
          <div className="stat-card scale-in">
            <div className="stat-number" data-target="50" style={{ fontSize: '1.5rem', lineHeight: '1.4' }}>Academic prototype</div>
            <div className="stat-label">Status: (Demo values)</div>
          </div>
          <div className="stat-card scale-in">
            <div className="stat-number" data-target="24" style={{ fontSize: '1rem', lineHeight: '1.4', wordBreak: 'break-all' }}>ESP32-S3, CP2102N, MCP2551, SP3485, E220-900T22D</div>
            <div className="stat-label">Hardware</div>
          </div>
        </div>
        <p style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--text-muted)' }}>⚠️ Demo prototype — all values are illustrative only.</p>

        {/* ---==[ هنا تم تطبيق التعديلات النصية النهائية ]==--- */}
        <div className="features-grid">
          {/* البطاقة الأولى مع الصورة والنص القصير */}
          <div className="feature-card card-3d slide-in-left">
            <div className="card-3d-inner">
              <img src={multiProtocolImage} alt="Diagram of multiple protocols connecting to the gateway" className="feature-image" />
              <h3>Multi-Protocol Gateway</h3>
              <p>Seamlessly bridge RS485, LoRa, and CAN protocols using a single, powerful gateway.</p>
            </div>
          </div>
          
          {/* البطاقة الثانية مع الصورة والنص القصير */}
          <div className="feature-card card-3d">
            <div className="card-3d-inner">
              <img src={dashboardImage} alt="Screenshot of the web configuration UI" className="feature-image" />
              <h3>Web-Driven Configuration</h3>
              <p>Deploy configuration profiles directly from your browser via MQTT. No firmware changes needed.</p>
            </div>
          </div>
          
          {/* البطاقة الثالثة مع الصورة والنص القصير */}
          <div className="feature-card card-3d slide-in-right">
            <div className="card-3d-inner">
              <img src={otaUpdateImage} alt="Graphic of an over-the-air update from the cloud" className="feature-image" />
              <h3>Prototype OTA Updates</h3>
              <p>Keep your devices secure and up-to-date with robust over-the-air firmware updates.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}