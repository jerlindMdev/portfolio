import { Tag } from "../atoms/Tag";

export function SkillGroup({ group, items }) {
  return (
    <div
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: 8,
        padding: "20px 22px",
      }}
    >
      <p
        style={{
          fontFamily: "var(--f-mono)",
          fontSize: 10,
          color: "var(--ink-3)",
          letterSpacing: "1px",
          textTransform: "uppercase",
          marginBottom: 14,
        }}
      >
        {group}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
        {items.map((item, j) => (
          <Tag key={item} label={item} variant={j < 2 ? "skill-featured" : "skill"} />
        ))}
      </div>
    </div>
  );
}
