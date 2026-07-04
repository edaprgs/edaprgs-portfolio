import { motion } from "framer-motion"
import { GraduationCap, MapPin, Sparkles, Code2, Palette, BrainCircuit, Layers, User } from "lucide-react"

const fade = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay: i * 0.08 },
})

const stats = [
  { num: "5+",   label: "Projects Built",      color: "var(--rose)" },
  { num: "3K+",  label: "Users Served",         color: "var(--mauve)" },
  { num: "2025", label: "CS Graduate",          color: "var(--rose)" },
  { num: "2",    label: "Professional Roles",   color: "var(--mauve)" },
]

const offers = [
  { Icon: Code2,        label: "Full-Stack Development",  sub: "React · Next.js · Supabase · Flask" },
  { Icon: Palette,      label: "UI/UX Design",            sub: "Figma · Prototyping · WCAG" },
  { Icon: BrainCircuit, label: "AI Integration",          sub: "Gemini API · TensorFlow · Prompt Engineering" },
  { Icon: Layers,       label: "Database Design",         sub: "PostgreSQL · MySQL · Schema Design" },
]

export default function About() {
  return (
    <section id="about" className="ide-section">

      <motion.div {...fade(0)} style={{ marginBottom: "1.8rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.6rem" }}>
          <User size={14} style={{ color: "var(--rose)" }}/>
          <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--rose)" }}>
            01 · About
          </span>
        </div>
        <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
          className="grad-text">
          About Me
        </h2>
      </motion.div>

      {/* Two-column layout */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 260px", gap: "2rem", marginBottom: "2.2rem", alignItems: "start" }}>

        <div>
          <motion.p {...fade(1)} style={{ fontSize: "0.96rem", color: "var(--text-muted)", lineHeight: 1.9, marginBottom: "1rem" }}>
            I'm a <span style={{ color: "var(--rose)", fontWeight: 600 }}>Computer Science graduate</span> from{" "}
            <span style={{ color: "var(--body-color)", fontWeight: 500 }}>Mindanao State University, Iligan Institute of Technology</span>,
            passionate about building web applications that are fast, functional, and beautifully designed.
          </motion.p>
          <motion.p {...fade(2)} style={{ fontSize: "0.96rem", color: "var(--text-muted)", lineHeight: 1.9, marginBottom: "1rem" }}>
            My work spans crafting pixel-perfect interfaces in{" "}
            <span style={{ color: "var(--body-color)", fontWeight: 500 }}>React and Next.js</span> to architecting backends with{" "}
            <span style={{ color: "var(--body-color)", fontWeight: 500 }}>Supabase, Flask, and PostgreSQL</span>, and integrating AI through the{" "}
            <span style={{ color: "var(--body-color)", fontWeight: 500 }}>Gemini API</span> for real-world impact.
          </motion.p>
          <motion.p {...fade(3)} style={{ fontSize: "0.96rem", color: "var(--text-muted)", lineHeight: 1.9 }}>
            I believe great software needs both strong engineering <span style={{ color: "var(--rose)", fontWeight: 500 }}>and</span> great design.
            Currently open to full-time opportunities across the stack.
          </motion.p>
        </div>

        <motion.div {...fade(2)} style={{
          background: "var(--glass-bg)", border: "1px solid var(--glass-border)",
          borderRadius: 16, padding: "1.3rem",
          display: "flex", flexDirection: "column", gap: "0.85rem",
        }}>
          <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-dim)", marginBottom: "0.1rem" }}>Quick Facts</p>
          {[
            { Icon: GraduationCap, color: "var(--rose)", primary: "B.S. Computer Science", secondary: "MSU-IIT · 2025" },
            { Icon: MapPin,        color: "var(--mauve)", primary: "General Trias, Cavite", secondary: "Philippines" },
            { Icon: Sparkles,      color: "var(--rose)", primary: "Open to opportunities", secondary: "Full-stack · AI · Remote or on-site PH" },
          ].map(({ Icon, color, primary, secondary }, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.7rem" }}>
              <div style={{ width: 30, height: 30, borderRadius: 8, background: "var(--surface-2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon size={13} style={{ color }}/>
              </div>
              <div>
                <p style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--body-color)", lineHeight: 1.2 }}>{primary}</p>
                <p style={{ fontSize: "0.7rem", color: "var(--text-dim)", lineHeight: 1.4 }}>{secondary}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Stats row */}
      <motion.div {...fade(4)} style={{
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
        gap: "1px", marginBottom: "2.2rem",
        background: "var(--glass-border)", borderRadius: 14,
        border: "1px solid var(--glass-border)", overflow: "hidden",
      }}>
        {stats.map(({ num, label, color }) => (
          <div key={label} style={{
            display: "flex", flexDirection: "column", gap: 4,
            padding: "1.2rem 1rem", background: "var(--glass-bg)", textAlign: "center",
          }}>
            <span style={{ fontSize: "2rem", fontWeight: 800, lineHeight: 1, color, letterSpacing: "-0.04em" }}>{num}</span>
            <span style={{ fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-dim)", lineHeight: 1.4 }}>{label}</span>
          </div>
        ))}
      </motion.div>

      {/* What I offer */}
      <motion.div {...fade(5)}>
        <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-dim)", marginBottom: "1rem" }}>
          What I Offer
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.65rem" }}>
          {offers.map(({ Icon, label, sub }) => (
            <div key={label} style={{
              display: "flex", alignItems: "flex-start", gap: "0.75rem",
              padding: "0.9rem 1rem", borderRadius: 12,
              background: "var(--glass-bg)", border: "1px solid var(--glass-border)",
              transition: "border-color 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(154,24,71,0.3)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "var(--glass-border)"}>
              <div style={{ width: 32, height: 32, borderRadius: 9, background: "var(--surface-2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon size={15} style={{ color: "var(--rose)" }}/>
              </div>
              <div>
                <p style={{ fontSize: "0.86rem", fontWeight: 600, color: "var(--body-color)", lineHeight: 1.2, marginBottom: 3 }}>{label}</p>
                <p style={{ fontSize: "0.68rem", color: "var(--text-dim)", lineHeight: 1.5 }}>{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
