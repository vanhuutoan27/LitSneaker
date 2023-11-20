import React, { useState, useEffect, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './pages/Guest/Home/Home';
import Men from './pages/Guest/Men/Men';
import Women from './pages/Guest/Women/Women';
import Kids from './pages/Guest/Kids/Kids';
import Blog from './pages/Guest/Blog/Blog';
import Contact from './pages/Guest/Contact/Contact';
import Loading from './pages/Guest/Loading/Loading';

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
