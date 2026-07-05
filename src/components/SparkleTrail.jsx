import { useEffect, useRef } from "react"

const COLORS = ["#b52a5d", "#7e3460", "#c084a8", "#e8a0bf", "#f5d0e8"]
const CHARS  = ["✦", "✧", "·", "⋆", "✺"]

export default function SparkleTrail() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let frame = null
    const sparks = []

    const spawn = (x, y) => {
      const el = document.createElement("span")
      el.textContent = CHARS[Math.floor(Math.random() * CHARS.length)]
      const color = COLORS[Math.floor(Math.random() * COLORS.length)]
      const size  = 8 + Math.random() * 8          // 8–16px
      const angle = Math.random() * Math.PI * 2
      const speed = 0.4 + Math.random() * 0.6       // px per frame
      const life  = 28 + Math.floor(Math.random() * 20) // frames

      el.style.cssText = `
        position:fixed;
        pointer-events:none;
        user-select:none;
        font-size:${size}px;
        color:${color};
        left:${x}px;
        top:${y}px;
        transform:translate(-50%,-50%);
        opacity:1;
        z-index:99999;
        will-change:transform,opacity;
      `
      container.appendChild(el)
      sparks.push({ el, x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed - 0.5, life, maxLife: life })
    }

    const tick = () => {
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i]
        s.x  += s.vx
        s.y  += s.vy
        s.vy += 0.04  // gentle gravity
        s.life--

        const progress = s.life / s.maxLife
        s.el.style.left    = s.x + "px"
        s.el.style.top     = s.y + "px"
        s.el.style.opacity = (progress * 0.9).toFixed(2)
        s.el.style.transform = `translate(-50%,-50%) scale(${0.5 + progress * 0.5})`

        if (s.life <= 0) {
          s.el.remove()
          sparks.splice(i, 1)
        }
      }
      frame = requestAnimationFrame(tick)
    }

    let lastX = 0, lastY = 0, moved = 0
    const onMove = (e) => {
      const x = e.clientX, y = e.clientY
      const dx = x - lastX, dy = y - lastY
      moved += Math.sqrt(dx * dx + dy * dy)
      if (moved >= 12) {   // spawn every ~12px of movement
        spawn(x, y)
        moved = 0
      }
      lastX = x; lastY = y
    }

    frame = requestAnimationFrame(tick)
    window.addEventListener("mousemove", onMove)
    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(frame)
      sparks.forEach(s => s.el.remove())
    }
  }, [])

  return <div ref={containerRef} style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 99999 }}/>
}
