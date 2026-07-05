import { motion } from "framer-motion"
import SkillsGlobe from "./SkillsGlobe"
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiPython,
  SiHtml5, SiCss, SiTailwindcss, SiSupabase, SiPostgresql,
  SiMysql, SiFlask, SiNodedotjs, SiSocketdotio, SiCloudinary,
  SiGooglegemini, SiTensorflow, SiFigma, SiGit, SiVercel,
  SiFramer, SiPostman,
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
  "Flask":            SiFlask,
  "Node.js":          SiNodedotjs,
  "SocketIO":         SiSocketdotio,
  "Cloudinary":       SiCloudinary,
  "Gemini API":       SiGooglegemini,
  "TensorFlow":       SiTensorflow,
  "Figma":            SiFigma,
  "Git":              SiGit,
  "Vercel":           SiVercel,
  "Postman":          SiPostman,
}

const categories = [
  { label: "Languages",      color: "#9a1847",  skills: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3", "SQL"] },
  { label: "Frontend",       color: "#7e3460",  skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Shadcn UI"] },
  { label: "Backend & Data", color: "#5b2a82",  skills: ["Supabase", "PostgreSQL", "MySQL", "Flask", "Node.js", "SocketIO"] },
  { label: "AI & LLM",       color: "#c084a8",  skills: ["Gemini API", "TensorFlow", "Keras", "CNN", "Prompt Engineering"] },
  { label: "Tools & Design", color: "#b52a5d",  skills: ["Figma", "Git", "Vercel", "Postman", "Cloudinary", "WCAG"] },
]

export default function Skills() {
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
      </motion.div>

      {/* Globe */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 1 }} style={{ marginBottom: "1.2rem", marginTop: "-0.5rem" }}>
        <SkillsGlobe/>
      </motion.div>

      {/* Category breakdown */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>
        {categories.map(({ label, color, skills }, i) => (
          <motion.div key={label}
            initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.65rem" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: color, display: "block", flexShrink: 0 }}/>
              <span style={{ fontSize: "0.7rem", fontWeight: 700, color, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {label}
              </span>
              <div style={{ flex: 1, height: 1, background: "var(--divider)" }}/>
            </div>
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
        ))}
      </div>
    </section>
  )
}
