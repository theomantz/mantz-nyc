
import './SearchList.css'
import { v4 as uuidv4 } from 'uuid'
import ContactCard from '../contact-card/ContactCard'

const SearchList = ({ active }) => {

  if(!active) return null
  
  const sectionHeaders = {
    'Projects': ['mooboo', 'wtrcoolr', 'DrivingDoge'],
    'About': ['About placeholder'],
    'Experience': ['Experience placeholder'],
    'Resume': ['Resume Card Placeholder'],
    'Contact': [<ContactCard />]
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
            <div 
              className='list-item-outer-container'
              key={uuidv4()}>
              <li
              key={uuidv4()} 
              className='section-list-item'
              >{v}
              </li>
            </div>
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