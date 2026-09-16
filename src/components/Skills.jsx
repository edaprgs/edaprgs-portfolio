import { useState } from "react"
import { motion } from "framer-motion"
import SkillsGlobe from "./SkillsGlobe"
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiPython,
  SiHtml5, SiCss, SiTailwindcss, SiSupabase, SiPostgresql,
  SiMysql, SiFlask, SiNodedotjs, SiSocketdotio, SiMongodb,
  SiGooglegemini, SiTensorflow, SiFigma, SiGit, SiVercel,
  SiFramer, SiStripe, SiZod, SiGithubactions, SiPnpm,
} from "react-icons/si"
import { Wrench } from "lucide-react"

const ICON_MAP = {
  "JavaScript":       SiJavascript,
  "TypeScript":       SiTypescript,
  "Python":           SiPython,
  "HTML5":            SiHtml5,
  "CSS3":             SiCss,
  "React":            SiReact,
  "Next.js":          SiNextdotjs,
  "Tailwind CSS":     SiTailwindcss,
  "Framer Motion":    SiFramer,
  "Supabase":         SiSupabase,
  "PostgreSQL":       SiPostgresql,
  "MySQL":            SiMysql,
  "MongoDB":          SiMongodb,
  "Flask":            SiFlask,
  "Node.js":          SiNodedotjs,
  "WebSockets":       SiSocketdotio,
  "Gemini API":       SiGooglegemini,
  "TensorFlow":       SiTensorflow,
  "Figma":            SiFigma,
  "Git":              SiGit,
  "Vercel":           SiVercel,
  "Stripe":           SiStripe,
  "Zod":              SiZod,
  "GitHub Actions":   SiGithubactions,
  "pnpm":             SiPnpm,
}

const categories = [
  { label: "Languages",                 color: "#9a1847", globeCat: null, skills: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3", "SQL"] },
  { label: "Frontend",                  color: "#7e3460", globeCat: 0,    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Shadcn UI"] },
  { label: "Backend & Data",            color: "#5b2a82", globeCat: 1,    skills: ["Node.js", "MongoDB", "Supabase", "PostgreSQL", "MySQL", "Flask", "REST APIs", "WebSockets"] },
  { label: "Auth, Payments & Security", color: "#7e3460", globeCat: 1,    skills: ["JWT", "Google OAuth", "bcrypt", "reCAPTCHA", "Cloudflare Turnstile", "Stripe", "Zod"] },
  { label: "AI, ML & Vision",           color: "#c084a8", globeCat: 2,    skills: ["Gemini API", "OpenAI", "OpenCV", "TensorFlow", "Keras", "Prompt Engineering"] },
  { label: "Tools & Design",            color: "#b52a5d", globeCat: 3,    skills: ["Figma", "Git", "GitHub Actions", "Vercel", "pnpm", "Turborepo", "WCAG"] },
]

export default function Skills() {
  const [globeFilter, setGlobeFilter] = useState(null)

  return (
    <section id="skills" className="ide-section">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.65 }} style={{ marginBottom: "1.6rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.6rem" }}>
          <Wrench size={14} style={{ color: "var(--rose)" }}/>
          <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "var(--rose)" }}>
            03 · Skills
          </span>
        </div>
        <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700,
          letterSpacing: "-0.02em", lineHeight: 1.1 }} className="grad-text">
          Skills & Technologies
        </h2>
        <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", marginTop: "0.6rem", lineHeight: 1.7 }}>
          Frontend-first, with enough backend, auth, and billing depth to ship a product end-to-end.
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 1 }} style={{ marginBottom: "1.2rem", marginTop: "-0.5rem" }}>
        <SkillsGlobe filter={globeFilter} onFilterChange={setGlobeFilter}/>
      </motion.div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>
        {categories.map(({ label, color, globeCat, skills }, i) => {
          const dimmed = globeFilter !== null && globeCat !== globeFilter
          return (
          <motion.div key={label}
            initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
            style={{ opacity: dimmed ? 0.38 : 1, transition: "opacity 0.2s" }}>
            <button
              type="button"
              onClick={() => setGlobeFilter(globeCat === null ? null : (globeFilter === globeCat ? null : globeCat))}
              style={{
                display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.65rem",
                width: "100%", background: "none", border: "none", padding: 0, cursor: "pointer",
                fontFamily: "inherit", textAlign: "left",
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: color, display: "block", flexShrink: 0 }}/>
              <span style={{ fontSize: "0.7rem", fontWeight: 700, color, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {label}
              </span>
              <div style={{ flex: 1, height: 1, background: "var(--divider)" }}/>
            </button>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
              {skills.map(s => {
                const Icon = ICON_MAP[s]
                return (
                  <span key={s} style={{
                    display: "inline-flex", alignItems: "center", gap: "0.35rem",
                    padding: "0.3rem 0.85rem", borderRadius: 999,
                    background: "var(--surface)", border: "1px solid var(--glass-border)",
                    fontSize: "0.8rem", color: "var(--text-muted)",
                    transition: "all 0.2s", cursor: "default",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.color = color; e.currentTarget.style.background = "var(--surface-2)" }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--glass-border)"; e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.background = "var(--surface)" }}>
                    {Icon && <Icon size={13} style={{ flexShrink: 0 }}/>}
                    {s}
                  </span>
                )
              })}
            </div>
          </motion.div>
          )
        })}
      </div>
    </section>
  )
}
