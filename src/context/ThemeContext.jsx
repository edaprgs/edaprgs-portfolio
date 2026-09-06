import { createContext, useCallback, useContext, useEffect, useState } from "react"

const Ctx = createContext({ theme: "light", dark: false, toggle: () => {} })

function systemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

function storedTheme() {
  try {
    const stored = localStorage.getItem("theme")
    if (stored === "light" || stored === "dark") return stored
  } catch {
    /* ignore */
  }
  return null
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme)
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof document === "undefined") return "light"
    const current = document.documentElement.getAttribute("data-theme")
    if (current === "light" || current === "dark") return current
    return storedTheme() ?? systemTheme()
  })

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const onChange = () => {
      if (storedTheme()) return
      setTheme(systemTheme())
    }
    media.addEventListener("change", onChange)
    return () => media.removeEventListener("change", onChange)
  }, [])

  const toggle = useCallback(() => {
    setTheme(prev => {
      const next = prev === "dark" ? "light" : "dark"
      try { localStorage.setItem("theme", next) } catch { /* ignore */ }
      return next
    })
  }, [])

  return (
    <Ctx.Provider value={{ theme, dark: theme === "dark", toggle }}>
      {children}
    </Ctx.Provider>
  )
}

export const useTheme = () => useContext(Ctx)
