// src/pages/ConfigurationWizard.tsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SecurityBanner from '../components/SecurityBanner';

// سنقوم بإنشاء هذا المكون في الخطوة التالية
// import SelectModulesStep from '../components/wizard/SelectModulesStep';

export default function ConfigurationWizard() {
  const [step, setStep] = useState(1); // لتتبع الخطوة الحالية

  // حالة لتخزين كل بيانات الإعدادات
  const [config, setConfig] = useState({
    plug1_protocol: null,
    plug2_protocol: null,
    plug1_settings: {},
    plug2_settings: {}
  });

  useEffect(() => {
    document.title = "FlexiGate - Configuration Wizard";
  }, []);

  return (
    <main className="main-content" style={{ background: '#f8fafc' }}>
      <SecurityBanner />
      <section className="container section-padding">
        <div className="wizard-container">
          <div className="wizard-header">
            <Link to="/dashboard" className="back-link"><i className="fas fa-arrow-left"></i> Back to Dashboard</Link>
            <h1>Configure FlexiGate</h1>
            <p>Configure your gateway modules for optimal communication performance</p>
          </div>

          <div className="wizard-content">
            {/* هنا سنعرض المكون المناسب لكل خطوة */}
            {step === 1 && (
              <p style={{ textAlign: 'center', padding: '2rem' }}>Loading Step 1...</p>
              // <SelectModulesStep config={config} setConfig={setConfig} onNext={() => setStep(2)} />
            )}
            {step === 2 && (
              <p style={{ textAlign: 'center', padding: '2rem' }}>This is Step 2!</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}