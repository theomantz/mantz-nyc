import './ProjectCard.css'
import React, { useState, useEffect, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Context } from "../../store/store";
import { ACTIVE_CARD, ACTIVE_ICON } from '../../reducers/uiReducer';

const ProjectListItem = ({ active, collapsed, projectObject }) => {
  
  const { images, title, props } = projectObject
  const [state, dispatch] = useContext(Context)

  if( collapsed ) return null

  const imageWidth = `${(window.innerHeight * 0.15)}px`
  
  const renderProps = Object.entries(props).map(([key, value]) => {
    
    let description
    if(typeof value === Array ) {
      let listValues = value.map(v => <li className={`prop-value ${key}`}>{v}</li>)
      description = listValues
    } else {
      description = <span className={`prop-value ${key}`}>{value}</span>;
    }
    
    return (
      <li key={uuidv4()} className={`project-list-props ${key}`}>
        {description}
      </li>
    );
  })
  
  const handleClick = (type) => {
    return (
      e => {
        dispatch({type: ACTIVE_CARD, payload: type})
        dispatch({type: ACTIVE_ICON, payload: title})
      }
    )
  }
  
  if( !active ) {

    return (
        <li key={uuidv4()} className='section-list-item project-item'>
          <div onClick={handleClick('Project Details')}>
            <div className="section-list-card-container">
              <div className="section-list-card-icon-container project-item">
                <img src={images.square} alt='project-icon' className="section-list-icon project-item" />
              </div>
              <span className="section-list-text project-item">{title}</span>
            </div>
          </div>
        </li>
    );

  } else {
    
    return (
      <div className='project-list-item'
      >
        <div className='project-card-img-container' style={{height: 'auto', width: '80%'}}>
          {images.rect}
        </div>
        <div className='project-list-item-text'>
          <ul className='project-list-item-description'>
            {renderProps}
          </ul>
        </div>
      </div>
    )
  }
  
}

export default ProjectListItem