import useScrollReveal from "../hooks/useScrollReveal"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from "react-icons/fa"
import {
  SiFigma, SiJira, SiPostman, SiTailwindcss, SiFlask,
  SiPostgresql, SiMysql, SiVercel, SiNextdotjs, SiSupabase
} from "react-icons/si"

const skills = [
  { name: "HTML",       icon: <FaHtml5 />,      color: "#f97316" },
  { name: "CSS",        icon: <FaCss3Alt />,     color: "#60a5fa" },
  { name: "JavaScript", icon: <FaJs />,          color: "#facc15" },
  { name: "React",      icon: <FaReact />,       color: "#67e8f9" },
  { name: "Next.js",    icon: <SiNextdotjs />,   color: "#f0d8e8" },
  { name: "Tailwind",   icon: <SiTailwindcss />, color: "#67e8f9" },
  { name: "Python",     icon: <FaPython />,      color: "#fde68a" },
  { name: "Flask",      icon: <SiFlask />,       color: "#86efac" },
  { name: "PostgreSQL", icon: <SiPostgresql />,  color: "#93c5fd" },
  { name: "MySQL",      icon: <SiMysql />,       color: "#fb923c" },
  { name: "Supabase",   icon: <SiSupabase />,    color: "#86efac" },
  { name: "Figma",      icon: <SiFigma />,       color: "#f9a8d4" },
  { name: "Jira",       icon: <SiJira />,        color: "#93c5fd" },
  { name: "Postman",    icon: <SiPostman />,     color: "#fb923c" },
  { name: "Vercel",     icon: <SiVercel />,      color: "#f0d8e8" },
]

function SkillCard({ skill }) {
  return (
    <div
      className="glass flex flex-col items-center gap-3 p-5 group cursor-default transition-all duration-300"
      style={{ borderColor: "rgba(249,168,201,0.12)" }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = skill.color + "60"
        e.currentTarget.style.transform = "translateY(-4px)"
        e.currentTarget.style.boxShadow = `0 12px 40px ${skill.color}22`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "rgba(249,168,201,0.12)"
        e.currentTarget.style.transform = "translateY(0)"
        e.currentTarget.style.boxShadow = "none"
      }}
    >
      <span style={{ fontSize: "2rem", color: skill.color }}>
        {skill.icon}
      </span>
      <span style={{ fontSize: "0.72rem", color: "rgba(240,216,232,0.6)", letterSpacing: "0.08em", fontFamily: "'DM Sans', sans-serif" }}>
        {skill.name}
      </span>
    </div>
  )
}

function Skills() {
  const ref = useScrollReveal()
  return (
    <section id="skills" ref={ref} className="reveal px-6 md:px-20">

      <div className="mb-14 text-center">
        <span className="section-sub">What I work with</span>
        <h2 className="section-title grad-text">Skills & Technologies</h2>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {skills.map((s, i) => <SkillCard key={i} skill={s} />)}
      </div>
    </section>
  )
}

export default Skills