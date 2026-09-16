import { motion } from "framer-motion"
import { GraduationCap, MapPin, Sparkles, Code2, Palette, ShieldCheck, Layers, User } from "lucide-react"

const fade = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay: i * 0.08 },
})

const stats = [
  { num: "3",    label: "Professional Roles", color: "var(--rose)" },
  { num: "3K+",  label: "Users Served",       color: "var(--mauve)" },
  { num: "2025", label: "CS · Cum Laude",     color: "var(--rose)" },
  { num: "Now",  label: "Open to Work",       color: "var(--mauve)" },
]

const offers = [
  { Icon: Code2,       label: "Frontend Engineering",  sub: "React 19 · Next.js 16 · Tailwind CSS 4" },
  { Icon: Layers,      label: "Full-Stack Delivery",   sub: "Node.js · MongoDB · Supabase · PostgreSQL" },
  { Icon: ShieldCheck, label: "Auth & Payments",       sub: "OAuth · Stripe · Rate limiting · Cloudflare Turnstile" },
  { Icon: Palette,     label: "UI Systems",            sub: "Figma · Design tokens · WCAG · Design-to-code" },
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

      <motion.div {...fade(0.5)} style={{
        marginBottom: "1.6rem", padding: "0.95rem 1.1rem",
        background: "var(--glass-bg)", border: "1px solid var(--glass-border)",
        borderRadius: 14, borderLeft: "3px solid var(--rose)",
      }}>
        <p style={{
          fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em",
          textTransform: "uppercase", color: "var(--rose)", marginBottom: "0.4rem",
        }}>
          TL;DR
        </p>
        <p style={{ fontSize: "0.92rem", color: "var(--body-color)", lineHeight: 1.65, fontWeight: 500 }}>
          CS graduate (Cum Laude) and full-stack developer, remote-first and open to full-time work. Recently shipped production frontend at a US AI startup, plus a membership system serving 3,000+ records.
        </p>
      </motion.div>

      <div className="about-main-grid" style={{ display: "grid", gridTemplateColumns: "1fr 260px", gap: "2rem", marginBottom: "2.2rem", alignItems: "start" }}>

        <div>
          <motion.p {...fade(1)} style={{ fontSize: "0.96rem", color: "var(--text-muted)", lineHeight: 1.9, marginBottom: "1rem" }}>
            I'm a <span style={{ color: "var(--rose)", fontWeight: 600 }}>Computer Science graduate (Cum Laude)</span> from{" "}
            <span style={{ color: "var(--body-color)", fontWeight: 500 }}>Mindanao State University, Iligan Institute of Technology</span>.
            I build production full-stack applications that are fast, accessible, and grounded in a real design system.
          </motion.p>
          <motion.p {...fade(2)} style={{ fontSize: "0.96rem", color: "var(--text-muted)", lineHeight: 1.9, marginBottom: "1rem" }}>
            Most recently I shipped the production frontend for{" "}
            <span style={{ color: "var(--body-color)", fontWeight: 500 }}>Nudgine</span>, a US-based AI startup.
            The work covered marketing pages, authentication and onboarding, Stripe billing flows, and a shared component library on{" "}
            <span style={{ color: "var(--body-color)", fontWeight: 500 }}>Next.js 16 and React 19</span>.
            Before that I delivered a Next.js + Supabase membership platform serving{" "}
            <span style={{ color: "var(--body-color)", fontWeight: 500 }}>3,000+ live records</span> with Gemini-powered reporting.
            My undergraduate thesis is a computer vision pipeline for facial recognition under varying lighting.
          </motion.p>
          <motion.p {...fade(3)} style={{ fontSize: "0.96rem", color: "var(--text-muted)", lineHeight: 1.9 }}>
            I'm <span style={{ color: "var(--rose)", fontWeight: 600 }}>actively seeking a full-time Full-Stack Developer role</span>.
            I am remote-first, and I want room to own UI systems, backend flows, and the product details that make software feel finished.
          </motion.p>
        </div>

        <motion.div {...fade(2)} style={{
          background: "var(--glass-bg)", border: "1px solid var(--glass-border)",
          borderRadius: 16, padding: "1.3rem",
          display: "flex", flexDirection: "column", gap: "0.85rem",
        }}>
          <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-dim)", marginBottom: "0.1rem" }}>Quick Facts</p>
          {[
            { Icon: GraduationCap, color: "var(--rose)",  primary: "B.S. Computer Science", secondary: "MSU-IIT · Cum Laude · 2025" },
            { Icon: MapPin,        color: "var(--mauve)", primary: "General Trias, Cavite", secondary: "Philippines · Remote-ready" },
            { Icon: Sparkles,      color: "var(--rose)",  primary: "Open to work",          secondary: "Full-stack · Full-time · Remote" },
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

      <motion.div {...fade(4)} className="about-stats-grid" style={{
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

      <motion.div {...fade(5)}>
        <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-dim)", marginBottom: "1rem" }}>
          What I Offer
        </p>
        <div className="about-offers-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.65rem" }}>
          {offers.map(({ Icon, label, sub }) => (
            <div key={label} style={{
              display: "flex", alignItems: "flex-start", gap: "0.75rem",
              padding: "0.9rem 1rem", borderRadius: 12,
              background: "var(--glass-bg)", border: "1px solid var(--glass-border)",
              transition: "border-color 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "var(--card-hover-border)"}
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
