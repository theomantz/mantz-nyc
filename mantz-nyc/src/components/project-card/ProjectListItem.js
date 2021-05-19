import './ProjectCard.css'
import React, { useState, useEffect, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Context } from "../../store/store";
import { ACTIVE_CARD, ACTIVE_ICON } from '../../reducers/uiReducer';

const ProjectListItem = ({ active, collapsed, projectObject }) => {
  
  const { images, title, props } = projectObject
  const [state, dispatch] = useContext(Context)

  if( collapsed ) return null

  const imageHeight = ( (( state.dims.x * 0.5 ) - ( state.dims.y * 0.05 )) / 3 )
  
  const renderProps = Object.entries(props).map(([key, value]) => {
    
    let description
    if(typeof value === Array ) {
      let listValues = value.map(v => <li className='prop-value'>{v}</li>)
      description = <ul className='desc-list'>{listValues}</ul>
    } else {
      description = <span className="prop-value">{value}</span>;
    }
    
    return (
      <li key={uuidv4()} className='project-list-props'>
        <h3 className='prop-title'>{key}:</h3>
        {description}
      </li>
    )
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
              <div className="section-list-card-icon-container">
                <img src={images.square} alt='project-icon' className="section-list-icon" />
              </div>
              <span className="section-list-text">{title}</span>
            </div>
          </div>
        </li>
    );

  } else {
    
    return (
      <div className='project-list-item'
      >
        <div className='project-card-img-container'>
          <img 
            src={images.square} 
            className='project-card-list-img' 
            alt='project-card-icon'
            style={{
              height: ( imageHeight ),
              width: 'auto'
            }}           
          />
        </div>
        <div className='project-list-item-text'>
          <h1 className='project-list-item-title'>
            {title}
          </h1>
          <div className='project-list-item-description'>
            {renderProps}
          </div>
        </div>
      </div>
    )
  }
  
}

export default ProjectListItem