import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './styles.css';


import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Todolist from './pages/Todolist';
import Shopping from './pages/Shopping';
import Weatherapi from './pages/Weatherapi';

function App() {
  return (
    <Router> {/* Wrap your entire app with the Router */}
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Todolist" element={<Todolist />} />
          <Route path="/Weatherapi" element={<Weatherapi />} />
          <Route path="/Shopping" element={<Shopping />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
