// src/components/Footer.jsx

const links = ["home", "about", "experience", "skills", "projects", "contact"]

function Footer() {
  return (
    <footer
      className="py-12 px-6"
      style={{ borderTop: "1px solid rgba(249,168,201,0.08)" }}
    >
      {/* nav links */}
      <div className="flex justify-center flex-wrap gap-6 mb-8">
        {links.map(id => (
          <a
            key={id}
            href={`#${id}`}
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(240,216,232,0.35)",
              fontFamily: "'DM Sans', sans-serif",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.color = "#f9a8c9"}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(240,216,232,0.35)"}
          >
            {id}
          </a>
        ))}
      </div>

      {/* divider */}
      <div style={{ width: 40, height: 1, background: "rgba(249,168,201,0.2)", margin: "0 auto 1.5rem" }} />

      <p style={{ textAlign: "center", fontSize: "0.88rem", color: "rgba(240,216,232,0.45)", letterSpacing: "0.03em" }}>
        © 2026 Eda Grace Paragoso
      </p>
      <p style={{ textAlign: "center", marginTop: "0.35rem", fontSize: "0.75rem", color: "rgba(240,216,232,0.28)" }}>
        Designed & built with React · Deployed on Vercel
      </p>
    </footer>
  )
}

export default Footer