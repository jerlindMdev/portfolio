export function ExperienceRow({ year, company, role, note, isLast }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "110px 1fr",
        gap: 24,
        padding: "24px 0",
        borderBottom: !isLast ? "1px solid var(--border)" : "none",
      }}
    >
      <span
        style={{
          fontFamily: "var(--f-mono)",
          fontSize: 11,
          color: "var(--ink-3)",
          paddingTop: 2,
          lineHeight: 1.6,
        }}
      >
        {year}
      </span>
      <div>
        <p style={{ fontFamily: "var(--f-body)", fontSize: 15, fontWeight: 500, color: "var(--ink)", marginBottom: 3 }}>
          {company}
        </p>
        <p style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--ink-3)", marginBottom: 8, letterSpacing: 0.3 }}>
          {role}
        </p>
        <p style={{ fontFamily: "var(--f-body)", fontSize: 13, color: "var(--ink-2)", lineHeight: 1.6 }}>
          {note}
        </p>
      </div>
    </div>
  );
}
