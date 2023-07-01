import React from 'react'
import './about.css'
import {MdOutlineWavingHand} from 'react-icons/md'
import {RiMentalHealthLine, RiComputerLine} from 'react-icons/ri'
import {GiStumpRegrowth} from 'react-icons/gi'

const data = [
  {
    id: 1,
    icon: [MdOutlineWavingHand],
    title: 'Das bin ich',
    text: 'Hey, ich bin Sebastian Britner. Ich bin {} Jahre alt und nach meinem Informatikstudium nun bereit in der Arbeitswelt Fuß zu fassen. Ich bin ein sehr empathischer Mensch, weshalb mir die Harmonie in einem Team besonders wichtig ist. Durch meine Zielstrebigkeit habe ich nicht nur mein Studium sehr gut absolviert, sondern gebe bei all meinen Projekten 110%.'
  },
  {
    id: 2,
    icon: [RiMentalHealthLine],
    title: 'Meine Interessen',
    text: 'Fußball und Volleyball liegen mir sehr, weshalb ich den Großteil meiner Freizeit draußen verbringe. Außerdem interessiere ich mich generell für Fitness und Ernährung. Auch an kreativen Aktivitäten wie Zeichnen oder Gestalten habe ich Freude, wodurch mir auch Dinge im Bereich Design und Ästhetik liegen.'
  },
  {
    id: 3,
    icon: [RiComputerLine],
    title: 'Meine Interessen in der Informatik',
    text: 'Ich bin fasziniert von den Möglichkeiten, die die Informatik bietet, um die Welt zu verbessern und Abläufe effizienter zu gestalten. Innerhalb dieses breiten Spektrums fesselt mich besonders die Softwareentwicklung, da sie mir die Chance gibt, kreative Lösungen zu entwerfen und Probleme systematisch zu lösen.'
  },
  {
    id: 4,
    icon: [GiStumpRegrowth],
    title: 'Der passende Arbeitgeber',
    text: 'Als Berufseinsteiger suche ich ein Unternehmen, dass mich und meine Fähigkeiten fördert und mir die Möglichkeit zum Wachsen gibt. Ich bin flexibel und anpassungsfähig, insbesondere wenn es um neue Entwicklungen in der Softwareentwicklung geht. Ich bin immer bereit, neue Wege zu erkunden und mein Wissen stets zu erweitern.'
  },
].map(item => {
  const age = calculateAge(new Date("1998-12-13"));
  item.text = item.text.replace('{}', age);
  return item;
});


const About = () => {
  return (
    <section id='about'>
      <h2>Über mich</h2>
      <h5>Interessen und Ziele</h5>
      
      <div className="container about__container">
      {
          data.map(({id, icon, title, text}) => {
            return (
              <article key={id} className='about_me__item'>
                <div className='item-icon__container'>
                  {
                    icon.map((Icon, index) => (
                      <Icon key={index} className='item-icon'/>
                      )
                    )
                  }
                </div>
                <div className='item-description__container'>
                  <h3 className='caps-header small'>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            )
          })
        }
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