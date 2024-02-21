import React from 'react'; // If you haven't imported React yet
import { useState } from 'react';
import './App.css';
import Headers from './Header'; 
import Sidebar from './Sidebar';
import Home from './Home'; 

function App() {
  return (
    <div className='grid-container'>
      <Headers />
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
