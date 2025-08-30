// src/pages/Admin.tsx
import { useEffect } from 'react';
import SecurityBanner from '../components/SecurityBanner';
export default function Admin() {
  useEffect(() => {
    document.title = "FlexiGate - Admin Panel";
  }, []);

  return (
    <main>
      <SecurityBanner />
      <section className="dashboard-header">
        <div className="container">
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', textAlign: 'center' }}>
            <i className="fas fa-user-shield"></i> FlexiGate Admin Control Center
          </h1>
          <p style={{ fontSize: '1.3rem', textAlign: 'center', opacity: 0.9 }}>
            Internal tools for experiments... Not intended for production use.
          </p>
        </div>
      </section>

      <section className="container">
        <div className="dashboard-stats">
          <div className="stat-card">
            <div className="stat-number" data-target="1247">0</div>
            <div className="stat-label">Total Users</div>
            <div className="status-indicator" style={{ marginTop: '0.5rem' }}>
              <div className="status-dot online"></div>
              <span style={{ fontSize: '0.8rem' }}>Active Management</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-number" data-target="847">0</div>
            <div className="stat-label">Devices Online</div>
            <div className="status-indicator" style={{ marginTop: '0.5rem' }}>
              <div className="status-dot online"></div>
              <span style={{ fontSize: '0.8rem' }}>Fleet Healthy</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-number">v1.0</div>
            <div className="stat-label">Latest Firmware</div>
            <div className="status-indicator" style={{ marginTop: '0.5rem' }}>
              <div className="status-dot online"></div>
              <span style={{ fontSize: '0.8rem' }}>Ready to Deploy</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-number" data-target="15">0</div>
            <div className="stat-label">Pending Updates</div>
            <div className="status-indicator" style={{ marginTop: '0.5rem' }}>
              <div className="status-dot warning"></div>
              <span style={{ fontSize: '0.8rem' }}>Requires Attention</span>
            </div>
          </div>
        </div>

        {/* يمكنك إضافة باقي محتوى لوحة التحكم هنا */}
      </section>
    </main>
  );
}