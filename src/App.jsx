
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import Projects from './components/projects';
import Contact from './components/contact';
import './App.css'
import Footer from './components/footer';

function App() {

  return (
    <>
        {/* <img src="/images/glitch-lines.jpg" alt="glitch lines" className='opacity-[0.1] inset-0 absolute w-full h-full z-[1]'/> */}

     <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
    <Footer/>
  </Router>
    </>
  )
}

export default App


