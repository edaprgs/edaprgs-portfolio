import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Database, Palette, MapPin, Calendar, X, Briefcase, ChevronDown } from "lucide-react"

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

function RepoCard({ exp, isSelected, onClick }) {
  const [hovered, setHovered] = useState(false)
  const active = isSelected || hovered

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "1.1rem 1.3rem",
        borderRadius: 12,
        background: isSelected ? `${exp.color}08` : "var(--glass-bg)",
        border: `1px solid ${isSelected ? exp.color + "50" : active ? exp.color + "30" : "var(--glass-border)"}`,
        cursor: "pointer",
        transition: "all 0.2s",
        transform: hovered && !isSelected ? "translateY(-2px)" : "translateY(0)",
      }}>

      {/* Header row */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", marginBottom: "0.65rem" }}>
        <div style={{
          width: 36, height: 36, borderRadius: 9, overflow: "hidden", flexShrink: 0,
          background: "#fff", border: `1px solid ${exp.color}22`,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <img src={exp.logo} alt={exp.companyShort} style={{ width: "80%", height: "80%", objectFit: "contain" }}/>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.15rem" }}>
            <span style={{ fontSize: "0.9rem", fontWeight: 700, color: exp.color, lineHeight: 1.3 }}>
              {exp.companyShort}
            </span>
            <span style={{
              fontSize: "0.6rem", fontWeight: 600, padding: "2px 8px", borderRadius: 999,
              border: `1px solid ${exp.color}35`, color: exp.color,
              background: `${exp.color}0e`, letterSpacing: "0.05em", textTransform: "uppercase",
            }}>{exp.type}</span>
          </div>
          <p style={{ fontSize: "0.78rem", color: "var(--text-dim)", lineHeight: 1.3 }}>{exp.role}</p>
        </div>
      </div>

      {/* Short description */}
      <p style={{
        fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.7,
        marginBottom: "0.85rem",
        display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
      }}>
        {exp.shortDesc}
      </p>

      {/* Footer row: GitHub-style meta */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
        {exp.tech.slice(0, 3).map(t => (
          <span key={t} style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.72rem", color: "var(--text-dim)" }}>
            <span style={{ width: 9, height: 9, borderRadius: "50%", background: TECH_COLORS[t] || exp.color, flexShrink: 0, display: "inline-block" }}/>
            {t}
          </span>
        ))}
        <span style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.72rem", color: "var(--text-dim)", marginLeft: "auto" }}>
          <Calendar size={11}/> {exp.period}
        </span>
      </div>
    </motion.div>
  )
}

function DetailPanel({ exp, onClose }) {
  return (
    <motion.div
      key={exp.role}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      style={{
        background: "var(--glass-bg)",
        border: "1px solid var(--glass-border)",
        borderRadius: 14,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}>

      {/* Panel header */}
      <div style={{
        padding: "1.1rem 1.3rem",
        borderBottom: "1px solid var(--glass-border)",
        display: "flex", alignItems: "flex-start", gap: "0.85rem",
      }}>
        <div style={{
          width: 44, height: 44, borderRadius: 11, overflow: "hidden", flexShrink: 0,
          background: "#fff", border: `1.5px solid ${exp.color}28`,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: `0 2px 10px ${exp.color}14`,
        }}>
          <img src={exp.logo} alt={exp.company} style={{ width: "80%", height: "80%", objectFit: "contain" }}/>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ fontSize: "0.95rem", fontWeight: 700, color: exp.color, lineHeight: 1.2, marginBottom: "0.18rem" }}>{exp.company}</p>
          <p style={{ fontSize: "0.8rem", color: "var(--body-color)", fontWeight: 600, marginBottom: "0.3rem" }}>{exp.role}</p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.72rem", color: "var(--text-dim)" }}>
              <Calendar size={11}/> {exp.period}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.72rem", color: "var(--text-dim)" }}>
              <MapPin size={11}/> {exp.location}
            </span>
          </div>
        </div>
        <button onClick={onClose} style={{
          width: 28, height: 28, borderRadius: 7, border: "none", cursor: "pointer",
          background: "var(--surface)", display: "flex", alignItems: "center", justifyContent: "center",
          color: "var(--text-dim)", flexShrink: 0, transition: "all 0.15s",
        }}
          onMouseEnter={e => { e.currentTarget.style.background = `${exp.color}18`; e.currentTarget.style.color = exp.color }}
          onMouseLeave={e => { e.currentTarget.style.background = "var(--surface)"; e.currentTarget.style.color = "var(--text-dim)" }}>
          <X size={14}/>
        </button>
      </div>

      {/* Badge */}
      <div style={{ padding: "0.85rem 1.3rem 0" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "0.4rem",
          padding: "0.25rem 0.8rem", borderRadius: 999,
          background: `${exp.color}0e`, border: `1px solid ${exp.color}25`,
          fontSize: "0.7rem", fontWeight: 600, color: exp.color,
        }}>
          ✦ {exp.badge}
        </div>
      </div>

      {/* Bullets */}
      <div style={{ flex: 1, overflowY: "auto", padding: "0.85rem 1.3rem", scrollbarWidth: "none" }}>
        <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-dim)", marginBottom: "0.75rem" }}>
          Highlights
        </p>
        <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {exp.bullets.map((b, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.7rem", fontSize: "0.84rem", color: "var(--text-muted)", lineHeight: 1.75 }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: exp.color, flexShrink: 0, marginTop: "0.6rem" }}/>
              {b}
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div style={{ marginTop: "1.2rem" }}>
          <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-dim)", marginBottom: "0.6rem" }}>
            Tech Stack
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
            {exp.tech.map(t => (
              <span key={t} style={{
                display: "flex", alignItems: "center", gap: "0.3rem",
                padding: "0.25rem 0.65rem", borderRadius: 999,
                background: "var(--surface)", border: "1px solid var(--glass-border)",
                fontSize: "0.72rem", color: "var(--text-muted)",
              }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: TECH_COLORS[t] || exp.color, flexShrink: 0 }}/>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const [selected, setSelected] = useState(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 540)

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= 540)
    window.addEventListener("resize", handler)
    return () => window.removeEventListener("resize", handler)
  }, [])

  const toggle = (exp) => setSelected(s => s?.role === exp.role ? null : exp)

  return (
    <section id="experience" className="ide-section">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.65 }} style={{ marginBottom: "2rem" }}>
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
          Tap any card to view full details.
        </p>
      </motion.div>

      {isMobile ? (
        /* Mobile: accordion/drawer layout */
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {experiences.map(exp => {
            const isOpen = selected?.role === exp.role
            return (
              <div key={exp.role}>
                <div onClick={() => toggle(exp)}>
                  <RepoCard exp={exp} isSelected={isOpen} onClick={() => {}}/>
                </div>
                {/* Drawer hint when closed */}
                {!isOpen && (
                  <div style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    padding: "0.3rem", gap: "0.3rem",
                    fontSize: "0.62rem", color: "var(--text-dim)",
                    cursor: "pointer",
                  }} onClick={() => toggle(exp)}>
                    <ChevronDown size={12}/>
                    <span>Tap to expand</span>
                  </div>
                )}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden", marginTop: "0.5rem" }}>
                      {/* Drawer handle */}
                      <div style={{ display: "flex", justifyContent: "center", marginBottom: "0.4rem" }}>
                        <div style={{ width: 36, height: 4, borderRadius: 2, background: "var(--glass-border)" }}/>
                      </div>
                      <div style={{ borderRadius: 14, overflow: "hidden" }}>
                        <DetailPanel exp={exp} onClose={() => setSelected(null)}/>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      ) : (
        /* Desktop: side-by-side grid */
        <div className="experience-grid" style={{
          display: "grid",
          gridTemplateColumns: selected ? "1fr 1fr" : "1fr",
          gap: "1rem",
          alignItems: "start",
          transition: "grid-template-columns 0.3s ease",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {experiences.map(exp => (
              <RepoCard
                key={exp.role}
                exp={exp}
                isSelected={selected?.role === exp.role}
                onClick={() => toggle(exp)}
              />
            ))}
          </div>
          <AnimatePresence mode="wait">
            {selected && (
              <div style={{ position: "sticky", top: "1rem", minHeight: 420 }}>
                <DetailPanel exp={selected} onClose={() => setSelected(null)}/>
              </div>
            )}
          </AnimatePresence>
        </div>
      )}
    </section>
  )
}
