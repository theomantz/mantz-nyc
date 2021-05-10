import React, { useState } from 'react'
import './SearchList.css'
import { v4 as uuidv4 } from 'uuid'
import ContactCard from '../contact-card/ContactCard'
import ContactCardList from '../contact-card/ContactCardList'

const SearchList = ({ active }) => {

  const [card, setCard] = useState()

  if(!active) return null

  const renderCard = (card) => {
    switch (card) {
      case "Contact":
        return <ContactCard />;
      default:
        return null;
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
    'Contact': [<ContactCardList onClick={handleClick('Contact')} />]
  }

  // add on click attribute to all list items which render the respective card





  const searchList = []
  
  Object.entries(sectionHeaders).forEach(([key, value]) => {
    searchList.push(
      <ul 
      key={uuidv4()}
      className='section-ul'
      >

        <li className='section-ul-title'
        key={uuidv4()}>{key}</li>

        {value.map(v => {
          return ( 
            <div 
              className='list-item-outer-container'
              key={uuidv4()}
            >
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
    <div className='content-area-container'>
      <ul className='search-list-container'>
        {searchList}
      </ul>
      {renderCard(card)}
    </div>
  )
  
}

export default SearchList