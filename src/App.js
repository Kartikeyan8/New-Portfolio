
import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import Articles from './components/Articles'
import Footer from './components/Footer'
import Up from './components/Up'
import './App.css';
import './style/Up.css'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/articles" element={<Articles/>} />
        </Routes>
        
        <Footer /><Up />
        </BrowserRouter>    
    
  );
};

export default App;
