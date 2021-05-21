import './EducationCard.css'

import education from './education'

import { 
  ReactComponent as EducationIcon 
} from '../../assets/educationIcon.svg'

import { v4 as uuidv4 } from 'uuid'

const EducationCard = ({active}) => {


  if(!active) {
    return (
      <div className="section-list-card-container">
        <div className="section-list-card-icon-container">
          <EducationIcon className="section-list-icon" />
        </div>
        <span className="section-list-text">Education</span>
      </div>
    );
  } else {

    const educationObject = education.map((e) => {
      return (
        <div className="experience-container">
          <fieldset className="experience-fieldset">
            <legend className="experience-title">{e.institution}</legend>
            <div className="experience-subtitle">
              <span className="company">{e.degree}</span>
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
    });

    return (
      <div className='content-card-visible'>
        {educationObject}
      </div>
    )
  }
  
}

export default EducationCard