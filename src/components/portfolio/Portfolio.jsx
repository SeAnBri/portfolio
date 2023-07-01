import React from 'react'
import './portfolio.css'
import { Link } from 'react-router-dom';
import projects from '../../data/projects';

const Portfolio = () => {

  return (
    <section id='portfolio'>
      <h2>Portfolio</h2>
      <h5>Meine Projekte</h5>

      <div className="container portfolio__container">
        {
          projects.map((project) => {
            return (
              <Link to={`/portfolio/${project.id}`} key={project.id}>
                <article key={project.id} className='portfolio__item'>
                  <div className="portfolio__item-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <h5>{project.typ}</h5>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                  <div className='stack__container'>
                    {
                      Object.values(project.stack).map((Icon, index) => (
                        <Icon key={index} size={25} className='stack__icon' />
                      )
                      )
                    }
                  </div>
                </article>
              </Link>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio