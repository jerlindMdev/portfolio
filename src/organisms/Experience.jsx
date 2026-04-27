import { FadeIn } from "../atoms/FadeIn";
import { SectionHeader } from "../molecules/SectionHeader";
import { ExperienceRow } from "../molecules/ExperienceRow";
import { data } from "../data";

export function Experience() {
  return (
    <section id="experience" style={{ padding: "80px 40px", borderBottom: "1px solid var(--border)" }}>
      <FadeIn>
        <SectionHeader num="03" title="Experience" />
      </FadeIn>

      <div>
        {data.experience.map((e, i) => (
          <FadeIn key={e.company} delay={i * 0.1}>
            <ExperienceRow {...e} isLast={i === data.experience.length - 1} />
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.4}>
        <div
          style={{
            marginTop: 40,
            padding: "18px 22px",
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "var(--accent-light)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--accent)", fontWeight: 500 }}>
              S6
            </span>
          </div>
          <div>
            <p style={{ fontFamily: "var(--f-body)", fontSize: 13, fontWeight: 500, color: "var(--ink)", marginBottom: 2 }}>
              Certified SAFe® 6 Practitioner
            </p>
            <p style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--ink-3)" }}>
              Scaled Agile Inc. · May 2023
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
