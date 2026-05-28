// src/components/Contact.jsx

import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"
import useScrollReveal from "../hooks/useScrollReveal"
import emailjs from "@emailjs/browser"
import { useRef, useState } from "react"
import { CheckCircle2 } from "lucide-react"

const inputStyle = {
  width: "100%",
  padding: "0.85rem 1rem",
  borderRadius: 12,
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(249,168,201,0.18)",
  color: "#f0d8e8",
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "0.9rem",
  outline: "none",
  transition: "border-color 0.3s",
}

function Field({ as: Tag = "input", onFocus, onBlur, ...props }) {
  return (
    <Tag
      {...props}
      style={{ ...inputStyle, ...(props.style || {}) }}
      onFocus={e => { e.target.style.borderColor = "rgba(249,168,201,0.6)"; onFocus?.(e) }}
      onBlur={e => { e.target.style.borderColor = "rgba(249,168,201,0.18)"; onBlur?.(e) }}
    />
  )
}

function Contact() {
  const ref = useScrollReveal()
  const form = useRef()
  const [status, setStatus] = useState(null) // null | "sending" | "ok" | "err"

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus("sending")
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => { setStatus("ok"); form.current.reset() })
      .catch(() => setStatus("err"))
  }

  return (
    <section id="contact" ref={ref} className="reveal px-6 md:px-20">

      <div className="mb-14 text-center">
        <span className="section-sub">Say hello</span>
        <h2 className="section-title grad-text">Contact Me</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Left */}
        <div className="space-y-6">
          <div className="glass p-7" style={{ borderColor: "rgba(249,168,201,0.15)" }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.45rem", marginBottom: "1.2rem", fontWeight: 400 }}>
              Get in Touch
            </h3>
            {[
              { Icon: FaMapMarkerAlt, text: "General Trias, Cavite, Philippines" },
              { Icon: FaEnvelope,     text: "edagrace.paragoso@gmail.com" },
              { Icon: FaPhone,        text: "+63 992-291-6852" },
            ].map(({ Icon, text }) => (
              <p key={text} className="flex items-center gap-3 mb-3"
                style={{ color: "rgba(240,216,232,0.65)", fontSize: "0.88rem" }}>
                <Icon style={{ color: "#f9a8c9", flexShrink: 0 }} />
                {text}
              </p>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-5 text-2xl pl-1">
            {[
              { href: "https://github.com/edaprgs", Icon: FaGithub },
              { href: "https://www.linkedin.com/in/eda-grace-paragoso-2877ba40a/", Icon: FaLinkedin },
              { href: "mailto:edagrace.paragoso@gmail.com", Icon: FaEnvelope },
            ].map(({ href, Icon }) => (
              <a key={href} href={href} target="_blank" rel="noreferrer"
                className="transition-all duration-300"
                style={{ color: "rgba(240,216,232,0.4)" }}
                onMouseEnter={e => { e.currentTarget.style.color = "#f9a8c9"; e.currentTarget.style.transform = "translateY(-3px)" }}
                onMouseLeave={e => { e.currentTarget.style.color = "rgba(240,216,232,0.4)"; e.currentTarget.style.transform = "translateY(0)" }}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="glass p-7 flex flex-col gap-4"
          style={{ borderColor: "rgba(249,168,201,0.15)" }}
        >
          <Field type="text" name="user_name" placeholder="Your Name" required />
          <Field type="email" name="user_email" placeholder="Your Email" required />
          <Field type="text" name="subject" placeholder="Subject" required />
          <Field as="textarea" name="message" placeholder="Message" rows={5} required
            style={{ resize: "vertical", minHeight: 110 }} />

          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-xl py-3 text-sm font-medium tracking-wide transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #e879a0 0%, #c084a8 100%)",
              color: "#fff",
              fontFamily: "'DM Sans', sans-serif",
              opacity: status === "sending" ? 0.7 : 1,
              boxShadow: "0 4px 24px rgba(232,121,160,0.3)",
            }}
            onMouseEnter={e => { if (status !== "sending") e.currentTarget.style.transform = "translateY(-2px)" }}
            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
          >
            {status === "sending" ? "Sending…" : "Send Message ✦"}
          </button>

          {status === "ok" && (
            <p
              className="text-center text-sm flex items-center justify-center gap-2"
              style={{ color: "#86efac" }}
            >
              <CheckCircle2 size={16} />
              Your message has been sent successfully.
            </p>
          )}
          {status === "err" && (
            <p className="text-center text-sm" style={{ color: "#fca5a5" }}>
              Oops, something went wrong. Please try again.
            </p>
          )}
        </form>

      </div>
    </section>
  )
}

export default Contact