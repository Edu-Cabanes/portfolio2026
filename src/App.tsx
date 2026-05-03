import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
        <footer style={{
          textAlign: 'center',
          padding: '3rem 0 2rem',
          borderTop: '1px solid var(--card-border)',
          marginTop: '2rem',
          color: 'var(--text-muted)',
          fontSize: '0.9rem',
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginBottom: '1.5rem',
          }}>
            <a href="https://github.com/Edu-Cabanes" target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent)'}
              onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/edu-cabanes-a90378192/" target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent)'}
              onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
              <Linkedin size={20} />
            </a>
            <a href="mailto:educabanes54@gmail.com"
              style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent)'}
              onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
              <Mail size={20} />
            </a>
          </div>
          <a href="#inicio" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--accent)',
            textDecoration: 'none',
            fontSize: '0.85rem',
            fontWeight: '600',
            marginBottom: '1rem',
          }}>
            <ArrowUp size={16} /> Volver arriba
          </a>
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} Eduardo Cabanes · Desarrollador Web
          </p>
        </footer>
      </main>
    </>
  )
}

export default App
