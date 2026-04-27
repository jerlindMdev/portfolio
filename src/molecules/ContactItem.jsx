export function ContactItem({ label, val }) {
  return (
    <div>
      <p
        style={{
          fontFamily: "var(--f-mono)",
          fontSize: 9,
          color: "var(--on-inverse-dim)",
          letterSpacing: "1px",
          textTransform: "uppercase",
          marginBottom: 2,
        }}
      >
        {label}
      </p>
      <p style={{ fontFamily: "var(--f-mono)", fontSize: 12, color: "var(--on-inverse-mid)" }}>
        {val}
      </p>
    </div>
  );
}
