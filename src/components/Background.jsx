const orbs = [
  { w: 920, h: 920, left: "calc(50% - 460px)", top: "-220px", color: "var(--glow-a)", anim: "drift1 24s ease-in-out infinite" },
  { w: 620, h: 620, right: "-120px", top: "8%", color: "var(--glow-b)", anim: "drift2 28s ease-in-out infinite" },
  { w: 540, h: 540, right: "6%", bottom: "-160px", color: "var(--glow-c)", anim: "drift3 32s ease-in-out infinite" },
]

export default function Background() {
  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden", background: "var(--bg)" }}>
      {orbs.map((o, i) => (
        <div key={i} style={{
          position: "absolute",
          width: o.w, height: o.h,
          left: o.left, right: o.right, top: o.top, bottom: o.bottom,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${o.color} 0%, transparent 70%)`,
          animation: o.anim,
          filter: "blur(8px)",
        }}/>
      ))}
    </div>
  )
}
