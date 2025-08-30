// src/pages/Solutions.tsx

import { useEffect } from 'react';
import SecurityBanner from '../components/SecurityBanner';

import rs485Image from '../assets/images/solutions-rs485.jpeg';
import loraImage from '../assets/images/solutions-lora.png';
import canImage from '../assets/images/solutions-can.png';

export default function Solutions() {
  useEffect(() => {
    document.title = "FlexiGate - Protocol Solutions";
  }, []);

  return (
    <main>
      <SecurityBanner />
      {/* ===== تم تعديل هذا الكود ليتناسب مع التصميم الجديد الذي طلبته ===== */}
      <section className="container section-padding">
        <h1 className="page-title">Core Protocol Solutions</h1>
        <p className="page-subtitle">
          FlexiGate provides robust, field-tested support for the most critical industrial protocols, bridging legacy systems with modern cloud infrastructure.
        </p>
        
        <div className="solutions-container">

          {/* ===== القسم الأول: RS485 ===== */}
          <div className="solution-card">
            <img src={rs485Image} alt="Industrial control panel representing RS485 and Modbus RTU applications" className="solution-image" />
            <div className="solution-text">
              <h2>RS485 (Modbus RTU)</h2>
              <p>Reliable communication for industrial environments. Our gateway allows full configuration of baud, parity, and addressing via JSON profiles delivered over MQTT.</p>
              <ul className="solution-use-cases">
                <li><i className="fas fa-industry"></i> Industrial Sensors</li>
                <li><i className="fas fa-tachometer-alt"></i> Smart Meters</li>
                <li><i className="fas fa-cogs"></i> Legacy Controllers</li>
              </ul>
              <a href="#" className="btn btn-primary">Configure RS485</a>
            </div>
          </div>

          {/* ===== القسم الثاني: LoRa ===== */}
          <div className="solution-card">
            <img src={loraImage} alt="Smart agriculture sensor in a field, representing long-range LoRa applications" className="solution-image" />
            <div className="solution-text">
              <h2>LoRa (Long Range)</h2>
              <p>Acts as a transparent wireless bridge between remote nodes and the gateway, ideal for wide-area applications like smart agriculture and remote monitoring.</p>
              <ul className="solution-use-cases">
                <li><i className="fas fa-leaf"></i> Smart Agriculture</li>
                <li><i className="fas fa-city"></i> Smart Cities</li>
                <li><i className="fas fa-cloud-sun"></i> Environmental Monitoring</li>
              </ul>
              <a href="#" className="btn btn-primary">Setup LoRa</a>
              <p className="solution-warning">⚠️ LoRa settings must follow local regulatory compliance.</p>
            </div>
          </div>

          {/* ===== القسم الثالث: CAN Bus ===== */}
          <div className="solution-card">
            <img src={canImage} alt="Robotic arm in an industrial setting, representing high-speed CAN Bus applications" className="solution-image" />
            <div className="solution-text">
              <h2>CAN Bus (TWAI)</h2>
              <p>High-speed, reliable communication for advanced applications. Utilizes the robust ESP32 TWAI driver and an MCP2551 transceiver for seamless integration.</p>
              <ul className="solution-use-cases">
                <li><i className="fas fa-car"></i> Automotive Systems</li>
                <li><i className="fas fa-robot"></i> Advanced Robotics</li>
                <li><i className="fas fa-microchip"></i> Industrial Automation</li>
              </ul>
              <a href="#" className="btn btn-primary">Deploy CAN Bus</a>
            </div>
          </div>

        </div>
        
        {/* ===== هذا القسم بقي كما هو في الكود الأصلي الذي أرسلته لي سابقاً ===== */}
        <div style={{ margin: '4rem 0' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem', color: 'var(--primary-blue)' }}>Bridging and Performance</h2>
          <div className="dashboard-grid">
            <div className="dashboard-card">
              <h3><i className="fas fa-chart-line"></i> Bridging Examples</h3>
              <p>RS485 ↔ CAN, CAN → LoRa, LoRa → RS485 via frame-level forwarding and topic mapping (transparent bridging, not semantic translation).</p>
              <div className="chart-container">
                <canvas id="protocolPerformanceChart"></canvas>
              </div>
            </div>
            <div className="dashboard-card">
              <h3><i className="fas fa-network-wired"></i> Network Topology</h3>
              <p>Real-world performance depends on wiring, termination, antenna quality, and broker/network conditions. Use the configuration profiles below to ensure stable operation.</p>
              <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                <div className="protocol-selection">
                  <div className="protocol-card selected">
                    <div className="protocol-icon">
                      <i className="fas fa-ethernet"></i>
                    </div>
                    <h4>RS485</h4>
                    <p>Modbus RTU</p>
                    <div className="status-indicator">
                      <div className="status-dot online"></div>
                      <span>Active</span>
                    </div>
                  </div>
                  <div className="protocol-card">
                    <div className="protocol-icon">
                      <i className="fas fa-satellite-dish"></i>
                    </div>
                    <h4>LoRa</h4>
                    <p>Transparent Serial</p>
                    <div className="status-indicator">
                      <div className="status-dot online"></div>
                      <span>Active</span>
                    </div>
                  </div>
                  <div className="protocol-card">
                    <div className="protocol-icon">
                      <i className="fas fa-car"></i>
                    </div>
                    <h4>CAN Bus</h4>
                    <p>TWAI Driver</p>
                    <div className="status-indicator">
                      <div className="status-dot online"></div>
                      <span>Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}