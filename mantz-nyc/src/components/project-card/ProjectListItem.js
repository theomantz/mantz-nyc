import './ProjectCard.css'
import React, { useState, useEffect, useContext } from 'react'
import { Context } from "../../store/store";

const ProjectListItem = ({ active, collapsed, projectObject }) => {
  
  const { images, title, description } = projectObject
  const [state, dispatch] = useContext(Context)

  const imageHeight = ( (( state.dims.y * 0.85 ) - ( state.dims.y * 0.05 )) / 3 )
  
  if( !active ) {
    return (
      <div className='project-list-item'
      >
        <div className='project-card-img-container'>
          <img 
            src={images.square} 
            className='project-card-list-img' 
            alt='project-card-icon'
            style={{
              height: ( imageHeight * 0.5 ),
              width: 'auto'
            }}           
          />
        </div>
        <div className='project-list-item-text'>
          <h1 className='project-list-item-title'>
            {title}
          </h1>
          <p className='project-list-item-description'>
            {description}
          </p>
        </div>
      </div>
    )
  }
  
}

export default ProjectListItem