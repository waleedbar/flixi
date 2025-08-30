// src/pages/Documentation.tsx
import { useEffect } from 'react';
import SecurityBanner from '../components/SecurityBanner';
export default function Documentation() {
  useEffect(() => {
    document.title = "FlexiGate Documentation";
  }, []);

  return (
    <main>
      <SecurityBanner />
      <section className="container section-padding">
        <h1 className="page-title">Comprehensive Documentation — Practical Guides for FlexiGate</h1>
        <p className="page-subtitle">Complete guides, APIs, and resources for FlexiGate</p>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-book-open"></i>
            </div>
            <h3>Technical Report</h3>
            <p>Technical Report (PDF v1.0 available). User Manual under preparation.</p>
            <div style={{ margin: '1.5rem 0' }}>
              <div className="status-indicator">
                <div className="status-dot online"></div>
                <span>Version 1.0 - Available</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="/docs/FlexiGateReport_v1.0.pdf" download className="btn btn-primary btn-glow">
                <i className="fas fa-download"></i> Download Technical Report
              </a>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-code"></i>
            </div>
            <h3>Developer API</h3>
            <p>Use the following <strong>MQTT topics</strong> and <strong>JSON configuration schema</strong>.</p>
            <div style={{ margin: '1.5rem 0' }}>
              <h4 style={{ color: 'var(--secondary-blue)', marginBottom: '1rem' }}>Topics:</h4>
              <ul style={{ color: 'var(--text-light)', textAlign: 'left' }}>
                <li><code>flexigate/{'{device_id}'}/config/apply</code></li>
                <li><code>flexigate/{'{device_id}'}/config/status</code></li>
                <li><code>flexigate/{'{device_id}'}/telemetry/{'{plug}'}/{'{sensor}'}</code></li>
                <li><code>flexigate/{'{device_id}'}/event</code></li>
                <li><code>flexigate/{'{device_id}'}/ota/command</code></li>
                <li><code>flexigate/{'{device_id}'}/ota/status</code></li>
              </ul>
            </div>
            <pre style={{ background: '#f1f5f9', padding: '1rem', borderRadius: '8px', textAlign: 'left', fontSize: '0.8rem', overflowX: 'auto' }}>
              <code>{`{
  "device_id": "FG-001",
  "mqtt": { "broker": "mqtt://broker.local", "user": "u", "pass": "p" },
  "plugs": {
    "A": {
      "protocol": "RS485",
      "modbus": { "baud": 9600, "parity": "N", "slave_id": 1 }
    },
    "B": {
      "protocol": "CAN",
      "can": { "bitrate": 250000 }
    }
  },
  "ota": { "enabled": false }
}`}</code>
            </pre>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-cloud-upload-alt"></i>
            </div>
            <h3>OTA Update Management</h3>
            <p>OTA updates are supported in the prototype. TLS/SSL for MQTT and Secure Boot are planned as future work.</p>
          </div>
        </div>

        <div style={{ margin: '4rem 0' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem', color: 'var(--primary-blue)' }}>Quick Start Guides</h2>
          <div className="dashboard-grid">
            <div className="dashboard-card">
              <h3><i className="fas fa-rocket"></i>Quick Start</h3>
              <div style={{ margin: '2rem 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', padding: '1rem', background: 'var(--light-gray)', borderRadius: '12px' }}>
                  <div style={{ width: '30px', height: '30px', background: 'linear-gradient(135deg, var(--secondary-blue), var(--accent-orange))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>1</div>
                  <div>
                    <h4 style={{ margin: 0, color: 'var(--primary-blue)' }}>Hardware Connection</h4>
                    <p style={{ margin: 0, color: 'var(--text-light)', fontSize: '0.9rem' }}>Power supply, wiring for RS485/CAN/LoRa</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', padding: '1rem', background: 'var(--light-gray)', borderRadius: '12px' }}>
                  <div style={{ width: '30px', height: '30px', background: 'linear-gradient(135deg, var(--secondary-blue), var(--accent-orange))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>2</div>
                  <div>
                    <h4 style={{ margin: 0, color: 'var(--primary-blue)' }}>Initial Configuration</h4>
                    <p style={{ margin: 0, color: 'var(--text-light)', fontSize: '0.9rem' }}>Connect to Wi-Fi, set MQTT broker credentials</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', padding: '1rem', background: 'var(--light-gray)', borderRadius: '12px' }}>
                  <div style={{ width: '30px', height: '30px', background: 'linear-gradient(135deg, var(--secondary-blue), var(--accent-orange))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>3</div>
                  <div>
                    <h4 style={{ margin: 0, color: 'var(--primary-blue)' }}>Device Discovery</h4>
                    <p style={{ margin: 0, color: 'var(--text-light)', fontSize: '0.9rem' }}>Push a JSON profile, verify heartbeat on status topic</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard-card">
              <h3><i className="fas fa-question-circle"></i> Troubleshooting Hub</h3>
              <div style={{ margin: '2rem 0' }}>
                <div style={{ margin: '1.5rem 0' }}>
                  <h4 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>Common Issues:</h4>
                  <ul style={{ color: 'var(--text-light)', textAlign: 'left', paddingLeft: '1.5rem' }}>
                    <li>RS485: check baud/parity/address and termination</li>
                    <li>CAN: verify bitrate and bus termination at both ends</li>
                    <li>LoRa: ensure E220 configured before transparent mode; check antenna</li>
                    <li>MQTT: broker reachable, credentials correct, topics match device_id</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}