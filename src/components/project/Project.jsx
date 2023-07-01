import { useParams, useNavigate, Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md'
import { useEffect } from "react";

import './project.css'
import projects from '../../data/projects';
import Aquaplane from './aquaplane/Aquaplane';
import CreARtion from './creartion/CreARtion';
import FoodPool from './foodpool/FoodPool';


const Project = () => {
  const { projectId } = useParams();

  const selectedProject = projects.find(project => project.id === parseInt(projectId));
  let navigate = useNavigate();


  function goBack() {
    navigate(-1);
  }

  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    return null;
  }

  const renderSpecificProjectFunctions = () => {
    if (selectedProject.title === 'AQUAPLANE') {
      return <Aquaplane selectedProject={selectedProject} />;
    } else if (selectedProject.title === 'CreARtion') {
      return <CreARtion selectedProject={selectedProject} />;
    } else if (selectedProject.title === 'FoodPool')  {
      return <FoodPool selectedProject={selectedProject} />;
    }
  };
  

  return (
    <div>
      <ScrollToTopOnMount />
      <div className='menu_holder'>
        <Link onClick={goBack} className='icon_button'>
          <MdArrowBack
            size='24px'
          />
        </Link>
      </div>

      <div className='hero-container' />

      <div className='content'>
        <h1>{selectedProject.title}</h1>

        <div className="h-stack">
          <p>{selectedProject.typ}</p>
          <p className='bolder-text'>•</p>
          <p>{selectedProject.year}</p>
        </div>

        <div className="desc-tags-stack">
          <p>{selectedProject.introduction}</p>
          <div className='tags-stack'>
            <div className='tags_container'>
              <h2 className='caps-header small'>TAGS</h2>
              {
                selectedProject.tags.map((tag, index) => (
                  <div className='tag_container' key={index}>
                    <p className='tag' key={index}>{tag}</p>
                  </div>
                )
                )
              }
            </div>
            <div className='stack_container'>
              <h2 className='caps-header small'>STACK</h2>
              {
                Object.entries(selectedProject.stack).map(([Name, Icon], index) => (
                  <div className='stack-item' key={index}>
                    <Icon key={index} size={25} className='stack__icon' />
                    <p>{Name}</p>
                  </div>
                )
                )
              }
            </div>
          </div>
        </div>
      </div>

      <div className="v-space large"></div>

      <div className='problem_container'>
        <h2 className='caps-header small'>Problem</h2>
        <p>{selectedProject.problem}</p>
      </div>

      <div className="v-space medium"></div>

      <div className='vision_container'>
        <h2 className='caps-header small'>Vorgehensweise</h2>
        <p>{selectedProject.vision}</p>
      </div>

      <div className="v-space large"></div>

      <div className="full-width-background">
        <div className="v-space large"></div>
        {renderSpecificProjectFunctions()}
        <div className="v-space large"></div>
      </div>
    </div>
  )
}

export default Project