// src/components/Background.jsx

function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <style>{`
        @keyframes drift1 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-30px) scale(1.05); } }
        @keyframes drift2 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-30px,40px) scale(1.08); } }
        @keyframes drift3 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(20px,25px) scale(0.95); } }
      `}</style>

      {/* base */}
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 20% 10%, #2a0d1e 0%, #0f0610 55%, #100818 100%)" }} />

      {/* aurora orbs — animate-pulse replaced with smooth drift */}
      <div className="absolute rounded-full blur-[120px]"
        style={{ width: 600, height: 600, opacity: 0.28,
          background: "radial-gradient(circle, #e879a0 0%, transparent 70%)",
          top: "-10%", left: "-5%",
          animation: "drift1 18s ease-in-out infinite" }} />
      <div className="absolute rounded-full blur-[100px]"
        style={{ width: 500, height: 500, opacity: 0.18,
          background: "radial-gradient(circle, #c084a8 0%, transparent 70%)",
          bottom: "5%", right: "-5%",
          animation: "drift2 22s ease-in-out infinite" }} />
      <div className="absolute rounded-full blur-[140px]"
        style={{ width: 700, height: 400, opacity: 0.12,
          background: "radial-gradient(circle, #f9a8c9 0%, transparent 70%)",
          top: "45%", left: "30%",
          animation: "drift3 28s ease-in-out infinite" }} />

      {/* fine grid — slightly tighter for elegance */}
      <div className="absolute inset-0"
        style={{ opacity: 0.03,
          backgroundImage: "linear-gradient(rgba(249,168,201,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(249,168,201,.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px" }} />
    </div>
  )
}

export default Background