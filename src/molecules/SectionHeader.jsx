export function SectionHeader({ num, title }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 48 }}>
      <span style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--ink-3)" }}>
        {num}
      </span>
      <h2
        style={{
          fontFamily: "var(--f-display)",
          fontSize: 36,
          color: "var(--ink)",
          letterSpacing: "-0.5px",
        }}
      >
        {title}
      </h2>
    </div>
  );
}
