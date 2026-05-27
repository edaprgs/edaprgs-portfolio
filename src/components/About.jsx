import useScrollReveal from "../hooks/useScrollReveal"
import {
  User,
  GraduationCap,
  Code2,
  Briefcase,
  Database,
  LayoutDashboard,
} from "lucide-react"

function About() {
  const ref = useScrollReveal()

  return (
    <section
      id="about"
      ref={ref}
      className="reveal min-h-screen flex flex-col justify-center"
    >
      {/* Header */}
      <div className="mb-14 text-center">
        <span className="section-sub">Who I am</span>
        <h2 className="section-title grad-text">About Me</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Left */}
        <div
          className="glass p-8 md:p-10"
          style={{ borderColor: "rgba(249,168,201,0.15)" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                background: "rgba(249,168,201,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(249,168,201,0.18)",
              }}
            >
              <User size={20} color="#f9a8c9" />
            </div>

            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: 500,
              }}
            >
              Background
            </h3>
          </div>

          <p
            style={{
              color: "rgba(240,216,232,0.74)",
              lineHeight: 1.9,
              fontSize: "0.94rem",
            }}
          >
            I’m a{" "}
            <strong style={{ color: "#f9a8c9", fontWeight: 500 }}>
              BS Computer Science graduate
            </strong>{" "}
            from{" "}
            <strong style={{ color: "#f0d8e8", fontWeight: 500 }}>
              Mindanao State University – Iligan Institute of Technology
            </strong>
            , passionate about building responsive and user-focused digital
            experiences.
          </p>

          <p
            style={{
              color: "rgba(240,216,232,0.74)",
              lineHeight: 1.9,
              fontSize: "0.94rem",
              marginTop: "1rem",
            }}
          >
            I specialize in front-end and full-stack web development using{" "}
            <strong style={{ color: "#f9a8c9" }}>
              React, Next.js, Tailwind CSS, and Supabase
            </strong>
            . Recently, I developed a Church Management System with
            authentication, analytics dashboards, role-based access, and member
            record management features.
          </p>
        </div>

        {/* Right */}
        <div
          className="glass p-8 md:p-10 flex flex-col gap-5"
          style={{ borderColor: "rgba(249,168,201,0.15)" }}
        >
          <div className="flex items-center gap-3 mb-1">
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                background: "rgba(249,168,201,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(249,168,201,0.18)",
              }}
            >
              <GraduationCap size={20} color="#f9a8c9" />
            </div>

            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: 500,
              }}
            >
              Education & Focus
            </h3>
          </div>

          {[
            {
              icon: <GraduationCap size={18} color="#f9a8c9" />,
              label: "Education",
              value:
                "Bachelor of Science in Computer Science, Cum Laude — Mindanao State University – Iligan Institute of Technology",
            },
            {
              icon: <Code2 size={18} color="#f9a8c9" />,
              label: "Tech Stack",
              value:
                "React, Next.js, Tailwind CSS, Supabase, PostgreSQL, JavaScript, and TypeScript.",
            },
            {
              icon: <LayoutDashboard size={18} color="#f9a8c9" />,
              label: "Current Project",
              value:
                "Developing a full-stack Church Management System with dashboards, analytics, authentication, and member management features.",
            },
            {
              icon: <Briefcase size={18} color="#f9a8c9" />,
              label: "Career Goal",
              value:
                "To pursue opportunities in Front-End or Full-Stack Development while building accessible and impactful digital products.",
            },
          ].map(({ icon, label, value }) => (
            <div
              key={label}
              style={{
                padding: "1rem 1.2rem",
                borderRadius: 16,
                background: "rgba(249,168,201,0.05)",
                border: "1px solid rgba(249,168,201,0.12)",
              }}
            >
              <div
                className="flex items-center gap-2 mb-2"
              >
                {icon}

                <span
                  style={{
                    fontSize: "0.72rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#f9a8c9",
                    fontWeight: 500,
                  }}
                >
                  {label}
                </span>
              </div>

              <p
                style={{
                  color: "rgba(240,216,232,0.82)",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About