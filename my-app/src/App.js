import './App.css';
import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

import Home from './Home';
import About from './About';

function App() {

  return (
    <div className="App">
      <Home/>
      <About/>
    </div>
  );
}

export default App;
