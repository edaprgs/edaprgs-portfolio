import { Moon, Sun } from "lucide-react"
import { useTheme } from "../context/ThemeContext"

export default function ThemeToggle() {
  const { dark, toggle } = useTheme()

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light mode" : "Dark mode"}
      style={{
        width: 34,
        height: 34,
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--surface)",
        border: "1px solid var(--glass-border)",
        color: "var(--rose)",
        cursor: "pointer",
        transition: "background 0.2s, border-color 0.2s",
      }}
      onMouseEnter={e => { e.currentTarget.style.background = "var(--surface-2)" }}
      onMouseLeave={e => { e.currentTarget.style.background = "var(--surface)" }}
    >
      {dark ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  )
}
