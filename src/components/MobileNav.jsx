import { useState } from "react"
import { usePage } from "../context/PageContext"

const links = ["home","about","experience","skills","projects","contact"]

function HamburgerIcon({ open }) {
  const line = {
    display: "block",
    width: 18,
    height: 2,
    borderRadius: 2,
    background: "var(--rose)",
    transformOrigin: "center",
    transition: "transform 0.32s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "absolute",
    left: 0,
  }
  return (
    <div style={{ width: 18, height: 9, position: "relative" }}>
      <span style={{
        ...line,
        top: 0,
        transform: open ? "translateY(3.5px) rotate(45deg)" : "none",
      }}/>
      <span style={{
        ...line,
        bottom: 0,
        transform: open ? "translateY(-3.5px) rotate(-45deg)" : "none",
      }}/>
    </div>
  )
}

export default function MobileNav() {
  const { page, setPage } = usePage()
  const [open, setOpen] = useState(false)

  const go = (id) => { setPage(id); setOpen(false) }

  return (
    <>
      <header className="mobile-nav">
        <span style={{ fontSize:"1rem", fontWeight:700, color:"var(--body-color)" }}>
          Eda Grace <span style={{ color:"var(--rose)" }}>Paragoso</span>
        </span>
        <button onClick={() => setOpen(o => !o)} style={{ background:"none", border:"none", cursor:"pointer", padding: "3px", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <HamburgerIcon open={open} />
        </button>
      </header>

      {open && (
        <div style={{
          position:"fixed", top:"3rem", left:0, right:0, bottom:0,
          background:"var(--bg-sidebar)", zIndex:98,
          padding:"2rem 1.5rem", display:"flex", flexDirection:"column", gap:"0.5rem",
        }}>
          {links.map(id => (
            <button key={id} onClick={() => go(id)}
              style={{
                background:"none", border:"none", cursor:"pointer",
                fontSize:"0.95rem", fontWeight: page === id ? 600 : 400,
                color: page === id ? "var(--rose)" : "var(--text-muted)",
                padding:"0.8rem 0", borderBottom:"1px solid var(--divider)",
                textAlign:"left", transition:"color 0.2s",
              }}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>
      )}
    </>
  )
}
