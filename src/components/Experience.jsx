import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Database, Palette, MapPin, Calendar, ChevronDown, Briefcase } from "lucide-react"

const experiences = [
  {
    role: "Full-Stack Developer & AI Integration Engineer",
    type: "Volunteer",
    company: "United Church of Christ in the Philippines, Iligan",
    companyShort: "UCCP Iligan",
    logo: "/images/uccp-logo.png",
    period: "Jul 2025 · Present",
    location: "Iligan City, Philippines",
    color: "#b52a5d",
    Icon: Database,
    badge: "Live in Production · 3,000+ members · AI-powered",
    shortDesc: "Production-grade church membership system serving 3,000+ active records with a three-tier role system, AI-powered reporting via Gemini, and configurable CSV exports.",
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Gemini API", "Zod", "Recharts", "Vercel"],
    bullets: [
      "Built a production-grade church membership system using Next.js (App Router), TypeScript, and Supabase serving 3,000+ active member records.",
      "Integrated the Gemini API for AI-powered report summarization and natural language Q&A over live membership data.",
      "Implemented a three-tier role system (Admin, Staff, Member) via Next.js Middleware with fine-grained access control and zero client-side enforcement gaps.",
      "Designed a 40+ field normalized PostgreSQL schema with Row Level Security covering personal, family, church, educational, and ministry data.",
      "Built a configurable reports module with live search, multi-filter, toggleable columns, and one-click CSV export, cutting manual reporting time by ~80%.",
      "Implemented 1,000-row batched pagination to reliably fetch all records beyond Supabase's default query ceiling.",
      "Added CSP security headers, X-Frame-Options DENY, and Referrer Policy to the Next.js config for production hardening.",
      "Migrated 3,000+ historical records to the new schema with zero data loss; deployed to Vercel with CI/CD.",
    ],
  },
  {
    role: "UI/UX Design Intern",
    type: "Internship",
    company: "Sikai Inc. (eTanom)",
    companyShort: "Sikai Inc.",
    logo: "/images/etanom-logo.png",
    period: "Jun 2024 · Jul 2024",
    location: "Iligan City, Philippines",
    color: "#7e3460",
    Icon: Palette,
    badge: "Figma · 8+ flows · WCAG compliant",
    shortDesc: "Designed the eTanom Planter's Interface, a reforestation platform, covering responsive web and mobile layouts across 8+ end-to-end user flows.",
    tech: ["Figma", "Prototyping", "WCAG", "UI/UX", "Responsive Design"],
    bullets: [
      "Designed the eTanom Planter's Interface, a reforestation platform, covering responsive web and mobile layouts.",
      "Prototyped 8+ end-to-end user flows: OTP onboarding, proof-of-planting photo uploads, earnings tracking, and in-app messaging.",
      "Built a WCAG-compliant color system across 9 shade levels with AA/AAA contrast ratios on both light and dark surfaces.",
      "Delivered annotated Figma handoffs with full interaction states and component specs, reducing dev clarification rounds for a 4-person engineering team.",
    ],
  },
]

const TECH_COLORS = {
  "Next.js": "#000",
  "TypeScript": "#3178c6",
  "Supabase": "#3ecf8e",
  "PostgreSQL": "#336791",
  "Gemini API": "#8b5cf6",
  "Zod": "#3068b7",
  "Recharts": "#e8577a",
  "Vercel": "#000",
  "Figma": "#f24e1e",
  "Prototyping": "#7e3460",
  "WCAG": "#1a7f5a",
  "UI/UX": "#b52a5d",
  "Responsive Design": "#0ea5e9",
}

function AccordionCard({ exp, isOpen, onToggle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{
        borderRadius: 12,
        background: "var(--glass-bg)",
        border: `1px solid ${isOpen ? exp.color + "45" : "var(--glass-border)"}`,
        overflow: "hidden",
        transition: "border-color 0.2s",
      }}>

      {/* ── Card header — GitHub repo card style ── */}
      <button
        onClick={onToggle}
        style={{
          width: "100%", display: "flex", flexDirection: "column",
          padding: "1rem 1.2rem", background: "transparent", border: "none",
          cursor: "pointer", textAlign: "left", gap: "0.55rem",
        }}>

        {/* Row 1: icon + name + badge + chevron */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.55rem", width: "100%" }}>
          {/* Logo */}
          <div style={{
            width: 20, height: 20, borderRadius: 4, overflow: "hidden", flexShrink: 0,
            background: "#fff", border: "1px solid var(--glass-border)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <img src={exp.logo} alt={exp.companyShort} style={{ width: "90%", height: "90%", objectFit: "contain" }}/>
          </div>

          <span style={{ fontSize: "0.88rem", fontWeight: 700, color: exp.color, flex: 1, minWidth: 0 }}>
            {exp.companyShort}
          </span>

          <span style={{
            fontSize: "0.65rem", fontWeight: 500, padding: "1px 9px", borderRadius: 999,
            border: `1px solid ${exp.color}30`, color: exp.color,
            background: `${exp.color}0c`, letterSpacing: "0.04em", flexShrink: 0,
          }}>{exp.type}</span>

          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.22 }}
            style={{ flexShrink: 0, color: isOpen ? exp.color : "var(--text-dim)", marginLeft: "0.2rem" }}>
            <ChevronDown size={16}/>
          </motion.div>
        </div>

        {/* Row 2: short description */}
        <p style={{
          fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.6,
          display: "-webkit-box", WebkitLineClamp: isOpen ? undefined : 2,
          WebkitBoxOrient: "vertical", overflow: isOpen ? "visible" : "hidden",
        }}>
          {exp.shortDesc}
        </p>

        {/* Row 3: tech dots + period (GitHub footer row) */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
          {exp.tech.slice(0, 3).map(t => (
            <span key={t} style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.72rem", color: "var(--text-dim)" }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: TECH_COLORS[t] || exp.color, flexShrink: 0 }}/>
              {t}
            </span>
          ))}
          <span style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.72rem", color: "var(--text-dim)", marginLeft: "auto" }}>
            <Calendar size={11}/> {exp.period}
          </span>
        </div>
      </button>

      {/* ── Expanded drawer ── */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="drawer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}>

            <div style={{ padding: "0 1.2rem 1.2rem" }}>
              <div style={{ height: 1, background: "var(--divider)", marginBottom: "1rem" }}/>

              {/* Badge */}
              <div style={{ marginBottom: "1rem" }}>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: "0.35rem",
                  padding: "0.22rem 0.8rem", borderRadius: 999,
                  background: `${exp.color}0e`, border: `1px solid ${exp.color}25`,
                  fontSize: "0.69rem", fontWeight: 600, color: exp.color,
                }}>
                  ✦ {exp.badge}
                </span>
              </div>

              {/* Highlights */}
              <p style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-dim)", marginBottom: "0.6rem" }}>
                Highlights
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.1rem" }}>
                {exp.bullets.map((b, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: exp.color, flexShrink: 0, marginTop: "0.58rem" }}/>
                    {b}
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              <p style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-dim)", marginBottom: "0.5rem" }}>
                Tech Stack
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                {exp.tech.map(t => (
                  <span key={t} style={{
                    display: "flex", alignItems: "center", gap: "0.28rem",
                    padding: "0.2rem 0.6rem", borderRadius: 999,
                    background: "var(--surface)", border: "1px solid var(--glass-border)",
                    fontSize: "0.7rem", color: "var(--text-muted)",
                  }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: TECH_COLORS[t] || exp.color, flexShrink: 0 }}/>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Experience() {
  const [openRole, setOpenRole] = useState(null)

  const toggle = (role) => setOpenRole(r => r === role ? null : role)

  return (
    <section id="experience" className="ide-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.65 }}
        style={{ marginBottom: "2rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.6rem" }}>
          <Briefcase size={14} style={{ color: "var(--rose)" }}/>
          <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--rose)" }}>
            02 · Experience
          </span>
        </div>
        <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
          className="grad-text">
          My Journey
        </h2>
        <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", marginTop: "0.6rem", lineHeight: 1.7 }}>
          From church pews to production servers.
        </p>
      </motion.div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
        {experiences.map((exp, i) => (
          <AccordionCard
            key={exp.role}
            exp={exp}
            index={i}
            isOpen={openRole === exp.role}
            onToggle={() => toggle(exp.role)}
          />
        ))}
      </div>
    </section>
  )
}
