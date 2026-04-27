import { useState, useEffect, useRef } from "react";

const data = {
  name: { first: "Jerlind", last: "Medina" },
  role: "Frontend Developer",
  stack: "React · WordPress · Tailwind",
  email: "jerlind.eph.medina@gmail.com",
  phone: "+63 927 480 1030",
  location: "Cainta, Rizal, Philippines",
  linkedin: "linkedin.com/in/jerlindmedina",
  github: "github.com/jerlindmedina",
  summary:
    "6+ years building fast, accessible, and multilingual web experiences for global organizations across Asia Pacific.",
  stats: [
    { val: "6+", label: "Years experience" },
    { val: "10+", label: "Markets delivered" },
    { val: "3", label: "Global orgs" },
  ],
  skills: [
    { group: "Frontend", items: ["React", "JavaScript ES6+", "Tailwind CSS", "HTML5", "CSS3", "jQuery"] },
    { group: "CMS & Backend", items: ["WordPress", "PHP", "SQL", "Elementor", "ACF", "WP-CLI"] },
    { group: "DevOps & Tools", items: ["AWS S3", "Docker", "Git", "XAMPP", "GoDaddy"] },
    { group: "Optimization", items: ["SEO", "Google Analytics", "Performance", "Responsive Design"] },
  ],
  projects: [
    {
      num: "001",
      name: "Maxwell Leadership Philippines",
      desc: "Built and launched the company website end-to-end — custom WordPress theme, ACF, Elementor, SEO integration, and GoDaddy hosting. Solo developer ownership from zero to launch.",
      impact: "Full site built from scratch, live and maintained",
      tags: ["WordPress", "Elementor", "ACF", "SEO", "Google Analytics"],
      accent: true,
    },
    {
      num: "002",
      name: "Our Daily Bread — Global Platform",
      desc: "Led front-end of a multilingual devotional platform serving users across Asia Pacific. Solo PM and developer for full Chinese-language site redevelopments (Simplified + Traditional).",
      impact: "100% performance improvement, 10+ markets served",
      tags: ["React", "Tailwind CSS", "AWS S3", "i18n", "Docker", "PHP"],
      accent: false,
    },
    {
      num: "003",
      name: "CCF & FOCIG Ministry Sites",
      desc: "WordPress development, event tracking, analytics, and layout redesign for two faith-based organizations. Streamlined CMS workflows enabling non-technical staff to manage content independently.",
      impact: "Increased community engagement, CMS autonomy for staff",
      tags: ["WordPress", "JavaScript", "CSS", "Analytics"],
      accent: false,
    },
  ],
  experience: [
    {
      year: "2025 – present",
      company: "Maxwell Leadership Philippines",
      role: "Web Developer · Contract · Remote",
      note: "Built company website from scratch. WordPress, Elementor, ACF, SEO, hosting.",
    },
    {
      year: "2019 – 2025",
      company: "Our Daily Bread Ministries Global",
      role: "Software Engineer · Full-time",
      note: "Led front-end of global React platform. Multilingual campaigns across 10+ Asia Pacific markets. SAFe® 6 Practitioner.",
    },
    {
      year: "2023 – 2024",
      company: "Christ's Commission Fellowship",
      role: "Web Developer · Contract",
      note: "WordPress, event tracking, analytics, layout redesign.",
    },
    {
      year: "2023",
      company: "FOCIG",
      role: "Web Developer · Contract",
      note: "WordPress, CMS workflow for non-technical staff.",
    },
  ],
};

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function Nav({ active }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = ["work", "stack", "experience", "contact"];
  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(247,245,240,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.07)" : "1px solid transparent",
        transition: "all 0.3s ease",
        padding: "16px 40px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}
    >
      <span style={{ fontFamily: "var(--f-mono)", fontSize: 13, fontWeight: 500, color: "var(--ink)", letterSpacing: -0.3 }}>
        jm.dev
      </span>
      <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
        {links.map((l) => (
          <a
            key={l}
            href={`#${l}`}
            style={{
              fontFamily: "var(--f-mono)", fontSize: 12,
              color: active === l ? "var(--ink)" : "var(--ink-3)",
              textDecoration: "none", letterSpacing: 0.3,
              transition: "color 0.2s",
            }}
          >
            {l}
          </a>
        ))}
        <a
          href="#"
          style={{
            fontFamily: "var(--f-mono)", fontSize: 11, fontWeight: 500,
            background: "var(--ink)", color: "var(--bg)",
            padding: "7px 16px", borderRadius: 4,
            textDecoration: "none", letterSpacing: 0.5,
          }}
        >
          resume ↓
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);
  const fade = (delay) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });
  return (
    <section
      style={{
        minHeight: "100vh", padding: "0 40px",
        display: "flex", flexDirection: "column", justifyContent: "center",
        borderBottom: "1px solid var(--border)",
        position: "relative", overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute", top: "10%", right: "-5%",
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,230,255,0.5) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: 640, paddingTop: 100 }}>
        <div style={fade(0.1)}>
          <span
            style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--green)",
              background: "var(--green-light)", padding: "4px 14px",
              borderRadius: 99, marginBottom: 28, letterSpacing: 0.5,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green)", display: "inline-block", animation: "pulse 2s infinite" }} />
            available for work
          </span>
        </div>
        <div style={fade(0.2)}>
          <h1
            style={{
              fontFamily: "var(--f-display)", fontSize: "clamp(48px, 8vw, 72px)",
              lineHeight: 1.05, color: "var(--ink)",
              letterSpacing: "-1.5px", marginBottom: 10,
            }}
          >
            {data.name.first}<br />
            <em style={{ fontStyle: "italic", color: "var(--ink-2)" }}>{data.name.last}</em>
          </h1>
        </div>
        <div style={fade(0.3)}>
          <p
            style={{
              fontFamily: "var(--f-mono)", fontSize: 12,
              color: "var(--ink-3)", letterSpacing: "1.8px",
              textTransform: "uppercase", marginBottom: 20,
            }}
          >
            {data.role} · {data.stack}
          </p>
        </div>
        <div style={fade(0.4)}>
          <p style={{ fontFamily: "var(--f-body)", fontSize: 16, color: "var(--ink-2)", lineHeight: 1.75, maxWidth: 440, marginBottom: 36 }}>
            {data.summary}
          </p>
        </div>
        <div style={{ ...fade(0.5), display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 56 }}>
          <a
            href="#work"
            style={{
              fontFamily: "var(--f-mono)", fontSize: 12, fontWeight: 500,
              background: "var(--ink)", color: "var(--bg)",
              padding: "12px 24px", borderRadius: 4,
              textDecoration: "none", letterSpacing: 0.3,
              transition: "opacity 0.2s",
            }}
          >
            view my work →
          </a>
          <a
            href="#contact"
            style={{
              fontFamily: "var(--f-mono)", fontSize: 12,
              border: "1px solid var(--border)", color: "var(--ink-2)",
              padding: "11px 24px", borderRadius: 4,
              textDecoration: "none", letterSpacing: 0.3,
              background: "transparent", transition: "background 0.2s",
            }}
          >
            get in touch
          </a>
        </div>
        <div
          style={{
            ...fade(0.6),
            display: "grid", gridTemplateColumns: "repeat(3,1fr)",
            gap: 1, background: "var(--border)",
            border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden",
            maxWidth: 440,
          }}
        >
          {data.stats.map((s) => (
            <div key={s.label} style={{ background: "var(--bg-card)", padding: "18px 20px" }}>
              <div style={{ fontFamily: "var(--f-display)", fontSize: 32, color: "var(--ink)", lineHeight: 1, marginBottom: 5 }}>{s.val}</div>
              <div style={{ fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--ink-3)", letterSpacing: "0.8px", textTransform: "uppercase" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 32, left: 40 }}>
        <div style={{ fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--ink-3)", letterSpacing: 1, display: "flex", alignItems: "center", gap: 8 }}>
          <span>{data.location}</span>
          <span style={{ opacity: 0.3 }}>·</span>
          <span>PH · UTC+8</span>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" style={{ padding: "80px 40px", borderBottom: "1px solid var(--border)" }}>
      <FadeIn>
        <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 48 }}>
          <span style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--ink-3)" }}>01</span>
          <h2 style={{ fontFamily: "var(--f-display)", fontSize: 36, color: "var(--ink)", letterSpacing: "-0.5px" }}>Selected work</h2>
        </div>
      </FadeIn>
      <div style={{ display: "flex", flexDirection: "column", gap: 2, background: "var(--border)", border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden" }}>
        {data.projects.map((p, i) => (
          <FadeIn key={p.num} delay={i * 0.1}>
            <div
              style={{
                background: "var(--bg-card)", padding: "28px 32px",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "#faf9f6"}
              onMouseLeave={(e) => e.currentTarget.style.background = "var(--bg-card)"}
            >
              <div
                style={{
                  width: "100%", height: 80, background: "var(--bg)",
                  borderRadius: 6, marginBottom: 20,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  border: "1px solid var(--border)",
                }}
              >
                <span style={{ fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--ink-3)", letterSpacing: 0.5 }}>
                  project screenshot — {p.name.toLowerCase()}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <span style={{ fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--ink-3)" }}>{p.num}</span>
                <h3 style={{ fontFamily: "var(--f-body)", fontSize: 16, fontWeight: 500, color: "var(--ink)" }}>{p.name}</h3>
              </div>
              <p style={{ fontFamily: "var(--f-body)", fontSize: 14, color: "var(--ink-2)", lineHeight: 1.7, marginBottom: 10 }}>{p.desc}</p>
              <div
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--green)",
                  background: "var(--green-light)", padding: "3px 10px",
                  borderRadius: 99, marginBottom: 14,
                }}
              >
                ↑ {p.impact}
              </div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {p.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--ink-3)",
                      background: "var(--bg)", padding: "3px 10px",
                      borderRadius: 4, border: "1px solid var(--border)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" style={{ padding: "80px 40px", borderBottom: "1px solid var(--border)" }}>
      <FadeIn>
        <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 48 }}>
          <span style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--ink-3)" }}>02</span>
          <h2 style={{ fontFamily: "var(--f-display)", fontSize: 36, color: "var(--ink)", letterSpacing: "-0.5px" }}>Tech stack</h2>
        </div>
      </FadeIn>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
        {data.skills.map((group, i) => (
          <FadeIn key={group.group} delay={i * 0.1}>
            <div
              style={{
                background: "var(--bg-card)", border: "1px solid var(--border)",
                borderRadius: 8, padding: "20px 22px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--ink-3)",
                  letterSpacing: "1px", textTransform: "uppercase", marginBottom: 14,
                }}
              >
                {group.group}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {group.items.map((item, j) => (
                  <span
                    key={item}
                    style={{
                      fontFamily: "var(--f-mono)", fontSize: 11,
                      color: j < 2 ? "var(--accent)" : "var(--ink-2)",
                      background: j < 2 ? "var(--accent-light)" : "var(--bg)",
                      border: `1px solid ${j < 2 ? "transparent" : "var(--border)"}`,
                      padding: "4px 11px", borderRadius: 99,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" style={{ padding: "80px 40px", borderBottom: "1px solid var(--border)" }}>
      <FadeIn>
        <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 48 }}>
          <span style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--ink-3)" }}>03</span>
          <h2 style={{ fontFamily: "var(--f-display)", fontSize: 36, color: "var(--ink)", letterSpacing: "-0.5px" }}>Experience</h2>
        </div>
      </FadeIn>
      <div>
        {data.experience.map((e, i) => (
          <FadeIn key={e.company} delay={i * 0.1}>
            <div
              style={{
                display: "grid", gridTemplateColumns: "110px 1fr",
                gap: 24, padding: "24px 0",
                borderBottom: i < data.experience.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <span style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--ink-3)", paddingTop: 2, lineHeight: 1.6 }}>
                {e.year}
              </span>
              <div>
                <p style={{ fontFamily: "var(--f-body)", fontSize: 15, fontWeight: 500, color: "var(--ink)", marginBottom: 3 }}>{e.company}</p>
                <p style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--ink-3)", marginBottom: 8, letterSpacing: 0.3 }}>{e.role}</p>
                <p style={{ fontFamily: "var(--f-body)", fontSize: 13, color: "var(--ink-2)", lineHeight: 1.6 }}>{e.note}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.4}>
        <div
          style={{
            marginTop: 40, padding: "18px 22px",
            background: "var(--bg-card)", border: "1px solid var(--border)",
            borderRadius: 8, display: "flex", alignItems: "center", gap: 16,
          }}
        >
          <div
            style={{
              width: 36, height: 36, borderRadius: "50%",
              background: "var(--accent-light)", display: "flex",
              alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}
          >
            <span style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--accent)", fontWeight: 500 }}>S6</span>
          </div>
          <div>
            <p style={{ fontFamily: "var(--f-body)", fontSize: 13, fontWeight: 500, color: "var(--ink)", marginBottom: 2 }}>Certified SAFe® 6 Practitioner</p>
            <p style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--ink-3)" }}>Scaled Agile Inc. · May 2023</p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" style={{ padding: "80px 40px 60px" }}>
      <FadeIn>
        <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 40 }}>
          <span style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--ink-3)" }}>04</span>
          <h2 style={{ fontFamily: "var(--f-display)", fontSize: 36, color: "var(--ink)", letterSpacing: "-0.5px" }}>Get in touch</h2>
        </div>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div
          style={{
            background: "var(--ink)", borderRadius: 10,
            padding: "48px 44px",
            display: "grid", gridTemplateColumns: "1fr auto",
            gap: 40, alignItems: "start",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--green)",
                background: "rgba(45,106,79,0.25)", padding: "3px 12px",
                borderRadius: 99, marginBottom: 18,
              }}
            >
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--green)", display: "inline-block" }} />
              open to work
            </div>
            <h3
              style={{
                fontFamily: "var(--f-display)", fontSize: 32,
                color: "var(--bg)", marginBottom: 12, letterSpacing: "-0.5px", lineHeight: 1.2,
              }}
            >
              Let's build<br />something together.
            </h3>
            <p style={{ fontFamily: "var(--f-body)", fontSize: 14, color: "rgba(247,245,240,0.5)", lineHeight: 1.7, maxWidth: 320 }}>
              Open to full-time, contract, and remote opportunities — locally or internationally.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, paddingTop: 4 }}>
            {[
              { label: "email", val: data.email },
              { label: "linkedin", val: data.linkedin },
              { label: "github", val: data.github },
              { label: "phone", val: data.phone },
            ].map((c) => (
              <div key={c.label}>
                <p style={{ fontFamily: "var(--f-mono)", fontSize: 9, color: "rgba(247,245,240,0.3)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 2 }}>{c.label}</p>
                <p style={{ fontFamily: "var(--f-mono)", fontSize: 12, color: "rgba(247,245,240,0.7)" }}>{c.val}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{
        padding: "20px 40px",
        borderTop: "1px solid var(--border)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
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

export default function App() {
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const sections = ["work", "stack", "experience", "contact"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { threshold: 0.3 }
    );
    sections.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap');
        :root {
          --f-display: 'DM Serif Display', serif;
          --f-mono: 'DM Mono', monospace;
          --f-body: 'DM Sans', sans-serif;
          --bg: #f7f5f0;
          --bg-card: #ffffff;
          --ink: #0e0e0e;
          --ink-2: #555555;
          --ink-3: #999999;
          --accent: #1a1a2e;
          --accent-light: #e8e6ff;
          --green: #2d6a4f;
          --green-light: #d8f3dc;
          --border: rgba(0,0,0,0.08);
        }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: var(--bg); color: var(--ink); -webkit-font-smoothing: antialiased; }
        a:hover { opacity: 0.75; }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 600px) {
          nav { padding: 14px 20px !important; }
          section { padding-left: 20px !important; padding-right: 20px !important; }
          footer { padding: 16px 20px !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <Nav active={activeSection} />
      <main style={{ maxWidth: 880, margin: "0 auto" }}>
        <Hero />
        <Work />
        <Stack />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
