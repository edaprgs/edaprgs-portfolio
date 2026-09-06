import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Database, Palette, MapPin, Calendar, ChevronDown, Briefcase, ExternalLink, Code2 } from "lucide-react"

const experiences = [
  {
    id: "nudgine",
    role: "Frontend Developer / Software Developer",
    type: "Contract",
    company: "Nudgine LLC",
    companyShort: "Nudgine",
    initials: "N",
    period: "Jun 2026 · Aug 2026",
    location: "Alpine, Utah, USA · Remote",
    color: "#b52a5d",
    Icon: Code2,
    badge: "US AI startup · Next.js 16 · React 19 · Live product",
    shortDesc: "Shipped the production frontend for real-time AI meeting guidance software, covering marketing, auth, onboarding, pricing, and a shared component system used across 10+ pages.",
    live: "https://www.nudgine.ai/",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MongoDB", "Stripe", "Zod", "Node.js"],
    bullets: [
      "Redesigned and shipped the marketing experience end-to-end and extracted a shared component library reused across 10+ marketing and auth pages on Next.js 16, React 19, TypeScript, and Tailwind CSS 4.",
      "Built the pricing page (usage-based Pro-plan slider, plan comparison, billing FAQ) plus SEO-optimized Product, How It Works, Use Cases, Security, About, FAQs, Blog, and Changelog pages.",
      "Rebuilt Login, Signup, and the Auth Modal on a shared foundation with Google OAuth, invisible reCAPTCHA v2, and a sitewide typography system.",
      "Delivered a production password-reset and account-security system spanning 5 API routes and 3 UI pages, with hashed reset tokens, TTL expiration, atomic token invalidation, and 25 passing integration tests.",
      "Engineered progressive exponential-backoff brute-force protection and built post-signup onboarding that routes users into Stripe Checkout, contact-sales, or the free workspace.",
      "Shipped public legal pages and a Contact flow, then ran WCAG, keyboard, dark-mode, and cross-device audits (44px touch targets) on every PR.",
    ],
  },
  {
    id: "uccp",
    role: "Full-Stack Developer & AI Integration",
    type: "Contract",
    company: "United Church of Christ in the Philippines, Iligan",
    companyShort: "UCCP Iligan",
    logo: "/images/uccp-logo.png",
    period: "Jul 2025 · Jul 2026",
    location: "Iligan City, Philippines",
    color: "#b52a5d",
    Icon: Database,
    badge: "Live in production · 3,000+ members · AI-powered",
    shortDesc: "Production-grade church membership system serving 3,000+ active records with a three-tier role system, AI-powered reporting via Gemini, and configurable CSV exports.",
    live: "https://uccpiligan.vercel.app/",
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Gemini API", "Zod", "Recharts", "Vercel"],
    bullets: [
      "Architected and shipped a production membership system in Next.js (App Router), TypeScript, and Supabase, managing 3,000+ live records across a 40+ field normalized PostgreSQL schema.",
      "Built two Gemini API features: AI report summarization over filtered member exports, and a conversational Q&A interface for non-technical admins.",
      "Implemented server-side RBAC via Next.js Middleware, verifying JWT sessions on every request and routing Admin, Staff, and Member users to separate portals.",
      "Developed a configurable reports module with live search, multi-criteria filtering, toggleable columns, and one-click CSV export, cutting reporting time by ~80%.",
      "Deployed to Vercel with CI/CD on every push to main; migrated 3,000+ historical records with zero data loss at go-live.",
    ],
  },
  {
    id: "sikai",
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
      "Designed the eTanom Planter's Interface with responsive web and mobile layouts covering 8+ end-to-end flows: OTP onboarding, proof-of-planting uploads, earnings tracking, and in-app messaging.",
      "Built a WCAG-compliant color system with documented contrast ratios across 9 shade levels (AA/AAA on light and dark surfaces).",
      "Delivered annotated Figma handoffs with full interaction states, cutting developer clarification rounds for a 4-person engineering team.",
    ],
  },
]

const TECH_COLORS = {
  "Next.js": "#000",
  "React": "#61dafb",
  "TypeScript": "#3178c6",
  "Tailwind CSS": "#38bdf8",
  "MongoDB": "#00ed64",
  "Stripe": "#635bff",
  "Zod": "#3068b7",
  "Node.js": "#5fa04e",
  "Supabase": "#3ecf8e",
  "PostgreSQL": "#336791",
  "Gemini API": "#8b5cf6",
  "Recharts": "#e8577a",
  "Vercel": "#000",
  "Figma": "#f24e1e",
  "Prototyping": "#7e3460",
  "WCAG": "#1a7f5a",
  "UI/UX": "#b52a5d",
  "Responsive Design": "#0ea5e9",
}

function CompanyMark({ exp, size = 20 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: 4, overflow: "hidden", flexShrink: 0,
      background: exp.logo ? "#fff" : `${exp.color}18`,
      border: "1px solid var(--glass-border)",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      {exp.logo ? (
        <img src={exp.logo} alt="" style={{ width: "90%", height: "90%", objectFit: "contain" }}/>
      ) : (
        <span style={{ fontSize: size * 0.48, fontWeight: 800, color: exp.color, lineHeight: 1 }}>
          {exp.initials}
        </span>
      )}
    </div>
  )
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

      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: "100%", display: "flex", flexDirection: "column",
          padding: "1rem 1.2rem", background: "transparent", border: "none",
          cursor: "pointer", textAlign: "left", gap: "0.55rem",
        }}>

        <div style={{ display: "flex", alignItems: "center", gap: "0.55rem", width: "100%" }}>
          <CompanyMark exp={exp} size={22}/>

          <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--status-color)", flex: 1, minWidth: 0 }}>
            {exp.companyShort}
          </span>

          <span style={{
            fontSize: "0.65rem", fontWeight: 700, padding: "1px 9px", borderRadius: 999,
            border: "1px solid var(--status-border)", color: "var(--body-color)",
            background: "var(--status-bg)", letterSpacing: "0.04em", flexShrink: 0,
          }}>{exp.type}</span>

          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.22 }}
            style={{ flexShrink: 0, color: isOpen ? exp.color : "var(--text-dim)", marginLeft: "0.2rem" }}>
            <ChevronDown size={16}/>
          </motion.div>
        </div>

        <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--body-color)", lineHeight: 1.4 }}>
          {exp.role}
        </p>

        <p style={{
          fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.6,
          display: "-webkit-box", WebkitLineClamp: isOpen ? undefined : 2,
          WebkitBoxOrient: "vertical", overflow: isOpen ? "visible" : "hidden",
        }}>
          {exp.shortDesc}
        </p>

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

              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: "0.35rem",
                  padding: "0.22rem 0.8rem", borderRadius: 999,
                  background: `${exp.color}0e`, border: `1px solid ${exp.color}25`,
                  fontSize: "0.69rem", fontWeight: 600, color: exp.color,
                }}>
                  ✦ {exp.badge}
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", fontSize: "0.72rem", color: "var(--text-dim)" }}>
                  <MapPin size={11}/> {exp.location}
                </span>
                {exp.live && (
                  <a href={exp.live} target="_blank" rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "0.3rem",
                      marginLeft: "auto", fontSize: "0.72rem", fontWeight: 600, color: exp.color,
                    }}>
                    <ExternalLink size={12}/> Live
                  </a>
                )}
              </div>

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

  const toggle = (id) => setOpenRole(r => r === id ? null : id)

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
          Career
        </h2>
        <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", marginTop: "0.6rem", lineHeight: 1.7 }}>
          Contract frontend work at a US AI startup, production full-stack, and design internship.
        </p>
      </motion.div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
        {experiences.map((exp, i) => (
          <AccordionCard
            key={exp.id}
            exp={exp}
            index={i}
            isOpen={openRole === exp.id}
            onToggle={() => toggle(exp.id)}
          />
        ))}
      </div>
    </section>
  )
}
