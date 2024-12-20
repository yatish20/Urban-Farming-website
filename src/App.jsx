import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import { useState } from 'react';
import Navbar from './Components/Navbar'
import Home from './Pages/Home';
import Footer from './Components/footer';
import Education from './Pages/Education';
import Marketplace from './Pages/Marketplace';
import Community from './Pages/Community';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/MarketPlace" element={<Marketplace />} />
        <Route path="/Community" element={<Community />} />
      </Routes>
      {/* <Footer /> */}
    </Router>

  )
}

export default App
