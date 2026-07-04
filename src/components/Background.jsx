const orbs = [
  { w:500, h:500, left:"5%",  top:"10%",  color:"rgba(181,42,93,0.07)",  anim:"drift1 18s ease-in-out infinite" },
  { w:420, h:420, right:"8%", bottom:"15%", color:"rgba(126,52,96,0.06)", anim:"drift2 22s ease-in-out infinite" },
  { w:350, h:350, left:"55%", top:"45%",  color:"rgba(154,24,71,0.05)",  anim:"drift3 26s ease-in-out infinite" },
]

export default function Background() {
  return (
    <div style={{ position:"fixed", inset:0, pointerEvents:"none", zIndex:0, overflow:"hidden" }}>
      <div style={{ position:"absolute", inset:0, background:"var(--bg)" }}/>
      {orbs.map((o, i) => (
        <div key={i} style={{
          position:"absolute",
          width:o.w, height:o.h,
          left:o.left, right:o.right, top:o.top, bottom:o.bottom,
          borderRadius:"50%",
          background:`radial-gradient(circle, ${o.color} 0%, transparent 70%)`,
          animation:o.anim,
          filter:"blur(2px)",
        }}/>
      ))}
    </div>
  )
}
