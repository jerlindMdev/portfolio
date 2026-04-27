export function Footer() {
  return (
    <footer
      style={{
        padding: "20px 40px",
        borderTop: "1px solid var(--border)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--ink-3)" }}>
        Jerlind Medina · {new Date().getFullYear()}
      </span>
      <span style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--ink-3)" }}>
        Built with React + Tailwind
      </span>
    </footer>
  );
}
