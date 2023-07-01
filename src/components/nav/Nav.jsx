import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BsGrid} from 'react-icons/bs'
import {FiMail} from 'react-icons/fi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav className='navbar'>
      <a href='#' title='Home' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#portfolio' title='Projekte' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BsGrid/></a>
      <a href='#about' title='Über mich' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experience' title='Kenntnisse' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href='#contact' title='Kontakt' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><FiMail/></a>
    </nav>
  )
}

export default Nav