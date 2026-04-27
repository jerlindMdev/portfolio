import { useState, useEffect } from "react";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { StatItem } from "../atoms/StatItem";
import { data } from "../data";

export function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  const fade = (delay) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden border-b border-border px-10 py-15 lg:py-5">
      {/* decorative glow orb */}
      <div className="pointer-events-none absolute top-[10%] -right-[0%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(232,230,255,0.5)_0%,transparent_70%)]" />

      <div className="max-w-[640px] pt-[100px]">
        {/* available badge */}
        <div style={fade(0.1)}>
          <Badge label="available for work" style={{ marginBottom: 28 }} />
        </div>

        {/* name */}
        <div style={fade(0.2)}>
          <h1 className="mb-[10px] font-display text-[clamp(48px,8vw,72px)] leading-[1.05] tracking-[-1.5px] text-ink">
            {data.name.first}
            <br />
            <em className="italic text-ink-2">{data.name.last}</em>
          </h1>
        </div>

        {/* role + stack */}
        <div style={fade(0.3)}>
          <p className="mb-5 font-mono text-[12px] uppercase tracking-[1.8px] text-ink-3">
            {data.role} · {data.stack}
          </p>
        </div>

        {/* summary */}
        <div style={fade(0.4)}>
          <p className="mb-9 max-w-[440px] font-body text-base leading-[1.75] text-ink-2">
            {data.summary}
          </p>
        </div>

        {/* CTA buttons */}
        <div className="mb-14 flex flex-wrap gap-3" style={fade(0.5)}>
          <Button href="#work">view my work →</Button>
          <Button href="#contact" variant="secondary">
            get in touch
          </Button>
          <Button
            href="/Jerlind_Medina_CV.pdf"
            variant="secondary"
            download="Jerlind_Medina_CV.pdf"
          >
            download cv ↓
          </Button>
        </div>

        {/* stats */}
        <div
          className="grid max-w-[440px] grid-cols-3 gap-px overflow-hidden rounded-lg border border-border bg-border"
          style={fade(0.6)}
        >
          {data.stats.map((s) => (
            <StatItem key={s.label} val={s.val} label={s.label} />
          ))}
        </div>
      </div>

      {/* location tag */}
      <div className="absolute bottom-8 left-10 max-sm:left-5">
        <div className="flex items-center gap-2 font-mono text-[10px] tracking-[1px] text-ink-3">
          <span>{data.location}</span>
          <span className="opacity-30">·</span>
          <span>PH · UTC+8</span>
        </div>
      </div>
    </section>
  );
}
