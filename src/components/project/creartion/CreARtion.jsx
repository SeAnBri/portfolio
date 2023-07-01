import React from 'react'

import './creartion.css'
import SELECT from '../../../assets/projects/creartion/tool-icons/select.png'
import COPY from '../../../assets/projects/creartion/tool-icons/copy.png'
import DELETE from '../../../assets/projects/creartion/tool-icons/delete.png'
import MOVE from '../../../assets/projects/creartion/tool-icons/move.png'
import RESIZE from '../../../assets/projects/creartion/tool-icons/resize.png'
import ROTATE from '../../../assets/projects/creartion/tool-icons/rotate.png'
import STRETCH from '../../../assets/projects/creartion/tool-icons/stretch.png'
import COLOR from '../../../assets/projects/creartion/tool-icons/color.png'

const CreARtion = () => {

  const tools = [
    {
      id: 1,
      image: SELECT,
      tool: 'Mehrere Objekte auswählen',
      description: 'Durch einfaches Antippen über den Touchscreen können mehrere Objekte zugleich ausgewählt werden.'
    },
    {
      id: 2,
      image: MOVE,
      tool: 'Verschieben',
      description: 'Die Position der Objekte im Raum kann entweder durch Bewegung des Geräts oder durch die Verwendung der Steuerkreuze verschoben werden.'
    },
    {
      id: 3,
      image: RESIZE,
      tool: 'Größe ändern',
      description: 'Mit einer einfachen Geste des Auseinanderziehens von zwei Fingern auf dem Touchscreen kann die Größe der Objekte angepasst werden.'
    },
    {
      id: 4,
      image: ROTATE,
      tool: 'Rotieren',
      description: 'Drei zirkuläre Slider ermöglichen die präzise Rotation der Objekte.'
    },
    {
      id: 5,
      image: STRETCH,
      tool: 'Strecken',
      description: 'Durch Auswahl einer der drei Achsen und Auseinanderziehen von zwei Fingern auf dem Touchscreen können die Objekte in die gewünschten Richtungen gestreckt werden.'
    },
    {
      id: 6,
      image: COLOR,
      tool: 'Farbe ändern',
      description: 'Die Farbe der Objekte kann mithilfe von drei Slidern nach dem RGB-Modell verändert werden, während ein weiterer Slider die Transparenz reguliert.'
    },
    {
      id: 7,
      image: COPY,
      tool: 'Kopieren',
      description: 'Mit nur einem Klick auf den Kopieren-Button können Kopien der Objekte erstellt werden.'
    },
    {
      id: 8,
      image: DELETE,
      tool: 'Löschen',
      description: 'Für eine einfache Entfernung von platzierten Objekten stehen mehrere Löschfunktionen zur Verfügung.'
    }
  ]

  return (
    <div className="creartion_container">

      <div className='two-row-container'>
        <div className="function-text-wide">
          <h3 className="caps-header small">Funktionen</h3>
          <h2>Platzieren und Auswählen von Objekten</h2>
          <p>Im Selektionsmodus kann zwischen verschiedenen 3D-Objekten gewählt werden:  Zylinder, Würfel, Halbkugel, dreieckiges Prisma, Kegel, Ring, Kapsel, Torus, Pyramide und Kugel. Diese einfach gehaltenen Objekte dienen als Materialien zur weiteren Bearbeitung. Eine Platzierungshilfe zeigt an, wo das Objekt platziert wird, und durch Tippen wird es platziert. Platzierte Objekte können über Antippen über den Touchscreen zur Bearbeitung ausgewählt werden.</p>
        </div>
      </div>

      <div className='two-row-container'>
        <div className="function-text-wide">
          <h2>Bearbeitung von Objekten</h2>
          <p>Es stehen verschiedene Werkzeuge zur Verfügung, um die Objekte auf kreative und intuitive Weise zu bearbeiten. Mit diesen Bearbeitungsmöglichkeiten sind der Kreativität und dem spielerischen Umgang mit virtuellen Objekten keine Grenzen gesetzt:</p>
          {
            tools.map(({ id, image, tool, description }) => {
              return (
                <article key={id} className='tool_item'>
                  <div className='tool-image_container'>
                    <img src={image} className='tool-image'/>
                  </div>
                  <div className='tool-description'>
                    <h3 className='caps-header small'>{tool}</h3>
                    <p>{description}</p>
                  </div>
                </article>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default CreARtion