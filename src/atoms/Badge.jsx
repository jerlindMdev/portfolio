export function Badge({ label, dot = true, style = {} }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        fontFamily: "var(--f-mono)",
        fontSize: 11,
        color: "var(--green)",
        background: "var(--green-light)",
        padding: "4px 14px",
        borderRadius: 99,
        letterSpacing: 0.5,
        ...style,
      }}
    >
      {dot && (
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "var(--green)",
            display: "inline-block",
            animation: "pulse 2s infinite",
          }}
        />
      )}
      {label}
    </span>
  );
}
