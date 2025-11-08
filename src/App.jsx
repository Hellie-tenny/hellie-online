import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Components/Home';
import About from './Components/About';

function App() {

  // light: "#E7FDF6",
  // accent: "#F25C0C",
  // dark: "#233860"

  return ( 
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
