import './ExperienceCard.css'

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
    return (
      <div className='content-card-visible'>

      </div>
    )
  }
  
}

export default ExperienceCard