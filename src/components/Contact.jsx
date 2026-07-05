import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"
import emailjs from "@emailjs/browser"
import { useRef, useState } from "react"
import { CheckCircle2, Send } from "lucide-react"
import { motion } from "framer-motion"

function Field({ as: Tag = "input", label, ...props }) {
  const [focused, setFocused] = useState(false)
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
      {label && (
        <label style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.06em",
          textTransform: "uppercase", color: focused ? "var(--rose)" : "var(--text-dim)", transition: "color 0.2s" }}>
          {label}
        </label>
      )}
      <Tag {...props}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%", padding: "0.72rem 0.95rem", borderRadius: 10,
          background: "var(--surface)", border: `1px solid ${focused ? "var(--rose)" : "var(--glass-border)"}`,
          color: "var(--body-color)", fontSize: "0.86rem",
          outline: "none", transition: "border-color 0.2s, box-shadow 0.2s",
          boxShadow: focused ? "0 0 0 3px rgba(232,121,160,0.09)" : "none",
          resize: Tag === "textarea" ? "none" : undefined,
          minHeight: Tag === "textarea" ? 100 : undefined,
          fontFamily: "'Inter', sans-serif",
        }}
        placeholder={props.placeholder}/>
    </div>
  )
}

export default function Contact() {
  const form = useRef()
  const [status, setStatus] = useState(null)

  const send = e => {
    e.preventDefault()
    setStatus("sending")
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(() => { setStatus("ok"); form.current.reset() })
     .catch(() => setStatus("err"))
  }

  return (
    <section id="contact" className="ide-section">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.65 }} style={{ marginBottom: "2rem" }}>
        <span style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.14em",
          textTransform: "uppercase", color: "var(--rose)", display: "block", marginBottom: "0.6rem" }}>
          05 · Contact
        </span>
        <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700,
          letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "0.6rem" }} className="grad-text">
          Let's Connect
        </h2>
        <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
          Open to full-time roles, freelance projects, or just a friendly chat. I reply within 24 hours.
        </p>
      </motion.div>

      {/* Available */}
      <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem",
          marginBottom: "2rem", padding: "0.3rem 0.85rem", borderRadius: 999,
          background: "rgba(154,24,71,0.10)", border: "1px solid rgba(154,24,71,0.30)" }}>
        <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#7a0f30",
          animation: "pulse-dot 2s ease-in-out infinite", boxShadow: "0 0 6px rgba(122,15,48,0.4)", display: "block" }}/>
        <span style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em",
          color: "#7a0f30", textTransform: "uppercase" }}>
          Available for opportunities
        </span>
      </motion.div>

      <div style={{ display: "grid", gap: "1.5rem" }}>
        {/* Info */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.1 }}
          style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {[
            { Icon: FaMapMarkerAlt, text: "General Trias, Cavite, Philippines", href: null, color: "var(--mauve)" },
            { Icon: FaEnvelope, text: "edaparagoso2002@gmail.com", href: "mailto:edaparagoso2002@gmail.com", color: "var(--rose)" },
            { Icon: FaPhone, text: "+63 992-291-6852", href: "tel:+639922916852", color: "var(--rose)" },
          ].map(({ Icon, text, href, color }) => (
            <div key={text} style={{ display: "flex", alignItems: "center", gap: "0.7rem", cursor: href ? "pointer" : "default" }}
              onClick={() => href && window.open(href)}>
              <Icon size={13} style={{ color, flexShrink: 0 }}/>
              <span style={{ fontSize: "0.84rem", color: "var(--text-muted)", transition: "color 0.2s" }}
                onMouseEnter={e => { if (href) e.currentTarget.style.color = color }}
                onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}>
                {text}
              </span>
            </div>
          ))}

          <div style={{ display: "flex", gap: "0.6rem", marginTop: "0.4rem" }}>
            {[
              { href: "https://github.com/edaprgs", Icon: FaGithub },
              { href: "https://www.linkedin.com/in/eda-grace-paragoso-2877ba40a/", Icon: FaLinkedin },
              { href: "mailto:edaparagoso2002@gmail.com", Icon: FaEnvelope },
            ].map(({ href, Icon }) => (
              <a key={href} href={href} target="_blank" rel="noreferrer"
                style={{ width: 36, height: 36, borderRadius: 9, display: "flex", alignItems: "center",
                  justifyContent: "center", background: "var(--surface)", border: "1px solid var(--glass-border)",
                  color: "var(--text-dim)", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.color = "var(--rose)"; e.currentTarget.style.borderColor = "var(--rose)"; e.currentTarget.style.transform = "translateY(-3px)" }}
                onMouseLeave={e => { e.currentTarget.style.color = "var(--text-dim)"; e.currentTarget.style.borderColor = "var(--glass-border)"; e.currentTarget.style.transform = "translateY(0)" }}>
                <Icon size={14}/>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.form ref={form} onSubmit={send}
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.15 }}
          style={{ display: "flex", flexDirection: "column", gap: "0.9rem",
            padding: "1.5rem", borderRadius: 14,
            background: "var(--glass-bg)", border: "1px solid var(--glass-border)" }}>
          <div className="contact-name-email" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
            <Field label="Name" type="text" name="user_name" placeholder="Your name" required/>
            <Field label="Email" type="email" name="user_email" placeholder="your@email.com" required/>
          </div>
          <Field label="Subject" type="text" name="subject" placeholder="What's this about?" required/>
          <Field label="Message" as="textarea" name="message" placeholder="Tell me about your project or idea…" required/>
          <button type="submit" disabled={status === "sending"}
            style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
              padding: "0.78rem", borderRadius: 10, border: "none",
              background: "linear-gradient(135deg, var(--rose-deep), var(--mauve))",
              color: "#fff", fontSize: "0.86rem", fontWeight: 600,
              cursor: status === "sending" ? "not-allowed" : "pointer",
              opacity: status === "sending" ? 0.65 : 1,
              boxShadow: "0 4px 20px rgba(232,121,160,0.25)",
              transition: "opacity 0.2s, transform 0.2s",
              fontFamily: "'Inter', sans-serif",
            }}
            onMouseEnter={e => { if (status !== "sending") { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(232,121,160,0.38)" }}}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(232,121,160,0.25)" }}>
            <Send size={14}/> {status === "sending" ? "Sending…" : "Send Message"}
          </button>
          {status === "ok" && (
            <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem",
                fontSize: "0.82rem", color: "#86efac", textAlign: "center" }}>
              <CheckCircle2 size={14}/> Message sent! I'll get back to you soon.
            </motion.p>
          )}
          {status === "err" && (
            <p style={{ fontSize: "0.82rem", color: "#fca5a5", textAlign: "center" }}>
              Something went wrong. Please email me directly.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
