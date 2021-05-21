import './ExperienceCard.css'

import experience from './experience'

import { v4 as uuidv4 } from 'uuid'

import {
  ReactComponent as ExperienceIcon
} from '../../assets/experienceIcon.svg'

const ExperienceCard = ({active}) => {

  if (!active) {
    return (
      <div className="section-list-card-container">
        <div className="section-list-card-icon-container">
          <ExperienceIcon className="section-list-icon" />
        </div>
        <span className="section-list-text">Experience</span>
      </div>
    );
  } else {

    const experienceObject = experience.map(e => {
      return (
        <div className="experience-container" key={uuidv4()}>
          <fieldset className='experience-fieldset'>
            <legend className="experience-title">{e.title}</legend>
            <div className="experience-subtitle">
              <span className="company">{e.company}</span>
              <span className="duration">
                {e.duration.start} - {e.duration.end}
              </span>
            </div>
            <div className="experience-bullets">
              <ul className="experience-list">
                {e.bullets.map((b) => (
                  <li className="bullet" key={uuidv4()}>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </fieldset>
        </div>
      );
    })
    
    return (
      <div className='content-card-visible experience'>
        {experienceObject}
      </div>
    )
  }
  
}

export default ExperienceCard