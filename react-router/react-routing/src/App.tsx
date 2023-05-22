import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
