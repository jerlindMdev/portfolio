const variants = {
  project: {
    fontFamily: "var(--f-mono)",
    fontSize: 10,
    color: "var(--ink-3)",
    background: "var(--bg)",
    padding: "3px 10px",
    borderRadius: 4,
    border: "1px solid var(--border)",
  },
  skill: {
    fontFamily: "var(--f-mono)",
    fontSize: 11,
    color: "var(--ink-2)",
    background: "var(--bg)",
    border: "1px solid var(--border)",
    padding: "4px 11px",
    borderRadius: 99,
  },
  "skill-featured": {
    fontFamily: "var(--f-mono)",
    fontSize: 11,
    color: "var(--accent)",
    background: "var(--accent-light)",
    border: "1px solid transparent",
    padding: "4px 11px",
    borderRadius: 99,
  },
};

export function Tag({ label, variant = "project" }) {
  return <span style={variants[variant]}>{label}</span>;
}
