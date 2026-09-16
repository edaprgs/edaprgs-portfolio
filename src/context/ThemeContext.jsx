import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react"

const Ctx = createContext({
  theme: "light",
  preference: "system",
  dark: false,
  toggle: () => {},
})

function readBrowserTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

function storedPreference() {
  try {
    const stored = localStorage.getItem("theme")
    if (stored === "light" || stored === "dark" || stored === "system") return stored
  } catch {
    /* ignore */
  }
  return "system"
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme)
}

export function ThemeProvider({ children }) {
  const [preference, setPreference] = useState(() => {
    if (typeof window === "undefined") return "system"
    return storedPreference()
  })
  const [browserScheme, setBrowserScheme] = useState(() => {
    if (typeof window === "undefined") return "light"
    return readBrowserTheme()
  })
  const preferenceRef = useRef(preference)
  const skipBrowserSyncRef = useRef(false)
  preferenceRef.current = preference

  const theme = preference === "system" ? browserScheme : preference

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  useEffect(() => {
    const syncFromBrowser = () => {
      if (skipBrowserSyncRef.current) return
      if (preferenceRef.current !== "system") return
      setBrowserScheme(readBrowserTheme())
    }

    const media = window.matchMedia("(prefers-color-scheme: dark)")
    media.addEventListener("change", syncFromBrowser)
    window.addEventListener("focus", syncFromBrowser)
    document.addEventListener("visibilitychange", syncFromBrowser)
    window.addEventListener("pageshow", syncFromBrowser)

    return () => {
      media.removeEventListener("change", syncFromBrowser)
      window.removeEventListener("focus", syncFromBrowser)
      document.removeEventListener("visibilitychange", syncFromBrowser)
      window.removeEventListener("pageshow", syncFromBrowser)
    }
  }, [])

  const toggle = useCallback(() => {
    setPreference(prev => {
      const next = prev === "system" ? "light" : prev === "light" ? "dark" : "system"
      skipBrowserSyncRef.current = true
      if (next === "system") {
        window.setTimeout(() => {
          skipBrowserSyncRef.current = false
        }, 100)
      }
      try { localStorage.setItem("theme", next) } catch { /* ignore */ }
      return next
    })
  }, [])

  return (
    <Ctx.Provider value={{ theme, preference, dark: theme === "dark", toggle }}>
      {children}
    </Ctx.Provider>
  )
}

export const useTheme = () => useContext(Ctx)
