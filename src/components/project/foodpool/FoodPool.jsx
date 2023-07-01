import React from 'react'

import './foodpool.css'
import RECIPES from '../../../assets/projects/foodpool/MockUps/recipes.png'
import ADD from '../../../assets/projects/foodpool/MockUps/add.png'
import DETAIL from '../../../assets/projects/foodpool/MockUps/detail.png'
import EDIT from '../../../assets/projects/foodpool/MockUps/edit.png'
import PLAN from '../../../assets/projects/foodpool/MockUps/plan.png'
import SEARCH from '../../../assets/projects/foodpool/MockUps/search.png'
import SHOPPING from '../../../assets/projects/foodpool/MockUps/shopping.png'
import PhoneSlideShow from './PhoneSlideshow'

const FoodPool = () => {
  return (
    <div className='foodpool_container'>
      <div className={`two-column-container`}>
        <div className="function-text">
          <h3 className="caps-header small">Funktionen</h3>
          <h2>Rezeptverwaltung</h2>
          <p>FoodPool ermöglicht die Verwaltung von eigenen Rezepten. Rezepte können samt Bild, Name, Beschreibung, Zutaten und optionalem Link hinzugefügt werden und jeder Zeit bearbeitet werden. Eine Suche ermöglicht es schnell nach bestimmten Rezepten zu suchen und über eine Detailansicht alle Informationen über ein Rezept abzurufen.</p>
        </div>
        <PhoneSlideShow mockups={[
          {
            heading: 'Rezepte',
            image: RECIPES
          },
          {
            heading: 'Suche',
            image: SEARCH
          },
          {
            heading: 'Rezept hinzufügen',
            image: ADD
          },
          {
            heading: 'Rezept bearbeiten',
            image: EDIT
          },
          {
            heading: 'Detailansicht',
            image: DETAIL
          },
          ]}/>
      </div>

      <div className={'two-column-container flipped'}>
        <div className="function-text">
          <h2>Erstellen von Essensplänen</h2>
          <p>Basierend auf den gespeicherten Rezepten kann ein zufälliger Essensplan für die Woche erstellt werden. Benutzer können Gerichte im Plan austauschen oder zufällig ersetzen lassen und sie per Drag & Drop verschieben. Zudem können Gerichte, die gekocht wurden, als erledigt markiert werden.</p>
        </div>
        <div className="foodpool-image">
          <img src={PLAN} />
        </div>
      </div>

      <div className={`two-column-container`}>
        <div className="function-text">
          <h2>Erstellen von Einkaufslisten</h2>
          <p>Die Applikation ermöglicht das Erstellen einer Einkaufsliste aus dem erstellten Essensplan, indem sie Zutaten aus den verschiedenen Gerichten zusammenführt. Nutzende können Produkte hinzufügen oder entfernen und die Liste nach Bedarf anpassen.</p>
        </div>
        <div className="foodpool-image">
          <img src={SHOPPING} />
        </div>
      </div>
    </div>
  )
}

export default FoodPool