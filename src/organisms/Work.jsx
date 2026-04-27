import { FadeIn } from "../atoms/FadeIn";
import { SectionHeader } from "../molecules/SectionHeader";
import { ProjectCard } from "../molecules/ProjectCard";
import { data } from "../data";

export function Work() {
  return (
    <section id="work" style={{ padding: "80px 40px", borderBottom: "1px solid var(--border)" }}>
      <FadeIn>
        <SectionHeader num="01" title="Selected work" />
      </FadeIn>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          background: "var(--border)",
          border: "1px solid var(--border)",
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        {data.projects.map((p, i) => (
          <FadeIn key={p.num} delay={i * 0.1}>
            <ProjectCard {...p} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
