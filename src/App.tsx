import './App.css'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import { About } from './sections/About'
import { Contact } from './sections/Contact'

function App() {
  return (
    <main className="container">
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <footer style={{ textAlign: 'center', padding: '4rem 0 2rem', borderTop: '1px solid var(--card-border)', marginTop: '4rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        <p>© {new Date().getFullYear()} Eduardo Cabanes · Junior Software Developer.</p>
      </footer>
    </main>
  )
}

export default App
