import { FaGithub, FaLinkedin } from "react-icons/fa"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Download, ArrowDown } from "lucide-react"

const roles = [
  "Full-Stack Web Developer",
  "Next.js · Supabase · AI Integration",
  "UI/UX Designer · React · TypeScript",
]

const techItems = [
  "React","Next.js","TypeScript","Tailwind CSS","Supabase","PostgreSQL",
  "Python","Flask","Figma","Gemini API","Vercel","MySQL",
  "React","Next.js","TypeScript","Tailwind CSS","Supabase","PostgreSQL",
  "Python","Flask","Figma","Gemini API","Vercel","MySQL",
]

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, delay, ease: [0.22,1,0.36,1] },
})

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIdx]
    let t
    if (!deleting && displayed.length < current.length)
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length+1)), 72)
    else if (!deleting && displayed.length === current.length)
      t = setTimeout(() => setDeleting(true), 2200)
    else if (deleting && displayed.length > 0)
      t = setTimeout(() => setDisplayed(displayed.slice(0,-1)), 36)
    else { setDeleting(false); setRoleIdx(i => (i+1)%roles.length) }
    return () => clearTimeout(t)
  }, [displayed, deleting, roleIdx])

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden">

      {/* ── Profile ── */}
      <motion.div {...fade(0)} className="flex items-center gap-4 mb-10">
        <div className="relative" style={{ flexShrink:0 }}>
          <div className="absolute inset-0 rounded-full blur-xl opacity-50"
            style={{ background:"radial-gradient(circle, var(--rose-deep), transparent 70%)" }} />
          <img src="/profile.png" alt="Eda Grace Paragoso"
            className="relative rounded-full object-cover"
            style={{ width:56, height:56, border:"1.5px solid var(--glass-border)" }} />
          <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2"
            style={{ background:"#a8f9c9", borderColor:"var(--bg)", animation:"pulse-dot 2.5s ease-in-out infinite" }} />
        </div>
        <div>
          <p style={{ fontSize:"0.7rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--text-dim)", marginBottom:2 }}>
            Eda Grace Paragoso
          </p>
          <p style={{ fontSize:"0.7rem", letterSpacing:"0.12em", textTransform:"uppercase", color:"var(--rose)", minHeight:"1rem" }}>
            {displayed}<span style={{ opacity:0.5 }}>|</span>
          </p>
        </div>
        <div className="ml-auto hidden md:flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background:"#a8f9c9" }} />
          <span style={{ fontSize:"0.65rem", letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--text-dim)" }}>Available</span>
        </div>
      </motion.div>

      {/* ── Main headline ── */}
      <motion.h1 {...fade(0.1)}
        style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:300, lineHeight:1.06,
          fontSize:"clamp(3rem,8vw,6.5rem)", letterSpacing:"-0.02em",
          color:"var(--body-color)", marginBottom:"1.5rem", maxWidth:"14ch" }}>
        Bringing ideas to life through{" "}
        <em style={{ fontStyle:"italic", color:"var(--rose)" }}>code & design.</em>
      </motion.h1>

      {/* ── Sub ── */}
      <motion.p {...fade(0.18)} style={{ fontSize:"clamp(0.92rem,1.6vw,1.08rem)", color:"var(--text-muted)",
        lineHeight:1.8, maxWidth:480, marginBottom:"2.8rem" }}>
        I build full-stack web apps, design clean interfaces, and integrate AI where it adds real value — shipped to real users.
      </motion.p>

      {/* ── CTAs ── */}
      <motion.div {...fade(0.26)} className="flex flex-wrap items-center gap-4 mb-16">
        <a href="#projects"
          className="px-7 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300"
          style={{ background:"linear-gradient(135deg, var(--rose-deep) 0%, var(--mauve) 100%)",
            color:"#fff", boxShadow:"0 4px 28px rgba(232,121,160,0.32)", fontFamily:"'DM Sans',sans-serif" }}
          onMouseEnter={e => { e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 10px 36px rgba(232,121,160,0.45)" }}
          onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 4px 28px rgba(232,121,160,0.32)" }}>
          View Projects
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
          className="px-7 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 flex items-center gap-2"
          style={{ border:"1px solid var(--glass-border)", color:"var(--rose)", fontFamily:"'DM Sans',sans-serif" }}
          onMouseEnter={e => { e.currentTarget.style.borderColor="var(--rose)"; e.currentTarget.style.background="var(--surface)" }}
          onMouseLeave={e => { e.currentTarget.style.borderColor="var(--glass-border)"; e.currentTarget.style.background="transparent" }}>
          <Download size={14}/> Resume
        </a>

        {/* Socials */}
        <div className="flex gap-3 ml-auto">
          {[
            { href:"https://github.com/edaprgs", Icon:FaGithub, label:"GitHub" },
            { href:"https://www.linkedin.com/in/eda-grace-paragoso-2877ba40a/", Icon:FaLinkedin, label:"LinkedIn" },
          ].map(({ href, Icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
              style={{ background:"var(--glass-bg)", border:"1px solid var(--glass-border)", color:"var(--rose)" }}
              onMouseEnter={e => { e.currentTarget.style.background="var(--surface)"; e.currentTarget.style.transform="translateY(-3px)" }}
              onMouseLeave={e => { e.currentTarget.style.background="var(--glass-bg)"; e.currentTarget.style.transform="translateY(0)" }}>
              <Icon size={16}/>
            </a>
          ))}
        </div>
      </motion.div>

      {/* ── Marquee ── */}
      <motion.div {...fade(0.36)}
        style={{ borderTop:"1px solid var(--glass-border)", borderBottom:"1px solid var(--glass-border)",
          padding:"11px 0", overflow:"hidden",
          maskImage:"linear-gradient(to right, transparent, black 12%, black 88%, transparent)" }}>
        <div className="marquee-track">
          {techItems.map((item, i) => (
            <span key={i} style={{ paddingRight:28, fontSize:"0.67rem", letterSpacing:"0.16em",
              textTransform:"uppercase", color: i%3===0 ? "var(--rose)" : "var(--text-dim)", whiteSpace:"nowrap" }}>
              {i%3===0 ? "✦" : "·"} {item}
            </span>
          ))}
        </div>
      </motion.div>

      {/* ── Scroll hint ── */}
      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color:"var(--text-dim)", fontSize:"0.6rem", letterSpacing:"0.2em", textTransform:"uppercase" }}>
        <ArrowDown size={13} style={{ color:"var(--rose)", animation:"float-y 2s ease-in-out infinite" }}/>
        <span>Scroll</span>
      </motion.div>
    </section>
  )
}
