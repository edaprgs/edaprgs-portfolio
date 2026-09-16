import { useEffect, useRef, useCallback, useState } from "react"
import { useTheme } from "../context/ThemeContext"

const SKILLS = [
  { label: "React",       cat: 0 },
  { label: "Next.js",     cat: 0 },
  { label: "TypeScript",  cat: 0 },
  { label: "Tailwind",    cat: 0 },
  { label: "Node.js",     cat: 1 },
  { label: "Supabase",    cat: 1 },
  { label: "PostgreSQL",  cat: 1 },
  { label: "Stripe",      cat: 1 },
  { label: "Gemini API",  cat: 2 },
  { label: "TensorFlow",  cat: 2 },
  { label: "OpenCV",      cat: 2 },
  { label: "Figma",       cat: 3 },
  { label: "Git",         cat: 3 },
  { label: "Vercel",      cat: 3 },
]

// category palette
const CAT_COLORS_LIGHT = [
  "#b52a5d", // Frontend: rose
  "#5b2a82", // Backend: purple
  "#c084a8", // AI: mauve-pink
  "#7e3460", // Tools: deep mauve
]
const CAT_COLORS_DARK = [
  "#e879a0",
  "#c4a0e0",
  "#f3c1d4",
  "#d44a7a",
]

function fibonacciSphere(n) {
  const pts = []
  const g = (1 + Math.sqrt(5)) / 2
  for (let i = 0; i < n; i++) {
    const theta = Math.acos(1 - (2 * (i + 0.5)) / n)
    const phi = 2 * Math.PI * i / g
    pts.push({ x: Math.sin(theta)*Math.cos(phi), y: Math.sin(theta)*Math.sin(phi), z: Math.cos(theta) })
  }
  return pts
}

function rotate(p, rx, ry) {
  const cy = Math.cos(ry), sy = Math.sin(ry)
  const x1 = p.x*cy - p.z*sy, z1 = p.x*sy + p.z*cy
  const cx = Math.cos(rx), sx = Math.sin(rx)
  return { x: x1, y: p.y*cx - z1*sx, z: p.y*sx + z1*cx }
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1,3),16)
  const g = parseInt(hex.slice(3,5),16)
  const b = parseInt(hex.slice(5,7),16)
  return `${r},${g},${b}`
}

export default function SkillsGlobe({ filter = null, onFilterChange }) {
  const { theme } = useTheme()
  const canvasRef = useRef()
  const labelRgb = useRef("28,13,22")
  const ringRgb = useRef("154,24,71")
  const catColors = useRef(CAT_COLORS_LIGHT)
  const filterRef = useRef(filter)
  const [canvasHeight, setCanvasHeight] = useState(
    window.innerWidth <= 640 ? 280 : 420
  )

  const setFilter = (next) => onFilterChange?.(next)

  useEffect(() => {
    filterRef.current = filter
  }, [filter])

  useEffect(() => {
    const styles = getComputedStyle(document.documentElement)
    const nextLabel = styles.getPropertyValue("--globe-label-rgb").trim()
    const nextRing = styles.getPropertyValue("--globe-ring-rgb").trim()
    if (nextLabel) labelRgb.current = nextLabel
    if (nextRing) ringRgb.current = nextRing
    catColors.current = theme === "dark" ? CAT_COLORS_DARK : CAT_COLORS_LIGHT
  }, [theme])

  useEffect(() => {
    const update = () => setCanvasHeight(window.innerWidth <= 640 ? 280 : 420)
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  const state = useRef({
    rot: { x: 0.3, y: 0 },
    vel: { x: 0.0008, y: 0.003 },
    drag: { active: false, last: null },
    raf: null,
  })

  const init = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const pts = fibonacciSphere(SKILLS.length)
    const s = state.current

    const resize = () => {
      canvas.width  = canvas.offsetWidth  * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const ctx = canvas.getContext("2d")

    const draw = () => {
      const W = canvas.width, H = canvas.height
      const dpr = window.devicePixelRatio || 1
      ctx.clearRect(0, 0, W, H)

      const CX = W / 2, CY = H / 2
      const R  = Math.min(W, H) * 0.50

      // ── Latitude rings ──────────────────────────────────────
      ctx.save()
      const ringAlpha = 0.12
      ctx.lineWidth = 1 * dpr * 0.5
      const latRings = [-0.6, -0.3, 0, 0.3, 0.6]
      latRings.forEach(lat => {
        const ry = Math.sqrt(1 - lat*lat) * R
        const cy = CY - lat * R
        ctx.beginPath()
        ctx.ellipse(CX, cy, ry, ry * 0.28, 0, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(${ringRgb.current},${ringAlpha})`
        ctx.stroke()
      })

      // outer sphere circle
      ctx.beginPath()
      ctx.arc(CX, CY, R, 0, Math.PI * 2)
      ctx.strokeStyle = `rgba(${ringRgb.current},0.14)`
      ctx.lineWidth = 1 * dpr * 0.5
      ctx.stroke()

      // equator
      ctx.beginPath()
      ctx.ellipse(CX, CY, R, R * 0.28, 0, 0, Math.PI * 2)
      ctx.strokeStyle = `rgba(${ringRgb.current},0.18)`
      ctx.lineWidth = 1.2 * dpr * 0.5
      ctx.stroke()
      ctx.restore()

      // ── Center glow ─────────────────────────────────────────
      const grd = ctx.createRadialGradient(CX, CY, 0, CX, CY, R * 0.5)
      grd.addColorStop(0, `rgba(${ringRgb.current},0.07)`)
      grd.addColorStop(1, "transparent")
      ctx.beginPath()
      ctx.arc(CX, CY, R * 0.5, 0, Math.PI * 2)
      ctx.fillStyle = grd
      ctx.fill()

      // ── Project & draw points ────────────────────────────────
      const { x: rx, y: ry } = s.rot
      const projected = pts.map((p, i) => {
        const r = rotate(p, rx, ry)
        const perspective = 1 / (1.75 - r.z * 0.4)
        return {
          sx:    CX + r.x * R * perspective,
          sy:    CY - r.y * R * perspective,
          z:     r.z,
          label: SKILLS[i].label,
          cat:   SKILLS[i].cat,
          depth: (r.z + 1) / 2,
        }
      })
      projected.sort((a, b) => a.z - b.z)

      const activeCat = filterRef.current

      // ── Connections ──────────────────────────────────────────
      projected.forEach((p, i) => {
        if (p.depth < 0.25) return
        const pOn = activeCat === null || p.cat === activeCat
        for (let j = i + 1; j < Math.min(i + 3, projected.length); j++) {
          const q = projected[j]
          const qOn = activeCat === null || q.cat === activeCat
          if (!pOn || !qOn) continue
          const dx = p.sx - q.sx, dy = p.sy - q.sy
          const dist = Math.sqrt(dx*dx + dy*dy)
          if (dist < R * 0.42) {
            const alpha = Math.min(p.depth, q.depth) * 0.22
            const rgb = hexToRgb(catColors.current[p.cat])
            ctx.beginPath()
            ctx.strokeStyle = `rgba(${rgb},${alpha})`
            ctx.lineWidth = 0.7 * dpr * 0.5
            ctx.moveTo(p.sx, p.sy)
            ctx.lineTo(q.sx, q.sy)
            ctx.stroke()
          }
        }
      })

      // ── Dots + labels ────────────────────────────────────────
      projected.forEach(({ sx, sy, depth, label, cat }) => {
        if (depth < 0.05) return
        const on = activeCat === null || cat === activeCat
        const color   = catColors.current[cat]
        const rgb     = hexToRgb(color)
        const opacity = on ? (0.35 + depth * 0.65) : 0.08
        const dotR    = (5 + depth * 7) * dpr * 0.5
        const fontSize= Math.round((15 + depth * 8) * dpr * 0.5)

        // Glow for prominent front points
        if (on && depth > 0.6) {
          const glow = ctx.createRadialGradient(sx, sy, 0, sx, sy, dotR * 5)
          glow.addColorStop(0, `rgba(${rgb},${(depth - 0.6) * 0.35})`)
          glow.addColorStop(1, "transparent")
          ctx.beginPath()
          ctx.arc(sx, sy, dotR * 5, 0, Math.PI * 2)
          ctx.fillStyle = glow
          ctx.fill()
        }

        // Dot ring (for front nodes)
        if (on && depth > 0.7) {
          ctx.beginPath()
          ctx.arc(sx, sy, dotR + 2.5 * dpr * 0.5, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(${rgb},${opacity * 0.35})`
          ctx.lineWidth = 1 * dpr * 0.5
          ctx.stroke()
        }

        // Filled dot
        ctx.beginPath()
        ctx.arc(sx, sy, dotR, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${rgb},${opacity})`
        ctx.fill()

        // Label
        if (on && depth > 0.18) {
          ctx.font = `${depth > 0.6 ? 600 : 400} ${fontSize}px Inter, sans-serif`
          ctx.textAlign = "center"
          ctx.fillStyle = `rgba(${labelRgb.current},${opacity * 0.92})`
          ctx.fillText(label, sx, sy - dotR - 4 * dpr * 0.5)
        }
      })

      // Auto-rotate
      if (!s.drag.active) {
        s.rot.x += s.vel.x
        s.rot.y += s.vel.y
      }

      s.raf = requestAnimationFrame(draw)
    }

    if (s.raf) cancelAnimationFrame(s.raf)
    draw()

    const getPos = e => e.touches
      ? { x: e.touches[0].clientX, y: e.touches[0].clientY }
      : { x: e.clientX, y: e.clientY }

    const onDown = e => { s.drag.active = true; s.drag.last = getPos(e) }
    const onMove = e => {
      if (!s.drag.active) return
      const pos = getPos(e)
      s.rot.y += (pos.x - s.drag.last.x) * 0.006
      s.rot.x += (pos.y - s.drag.last.y) * 0.006
      s.drag.last = pos
    }
    const onUp = () => { s.drag.active = false }

    canvas.addEventListener("mousedown",  onDown)
    canvas.addEventListener("touchstart", onDown, { passive: true })
    window.addEventListener("mousemove",  onMove)
    window.addEventListener("touchmove",  onMove, { passive: true })
    window.addEventListener("mouseup",    onUp)
    window.addEventListener("touchend",   onUp)

    return () => {
      cancelAnimationFrame(s.raf)
      ro.disconnect()
      canvas.removeEventListener("mousedown",  onDown)
      canvas.removeEventListener("touchstart", onDown)
      window.removeEventListener("mousemove",  onMove)
      window.removeEventListener("touchmove",  onMove)
      window.removeEventListener("mouseup",    onUp)
      window.removeEventListener("touchend",   onUp)
    }
  }, [])

  useEffect(() => { const cleanup = init(); return cleanup }, [init])

  // Legend
  const palette = theme === "dark" ? CAT_COLORS_DARK : CAT_COLORS_LIGHT
  const legend = [
    { label: "Frontend",        color: palette[0] },
    { label: "Backend & Data",  color: palette[1] },
    { label: "AI, ML & Vision", color: palette[2] },
    { label: "Tools & Design",  color: palette[3] },
  ]

  return (
    <div>
      <canvas
        ref={canvasRef}
        className="globe-canvas"
        style={{ width: "100%", height: canvasHeight, cursor: "grab", display: "block" }}
      />
      <p style={{
        textAlign: "center", fontSize: "0.62rem", color: "var(--text-dim)",
        marginTop: "0.15rem", marginBottom: "0.35rem",
      }}>
        Drag to rotate · click a category to filter
      </p>
      <div style={{
        display: "flex", gap: "0.45rem", flexWrap: "wrap",
        justifyContent: "center", marginTop: "0.15rem",
      }}>
        {legend.map(({ label, color }, i) => {
          const active = filter === i
          return (
            <button
              key={label}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(active ? null : i)}
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.3rem",
                padding: "0.28rem 0.7rem", borderRadius: 999, cursor: "pointer",
                background: active ? "var(--surface-2)" : "var(--surface)",
                border: `1px solid ${active ? color : "var(--glass-border)"}`,
                color: active ? color : "var(--text-dim)",
                fontSize: "0.62rem", fontWeight: active ? 700 : 500,
                fontFamily: "inherit",
                letterSpacing: "0.02em",
                transition: "border-color 0.15s, color 0.15s, background 0.15s",
              }}
            >
              <span style={{
                width: 7, height: 7, borderRadius: "50%", background: color,
                display: "block", flexShrink: 0,
                opacity: filter === null || active ? 1 : 0.35,
              }}/>
              {label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
