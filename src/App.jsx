import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Opportunities from './pages/Opportunities'
import Projects from './pages/Projects'
import Publications from './pages/Publications'
import ResearchTeam from './pages/ResearchTeam'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/research-team" element={<ResearchTeam />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/contact-us" element={<Opportunities />} />
      </Routes>
  )
}

export default App
