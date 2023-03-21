import ReactGA from 'react-ga';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavaBar from './components/NavaBar';
import About from './components/About';
import Skills from './components/Skills';
import Home from './components/Home';
import Contact from './components/Contact';
import Project from './components/Project';

ReactGA.initialize('G-WKS67FBF3C');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <>
      <NavaBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
