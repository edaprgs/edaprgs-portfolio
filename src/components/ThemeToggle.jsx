import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "../context/ThemeContext"

export default function ThemeToggle() {
  const { dark, preference, toggle } = useTheme()

  const label = preference === "system"
    ? `Theme: auto (follows this browser, currently ${dark ? "dark" : "light"}). Click for light or dark.`
    : preference === "light"
      ? "Theme: light. Click for dark, or again to follow this browser."
      : "Theme: dark. Click to follow this browser."

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
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
      {preference === "system" ? <Monitor size={15} /> : dark ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  )
}
