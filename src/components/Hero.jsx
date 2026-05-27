import { FaGithub, FaLinkedin } from "react-icons/fa"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Download } from "lucide-react"

const roles = [
  "Full-Stack Web Developer",
  "UI/UX Designer",
]

function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIdx]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIdx((i) => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIdx])

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative"
    >
      {/* Decorative ring */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22,1,0.36,1] }}
        className="absolute rounded-full"
        style={{
          width: 220, height: 220,
          border: "1px solid rgba(249,168,201,0.2)",
          top: "50%", left: "50%",
          transform: "translate(-50%, -72%)",
          pointerEvents: "none",
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.1, ease: [0.22,1,0.36,1] }}
        className="absolute rounded-full"
        style={{
          width: 260, height: 260,
          border: "1px solid rgba(249,168,201,0.1)",
          top: "50%", left: "50%",
          transform: "translate(-50%, -72%)",
          pointerEvents: "none",
        }}
      />

      {/* Profile */}
      <motion.div {...fadeUp(0)} className="relative mb-7">
        <div className="absolute inset-0 rounded-full blur-2xl opacity-50"
          style={{ background: "radial-gradient(circle, #e879a0 0%, transparent 65%)" }} />
        <img
          src="/profile.png"
          alt="Eda Grace Paragoso"
          className="relative rounded-full object-cover"
          style={{
            width: 148, height: 148,
            border: "2px solid rgba(249,168,201,0.5)",
            boxShadow: "0 0 40px rgba(232,121,160,0.25)",
          }}
        />
        {/* status dot */}
        <span className="absolute bottom-2 right-2 w-4 h-4 rounded-full border-2 border-[#0f0610]"
          style={{ background: "#a8f9c9" }} title="Available for work" />
      </motion.div>

      {/* Eyebrow */}
      <motion.span {...fadeUp(0.15)}
        className="text-xs tracking-[0.28em] uppercase mb-4 block"
        style={{ color: "#f9a8c9", fontFamily: "'DM Sans', sans-serif" }}
      >
        Portfolio · 2026
      </motion.span>

      {/* Name */}
      <motion.h1 {...fadeUp(0.25)}
        className="mb-3"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(3rem, 9vw, 6.5rem)",
          fontWeight: 300,
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
        }}
      >
        Eda Grace{" "}
        <em style={{ fontStyle: "italic", color: "#f9a8c9" }}>Paragoso</em>
      </motion.h1>

      {/* Typing role */}
      <motion.p {...fadeUp(0.35)}
        className="mb-10"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
          fontWeight: 300,
          color: "rgba(240,216,232,0.7)",
          minHeight: "1.8rem",
          letterSpacing: "0.04em",
        }}
      >
        {displayed}
        <span className="animate-pulse" style={{ color: "#f9a8c9" }}>|</span>
      </motion.p>

      {/* CTA buttons */}
      <motion.div {...fadeUp(0.45)} className="flex flex-wrap justify-center gap-4 mb-10">
        <a href="#projects"
          className="px-7 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, #e879a0 0%, #c084a8 100%)",
            color: "#fff",
            boxShadow: "0 4px 30px rgba(232,121,160,0.35)",
            fontFamily: "'DM Sans', sans-serif",
          }}
          onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
          onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
        >
          View Projects
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 flex items-center gap-2"
          style={{
            background: "transparent",
            border: "1px solid rgba(249,168,201,0.4)",
            color: "#f9a8c9",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          <Download size={16} />
          View Resume
        </a>
      </motion.div>

      {/* Socials */}
      <motion.div {...fadeUp(0.55)} className="flex gap-5 text-2xl">
        {[
          { href: "https://github.com/edaprgs", Icon: FaGithub, label: "GitHub" },
          { href: "https://www.linkedin.com/in/eda-grace-paragoso-2877ba40a/", Icon: FaLinkedin, label: "LinkedIn" },
        ].map(({ href, Icon, label }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
            className="transition-all duration-300"
            style={{ color: "rgba(240,216,232,0.5)" }}
            onMouseEnter={e => { e.currentTarget.style.color = "#f9a8c9"; e.currentTarget.style.transform = "translateY(-3px)" }}
            onMouseLeave={e => { e.currentTarget.style.color = "rgba(240,216,232,0.5)"; e.currentTarget.style.transform = "translateY(0)" }}
          >
            <Icon />
          </a>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "rgba(249,168,201,0.4)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif" }}
      >
        <span>Scroll</span>
        <span className="w-px h-10 block"
          style={{ background: "linear-gradient(to bottom, rgba(249,168,201,0.4), transparent)" }} />
      </motion.div>
    </section>
  )
}

export default Hero