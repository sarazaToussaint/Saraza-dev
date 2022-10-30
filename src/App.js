import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavaBar from './NavaBar';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Project from './components/Project';

function App() {
  return (
    <>
      <NavaBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
