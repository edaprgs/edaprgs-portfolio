import { motion } from "framer-motion"
import { Church, Sprout, Hospital, Brain, ExternalLink, Timer, FolderOpen } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { useState } from "react"

const projects = [
  {
    title: "Church Membership System",
    icon: <Church size={18}/>,
    desc: "Production membership platform for a local congregation with a three-tier role system (Admin, Staff, Member), AI-powered report summarization via Gemini, configurable CSV exports, and a 40+ field normalized schema. Serving 3,000+ active records.",
    tech: ["Next.js", "TypeScript", "Tailwind v4", "Supabase", "PostgreSQL", "Gemini API", "Zod", "Recharts", "Vercel"],
    accent: "#b52a5d",
    live: "https://uccpiligan.vercel.app/",
    image: "/images/church-management-preview.png",
  },
  {
    title: "Chrona Time Tracker",
    icon: <Timer size={18}/>,
    desc: "Full-featured time tracking platform for freelancers with automated activity capture via VS Code and Chrome extensions. Features a focus score engine, 52-week heatmap, multi-workspace support, rich text notes, and multi-currency invoice generation with PDF and CSV export.",
    tech: ["Next.js", "TypeScript", "Tailwind v4", "Supabase", "Shadcn UI", "Tiptap", "Recharts", "VS Code Ext", "Chrome Ext", "Vercel"],
    accent: "#7e3460",
    live: "https://chrona-time-tracker.vercel.app",
    image: "/images/chrona-time-tracker-preview.png",
  },
  {
    title: "Clinic Management System",
    icon: <Hospital size={18}/>,
    desc: "Multi-role healthcare platform for small clinics with real-time cross-role notifications via SocketIO, Cloudinary file uploads, automated credential emails, and prescription assistance based on lab results and patient history. Supports four roles: Admin, Receptionist, Doctor, and Medical Technician.",
    tech: ["Python", "Flask", "MySQL", "Flask-SocketIO", "Flask-Login", "Flask-Mail", "Cloudinary", "Jinja2"],
    accent: "#9a6bc4",
    github: "https://github.com/edaprgs/Clinic-Management-System",
    image: "/images/clinic-management-preview.png",
  },
  {
    title: "CNN Hair Type Recognition",
    icon: <Brain size={18}/>,
    desc: "Deep learning classifier for four hair types trained on a custom 6,000-image dataset with data augmentation. Built with TensorFlow and Keras, achieving 79.67% test accuracy over 20 epochs.",
    tech: ["Python", "TensorFlow", "Keras", "scikit-learn", "CNN", "Data Augmentation"],
    accent: "#c084a8",
    github: "https://github.com/edaprgs/CNN-Hair-Type-Recognition",
    image: "/images/hair-cnn-preview.png",
  },
  {
    title: "eTanom UI/UX Design",
    icon: <Sprout size={18}/>,
    desc: "Planter-facing interface for a reforestation platform covering 8+ end-to-end user flows, a WCAG-compliant color system across 9 shade levels, responsive Figma prototypes, and annotated developer handoffs.",
    tech: ["Figma", "UI/UX Design", "Prototyping", "WCAG", "Responsive Design"],
    accent: "#2d7a2d",
    figma: "https://www.figma.com/design/a4593rDDQslYZMxCI6gh5O/eTanom-Planter-s-Interface-%7C-Paragoso?node-id=0-1",
    image: "/images/etanom-ui-preview.png",
  },
]

function ProjectCard({ project, i }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.65, delay: i * 0.09 }}
      style={{
        borderRadius: 14, overflow: "hidden",
        background: "var(--glass-bg)",
        border: `1px solid ${hovered ? project.accent + "44" : "var(--glass-border)"}`,
        transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hovered ? `0 16px 40px ${project.accent}12` : "none",
        display: "flex", flexDirection: "column",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>

      <div style={{ position: "relative", overflow: "hidden", height: 175, flexShrink: 0 }}>
        <img src={project.image} alt={project.title}
          style={{ width: "100%", height: "100%", objectFit: "cover",
            transform: hovered ? "scale(1.05)" : "scale(1)", transition: "transform 0.6s" }}/>
        <div style={{ position: "absolute", inset: 0,
          background: `linear-gradient(to top, var(--bg) 0%, ${project.accent}06 100%)` }}/>
      </div>

      <div style={{ padding: "1.3rem", display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "0.7rem" }}>
          <span style={{ color: project.accent, opacity: 0.9, display: "flex" }}>{project.icon}</span>
          <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--body-color)", lineHeight: 1.3 }}>
            {project.title}
          </h3>
        </div>

        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1rem", flex: 1 }}>
          {project.desc}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "1rem" }}>
          {project.tech.map(t => <span key={t} className="tag">{t}</span>)}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "auto" }}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "0.4rem", padding: "0.38rem 0.85rem",
                borderRadius: 8, background: "var(--surface)", border: "1px solid var(--glass-border)",
                color: "var(--text-muted)", fontSize: "0.78rem", fontWeight: 500, transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = project.accent + "55"; e.currentTarget.style.color = project.accent }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--glass-border)"; e.currentTarget.style.color = "var(--text-muted)" }}>
              <FaGithub size={13}/> GitHub
            </a>
          )}
          {project.figma && (
            <a href={project.figma} target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "0.4rem", padding: "0.38rem 0.85rem",
                borderRadius: 8, background: "var(--surface)", border: "1px solid var(--glass-border)",
                color: "var(--text-muted)", fontSize: "0.78rem", fontWeight: 500, transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = project.accent + "55"; e.currentTarget.style.color = project.accent }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--glass-border)"; e.currentTarget.style.color = "var(--text-muted)" }}>
              <ExternalLink size={13}/> Figma
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "0.4rem", padding: "0.38rem 0.85rem",
                borderRadius: 8, background: `${project.accent}18`, border: `1px solid ${project.accent}35`,
                color: project.accent, fontSize: "0.78rem", fontWeight: 500, marginLeft: "auto",
                transition: "background 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.background = `${project.accent}28`}
              onMouseLeave={e => e.currentTarget.style.background = `${project.accent}18`}>
              <ExternalLink size={13}/> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="ide-section projects-section">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.65 }} style={{ marginBottom: "2rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.6rem" }}>
          <FolderOpen size={14} style={{ color: "var(--rose)" }}/>
          <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "var(--rose)" }}>
            04 · Projects
          </span>
        </div>
        <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700,
          letterSpacing: "-0.02em", lineHeight: 1.1 }} className="grad-text">
          What I've Built
        </h2>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.2rem" }}>
        {projects.map((p, i) => <ProjectCard key={p.title} project={p} i={i}/>)}
      </div>
    </section>
  )
}
