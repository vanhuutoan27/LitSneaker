import React, { useState, useEffect, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home/Home';
import Men from './pages/Men/Men';
import Women from './pages/Women/Women';
import Kids from './pages/Kids/Kids';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';

import './App.scss';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
