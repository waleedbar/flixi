// src/pages/Technology.tsx
import { useEffect } from 'react';
import SecurityBanner from '../components/SecurityBanner';
export default function Technology() {
  useEffect(() => {
    document.title = "FlexiGate Technology";
  }, []);

  return (
    <main>
      <SecurityBanner />
      <section className="container section-padding">
        <h1 className="page-title">Cutting-Edge Where It Matters: Solid Hardware, Simple Web Config, MQTT Transport</h1>
        <p className="page-subtitle"></p>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-microchip"></i>
            </div>
            <h3>Hardware Overview</h3>
            <p>Modular daughterboards for quick swap and maintenance, built around a core ESP32-S3 MCU.</p>
            <div style={{ margin: '1.5rem 0' }}>
              <h4 style={{ color: 'var(--secondary-blue)', marginBottom: '1rem' }}>Components:</h4>
              <ul style={{ color: 'var(--text-light)' }}>
                <li>• MCU: ESP32-S3</li>
                <li>• USB-UART: CP2102N</li>
                <li>• Transceivers: MCP2551 (CAN), SP3485 (RS485)</li>
                <li>⚠️ MCP2551 (CAN) is a 5V transceiver. Safe level shifting is required to interface with ESP32-S3 (3.3V logic).</li>
                <li>Alternative: use a native 3.3V CAN transceiver (e.g., SN65HVD230).</li>
                <li>• LoRa Module: E220-900T22D</li>
                <li>• Power: 12V → 5V → 3.3V regulation</li>
              </ul>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-code"></i>
            </div>
            <h3>Software Architecture</h3>
            <p>A reliable stack designed for flexibility, using established open-source libraries for rapid development and testing.</p>
            <div style={{ margin: '1.5rem 0' }}>
              <h4 style={{ color: 'var(--secondary-blue)', marginBottom: '1rem' }}>Stack:</h4>
              <ul style={{ color: 'var(--text-light)' }}>
                <li>• Device Firmware: WiFi, MQTT (PubSubClient), ArduinoJson, Modbus RTU, SPIFFS, TWAI driver, E220 library</li>
                <li>• Web Stack: React + TypeScript (UI), Node/Express (API), MQTT broker/client integration</li>
              </ul>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-wifi"></i>
            </div>
            <h3>Protocols Supported (current)</h3>
            <p>RS485 (Modbus RTU), LoRa (transparent serial), CAN (TWAI)</p>
            <div style={{ margin: '1.5rem 0' }}>
              <h4 style={{ color: 'var(--secondary-blue)', marginBottom: '1rem' }}>Notes:</h4>
              <ul style={{ color: 'var(--text-light)' }}>
                <li>(OPC-UA/BACnet are NOT supported in this version)</li>
              </ul>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-download"></i>
            </div>
            <h3>OTA Features</h3>
            <p>OTA updates are supported in the prototype. TLS/SSL for MQTT and Secure Boot are planned as future work.</p>
          </div>
        </div>

        <div style={{ margin: '4rem 0' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem', color: 'var(--primary-blue)' }}>System Architecture</h2>
          <div className="dashboard-card" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', margin: '2rem 0' }}>
                <div className="glass" style={{ padding: '2rem', borderRadius: '16px' }}>
                  <i className="fas fa-server" style={{ fontSize: '2rem', color: 'var(--accent-orange)', marginBottom: '1rem' }}></i>
                  <h4>Edge Layer</h4>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Device management, protocol translation, basic filtering</p>
                </div>
                <div className="glass" style={{ padding: '2rem', borderRadius: '16px' }}>
                  <i className="fas fa-network-wired" style={{ fontSize: '2rem', color: 'var(--accent-cyan)', marginBottom: '1rem' }}></i>
                  <h4>Gateway Layer</h4>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Multi-protocol hub with JSON profiles per port</p>
                </div>
                <div className="glass" style={{ padding: '2rem', borderRadius: '16px' }}>
                  <i className="fas fa-cloud" style={{ fontSize: '2rem', color: 'var(--accent-purple)', marginBottom: '1rem' }}></i>
                  <h4>Cloud Layer</h4>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>MQTT topics for monitoring, control, and dashboards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ margin: '4rem 0' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem', color: 'var(--primary-blue)' }}>Future Plans</h2>
          <div className="dashboard-card" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'left' }}>
            <h3><i className="fas fa-road"></i> Roadmap</h3>
            <ul style={{ color: 'var(--text-light)', fontSize: '1.1rem', listStylePosition: 'inside' }}>
              <li style={{ marginBottom: '1rem' }}>TLS/SSL for MQTT communication</li>
              <li style={{ marginBottom: '1rem' }}>Secure Boot for firmware</li>
              <li style={{ marginBottom: '1rem' }}>Improved enclosure (target IP65)</li>
              <li style={{ marginBottom: '1rem' }}>Power and thermal optimization</li>
              <li style={{ marginBottom: '1rem' }}>UART/GPIO expansion options</li>
              <li style={{ marginBottom: '1rem' }}>Refine CAN interface (native 3.3V transceiver or proper level shifter)</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}