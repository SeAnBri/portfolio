import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineCalendar} from 'react-icons/ai'
import {IoLocationOutline} from 'react-icons/io5'
import {MdLanguage} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
      <h5>Erfahre mehr</h5>
      <h2>Über mich</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"></img>
          </div>
        </div>
        <div className="about__content">
          <p id='paragraph'>Hallo, mein Name ist Sebastian Anton Britner, ich bin 23 Jahre alt und habe mein Informatikstudium erfolgreich abgeschlossen. Ich freue mich nun endlich in der Arbeitswelt anzukommen und praktische Erfahrung sammeln zu können. Ich bin eine sehr motivierte, zielstrebige Person, die sich schnell neue Sachen aneignet. Besonders interessiere ich mich für die Bereiche Softwareentwicklung und Data Science. In meinem zukünftigen Arbeitsalltag erhoffe ich mir die Zusammenarbeit mit einem Team von dem ich lernen und mich weiterentwickeln kann.</p>

          <a href="contact" className='btn btn-primary'>Kontaktieren</a>
        </div>
      </div>

      <div className='container'>
        <div className="about__cards">
            <article className='about__card'>
              <AiOutlineUser className='about__icon'/>
              <h5>Name</h5>
              <p>Sebastian Anton Britner</p>
            </article>
            <article className='about__card'>
              <AiOutlineCalendar className='about__icon'/>
              <h5>Alter</h5>
              <p>{calculateAge(new Date("1998-12-13"))}</p>
            </article>
            <article className='about__card'>
              <IoLocationOutline className='about__icon'/>
              <h5>Wohnort</h5>
              <p>Trier</p>
            </article>
            <article className='about__card'>
              <MdLanguage className='about__icon'/>
              <h5>Sprachkenntnisse</h5>
              <p>Deutsch (Muttersprache), <br/> Englisch (C1), Russisch (A2)</p>
            </article>
          </div>
      </div>
    </section>
  )
}

function calculateAge(date)
{
  var now = new Date();
  var diff = Math.abs(now - date);
  var age = Math.floor(diff / (1000*60*60*24*365));
  return age;
}

export default About