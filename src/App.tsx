import { useState } from 'react'
import './App.css'
import Home from './views/Home/Home'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <>
      <div className='app'>
        <NavBar/>
        <Home />
      </div>
    </>
  )
}

export default App
