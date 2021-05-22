import React, { useState, useContext, useEffect } from 'react'
import { Context } from "../../store/store";
import ProjectListItem from './ProjectListItem'
import moobooSquare from '../../assets/MoobooSquare.png'
import wtrcoolrSquare from '../../assets/wtrcoolrSquare.png'
import drivingDogeSquare from '../../assets/drivingDogeSquare.png'
import moobooFeatureVideo from '../../assets/moobooFeatureVideo.mov'
import wtrcoolrFeature from '../../assets/wtrcoolrFeature.mov'
import drivingDogeFeature from '../../assets/drivingDogeFeature.mov'
import moobooRect from '../../assets/moobooRect.png'
import wtrcoolrRect from '../../assets/wtrcoolrRect.png'
import drivingDogeRect from '../../assets/drivingDogeRect.png'
import "./ProjectCard.css";
import {
  PROJECT_REMS
} from '../../reducers/uiReducer'

import { v4 as uuidv4 } from 'uuid'

import {
  ReactComponent as ProjectIcon
} from '../../assets/projectIcon.svg'

const ProjectCard = ({ active }) => {

  const projectsObject = [
    {
      title: "mooboo",
      props: {
        Stack:
          "Ruby-on-Rails, React, Redux, JavaScript, HTML5, CSS3, PostgreSQL",
        tagline:
          "A full featured, aquamarine themed, clone of the Pinterest web app",
      },
      links: {
        live: "http://mooboo.io",
        github: "https://github.com/theomantz/mooboo",
      },
      images: {
        square: moobooSquare,
        rect: moobooRect,
        featureImage: moobooFeatureVideo,
      },
    },
    {
      title: "wtrcoolr",
      props: {
        Stack: "MongoDB, Express JS, React, Node JS",
        tagline:
          "wtrcoolr is a Jazz Cup themed video chat app which pairs users randomly based on mutual membership in participating organizations",
      },
      links: {
        live: "https://wtrcoolr.herokuapp.com/#/",
        github: "https://github.com/theomantz/wtrcoolr",
      },
      images: {
        square: wtrcoolrSquare,
        rect: wtrcoolrRect,
        featureImage: wtrcoolrFeature,
      },
    },
    {
      title: "DrivingDoge",
      props: {
        Stack: "Node.JS, Vanilla JavaScript, D3 JS, TensorFlow JS",
        tagline:
          "DrivingDoge is a social media sentiment analysis app which scrapes Reddit for user sentiment around a list of assets and then visualizes the data using D3 JS",
      },
      links: {
        live: "http://drivingdoge.herokuapp.com/",
        github: "https://github.com/theomantz/drivingdoge",
      },
      images: {
        square: drivingDogeSquare,
        rect: drivingDogeRect,
        featureImage: drivingDogeFeature,
      },
    },
  ];

  const [state, dispatch] = useContext(Context)

  const remCalc = () => {
    
    let remCount = 0;

    projectsObject.forEach((obj) => {
      remCount += 2;
    });

    dispatch({ type: PROJECT_REMS, payload: remCount + 1});

  };

  useEffect(() => {
    if(!state.projectRems) {
      remCalc();
    }
  });

  const projectCards = projectsObject.map((obj, index) => {
    return (
      <ProjectListItem
        active={state.icon === obj.title}
        collapsed={false}
        projectObject={obj}
        key={uuidv4()}
      />
    );
  });

  const { card } = state
  
  if(!active) {
    return (
      <div className="section-list-card-container">
        <div className="section-list-card-icon-container">
          <ProjectIcon className='section-list-icon' />
        </div>
        <span className="section-list-text">Projects</span>
      </div>
    );
  } else if (card === 'Projects') {

    return (
 
      <div className='project-page-container'>
        <ul className='section-ul'>
          <li className='section-ul-title'>
            Applications
          </li>
          {projectCards}
        </ul>
      </div>

    )

  } else if (card === 'Project Details') {
    const obj = projectsObject.find(o => o.title === state.icon )
    return (
      <ProjectListItem
        active={state.icon === obj.title}
        collapsed={false}
        projectObject={obj}
        key={uuidv4()}
      />
    );
  }
}

export default ProjectCard