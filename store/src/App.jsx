import { useState } from 'react'

import './App.css'
import Sidebar from './Sidebar'

function App() {
  

  return (
    <div className='grid-container'>
      <Headers />
      <Sidebar/>
      <Home/>
    </div>
  )
}

export default App
