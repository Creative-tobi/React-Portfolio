import React from 'react'
import Aside from './components/Aside'
import Navbar from './components/Navbar'
import About from './pages/About'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <>
    {/* <BrowserRouter>

    
    </BrowserRouter> */}
    <Navbar />
    <Aside />
    <About />
    </>
  )
}

export default App
