import { Tag } from "../atoms/Tag";

export function ProjectCard({ num, name, desc, impact, tags, image, url, links }) {
  return (
    <div
      className="project-card"
      style={{ background: "var(--bg-card)", padding: "28px 32px", transition: "background 0.2s" }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-card-hover)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "var(--bg-card)")}
    >
      <div
        style={{
          width: "100%",
          height: 200,
          borderRadius: 6,
          marginBottom: 20,
          overflow: "hidden",
          border: "1px solid var(--border)",
          background: "var(--bg)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {image ? (
          <img
            src={image}
            alt={`${name} screenshot`}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
          />
        ) : (
          <span style={{ fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--ink-3)", letterSpacing: 0.5 }}>
            screenshot coming soon
          </span>
        )}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
        <span style={{ fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--ink-3)" }}>{num}</span>
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "var(--f-body)", fontSize: 16, fontWeight: 500, color: "var(--ink)", textDecoration: "none", display: "flex", alignItems: "center", gap: 5 }}
          >
            {name}
            <span style={{ fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--ink-3)" }}>↗</span>
          </a>
        ) : (
          <h3 style={{ fontFamily: "var(--f-body)", fontSize: 16, fontWeight: 500, color: "var(--ink)" }}>
            {name}
          </h3>
        )}
      </div>

      <p style={{ fontFamily: "var(--f-body)", fontSize: 14, color: "var(--ink-2)", lineHeight: 1.7, marginBottom: 10 }}>
        {desc}
      </p>

      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          fontFamily: "var(--f-mono)",
          fontSize: 10,
          color: "var(--green)",
          background: "var(--green-light)",
          padding: "3px 10px",
          borderRadius: 99,
          marginBottom: 14,
        }}
      >
        ↑ {impact}
      </div>

      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {tags.map((t) => (
          <Tag key={t} label={t} variant="project" />
        ))}
      </div>

      {links?.length > 0 && (
        <div style={{ marginTop: 16 }}>
          <p style={{ fontFamily: "var(--f-mono)", fontSize: 9, color: "var(--ink-3)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 8 }}>
            live sites
          </p>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--f-mono)",
                  fontSize: 10,
                  color: "var(--accent)",
                  background: "var(--accent-light)",
                  padding: "3px 10px",
                  borderRadius: 4,
                  textDecoration: "none",
                  border: "1px solid transparent",
                }}
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
