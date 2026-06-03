// src/components/Experience.jsx

import { motion } from "framer-motion"
import {
  Briefcase,
  Database,
  Palette,
} from "lucide-react"

const experiences = [
  {
    role: "Full-Stack Developer (Volunteer)",
    company: "United Church of Christ in the Philippines - Iligan",
    period: "Jul 2025 – Present",
    location: "Iligan City, Philippines",
    icon: <Database size={18} color="#f9a8c9" />,
    bullets: [
      "Architected and shipped a production membership management system using Next.js, TypeScript, and Supabase (PostgreSQL), serving a live organization with 3,000+ member records.",
      "Implemented role-based access control (RBAC) through Next.js Middleware, securing separate admin and member portals with server-side JWT session validation.",
      "Designed a 40+ field normalized PostgreSQL data model covering member profiles, church records, educational history, family background, and ministry involvement.",
      "Built configurable reports with live search, multi-criteria filtering, toggleable columns, and one-click CSV export, reducing manual reporting time by ~80%.",
      "Deployed to Vercel with continuous deployment and migrated 3,000+ historical records into PostgreSQL with zero data loss during go-live.",
    ]
  },

  {
    role: "UI/UX Design Intern",
    company: "Sikai Inc.",
    period: "Jun 2024 – Jul 2024",
    location: "Iligan City, Philippines",
    icon: <Palette size={18} color="#f9a8c9" />,
    bullets: [
      "Designed the eTanom Planter's Interface, a responsive web and mobile reforestation platform, using Figma and user-centered design principles.",
      "Mapped and prototyped 8+ end-to-end user flows including onboarding, OTP verification, order management, earnings tracking, withdrawals, and in-app messaging.",
      "Built a WCAG-compliant color system with documented contrast ratios and delivered developer handoff documentation for a 4-person engineering team.",
    ]
  },
]

function Experience() {
  return (
    <section id="experience" className="px-6 md:px-20">
      
      <div className="mb-14 text-center">
        <span className="section-sub">My journey</span>
        <h2 className="section-title grad-text">Experience</h2>
      </div>

      <div className="relative max-w-3xl mx-auto pl-10">
        
        {/* timeline line */}
        <div
          className="absolute left-0 top-0 bottom-0 w-px"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #e879a0 20%, #e879a0 80%, transparent)",
          }}
        />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative glass p-7"
              style={{
                borderColor: "rgba(249,168,201,0.15)",
              }}
            >
              {/* timeline dot */}
              <span
                className="absolute -left-[2.65rem] top-8 w-3 h-3 rounded-full border-2"
                style={{
                  background: "#0f0610",
                  borderColor: "#e879a0",
                  boxShadow: "0 0 10px rgba(232,121,160,0.6)",
                }}
              />

              {/* top */}
              <div className="flex items-start gap-4 mb-4">
                
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    background: "rgba(249,168,201,0.1)",
                    border: "1px solid rgba(249,168,201,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {exp.icon}
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 500,
                      lineHeight: 1.3,
                    }}
                  >
                    {exp.role}
                  </h3>

                  <p
                    style={{
                      color: "#f9a8c9",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      marginTop: 4,
                    }}
                  >
                    {exp.company}
                  </p>
                </div>
              </div>

              {/* meta */}
              <p
                style={{
                  color: "rgba(240,216,232,0.45)",
                  fontSize: "0.74rem",
                  letterSpacing: "0.12em",
                  marginBottom: "1rem",
                  textTransform: "uppercase",
                }}
              >
                {exp.period} · {exp.location}
              </p>

              {/* bullets */}
              <ul className="space-y-2">
                {exp.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3"
                    style={{
                      color: "rgba(240,216,232,0.72)",
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                    }}
                  >
                    <span
                      style={{
                        color: "#f9a8c9",
                        marginTop: "0.45rem",
                        fontSize: "0.45rem",
                        flexShrink: 0,
                      }}
                    >
                      ◆
                    </span>

                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience