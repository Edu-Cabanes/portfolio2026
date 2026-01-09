import './App.css'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import { Contact } from './sections/Contact'

function App() {
  return (
    <main className="container">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}

export default App
