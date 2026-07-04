import { motion } from "framer-motion"
import { Code2, Palette, Brain, Database, Server, Rocket } from "lucide-react"

const services = [
  { icon: Code2,    title:"Full-Stack Development", desc:"End-to-end web apps with React, Next.js, and TypeScript — from pixel-perfect UI to production APIs.", color:"#e879a0" },
  { icon: Palette,  title:"UI/UX Design",           desc:"Figma wireframes, WCAG-compliant color systems, responsive prototypes, and developer-ready handoffs.", color:"#c084fc" },
  { icon: Brain,    title:"AI Integration",          desc:"Gemini API for report summarization, natural language Q&A over structured data, and smart admin tools.", color:"#a78bfa" },
  { icon: Database, title:"Database Architecture",  desc:"Normalized PostgreSQL schemas, Supabase, batched pagination, and type-safe data access layers.", color:"#86efac" },
  { icon: Server,   title:"Backend Development",    desc:"REST APIs, RBAC middleware, WebSocket events, file uploads, automated emails, and audit logging.", color:"#f9a8c9" },
  { icon: Rocket,   title:"Deployment & CI/CD",     desc:"Continuous deployment on Vercel, environment setup, database migrations, and zero-downtime go-lives.", color:"#67e8f9" },
]

export default function Services() {
  return (
    <section id="services">
      <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8 }}>
        <span className="section-label">What I offer</span>
        <h2 className="section-title grad-text">Services</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map(({ icon: Icon, title, desc, color }, i) => (
          <motion.div key={title}
            initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            transition={{ duration:0.65, delay:i*0.07 }}
            className="glass p-7 flex flex-col gap-4 group cursor-default relative overflow-hidden"
            style={{ borderColor:"var(--glass-border)" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor=color+"44"; e.currentTarget.style.transform="translateY(-5px)"; e.currentTarget.style.boxShadow=`0 20px 50px ${color}18` }}
            onMouseLeave={e => { e.currentTarget.style.borderColor="var(--glass-border)"; e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="none" }}
            style={{ borderColor:"var(--glass-border)", transition:"all 0.3s ease" }}>

            {/* Glow */}
            <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-500"
              style={{ background:color }} />

            <div style={{ width:46, height:46, borderRadius:13, background:`${color}18`, border:`1px solid ${color}30`,
              display:"flex", alignItems:"center", justifyContent:"center", color, flexShrink:0 }}>
              <Icon size={20}/>
            </div>
            <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.15rem", fontWeight:500, color:"var(--body-color)", lineHeight:1.3 }}>
              {title}
            </h3>
            <p style={{ fontSize:"0.86rem", color:"var(--text-muted)", lineHeight:1.8, flex:1 }}>{desc}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
        transition={{ duration:0.7, delay:0.3 }}
        className="glass mt-12 p-10 text-center relative overflow-hidden"
        style={{ borderColor:"rgba(249,168,201,0.18)" }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ background:"linear-gradient(135deg, #e879a0, #c084a8)" }}/>
        <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1.4rem,3vw,2rem)", fontWeight:400, color:"var(--body-color)", marginBottom:"0.6rem" }}>
          Have a project in mind?
        </h3>
        <p style={{ color:"var(--text-muted)", fontSize:"0.88rem", marginBottom:"1.6rem" }}>
          I'm open to freelance projects and full-time opportunities.
        </p>
        <a href="#contact"
          className="inline-block px-7 py-2.5 rounded-full text-sm tracking-wide transition-all duration-300"
          style={{ background:"linear-gradient(135deg, #e879a0, #c084a8)", color:"#fff", fontFamily:"'DM Sans',sans-serif", boxShadow:"0 4px 24px rgba(232,121,160,0.3)" }}
          onMouseEnter={e => { e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 10px 32px rgba(232,121,160,0.45)" }}
          onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 4px 24px rgba(232,121,160,0.3)" }}>
          Let's Talk ✦
        </a>
      </motion.div>
    </section>
  )
}
