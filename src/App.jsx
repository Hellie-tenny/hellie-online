import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Components/Home';
import About from './Components/About';
import Works from './Components/Works'
import Contact from './Components/Contact';

function App() {

  // light: "#E7FDF6",
  // accent: "#F25C0C",
  // dark: "#233860"

  return ( 
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Works" element={<Works />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
