import { ThemeProvider } from "./context/ThemeContext"
import { PageProvider, usePage } from "./context/PageContext"
import Background from "./components/Background"
import LeftPanel from "./components/LeftPanel"
import MobileNav from "./components/MobileNav"
import Home from "./components/Home"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import SparkleTrail from "./components/SparkleTrail"

const views = { home: Home, about: About, experience: Experience, skills: Skills, projects: Projects, contact: Contact }

function Layout() {
  const { page } = usePage()
  const ActiveView = views[page]

  return (
    <>
      <SparkleTrail />
      <Background />
      <MobileNav />
      <div className="app-container">
        <div className="split-layout">
          <aside className="left-panel">
            <LeftPanel />
          </aside>
          <main className="right-panel">
            {ActiveView && <ActiveView />}
            {page === "contact" && <Footer />}
          </main>
        </div>
      </div>
    </>
  )
}

function App() {
  return (
    <ThemeProvider>
      <PageProvider>
        <Layout />
      </PageProvider>
    </ThemeProvider>
  )
}

export default App
