// src/components/SecurityBanner.tsx
export default function SecurityBanner() {
  return (
    <div style={{
      width: "100%",
      padding: "8px 12px", 
      fontSize: 14,
      borderBottom: "1px solid #eee"
    }}>
      ⚠️ Prototype build — TLS/SSL for MQTT and Secure Boot are planned, not enabled yet. Not for production use.
    </div>
  );
}