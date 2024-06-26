
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

import StructuralDesign from './components/structural_design';
import Geosciences from './components/geosciences';
import Ndt from './components/ndt';
import HighwayBridges from './components/highway-bridges';

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
      <Route path="/highway-bridges-design" element={<HighwayBridges />} />
      <Route path="/structural-design" element={<StructuralDesign />} />
      <Route path="/geosciences" element={<Geosciences />} />
      <Route path="/non-destructive-testing" element={<Ndt />} />
    </Routes>
    <Footer/>
  </Router>
    </>
  )
}

export default App


