import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
          <h2>Sebastian Anton Britner</h2>
          <h4>B. Sc. Informatik</h4>
          <CTA/>
          <HeaderSocials/>
          <div className="me"/>
          <img src={ME} alt="me" className='header-image'/>
      </div>
    </header>
  )
}

export default Header