import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { Contact } from './components/Contact'
import { WhatsAppChat } from './components/WhatsAppChat'
import { useTheme } from './hooks/useTheme'

function App() {
  const { isDark } = useTheme()

  return (
    <div className={isDark ? 'dark' : ''}>
      <Navbar />

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About Section */}
      <About />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* Education Section */}
      <Education />

      {/* Contact Section */}
      <Contact />

      {/* WhatsApp Chatbot */}
      <WhatsAppChat />
    </div>
  )
}

export default App
