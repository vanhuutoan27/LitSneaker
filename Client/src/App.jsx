import React, { useState, useEffect, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './pages/Home/Home';
import Product from './pages/Product/Product';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
