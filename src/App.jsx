
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import Footer from './components/footer';
import StructuralDesign from './pages/structural_design';
import Geosciences from './pages/geosciences';
import Ndt from './pages/ndt';
import HighwayBridges from './pages/highway-bridges';
import ScrollToTop from './components/scrollToTop';
import './App.css'
import AdminPage from './admin/admin';
import YouTubeVideos from './pages/ytvideos';

function App() {

  return (
    <>

     <Router>
    <ScrollToTop/>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/highway-bridges-design" element={<HighwayBridges />} />
      <Route path="/structural-design" element={<StructuralDesign />} />
      <Route path="/geosciences" element={<Geosciences />} />
      <Route path="/non-destructive-testing" element={<Ndt />} />
      <Route path="/youtube-videos" element={<YouTubeVideos />} />
      {/* <Route path="/admin" element={<AdminPage />} /> */}
    </Routes>
    <Footer/>
  </Router>
    </>
  )
}

export default App


