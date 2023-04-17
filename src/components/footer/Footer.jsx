import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>SAB</a>

      <ul className='permalinks'>
        <li><a href='#'>Start</a></li>
        <li><a href='#about'>Über mich</a></li>
        <li><a href='#experience'>Erfahrung</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Kontakt</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://github.com'><BsLinkedin/></a>
        <a href='https://www.linkedin.com'><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; {new Date().getFullYear()} Sebastian Anton Britner</small>
      </div>
    </footer>
  )
}

export default Footer