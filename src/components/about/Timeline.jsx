import React from 'react'
import { MdSchool as EducationIcon } from 'react-icons/md'
import { AiOutlineLaptop as WorkIcon } from 'react-icons/ai'
import './timeline.css'

const timelineElements = [
    {
        id: 1,
        title: "Abitur",
        location: "Gymnasium Ramstein-Miesenbach",
        description: "Erwerb der allgemeinen Hochschul\u00adreife.",
        date: "März 2018",
        icon: "education"
    },
    {
        id: 2,
        title: "Pharmaziestudium",
        location: "Universität des Saarlandes",
        description: "Aus persönlichen Gründen habe ich mein Studium der Pharmazie freiwillig abge\u00adbrochen.",
        date: "Oktober 2018 - März 2019",
        icon: "education"
    },
    {
        id: 3,
        title: "Informatikstudium",
        location: "Universität Trier",
        description: "Erwerb des akademischen Grades Bachelor of Science in Informatik.",
        date: "Oktober 2019 - März 2023",
        icon: "education"
    }
]


const Timeline = () => {
    return (
        <section id='timeline'>
            <h5>Meine Laufbahn</h5>
            <h2>Zeitstrahl</h2>

            <div className='container timeline__container'>
                <div className="timeline">
                    <ul>
                        {
                            timelineElements.map(({ id, title, location, description, date, icon }) => {
                                return (
                                    <li key={id} className='timeline-content'>
                                        <small>{date}</small>
                                        <h3>{title}</h3>
                                        <h5>{location}</h5>
                                        <p>{description}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Timeline