import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Project from './components/project/Project'

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/portfolio/:projectId" element={<Project/>}/>
      </Routes>
    </div>
  )
}

function Main() {
  return (
    <div className='App'>
      <Nav/>
      <Header />
      <Portfolio />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App