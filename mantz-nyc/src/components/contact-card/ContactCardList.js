import { ReactComponent as ContactIcon } from "../../assets/contactIcon.svg";

const ContactCardList = () => {
  return (
    <div className="contact-card-list-container">
      <div className="contact-card-icon-container">
        <ContactIcon className="contact-icon" />
      </div>
      <span className="contact-text">Contact Card</span>
    </div>
  );
};


export default ContactCardList