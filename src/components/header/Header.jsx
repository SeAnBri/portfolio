import React from 'react'
import './header.css'
import ME from '../../assets/me/me-home.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
          <div className='me__container'>
            <img src={ME} alt="me" className='header-image'/>
          </div>
          <div className="description__container">
            <h1>Hallo, ich bin <br/> Sebastian Britner.</h1>
            <p>Mit einem erfolgreich abgeschlossenen Informatikstudium strebe ich nun voller Begeisterung danach, als Softwareentwickler Fuß zu fassen und mein erlerntes Wissen in die Praxis umzusetzen.</p>
            <HeaderSocials/>
          </div>
      </div>
    </header>
  )
}

export default Header