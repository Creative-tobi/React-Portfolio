import React from 'react'
import Aside from './components/Aside'
import Navbar from './components/Navbar'
import About from './pages/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Aside />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/Resume' element={<Resume />} />
          <Route path='/Portfolio' element={<Portfolio />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
      {/* <Navbar />
    <Aside />
    <About />
    <Portfolio /> */}
    </>
  );
}

export default App
