import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Kenntnisse</h5>
      <h2>Meine Erfahrung</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend-Entwicklung</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Flutter</h4>
                <small className='text-light'>Mittel</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Backend-Entwicklung</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Fortgeschritten</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Dart</h4>
                <small className='text-light'>Mittel</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Grundlagen</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience