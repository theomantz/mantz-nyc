import './AboutCard.css'
import React from "react";

import headshot from "../../assets/headshot.jpg";

import { ReactComponent as AddressIcon } from "../../assets/addressIcon.svg";
import { ReactComponent as GithubIcon } from "../../assets/githubIcon.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/linkedinIcon.svg";
import { ReactComponent as AngellistIcon } from "../../assets/angellistIcon.svg";

const AboutPage = ({active}) => {

  if(!active) {
    return (
      <div className="section-list-card-container">
        <div className="section-list-card-icon-container">
          <AddressIcon className="section-list-icon" />
        </div>
        <span className="section-list-text">About</span>
      </div>
    );
  } else {
    return (
      <div className="contact-card-visible content-card-visible">
        <img className="contact-card-image" alt="avatar" src={headshot} />
        <strong className="about-card-name">Theo Mantz</strong>
        <div className="contact-info-container">
          <ul className="name-location-container">
            <p className='about-card-text'>
              I am a passionate full stack developer and engineer who is equal parts aethetically and technically minded
            </p>
            <p className='about-card-text'>
              With an extensive background in Project Management and Engineering Design, I am an individual who is passionate about merging all aspects of sound design into a beautfully crafted product from the front to the back end
            </p>
          </ul>
          <div className="contact-card-info">
            <span className="contact-subtext">Let's Connect!</span>
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
    )
  }
};

export default AboutPage;
