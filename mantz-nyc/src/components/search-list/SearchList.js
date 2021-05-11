import React, { useState, useContext } from 'react'
import { Context } from "../../store/store";
import './SearchList.css'
import { v4 as uuidv4 } from 'uuid'
import ContactCard from '../contact-card/ContactCard'
import ContactCardList from '../contact-card/ContactCardList'

const SearchList = ({ active }) => {

  const [state, dispatch] = useContext(Context)

  const [card, setCard] = useState(null)

  if(!active) return null

  const renderCard = () => {
    if(!card) return null
    if(card === 'Contact') {
      return <ContactCard />
    }
  };

  const handleClick = (type) => {
    return (
      e => setCard(type)
    )
  }
  
  const sectionHeaders = {
    'Projects': ['mooboo', 'wtrcoolr', 'DrivingDoge'],
    'About': ['About placeholder'],
    'Experience': ['Experience placeholder'],
    'Resume': ['Resume Card Placeholder'],
    'Contact': [
      <div onClick={handleClick("Contact")} >
        <ContactCardList />
      </div>
    ]
  }

  // add on click attribute to all list items which render the respective card





  const searchList = []
  
  Object.entries(sectionHeaders).forEach(([key, value]) => {
    searchList.push(
      <ul 
      key={uuidv4()}
      className='section-ul'
      >
        <li 
          className='section-ul-title'
          key={uuidv4()}
        >
          {key}
        </li>

        {value.map(v => {
          return ( 
            <li
              key={uuidv4()} 
              className='section-list-item'
            >{v}
            </li>
          )
        })}
      </ul>
    )
  })

  return (
    <div className='content-area-container'>
      <ul className='search-list-container'>
        {searchList}
      </ul>
      {renderCard(card)}
    </div>
  )
  
}

export default SearchList