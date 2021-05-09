
import './SearchList.css'
import { v4 as uuidv4 } from 'uuid'
import ProjectCard from '../project-card/ProjectCard'
import AboutCard from '../about-card/AboutCard'

const SearchList = ({ active }) => {

  if(!active) return null
  
  const sectionHeaders = {
    'Projects': ['mooboo', 'wtrcoolr', 'DrivingDoge'],
    'About': ['About placeholder'],
    'Experience': ['Experience placeholder'],
    'Resume': ['Resume Card Placeholder'],
    'Contact': ['Contact Card']
  }

  const searchList = []
  
  Object.entries(sectionHeaders).forEach(([key, value]) => {
    searchList.push(
      <ul 
      key={uuidv4()}
      className='section-ul'
      >
        <li 
        className='section-ul-title'
        key={uuidv4()}>{key}</li>
        {value.map(v => {
          return ( 
            <li 
            key={uuidv4()} 
            className='section-list-item'>{v}</li> 
          )
        })}
      </ul>
    )
  })

  return (
    <ul className='search-list-container'>
      {searchList}
    </ul>
  )
  
}

export default SearchList