import { FadeIn } from "../atoms/FadeIn";
import { SectionHeader } from "../molecules/SectionHeader";
import { SkillGroup } from "../molecules/SkillGroup";
import { data } from "../data";

export function Stack() {
  return (
    <section id="stack" style={{ padding: "80px 40px", borderBottom: "1px solid var(--border)" }}>
      <FadeIn>
        <SectionHeader num="02" title="Tech stack" />
      </FadeIn>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
        {data.skills.map((group, i) => (
          <FadeIn key={group.group} delay={i * 0.1}>
            <SkillGroup group={group.group} items={group.items} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
