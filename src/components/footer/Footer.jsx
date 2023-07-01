import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <div className="footer__socials">
        <a href='https://www.linkedin.com/in/sebastian-anton-britner-b06407278/'><BsLinkedin/></a>
        <a href='https://github.com/SeAnBri'><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>Copyright &copy; {new Date().getFullYear()} Sebastian Anton Britner</small>
      </div>
    </footer>
  )
}

export default Footer