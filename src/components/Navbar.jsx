import { useEffect, useState } from "react"

const links = ["home","about","experience","skills","projects","contact"]

function Navbar() {
  const [active, setActive] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll("section")
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.5 }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(15,6,16,0.75)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(249,168,201,0.1)" : "none",
      }}
    >
      <div className="flex justify-center items-center gap-1 px-6 py-4">
        {links.map(id => (
          <a
            key={id}
            href={`#${id}`}
            className="relative px-4 py-1.5 text-sm font-medium tracking-widest uppercase transition-all duration-300"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: "0.15em",
              fontSize: "0.7rem",
              color: active === id ? "#f9a8c9" : "rgba(240,216,232,0.5)",
            }}
          >
            {active === id && (
              <span className="absolute inset-0 rounded-full"
                style={{ background: "rgba(249,168,201,0.1)", border: "1px solid rgba(249,168,201,0.2)" }} />
            )}
            <span className="relative">{id}</span>
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar