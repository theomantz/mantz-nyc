import React, { useState, useContext, useEffect } from 'react'
import { Context } from "../../store/store";
import ProjectListItem from './ProjectListItem'
import moobooSquare from '../../assets/MoobooSquare.png'
import wtrcoolrSquare from '../../assets/wtrcoolrSquare.png'
import drivingDogeSquare from '../../assets/drivingDogeSquare.png'
import {ReactComponent as WtrcoolrRect} from '../../assets/wtrcoolr.svg'
import { ReactComponent as MoobooRect } from "../../assets/moobooRect.svg";
import {ReactComponent as DrivingDogeRect} from '../../assets/drivingDogeRect.svg'
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
        Stack: "Ruby-on-Rails, React, Redux, JavaScript, HTML5, CSS3, PostgreSQL",
        tagline: 'A full featured, aquamarine themed, clone of the Pinterest web app',
        additional: 'Featuring a masonry style layout grid implemented using pure CSS. A pin and board creation feature allowing users to create pins and boards, save pins that they like to their boards, and delete pins that they have created. A follows feature which allows users to follow one another.'
      },
      links: {
        live: 
      },
      images: {
        square: moobooSquare,
        rect: <MoobooRect style={{ width: "100%", height: "auto" }} />,
      },
    },
    {
      title: "wtrcoolr",
      props: {
        Stack: "MongoDB, Express JS, React, Node JS",
        tagline: 'wtrcoolr is a video chat app which pairs users randomly based ',
        Type: "Social Media",
        Notes: ["wtrcoolr is a video chat app"],
      },
      images: {
        square: wtrcoolrSquare,
        rect: <WtrcoolrRect style={{ width: "100%", height: "auto" }} />,
      },
    },
    {
      title: "DrivingDoge",
      props: {
        tagline: '',
        Stack: "Node.JS / Vanilla JavaScript",
        Type: "Social Media Sentiment Analysis",
        Notes: ["DrivingDoge is a social media sentiment analysis app"],
      },
      images: {
        square: drivingDogeSquare,
        rect: <DrivingDogeRect style={{ width: "100%", height: "auto" }} />,
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