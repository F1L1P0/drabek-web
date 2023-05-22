import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Page1 from './assets/page1'
import Page2 from './assets/page2'
import Home from './assets/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="./assets/page1" element={<Page1 />} />
        <Route path="./assets/page2" element={<Page2 />} />
      </Routes>
      <Routes />
    </BrowserRouter>
  )
}

export default App
