import { useState, useEffect } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";

export function Nav({ active, dark, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 640px)");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  const links = ["work", "stack", "experience", "contact"];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled || menuOpen ? "var(--nav-bg-scrolled)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.07)" : "1px solid transparent",
          transition: "background 0.3s ease, border-color 0.3s ease",
          padding: "16px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontFamily: "var(--f-mono)", fontSize: 13, fontWeight: 500, color: "var(--ink)", letterSpacing: -0.3 }}>
          jm.dev
        </span>

        {isMobile ? (
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <ThemeToggle dark={dark} onToggle={onToggleTheme} />
            <button
              onClick={() => setMenuOpen((o) => !o)}
              style={{
                background: "none",
                border: "1px solid var(--border)",
                borderRadius: 4,
                padding: "6px 10px",
                cursor: "pointer",
                fontFamily: "var(--f-mono)",
                fontSize: 16,
                color: "var(--ink)",
                lineHeight: 1,
              }}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        ) : (
          <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
            {links.map((l) => (
              <a
                key={l}
                href={`#${l}`}
                style={{
                  fontFamily: "var(--f-mono)",
                  fontSize: 12,
                  color: active === l ? "var(--ink)" : "var(--ink-3)",
                  textDecoration: "none",
                  letterSpacing: 0.3,
                  transition: "color 0.2s",
                }}
              >
                {l}
              </a>
            ))}
            <ThemeToggle dark={dark} onToggle={onToggleTheme} />
            <a
              href="/Jerlind_Medina_CV.pdf"
              download="Jerlind_Medina_CV.pdf"
              style={{
                fontFamily: "var(--f-mono)",
                fontSize: 11,
                fontWeight: 500,
                background: "var(--ink)",
                color: "var(--bg)",
                padding: "7px 16px",
                borderRadius: 4,
                textDecoration: "none",
                letterSpacing: 0.5,
              }}
            >
              resume ↓
            </a>
          </div>
        )}
      </nav>

      {isMobile && menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99,
            background: "var(--bg)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 36,
          }}
        >
          {links.map((l) => (
            <a
              key={l}
              href={`#${l}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--f-display)",
                fontSize: 36,
                color: active === l ? "var(--ink)" : "var(--ink-3)",
                textDecoration: "none",
                letterSpacing: "-0.5px",
              }}
            >
              {l}
            </a>
          ))}
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "var(--f-mono)",
              fontSize: 12,
              fontWeight: 500,
              background: "var(--ink)",
              color: "var(--bg)",
              padding: "12px 28px",
              borderRadius: 4,
              textDecoration: "none",
              letterSpacing: 0.5,
              marginTop: 8,
            }}
          >
            resume ↓
          </a>
        </div>
      )}
    </>
  );
}

function ThemeToggle({ dark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        background: "none",
        border: "1px solid var(--border)",
        borderRadius: 4,
        padding: "6px 11px",
        cursor: "pointer",
        fontFamily: "var(--f-mono)",
        fontSize: 13,
        color: "var(--ink-2)",
        lineHeight: 1,
      }}
    >
      {dark ? "☀" : "☽"}
    </button>
  );
}
