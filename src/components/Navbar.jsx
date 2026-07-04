import { useEffect, useState } from "react"
import { useTheme } from "../context/ThemeContext"
import { Sun, Moon, Menu, X } from "lucide-react"

const links = ["home","about","services","experience","skills","projects","contact"]

export default function Navbar() {
  const { dark, toggle } = useTheme()
  const [active, setActive] = useState("home")
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.35 }
    )
    sections.forEach(s => io.observe(s))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{
          background: scrolled ? "var(--nav-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--glass-border)" : "none",
        }}>
        <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">

          {/* Logo */}
          <a href="#home" style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.15rem", fontWeight:400, color:"var(--body-color)", letterSpacing:"0.03em" }}>
            eda<span style={{ color:"var(--rose)", fontStyle:"italic" }}> grace</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map(id => (
              <a key={id} href={`#${id}`}
                className="relative transition-all duration-200"
                style={{ fontSize:"0.7rem", letterSpacing:"0.14em", textTransform:"uppercase",
                  color: active===id ? "var(--rose)" : "var(--text-dim)",
                  fontWeight: active===id ? 500 : 400 }}>
                {active===id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px"
                    style={{ background:"var(--rose)", borderRadius:1 }} />
                )}
                {id.charAt(0).toUpperCase()+id.slice(1)}
              </a>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button onClick={toggle} aria-label="Toggle theme"
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
              style={{ background:"var(--glass-bg)", border:"1px solid var(--glass-border)", color:"var(--rose)", cursor:"pointer" }}
              onMouseEnter={e => e.currentTarget.style.background="var(--surface)"}
              onMouseLeave={e => e.currentTarget.style.background="var(--glass-bg)"}>
              {dark ? <Sun size={13}/> : <Moon size={13}/>}
            </button>
            <button className="md:hidden w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background:"var(--glass-bg)", border:"1px solid var(--glass-border)", color:"var(--rose)", cursor:"pointer" }}
              onClick={() => setOpen(o => !o)}>
              {open ? <X size={13}/> : <Menu size={13}/>}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          style={{ background: dark ? "rgba(15,6,16,0.97)" : "rgba(253,240,245,0.97)", backdropFilter:"blur(20px)" }}
          onClick={() => setOpen(false)}>
          {links.map(id => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}
              style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"2.4rem", fontWeight:400,
                color: active===id ? "var(--rose)" : "var(--body-color)", opacity: active===id ? 1 : 0.5 }}>
              {id.charAt(0).toUpperCase()+id.slice(1)}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
