import './ContactCard.css'
import {
  ReactComponent as ContactIcon
} from '../../assets/contactIcon.svg'
import React, { useState } from 'react'

const ContactCard = () => {

  const [active, setActive] = useState(false)

  const contactCard = () => {
    if(!active) {
      return (
        <div className='contact-card-list-container'>
          <div className='contact-card-icon-container'>
            <ContactIcon className='contact-icon'/>
          </div>
          <span className='contact-text'>
            Contact Card
          </span>
        </div>
      )
    } else {
        return (
          <div className='contact-card-visible'>
          <img
          className='contact-card-image' 
          alt='avatar'/>
          <div className='contact-info-container'>
            
          </div> 
        </div>
      )
    }
  }

  return (
    <div
    className='contact-card'
    onClick={e => setActive(true)}
    >
      {contactCard()}
    </div>
  )
  
}

export default ContactCard