import React from 'react'

import './aquaplane.css'
import FIRST_EXPLANATION from '../../../assets/projects/aquaplane/aquaplane_explanation_01.png'
import SECOND_EXPLANATION from '../../../assets/projects/aquaplane/aquaplane_explanation_02.png'
import THIRD_EXPLANATION from '../../../assets/projects/aquaplane/aquaplane_explanation_03.png'
import Slideshow from './Slideshow'

const Aquaplane = () => {

  return (
    <div className='aquaplane_container'>
      <div className={`text-image-container`}>
        <div className="function-text-wide">
          <h3 className="caps-header small">Funktionen</h3>
          <h2>Bewertung der Argumentqualität</h2>
          <p><b>Die Argumentqualität lässt sich in logische, rhetorische und dialektische Dimensionen aufteilen</b>, die jeweils verschiedene Qualitätsaspekte umfassen. Die logische Qualität untersucht, ob die vorgebrachten Gründe vernünftig, nachvollziehbar und relevant sind. Die rhetorische Perspektive prüft wie wirkungsvoll ein Argument vorgetragen wird, indem es bspw. die Glaubwürdigkeit (Credibility) oder die Verwendung einer korrekten und klaren Sprache (Clarity) in den Blick nimmt. Die dialektische Qualität untersucht, ob ein Argument einen ausreichenden Beitrag zur Lösung des Problems liefert und vom Zielpublikum akzeptiert wird.</p>
          <br/>
          <p><b>Um diese Aspekte zu bewerten, wurden spezifische Qualitätsmerkmale untersucht</b>, z.B. ob ein Argument einen persönlichen Angriff enthält, was die Akzeptanz beeinflussen kann. Weitere untersuchte Merkmale waren der Wahrheitsgehalt der Behauptungen, die Rechtschreibung, die Verwendung von dramatischer Sprache und viele mehr.</p>
        </div>
      </div>

      <div className={'text-image-container'}>
        <div className="function-text-wide">
          <h2>Ableitung des überzeugenderen Arguments</h2>
          <p>Als Grundlage für die Entscheidungsfindung dient die Bewertung der Argumentqualität durch die untersuchten Qualitätsmerkmale. Zu den beiden Argumenten eines Argumentpaars werden daher jeweils alle Qualitätsmerkmale bestimmt und die dabei berechneten Werte miteinander verglichen. Mithilfe von stufenweisen Mehrheitsentscheidungen wird dann entschieden, welches Argument bezüglich bestimmter Qualitätsmerkmale, bestimmten Dimensionen und insgesamt überzeugender ist.</p>
        </div>
      </div>

      <div className={`text-image-container`}>
        <div className="function-text-wide">
          <h2>Interaktive Präsentation der Erklärungen</h2>
          <p>Die Anwendung AQUAPLANE hat das Ziel, den Nutzern interaktiv zu zeigen, welches Argument in Bezug auf verschiedene Qualitätsaspekte überwiegt und warum. Dazu werden zwei Argumentpaare eingegeben und zuerst das insgesamt überzeugendere Argument angezeigt. Zusätzlich werden Entscheidungen bezüglich der übergeordneten Dimensionen (logische, rhetorische und dialektische Qualität) präsentiert. Wenn man zum Beispiel mehr über die Entscheidung bezüglich der rhetorischen Qualität erfahren möchte, kann man auf den hervorgehobenen Begriff 'Rhetoric Quality' klicken. Dabei wird auf die Entscheidungen zu den einzelnen untergeordneten Dimensionen Bezug genommen. Die Entscheidung zu einer untergeordneten Dimension kann dann erneut durch Klicken weiter vertieft werden. Dadurch erhält man Erklärungen in Bezug auf diese untergeordnete Dimension, wobei spezifische Unterschiede bei den Qualitätsmerkmalen beschrieben werden.</p>
        </div>
        <Slideshow images={[FIRST_EXPLANATION, SECOND_EXPLANATION, THIRD_EXPLANATION]}/>
      </div>
    </div>
  )
}

export default Aquaplane