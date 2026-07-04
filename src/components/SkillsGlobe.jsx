import { useEffect, useRef, useCallback } from "react"

const SKILLS = [
  { label: "React",         cat: 0 },
  { label: "Next.js",      cat: 0 },
  { label: "TypeScript",   cat: 0 },
  { label: "JavaScript",   cat: 0 },
  { label: "Tailwind",     cat: 0 },
  { label: "Framer Motion",cat: 0 },
  { label: "Shadcn UI",    cat: 0 },
  { label: "HTML5",        cat: 0 },
  { label: "CSS3",         cat: 0 },
  { label: "Python",       cat: 1 },
  { label: "Flask",        cat: 1 },
  { label: "Node.js",      cat: 1 },
  { label: "Supabase",     cat: 1 },
  { label: "PostgreSQL",   cat: 1 },
  { label: "MySQL",        cat: 1 },
  { label: "SocketIO",     cat: 1 },
  { label: "Cloudinary",   cat: 1 },
  { label: "RBAC",         cat: 1 },
  { label: "Gemini API",   cat: 2 },
  { label: "TensorFlow",   cat: 2 },
  { label: "Keras",        cat: 2 },
  { label: "Prompt Eng.",  cat: 2 },
  { label: "Figma",        cat: 3 },
  { label: "Git",          cat: 3 },
  { label: "Vercel",       cat: 3 },
]

// category palette (light-mode readable)
const CAT_COLORS = [
  "#b52a5d", // Frontend: rose
  "#5b2a82", // Backend: purple
  "#c084a8", // AI: mauve-pink
  "#7e3460", // Tools: deep mauve
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

export default function SkillsGlobe() {
  const canvasRef = useRef()
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
      const R  = Math.min(W, H) * 0.43

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
        ctx.strokeStyle = `rgba(154,24,71,${ringAlpha})`
        ctx.stroke()
      })

      // outer sphere circle
      ctx.beginPath()
      ctx.arc(CX, CY, R, 0, Math.PI * 2)
      ctx.strokeStyle = `rgba(154,24,71,0.14)`
      ctx.lineWidth = 1 * dpr * 0.5
      ctx.stroke()

      // equator
      ctx.beginPath()
      ctx.ellipse(CX, CY, R, R * 0.28, 0, 0, Math.PI * 2)
      ctx.strokeStyle = `rgba(154,24,71,0.18)`
      ctx.lineWidth = 1.2 * dpr * 0.5
      ctx.stroke()
      ctx.restore()

      // ── Center glow ─────────────────────────────────────────
      const grd = ctx.createRadialGradient(CX, CY, 0, CX, CY, R * 0.5)
      grd.addColorStop(0, "rgba(181,42,93,0.07)")
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

      // ── Connections ──────────────────────────────────────────
      projected.forEach((p, i) => {
        if (p.depth < 0.25) return
        for (let j = i + 1; j < Math.min(i + 4, projected.length); j++) {
          const q = projected[j]
          const dx = p.sx - q.sx, dy = p.sy - q.sy
          const dist = Math.sqrt(dx*dx + dy*dy)
          if (dist < R * 0.38) {
            const alpha = Math.min(p.depth, q.depth) * 0.18
            const rgb = hexToRgb(CAT_COLORS[p.cat])
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
        const color   = CAT_COLORS[cat]
        const rgb     = hexToRgb(color)
        const opacity = 0.3 + depth * 0.7
        const dotR    = (4 + depth * 6.5) * dpr * 0.5
        const fontSize= Math.round((14 + depth * 8) * dpr * 0.5)

        // Glow for prominent front points
        if (depth > 0.6) {
          const glow = ctx.createRadialGradient(sx, sy, 0, sx, sy, dotR * 5)
          glow.addColorStop(0, `rgba(${rgb},${(depth - 0.6) * 0.35})`)
          glow.addColorStop(1, "transparent")
          ctx.beginPath()
          ctx.arc(sx, sy, dotR * 5, 0, Math.PI * 2)
          ctx.fillStyle = glow
          ctx.fill()
        }

        // Dot ring (for front nodes)
        if (depth > 0.7) {
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
        if (depth > 0.18) {
          ctx.font = `${depth > 0.6 ? 600 : 400} ${fontSize}px Inter, sans-serif`
          ctx.textAlign = "center"
          ctx.fillStyle = `rgba(28,13,22,${opacity * 0.92})`
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
  const legend = [
    { label: "Frontend",        color: CAT_COLORS[0] },
    { label: "Backend & Data",  color: CAT_COLORS[1] },
    { label: "AI & LLM",        color: CAT_COLORS[2] },
    { label: "Tools & Design",  color: CAT_COLORS[3] },
  ]

  return (
    <div style={{ position: "relative" }}>
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: 680, cursor: "grab", display: "block" }}
      />
      {/* Legend */}
      <div style={{
        position: "absolute", bottom: 12, left: "50%", transform: "translateX(-50%)",
        display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center",
      }}>
        {legend.map(({ label, color }) => (
          <span key={label} style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: color, display: "block", flexShrink: 0 }}/>
            <span style={{ fontSize: "0.62rem", color: "var(--text-dim)", fontWeight: 500 }}>{label}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
