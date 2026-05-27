function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* base */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 20% 10%, #2a0d1e 0%, #0f0610 55%, #100818 100%)" }} />

      {/* aurora orbs */}
      <div className="absolute rounded-full blur-[120px] opacity-30 animate-pulse"
        style={{ width: 600, height: 600, background: "radial-gradient(circle, #e879a0 0%, transparent 70%)", top: "-10%", left: "-5%" }} />
      <div className="absolute rounded-full blur-[100px] opacity-20 animate-pulse"
        style={{ width: 500, height: 500, background: "radial-gradient(circle, #c084a8 0%, transparent 70%)", bottom: "5%", right: "-5%", animationDelay: "1.2s" }} />
      <div className="absolute rounded-full blur-[140px] opacity-15 animate-pulse"
        style={{ width: 700, height: 400, background: "radial-gradient(circle, #f9a8c9 0%, transparent 70%)", top: "45%", left: "30%", animationDelay: "2.5s" }} />

      {/* fine grid */}
      <div className="absolute inset-0 opacity-[0.035]"
        style={{ backgroundImage: "linear-gradient(rgba(249,168,201,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(249,168,201,.6) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
    </div>
  )
}

export default Background