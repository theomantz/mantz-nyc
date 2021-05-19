import React, { useState, useEffect } from 'react'
import ProjectListItem from './ProjectListItem'
import moobooSquare from '../../assets/MoobooSquare.png'

import {
  ReactComponent as ProjectIcon
} from '../../assets/projectIcon.svg'

const ProjectCard = ({ active }) => {

  const projectsObject = [
    {
      title: 'mooboo',
      description: 'mooboo is a full stack clone of the popular social media platform Pinterest. mooboo is built with Ruby on Rails on the backend, with a PostGres SQL Database, and a React-Redux frontend',
      images: {
        square: moobooSquare,
      },
    },
  ];

  const [expanded, setExpanded] = useState(null)
  const [activeCard, setActiveCard] = useState(null)

  if(!active) {
    return (
      <div className="section-list-card-container">
        <div className="section-list-card-icon-container">
          <ProjectIcon className='section-list-icon' />
        </div>
        <span className="section-list-text">Projects</span>
      </div>
    );
  } else if (!expanded) {

    const projectCards = projectsObject.map(( obj, index ) => {
      return (
        <ProjectListItem active={false} collapsed={false} projectObject={obj} />
      );
    })

    return (
      <div className='project-page-container'>
        {projectCards}
      </div>
    )

  }
  
  
}

export default ProjectCard