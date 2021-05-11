import './ContactCard.css'
import headshot from '../../assets/headshot.jpg'

const ContactCard = () => {

  return (
      <div className='contact-card-visible'>
        <img
          className='contact-card-image' 
          alt='avatar'
          src={headshot}
        />
        <div className='contact-info-container'>
          
        </div> 
    </div>
  )
}

export default ContactCard