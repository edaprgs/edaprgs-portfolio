import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa"
import {
  SiReact, SiNextdotjs, SiTypescript, SiPython, SiFlask,
  SiHtml5, SiCss, SiTailwindcss,
  SiPostgresql, SiMysql, SiSupabase, SiFigma,
  SiGit, SiVercel, SiFirebase,
} from "react-icons/si"
import { FolderOpen, Wrench, Award, Briefcase, GraduationCap, Star, Brain, Palette } from "lucide-react"
import { usePage } from "../context/PageContext"

const roles = ["Full-Stack Developer", "UI/UX Designer", "AI Integration Engineer"]

const projects = [
  { title: "Church Management System",  img: "/images/church-management-preview.png",  tag: "Full-Stack" },
  { title: "Chrona Time Tracker",        img: "/images/chrona-time-tracker-preview.png", tag: "Full-Stack" },
  { title: "Clinic Management System",  img: "/images/clinic-management-preview.png",  tag: "Full-Stack" },
  { title: "eTanom UI Design",           img: "/images/etanom-ui-preview.png",           tag: "UI/UX"      },
  { title: "CNN Hair Recognition",       img: "/images/hair-cnn-preview.png",            tag: "AI / ML"   },
]

const skillsRow1 = [
  { label: "React",      Icon: SiReact      },
  { label: "Next.js",   Icon: SiNextdotjs  },
  { label: "TypeScript", Icon: SiTypescript },
  { label: "Python",     Icon: SiPython     },
  { label: "Flask",      Icon: SiFlask      },
  { label: "HTML5",      Icon: SiHtml5      },
  { label: "CSS3",       Icon: SiCss        },
  { label: "Tailwind",   Icon: SiTailwindcss},
]

const skillsRow2 = [
  { label: "PostgreSQL", Icon: SiPostgresql },
  { label: "MySQL",      Icon: SiMysql      },
  { label: "Supabase",   Icon: SiSupabase   },
  { label: "Figma",      Icon: SiFigma      },
  { label: "Git",        Icon: SiGit        },
  { label: "Vercel",     Icon: SiVercel     },
  { label: "Firebase",   Icon: SiFirebase   },
]

const achievements = [
  { Icon: GraduationCap, title: "B.S. Computer Science", sub: "MSU-IIT · 2025",            accent: "#7e3460" },
  { Icon: Star,          title: "3,000+ Users Served",   sub: "Church Membership System",  accent: "#b52a5d" },
  { Icon: Brain,         title: "79.67% Accuracy",        sub: "CNN Hair Type Recognition", accent: "#9a1847" },
  { Icon: Palette,       title: "WCAG-Compliant UI",      sub: "Sikai Inc. Internship",     accent: "#c084a8" },
]

const career = [
  { logo: "/images/uccp-logo.png",   name: "UCCP",   role: "Full-Stack Dev & AI Integrator", color: "#7e3460" },
  { logo: "/images/etanom-logo.png", name: "eTanom", role: "UI/UX Design Intern",            color: "#2d7a2d" },
]

const socials = [
  { href: "https://github.com/edaprgs",                                 Icon: FaGithub    },
  { href: "https://www.linkedin.com/in/eda-grace-paragoso-2877ba40a/", Icon: FaLinkedin  },
  { href: "#",                                                           Icon: FaFacebook  },
  { href: "#",                                                           Icon: FaInstagram },
]

function SkillPill({ label, Icon }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: "0.28rem",
      padding: "0.18rem 0.55rem", borderRadius: 999,
      background: "var(--surface)", border: "1px solid var(--glass-border)",
      fontSize: "0.6rem", fontWeight: 500, color: "var(--text-muted)",
      whiteSpace: "nowrap", marginRight: "0.4rem", flexShrink: 0,
    }}>
      <Icon size={9} style={{ color: "var(--rose)", flexShrink: 0 }}/>
      {label}
    </span>
  )
}

function CardHeader({ Icon, title, sub }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.55rem", marginBottom: "0.55rem", flexShrink: 0 }}>
      <div style={{ width: 28, height: 28, borderRadius: 7, background: "var(--surface-2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <Icon size={13} style={{ color: "var(--rose)" }}/>
      </div>
      <div style={{ minWidth: 0 }}>
        <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--body-color)", lineHeight: 1.2 }}>{title}</p>
        <p style={{ fontSize: "0.6rem", color: "var(--text-dim)", lineHeight: 1.3 }}>{sub}</p>
      </div>
    </div>
  )
}

export default function Home() {
  const { setPage } = usePage()
  const [roleIdx,  setRoleIdx]  = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [typing,   setTyping]   = useState(true)
  const [achIdx,   setAchIdx]   = useState(0)
  const [achDir,   setAchDir]   = useState(1)
  const [progress, setProgress] = useState(0)
  const progressRef = useRef(null)

  // typewriter
  useEffect(() => {
    const target = roles[roleIdx]
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 65)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 2000)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38)
        return () => clearTimeout(t)
      } else {
        setRoleIdx(i => (i + 1) % roles.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, roleIdx])

  // achievement flashcard auto-advance with progress bar
  const INTERVAL = 2800
  useEffect(() => {
    setProgress(0)
    const start = performance.now()
    const tick = () => {
      const pct = Math.min(100, ((performance.now() - start) / INTERVAL) * 100)
      setProgress(pct)
      if (pct < 100) progressRef.current = requestAnimationFrame(tick)
    }
    progressRef.current = requestAnimationFrame(tick)
    const adv = setTimeout(() => {
      setAchDir(1)
      setAchIdx(i => (i + 1) % achievements.length)
    }, INTERVAL)
    return () => { clearTimeout(adv); cancelAnimationFrame(progressRef.current) }
  }, [achIdx])

  const advAch = (dir) => {
    setAchDir(dir)
    setAchIdx(i => (i + dir + achievements.length) % achievements.length)
  }

  const socialBtn = {
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    width: 34, height: 34, borderRadius: 8,
    background: "var(--surface)", border: "1px solid var(--glass-border)",
    color: "var(--text-dim)", transition: "all 0.2s",
  }

  return (
    <section id="home" style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      padding: "1.5rem 2rem 1.2rem",
      overflow: "hidden",
      boxSizing: "border-box",
    }}>

      {/* ── Hero ── */}
      <div style={{ flexShrink: 0, marginBottom: "0.85rem" }}>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}
          style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--rose)", marginBottom: "0.28rem" }}>
          Hi there, I'm
        </motion.p>

        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.06 }}
          style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.08, marginBottom: "0.28rem" }}>
          Eda Grace <span className="grad-text" style={{ fontWeight: 800 }}>Paragoso</span>
        </motion.h1>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 }}
          style={{ fontSize: "0.8rem", fontWeight: 500, color: "var(--text-muted)", marginBottom: "0.55rem", minHeight: "1.3em", display: "flex", alignItems: "center", gap: "0.35rem" }}>
          <span style={{ color: "var(--rose)", opacity: 0.5 }}>·</span>
          <span>{displayed}</span>
          <span style={{ display: "inline-block", width: 2, height: "0.85em", background: "var(--rose)", verticalAlign: "middle", animation: "blink 1.1s step-end infinite" }}/>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}
          style={{ fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: 1.65, marginBottom: "0.8rem" }}>
          CS graduate from MSU-IIT building full-stack web apps with AI integration: pixel-perfect interfaces, production-grade backends, and meaningful AI integrations.
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.24 }}
          style={{ display: "flex", gap: "0.45rem", alignItems: "center", flexWrap: "wrap" }}>
          <button onClick={() => setPage("projects")}
            style={{ cursor: "pointer", padding: "0.46rem 1rem", borderRadius: 8, background: "linear-gradient(135deg, var(--rose-deep), var(--mauve))", color: "#fff", fontSize: "0.74rem", fontWeight: 600, border: "none", boxShadow: "0 3px 12px rgba(154,24,71,0.22)", transition: "transform 0.2s, box-shadow 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 6px 18px rgba(154,24,71,0.32)" }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 3px 12px rgba(154,24,71,0.22)" }}>
            View Projects
          </button>
          <button onClick={() => setPage("contact")}
            style={{ cursor: "pointer", padding: "0.46rem 1rem", borderRadius: 8, background: "var(--surface)", border: "1px solid var(--glass-border)", color: "var(--body-color)", fontSize: "0.74rem", fontWeight: 500, transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--rose)"; e.currentTarget.style.color = "var(--rose)" }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--glass-border)"; e.currentTarget.style.color = "var(--body-color)" }}>
            Contact Me
          </button>
          {socials.map(({ href, Icon }) => (
            <a key={href} href={href} target={href !== "#" ? "_blank" : undefined} rel="noreferrer" style={socialBtn}
              onMouseEnter={e => { e.currentTarget.style.color = "var(--rose)"; e.currentTarget.style.borderColor = "var(--rose)" }}
              onMouseLeave={e => { e.currentTarget.style.color = "var(--text-dim)"; e.currentTarget.style.borderColor = "var(--glass-border)" }}>
              <Icon size={13}/>
            </a>
          ))}
        </motion.div>
      </div>

      {/* ── Explore label ── */}
      <p style={{ flexShrink: 0, fontSize: "0.68rem", color: "var(--text-dim)", marginBottom: "0.65rem" }}>
        Explore everything I've crafted, contributed, and accomplished.
      </p>

      {/* ── Card Grid ── */}
      <div style={{ flex: 1, minHeight: 0, display: "grid", gridTemplateColumns: "1.5fr 1fr", gridTemplateRows: "minmax(0,1fr) minmax(0,1fr)", gap: "0.65rem" }}>

        {/* ① Projects Showcase: left info + right vertical scroll stack */}
        <div className="home-card" onClick={() => setPage("projects")}
          style={{ cursor: "pointer", flexDirection: "row", gap: "1rem", padding: "1.1rem" }}>
          {/* Left: icon + title + description */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", flexShrink: 0, width: 110 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: "var(--surface-2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.6rem" }}>
              <FolderOpen size={16} style={{ color: "var(--rose)" }}/>
            </div>
            <p style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--body-color)", lineHeight: 1.25, marginBottom: "0.35rem" }}>Projects Showcase</p>
            <p style={{ fontSize: "0.6rem", color: "var(--text-dim)", lineHeight: 1.5 }}>A selection of real apps built to solve real problems.</p>
          </div>
          {/* Right: vertical scroll of images */}
          <div className="v-scroll-hide" style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column", gap: "0.5rem", overflowY: "auto" }}>
            {projects.map(p => (
              <div key={p.title} style={{ flexShrink: 0, borderRadius: 10, overflow: "hidden", border: "1px solid var(--glass-border)" }}>
                <img src={p.img} alt={p.title} style={{ width: "100%", height: 80, objectFit: "cover", display: "block" }}/>
              </div>
            ))}
          </div>
        </div>

        {/* ② Skills & Tools: 2 marquee rows */}
        <div className="home-card" onClick={() => setPage("skills")} style={{ cursor: "pointer" }}>
          <CardHeader Icon={Wrench} title="Skills & Tools" sub="Web, frontend, and backend technologies."/>
          <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column", justifyContent: "center", gap: "0.38rem", overflow: "hidden" }}>
            <div className="marquee-track">
              {[...skillsRow1, ...skillsRow1].map((s, i) => <SkillPill key={i} {...s}/>)}
            </div>
            <div className="marquee-track-rev">
              {[...skillsRow2, ...skillsRow2].map((s, i) => <SkillPill key={i} {...s}/>)}
            </div>
            <div className="marquee-track">
              {[...skillsRow2.slice(3), ...skillsRow1.slice(3), ...skillsRow2.slice(3), ...skillsRow1.slice(3)].map((s, i) => <SkillPill key={i} {...s}/>)}
            </div>
          </div>
        </div>

        {/* ③ Achievements: flashcard */}
        <div className="home-card" onClick={() => advAch(1)} style={{ cursor: "pointer", position: "relative" }}>
          <CardHeader Icon={Award} title="Achievements" sub="Click to browse · auto-advances"/>
          <div style={{ flex: 1, minHeight: 0, position: "relative", overflow: "hidden" }}>
            <AnimatePresence mode="wait" initial={false}>
              {(() => {
                const { Icon, title, sub, accent } = achievements[achIdx]
                return (
                  <motion.div key={achIdx}
                    initial={{ opacity: 0, x: achDir * 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: achDir * -40 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{
                      position: "absolute", inset: 0,
                      borderRadius: 10,
                      background: `linear-gradient(135deg, ${accent}0f 0%, ${accent}06 100%)`,
                      border: `1px solid ${accent}22`,
                      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                      gap: "0.4rem", padding: "0.8rem",
                    }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: `${accent}18`, border: `1.5px solid ${accent}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={22} style={{ color: accent }}/>
                    </div>
                    <p style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--body-color)", textAlign: "center", lineHeight: 1.2 }}>{title}</p>
                    <p style={{ fontSize: "0.65rem", color: "var(--text-muted)", textAlign: "center" }}>{sub}</p>
                    {/* Dots */}
                    <div style={{ display: "flex", gap: 5, marginTop: 4 }}>
                      {achievements.map((_, i) => (
                        <div key={i} style={{ width: i === achIdx ? 16 : 5, height: 5, borderRadius: 3, background: i === achIdx ? accent : "var(--glass-border)", transition: "all 0.3s" }}/>
                      ))}
                    </div>
                  </motion.div>
                )
              })()}
            </AnimatePresence>
          </div>
          {/* Progress bar */}
          <div style={{ flexShrink: 0, height: 2, borderRadius: 1, background: "var(--glass-border)", marginTop: "0.4rem", overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${progress}%`, background: `linear-gradient(90deg, var(--rose-deep), var(--mauve))`, transition: "none" }}/>
          </div>
        </div>

        {/* ④ Career: big logo icons */}
        <div className="home-card" onClick={() => setPage("experience")} style={{ cursor: "pointer" }}>
          <CardHeader Icon={Briefcase} title="Career" sub="Professional journey & work experience."/>
          <div style={{ flex: 1, minHeight: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: "1.2rem" }}>
            {career.map(({ logo, name }) => (
              <div key={name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem" }}>
                <div style={{
                  width: 70, height: 70, borderRadius: 18,
                  overflow: "hidden", background: "#fff",
                  border: "1px solid var(--glass-border)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <img src={logo} alt={name} style={{ width: "85%", height: "85%", objectFit: "contain" }}/>
                </div>
                <span style={{ fontSize: "0.6rem", fontWeight: 600, color: "var(--text-dim)" }}>{name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
