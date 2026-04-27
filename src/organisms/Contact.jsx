import { FadeIn } from "../atoms/FadeIn";
import { SectionHeader } from "../molecules/SectionHeader";
import { ContactItem } from "../molecules/ContactItem";
import { data } from "../data";

const contacts = [
  { label: "email", val: data.email },
  { label: "linkedin", val: data.linkedin },
  { label: "github", val: data.github },
  { label: "phone", val: data.phone },
];

export function Contact() {
  return (
    <section id="contact" style={{ padding: "80px 40px 60px" }}>
      <FadeIn>
        <SectionHeader num="04" title="Get in touch" />
      </FadeIn>

      <FadeIn delay={0.1}>
        <div
          className="contact-grid contact-card"
          style={{
            background: "var(--surface-inverse)",
            borderRadius: 10,
            padding: "48px 44px",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 40,
            alignItems: "start",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontFamily: "var(--f-mono)",
                fontSize: 10,
                color: "var(--green)",
                background: "rgba(45,106,79,0.25)",
                padding: "3px 12px",
                borderRadius: 99,
                marginBottom: 18,
              }}
            >
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--green)", display: "inline-block" }} />
              open to work
            </div>

            <h3
              style={{
                fontFamily: "var(--f-display)",
                fontSize: 32,
                color: "var(--on-inverse)",
                marginBottom: 12,
                letterSpacing: "-0.5px",
                lineHeight: 1.2,
              }}
            >
              Let's build
              <br />
              something together.
            </h3>

            <p style={{ fontFamily: "var(--f-body)", fontSize: 14, color: "var(--on-inverse-muted)", lineHeight: 1.7, maxWidth: 320 }}>
              Open to full-time, contract, and remote opportunities — locally or internationally.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14, paddingTop: 4 }}>
            {contacts.map((c) => (
              <ContactItem key={c.label} {...c} />
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
