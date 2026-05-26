import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About'

function App() {
  return (
    <div className="min-h-screen scroll-smooth text-[#233860]">
      <Nav />
      <Home />
      <About />
      <Footer />
    </div>
  );
}

export default App;
