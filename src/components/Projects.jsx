// src/components/Projects.jsx

import useScrollReveal from "../hooks/useScrollReveal"
import { motion } from "framer-motion"

import {
  Church,
  Sprout,
  Hospital,
  Brain,
  ExternalLink,
} from "lucide-react"


const projects = [
  {
    title: "Church Membership Management System",

    icon: <Church size={22} color="#f9a8c9" />,

    desc: "Production membership management platform with an AI layer built on Next.js, TypeScript, Supabase, and PostgreSQL. Features RBAC-secured dual portals (admin + member self-service), Gemini API integration for AI-powered report summarization and natural language Q&A, configurable reports with CSV export, and support for 3,000+ member records.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Gemini API",
      "RBAC",
      "Vercel",
    ],

    accent: "#e879a0",

    // github: "https://www.figma.com/design/a4593rDDQslYZMxCI6gh5O/eTanom-Planter-s-Interface-%7C-Paragoso?node-id=398-1875&t=2Fa3FuXY8H9pNd3e-0",

    live: "https://uccpiligan.vercel.app/",

    image: "/images/church-management-preview.png",
  },

  {
    title: "Clinic Management System",

    icon: <Hospital size={22} color="#60a5fa" />,

    desc:
      "Multi-role healthcare management platform built with Flask and MySQL. Supports administrators, doctors, medtechs, and receptionists with Flask-Login RBAC, real-time cross-role notifications via Flask-SocketIO, Cloudinary-powered file uploads, Flask-Mail automated credential emails, and full audit logging via MySQL stored procedures.",

    tech: [
      "Python",
      "Flask",
      "MySQL",
      "Flask-SocketIO",
      "Cloudinary",
      "Flask-Login",
    ],

    accent: "#60a5fa",

    github:
      "https://github.com/edaprgs/Clinic-Management-System",

    image: "/images/clinic-management-preview.png",
  },

  {
    title: "CNN Hair Type Recognition",

    icon: <Brain size={22} color="#c084fc" />,

    desc:
      "Deep learning project classifying 4 hair types (coily, curly, straight, wavy) on a custom 6,000-image dataset curated from Kaggle, Google, and Pinterest. Built with TensorFlow and Keras, applying data augmentation (rotation, zoom, flip, brightness) to improve generalization; achieved 79.67% test accuracy over 20 epochs with minimal overfitting.",

    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "scikit-learn",
      "CNN",
      "Computer Vision",
    ],

    accent: "#c084fc",

    github:
      "https://github.com/edaprgs/CNN-Hair-Type-Recognition",

    image: "/images/hair-cnn-preview.png",
  },

  {
    title: "Planter's UI/UX Design",

    icon: <Sprout size={22} color="#86efac" />,

    desc:
      "Designed the planter-facing UI/UX experience for eTanom’s reforestation platform at Sikai Inc. Created responsive wireframes, workflows, and interactive prototypes in Figma focused on accessibility, usability, and cross-device user experience.",

    tech: [
      "Figma",
      "UI/UX Design",
      "Prototyping",
      "Responsive Design",
    ],

    accent: "#86efac",

    figma:
      "https://www.figma.com/design/a4593rDDQslYZMxCI6gh5O/eTanom-Planter-s-Interface-%7C-Paragoso?node-id=0-1&m=dev&t=2Fa3FuXY8H9pNd3e-1",

    image: "/images/etanom-ui-preview.png",
  },
]

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="glass overflow-hidden flex flex-col group transition-all duration-300"
      style={{
        borderColor: "rgba(249,168,201,0.12)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = project.accent + "55"
        e.currentTarget.style.transform = "translateY(-5px)"
        e.currentTarget.style.boxShadow = `0 20px 50px ${project.accent}18`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor =
          "rgba(249,168,201,0.12)"
        e.currentTarget.style.transform = "translateY(0)"
        e.currentTarget.style.boxShadow = "none"
      }}
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden h-[220px]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(15,6,16,0.9), transparent)",
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="p-7 flex flex-col flex-1">
        
        {/* top */}
        <div className="flex items-start gap-3 mb-4">
          
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: "50%",
              background: `${project.accent}15`,
              border: `1px solid ${project.accent}25`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {project.icon}
          </div>

          <h3
            style={{
              fontSize: "1.3rem",
              fontWeight: 500,
              lineHeight: 1.3,
              color: "#f0d8e8",
            }}
          >
            {project.title}
          </h3>
        </div>

        {/* desc */}
        <p
          className="flex-1 mb-5"
          style={{
            color: "rgba(240,216,232,0.68)",
            fontSize: "0.9rem",
            lineHeight: 1.8,
          }}
        >
          {project.desc}
        </p>

        {/* tech */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, i) => (
            <span key={i} className="tag">
              {t}
            </span>
          ))}
        </div>

        {/* links */}
        <div className="flex items-center gap-3 mt-auto">
          
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#f0d8e8",
                fontSize: "0.85rem",
              }}
            >
              <ExternalLink size={16} />
              GitHub
            </a>
          )}

          {project.figma && (
            <a
              href={project.figma}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#f0d8e8",
                fontSize: "0.85rem",
              }}
            >
              <ExternalLink size={16} />
              Figma
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300"
              style={{
                background: `${project.accent}15`,
                border: `1px solid ${project.accent}25`,
                color: "#f0d8e8",
                fontSize: "0.85rem",
              }}
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function Projects() {
  const ref = useScrollReveal()

  return (
    <section
      id="projects"
      ref={ref}
      className="reveal px-6 md:px-20"
    >
      <div className="mb-14 text-center">
        <span className="section-sub">What I've built</span>
        <h2 className="section-title grad-text">
          Projects
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-7">
        {projects.map((p, i) => (
          <ProjectCard
            key={i}
            project={p}
            index={i}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects