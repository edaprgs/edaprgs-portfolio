import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Footer() {
  return (
    <footer style={{ padding: "2rem 3rem", borderTop: "1px solid var(--divider)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: "1rem", marginBottom: "1rem" }}>
        <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--body-color)", letterSpacing: "-0.01em" }}>
          Eda Grace{" "}
          <em style={{ fontStyle: "normal", color: "var(--rose)" }}>Paragoso</em>
        </p>
        <div style={{ display: "flex", gap: "0.6rem" }}>
          {[
            { href: "https://github.com/edaprgs", Icon: FaGithub },
            { href: "https://www.linkedin.com/in/eda-grace-paragoso-2877ba40a/", Icon: FaLinkedin },
            { href: "mailto:edaparagoso2002@gmail.com", Icon: FaEnvelope },
          ].map(({ href, Icon }) => (
            <a key={href} href={href} target="_blank" rel="noreferrer"
              style={{ width: 32, height: 32, borderRadius: 8, display: "flex", alignItems: "center",
                justifyContent: "center", background: "var(--surface)", border: "1px solid var(--glass-border)",
                color: "var(--text-muted)", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.color = "var(--rose)"; e.currentTarget.style.transform = "translateY(-2px)" }}
              onMouseLeave={e => { e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.transform = "translateY(0)" }}>
              <Icon size={13}/>
            </a>
          ))}
        </div>
      </div>
      <p style={{ fontSize: "0.74rem", color: "var(--text-muted)" }}>
        © 2026 Eda Grace Paragoso · Built with React · Deployed on Vercel
      </p>
    </footer>
  )
}
