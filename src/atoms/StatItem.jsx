export function StatItem({ val, label }) {
  return (
    <div style={{ background: "var(--bg-card)", padding: "18px 20px" }}>
      <div
        style={{
          fontFamily: "var(--f-display)",
          fontSize: 32,
          color: "var(--ink)",
          lineHeight: 1,
          marginBottom: 5,
        }}
      >
        {val}
      </div>
      <div
        style={{
          fontFamily: "var(--f-mono)",
          fontSize: 10,
          color: "var(--ink-3)",
          letterSpacing: "0.8px",
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
    </div>
  );
}
