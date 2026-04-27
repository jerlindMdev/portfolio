import "./styles/global.css";
import { Analytics } from "@vercel/analytics/react";
import { useActiveSection } from "./hooks/useActiveSection";
import { useTheme } from "./hooks/useTheme";
import { Nav } from "./organisms/Nav";
import { Hero } from "./organisms/Hero";
import { Work } from "./organisms/Work";
import { Stack } from "./organisms/Stack";
import { Experience } from "./organisms/Experience";
import { Contact } from "./organisms/Contact";
import { Footer } from "./organisms/Footer";

export default function App() {
  const activeSection = useActiveSection();
  const [dark, toggleTheme] = useTheme();

  return (
    <>
      <Nav active={activeSection} dark={dark} onToggleTheme={toggleTheme} />
      <main style={{ maxWidth: 880, margin: "0 auto" }}>
        <Hero />
        <Work />
        <Stack />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}
