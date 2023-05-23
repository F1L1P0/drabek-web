import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Products from './components/Products'
import Product from './components/Product'
import Error404 from './components/Error404'

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/products">Products</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}
