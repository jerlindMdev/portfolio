const styles = {
  primary: {
    fontFamily: "var(--f-mono)",
    fontSize: 12,
    fontWeight: 500,
    background: "var(--ink)",
    color: "var(--bg)",
    padding: "12px 24px",
    borderRadius: 4,
    textDecoration: "none",
    letterSpacing: 0.3,
    transition: "opacity 0.2s",
    display: "inline-block",
  },
  secondary: {
    fontFamily: "var(--f-mono)",
    fontSize: 12,
    border: "1px solid var(--border)",
    color: "var(--ink-2)",
    padding: "11px 24px",
    borderRadius: 4,
    textDecoration: "none",
    letterSpacing: 0.3,
    background: "transparent",
    transition: "background 0.2s",
    display: "inline-block",
  },
};

export function Button({ href, children, variant = "primary", download }) {
  return (
    <a href={href} style={styles[variant]} download={download}>
      {children}
    </a>
  );
}
