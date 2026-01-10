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
    </main>
  )
}

export default App
