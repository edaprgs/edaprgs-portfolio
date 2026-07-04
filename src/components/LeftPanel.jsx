import { usePage } from "../context/PageContext"
import { Home as HomeIcon, User, Briefcase, FolderOpen, Wrench, Mail, Download } from "lucide-react"
import { motion } from "framer-motion"

const navItems = [
  { id: "home",       label: "Home",       Icon: HomeIcon },
  { id: "about",      label: "About",      Icon: User },
  { id: "experience", label: "Experience", Icon: Briefcase },
  { id: "skills",     label: "Skills",     Icon: Wrench },
  { id: "projects",   label: "Projects",   Icon: FolderOpen },
  { id: "contact",    label: "Contact",    Icon: Mail },
]

export default function LeftPanel() {
  const { page, setPage } = usePage()

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      background: "var(--bg-sidebar)",
      borderRight: "1px solid var(--glass-border)",
      overflow: "hidden",
      padding: "1.5rem 1.2rem 1.1rem",
    }}>

      {/* Profile */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "1.1rem" }}>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            width: 84, height: 84, borderRadius: "50%", overflow: "hidden",
            border: "2px solid var(--glass-border)",
            boxShadow: "0 0 0 3px var(--surface)",
            marginBottom: "0.65rem", flexShrink: 0,
          }}>
          <img src="/profile.png" alt="Eda Grace Paragoso"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}/>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          style={{ fontSize: "1rem", fontWeight: 700, color: "var(--body-color)",
            letterSpacing: "-0.01em", lineHeight: 1.2, marginBottom: "0.22rem" }}>
          Eda Grace Paragoso
        </motion.p>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "0.65rem" }}>
          @edaprgs
        </motion.p>

        {/* Available badge */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.16 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.4rem",
            padding: "0.32rem 0.85rem", borderRadius: 999,
            background: "rgba(154,24,71,0.13)", border: "1px solid rgba(154,24,71,0.35)",
            marginBottom: "0.85rem",
          }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#7a0f30",
            display: "block", flexShrink: 0, animation: "pulse-dot 2s ease-in-out infinite" }}/>
          <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em",
            color: "#7a0f30", textTransform: "uppercase" }}>
            Available
          </span>
        </motion.div>

        {/* Resume pill only */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <a href="/Paragoso-Resume.pdf" target="_blank" rel="noreferrer"
            style={{
              display: "flex", alignItems: "center", gap: "0.4rem",
              padding: "0.48rem 1.1rem", borderRadius: 999,
              background: "linear-gradient(135deg, var(--rose-deep), var(--mauve))",
              color: "#fff", fontSize: "0.78rem", fontWeight: 600,
              boxShadow: "0 2px 10px rgba(154,24,71,0.22)",
              transition: "opacity 0.2s", textDecoration: "none",
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
            <Download size={13}/> Resume
          </a>
        </motion.div>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: "var(--glass-border)", marginBottom: "0.5rem" }}/>

      {/* Nav */}
      <nav style={{ flex: 1 }}>
        <ul style={{ listStyle: "none" }}>
          {navItems.map(({ id, label, Icon }, i) => {
            const isActive = page === id
            return (
              <motion.li key={id}
                initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.18 + i * 0.05 }}>
                <a href="#" onClick={e => { e.preventDefault(); setPage(id) }}
                  style={{
                    display: "flex", alignItems: "center", gap: "0.6rem",
                    padding: "0.52rem 0.65rem",
                    borderRadius: 8,
                    color: isActive ? "var(--body-color)" : "var(--text-muted)",
                    fontWeight: isActive ? 600 : 400,
                    fontSize: "0.9rem",
                    background: isActive ? "var(--nav-active)" : "transparent",
                    transition: "all 0.18s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={e => { if (!isActive) { e.currentTarget.style.color = "var(--body-color)"; e.currentTarget.style.background = "var(--surface)" }}}
                  onMouseLeave={e => { if (!isActive) { e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.background = "transparent" }}}>
                  <Icon size={14} strokeWidth={isActive ? 2 : 1.5}
                    style={{ color: isActive ? "var(--rose)" : "var(--text-dim)", flexShrink: 0, transition: "color 0.18s" }}/>
                  {label}
                </a>
              </motion.li>
            )
          })}
        </ul>
      </nav>

      {/* Divider */}
      <div style={{ height: 1, background: "var(--glass-border)", margin: "0.5rem 0" }}/>

      {/* Copyright */}
      <div style={{ textAlign: "center" }}>
        <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
          © 2026 Eda Grace Paragoso
        </p>
      </div>
    </div>
  )
}
