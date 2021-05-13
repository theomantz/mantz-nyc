import {
  ReactComponent as ProjectIcon
} from '../../assets/projectIcon.svg'

const ProjectCard = ({ active }) => {

  if(!active) {
    return (
      <div className="section-list-card-container">
        <div className="section-list-card-icon-container">
          <ProjectIcon className='section-list-icon' />
        </div>
        <span className="section-list-text">Projects</span>
      </div>
    );
  } else {
    return (
      <div className='project-card-container'>
        
      </div>
    )
  }
  
  
}

export default ProjectCard