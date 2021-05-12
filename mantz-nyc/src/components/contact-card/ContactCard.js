import './ContactCard.css'
import headshot from '../../assets/headshot.jpg'
import {
  ReactComponent as LocationIcon
} from '../../assets/locationIcon.svg'
import {
  ReactComponent as EmailIcon
} from '../../assets/emailIcon.svg'
import {
  ReactComponent as GithubIcon
} from '../../assets/githubIcon.svg'
import {
  ReactComponent as LinkedinIcon
} from '../../assets/linkedinIcon.svg'
import {
  ReactComponent as AngellistIcon
} from '../../assets/angellistIcon.svg'

const ContactCard = () => {

  return (
    <div className="contact-card-visible content-card-visible">
      <img className="contact-card-image" alt="avatar" src={headshot} />
      <div className="contact-info-container">
        <strong className="contact-card-name">Theo Mantz</strong>

        <ul className="basic-contact-info">
          <span className="contact-subtext">Let's Get in Touch:</span>
          <li
            className="contact-info-item location"
            onClick={() =>
              window.open(
                "https://www.google.com/maps/@40.7136343,-74.0075105,15.81z",
                "_blank"
              )
            }
          >
            <LocationIcon id="location-icon" />
            <span className="contact-card-text">New York, NY</span>
          </li>
          <li
            className="contact-info-item email"
            onClick={() =>
              window.open(
                "https://www.google.com/maps/@40.7136343,-74.0075105,15.81z",
                "_blank"
              )
            }
          >
            <EmailIcon id="email-icon" />
            <span className="contact-card-text">theo@mantz.nyc</span>
          </li>
        </ul>
        <div className="contact-card-info">
          <span className="contact-subtext">Let's Connect:</span>
          <ul className="socials-list">
            <li className="socials-link-container">
              <GithubIcon
                id="github-link-icon"
                className="socials-link-icon"
                onClick={() =>
                  window.open("https://github.com/theomantz/", "_blank")
                }
              />
            </li>
            <li className="socials-link-container">
              <LinkedinIcon
                id="linkedin-link-icon"
                className="socials-link-icon"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/theo-mantz/",
                    "_blank"
                  )
                }
              />
            </li>
            <li className="socials-link-container">
              <AngellistIcon
                id="angellist-link-icon"
                className="socials-link-icon"
                onClick={() =>
                  window.open("https://angel.co/u/theo-mantz", "_blank")
                }
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactCard