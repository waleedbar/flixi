// src/pages/Dashboard.tsx

import { useState, useEffect, useRef } from 'react';
import SecurityBanner from '../components/SecurityBanner';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

// ---==[ واجهات البيانات (Interfaces) لتنظيم الكود ]==---
interface Device {
  id: string;
  name: string;
  protocol: 'RS485' | 'LoRa' | 'CAN' | 'Not Configured';
  status: 'Online' | 'Offline' | 'Warning';
  location: string;
  lastUpdate: string;
  dataRate: string;
}

interface LogEntry {
  id: number;
  type: 'info' | 'success' | 'warning' | 'error';
  protocol: string;
  message: string;
  timestamp: string;
}

// ---==[ بيانات وهمية احترافية (Mock Data) ]==---
const MOCK_DEVICES: Device[] = [
  { id: 'FG-001', name: 'Factory Floor Sensor', protocol: 'RS485', status: 'Online', location: 'Section A, Bay 2', lastUpdate: '3s ago', dataRate: '9600 bps' },
  { id: 'FG-002', name: 'Agricultural Node', protocol: 'LoRa', status: 'Online', location: 'Field Site Alpha', lastUpdate: '1m ago', dataRate: '2.4 kbps' },
  { id: 'FG-003', name: 'Robotic Arm Controller', protocol: 'CAN', status: 'Warning', location: 'Assembly Line 3', lastUpdate: '5m ago', dataRate: '250 kbps' },
  { id: 'FG-004', name: 'Warehouse Sensor', protocol: 'LoRa', status: 'Offline', location: 'Storage Unit C', lastUpdate: '2h ago', dataRate: 'N/A' },
];

const MOCK_LOGS: LogEntry[] = [
  { id: 1, type: 'success', protocol: 'RS485', message: 'Device FG-001 reported temperature: 25.3°C', timestamp: '10s ago' },
  { id: 2, type: 'info', protocol: 'LoRa', message: 'New node FG-002 joined the network.', timestamp: '1m ago' },
  { id: 3, type: 'warning', protocol: 'CAN', message: 'High error frame rate detected on FG-003.', timestamp: '5m ago' },
  { id: 4, type: 'error', protocol: 'System', message: 'Failed to receive heartbeat from FG-004.', timestamp: '2h ago' },
];

// ---==[ مكون النافذة المنبثقة لإضافة جهاز جديد ]==---
const AddDeviceModal = ({ onClose, onAddDevice }: { onClose: () => void; onAddDevice: (newDevice: Device) => void; }) => {
  const [step, setStep] = useState(1);
  const [deviceUID, setDeviceUID] = useState('');
  const [deviceName, setDeviceName] = useState('');
  const [deviceLocation, setDeviceLocation] = useState('');
  const [protocol, setProtocol] = useState<'RS485' | 'LoRa' | 'CAN'>('RS485');
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!deviceUID.trim() || !deviceName.trim()) {
      setError('Device UID and Name are required.');
      return;
    }
    setError('');
    setStep(2);
  };
  
  const handleSubmit = () => {
    // هنا، في المستقبل، سترسل هذه البيانات إلى الخادم الخلفي
    const newDevice: Device = {
      id: deviceUID,
      name: deviceName,
      protocol: protocol,
      status: 'Online', // افتراضيًا يكون متصل عند إضافته
      location: deviceLocation || 'Not specified',
      lastUpdate: '1s ago',
      dataRate: 'Configuring...'
    };
    onAddDevice(newDevice);
    onClose();
  };
  
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}><i className="fas fa-times"></i></button>
        {step === 1 && (
          <>
            <h2><i className="fas fa-plus-circle"></i> Register New Device</h2>
            <p>Enter the unique identifier printed on your device and give it a friendly name.</p>
            {error && <p className="error-message">{error}</p>}
            <div className="input-group">
              <input type="text" placeholder="Device UID (e.g., FG-ESP32S3-XXXX)" value={deviceUID} onChange={(e) => setDeviceUID(e.target.value)} />
              <i className="fas fa-barcode"></i>
            </div>
            <div className="input-group">
              <input type="text" placeholder="Device Name (e.g., Factory Sensor)" value={deviceName} onChange={(e) => setDeviceName(e.target.value)} />
              <i className="fas fa-tag"></i>
            </div>
             <div className="input-group">
              <input type="text" placeholder="Location (Optional)" value={deviceLocation} onChange={(e) => setDeviceLocation(e.target.value)} />
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <button className="btn btn-primary" style={{ width: '100%' }} onClick={handleNext}>Next Step <i className="fas fa-arrow-right"></i></button>
          </>
        )}
        {step === 2 && (
          <>
            <h2><i className="fas fa-sliders-h"></i> Initial Configuration</h2>
            <p>Select the primary protocol for <strong>{deviceName}</strong>. You can change this later.</p>
            <div className="protocol-selection" style={{ margin: '2rem 0' }}>
                <div className={`protocol-card ${protocol === 'RS485' ? 'selected' : ''}`} onClick={() => setProtocol('RS485')}>
                    <div className="protocol-icon"><i className="fas fa-plug"></i></div>
                    <h4>RS485</h4>
                    <p>Industrial Serial</p>
                </div>
                <div className={`protocol-card ${protocol === 'LoRa' ? 'selected' : ''}`} onClick={() => setProtocol('LoRa')}>
                    <div className="protocol-icon"><i className="fas fa-satellite-dish"></i></div>
                    <h4>LoRa</h4>
                    <p>Long Range</p>
                </div>
                <div className={`protocol-card ${protocol === 'CAN' ? 'selected' : ''}`} onClick={() => setProtocol('CAN')}>
                    <div className="protocol-icon"><i className="fas fa-car"></i></div>
                    <h4>CAN Bus</h4>
                    <p>Automotive</p>
                </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button className="btn btn-outline" style={{ width: '100%' }} onClick={() => setStep(1)}><i className="fas fa-arrow-left"></i> Back</button>
              <button className="btn btn-primary" style={{ width: '100%' }} onClick={handleSubmit}><i className="fas fa-check"></i> Register & Deploy</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};


export default function Dashboard() {
  const [devices, setDevices] = useState<Device[]>([]);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // حالة للنافذة
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    document.title = "FlexiGate Dashboard";

    const fetchData = () => {
      setIsLoading(true);
      setTimeout(() => {
        // يمكنك تجربة الحالة الفارغة عن طريق وضع مصفوفة فارغة هنا
        // setDevices([]); 
        setDevices(MOCK_DEVICES);
        setLogs(MOCK_LOGS);
        setIsLoading(false);
      }, 1500);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (chartRef.current && devices.length > 0) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        const protocolCounts = devices.reduce((acc, device) => {
          if (device.protocol !== 'Not Configured') {
            acc[device.protocol] = (acc[device.protocol] || 0) + 1;
          }
          return acc;
        }, {} as Record<string, number>);

        chartInstance.current = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: Object.keys(protocolCounts),
            datasets: [{
              data: Object.values(protocolCounts),
              backgroundColor: ['rgba(59, 130, 246, 0.8)', 'rgba(249, 115, 22, 0.8)', 'rgba(16, 185, 129, 0.8)'],
              borderColor: 'var(--white)',
              borderWidth: 2,
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom', labels: { padding: 20, font: { size: 14 } } } }
          }
        });
      }
    }
  }, [devices]);

  const getStatusClass = (status: Device['status']) => `status ${status.toLowerCase()}`;
  const getLogIcon = (type: LogEntry['type']) => {
    const map = {
      info: { icon: 'fa-info-circle', color: 'var(--accent-blue)' },
      success: { icon: 'fa-check-circle', color: 'var(--success-green)' },
      warning: { icon: 'fa-exclamation-triangle', color: 'var(--warning-yellow)' },
      error: { icon: 'fa-times-circle', color: 'var(--error-red)' }
    };
    return map[type] || map.info;
  };
  
  const handleAddDevice = (newDevice: Device) => {
    setDevices(prevDevices => [...prevDevices, newDevice]);
  };

  if (isLoading) {
    return (
      <div className="loading-placeholder" style={{ minHeight: '100vh', marginTop: '80px' }}>
        <div className="loading-spinner"></div>
        <p style={{ marginTop: '1rem', fontSize: '1.2rem' }}>Loading Command Center...</p>
      </div>
    );
  }

  return (
    <main className="main-content" style={{ background: '#f8fafc' }}>
      <SecurityBanner />
      <section className="dashboard-header">
        <div className="container">
          <h1><i className="fas fa-tachometer-alt"></i> FlexiGate Command Center</h1>
          <p>Real-Time Monitoring & Device Configuration</p>
        </div>
      </section>
      
      <section className="container" style={{ padding: '2rem 2rem 5rem 2rem' }}>
        {devices.length > 0 ? (
          <>
            {/* ===== Quick Stats ===== */}
            <div className="dashboard-stats" style={{ margin: '0 0 3rem 0' }}>
              <div className="stat-card scale-in">
                <div className="stat-number">{devices.length}</div>
                <div className="stat-label">Total Devices</div>
              </div>
              <div className="stat-card scale-in">
                <div className="stat-number">{devices.filter(d => d.status === 'Online').length}</div>
                <div className="stat-label">Devices Online</div>
              </div>
              <div className="stat-card scale-in">
                <div className="stat-number">{devices.filter(d => d.status === 'Warning').length}</div>
                <div className="stat-label">Active Alerts</div>
              </div>
              <div className="stat-card scale-in">
                <div className="stat-number">{devices.filter(d => d.status === 'Offline').length}</div>
                <div className="stat-label">Devices Offline</div>
              </div>
            </div>
            
            {/* ===== Main Dashboard Grid ===== */}
            <div className="dashboard-grid">
              {/* --- Device Fleet Management Card --- */}
              <div className="dashboard-card" style={{ gridColumn: '1 / -1' }}>
                <div className="page-header">
                  <h3><i className="fas fa-server"></i> Device Fleet Management</h3>
                  <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
                    <i className="fas fa-plus"></i> Add New Device
                  </button>
                </div>
                <div className="table-container">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Device Name</th>
                        <th>Status</th>
                        <th>Protocol</th>
                        <th>Location</th>
                        <th>Last Update</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {devices.map(device => (
                        <tr key={device.id}>
                          <td><strong>{device.name}</strong><br/><small className="text-muted">{device.id}</small></td>
                          <td><span className={getStatusClass(device.status)}>{device.status}</span></td>
                          <td>{device.protocol}</td>
                          <td>{device.location}</td>
                          <td>{device.lastUpdate}</td>
                          <td>
                            <button className="btn-icon" title="Configure Device"><i className="fas fa-sliders-h"></i></button>
                            <button className="btn-icon" title="View Logs"><i className="fas fa-history"></i></button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* --- Protocol Distribution Card --- */}
              <div className="dashboard-card">
                <h3><i className="fas fa-project-diagram"></i> Protocol Distribution</h3>
                <div className="chart-container">
                  <canvas ref={chartRef}></canvas>
                </div>
              </div>

              {/* --- Real-Time Event Log Card --- */}
              <div className="dashboard-card">
                <h3><i className="fas fa-stream"></i> Real-Time Event Log</h3>
                <ul className="log-list">
                  {logs.map(log => (
                    <li key={log.id}>
                      <i className={`fas ${getLogIcon(log.type).icon}`} style={{ color: getLogIcon(log.type).color }}></i>
                      <div>
                        <p><strong>{log.protocol}:</strong> {log.message}</p>
                        <small className="text-muted">{log.timestamp}</small>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        ) : (
          <div className="empty-state">
            <div className="empty-state-icon"><i className="fas fa-plus-circle"></i></div>
            <h2>No Devices Registered Yet</h2>
            <p>Welcome to the Command Center! Get started by registering your first FlexiGate device.</p>
            <button className="btn btn-primary btn-lg" onClick={() => setIsModalOpen(true)}>
              <i className="fas fa-plus"></i> Register Your First Device
            </button>
          </div>
        )}
      </section>
      
      {isModalOpen && <AddDeviceModal onClose={() => setIsModalOpen(false)} onAddDevice={handleAddDevice} />}
    </main>
  );
}