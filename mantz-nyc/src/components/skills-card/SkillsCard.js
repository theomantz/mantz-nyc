import './SkillCard.css'
import React, { useContext } from 'react'
import { Context } from "../../store/store";
import {
  ReactComponent as SkillsIcon
} from '../../assets/skillsIcon.svg'


import skills from './skills'

const SkillsCard = ({active}) => {

  const [state, dispatch] = useContext(Context)

  if (!active) {
    return (
      <div className="section-list-card-container">
        <div className="section-list-card-icon-container">
          <SkillsIcon className="section-list-icon" />
        </div>
        <span className="section-list-text">Skills</span>
      </div>
    );
  } else {
    const skillCardItems = skills.map(s => {
      return (
        <div className='skill-section-item'>
          <div className='skill-icon-container'>
            {s.icon}
          </div>
          <span className='skill-item-title'>{s.title}</span>
        </div>
      )
    })
    return (
      <div className='content-card-visible skill-card'>
        {skillCardItems}
      </div>
    )
  }
  
}

export default SkillsCard