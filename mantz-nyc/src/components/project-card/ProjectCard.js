import React, { useState, useContext } from 'react'
import { Context } from "../../store/store";
import ProjectListItem from './ProjectListItem'
import moobooSquare from '../../assets/MoobooSquare.png'
import wtrcoolrSquare from '../../assets/wtrcoolrSquare.png'
import drivingDogeSquare from '../../assets/drivingDogeSquare.png'

import { v4 as uuidv4 } from 'uuid'

import {
  ReactComponent as ProjectIcon
} from '../../assets/projectIcon.svg'

const ProjectCard = ({ active }) => {

  const projectsObject = [
    {
      title: "mooboo",
      props: {
        Stack: "Ruby-on-Rails / React-Redux",
        Type: "Social Media",
        Notes: ["mooboo is a Pinterest clone"],
      },
      images: {
        square: moobooSquare,
      },
    },
    {
      title: "wtrcoolr",
      props: {
        Stack: "MERN",
        Type: "Social Media",
        Notes: ["wtrcoolr is a video chat app"],
      },
      images: {
        square: wtrcoolrSquare,
      },
    },
    {
      title: "DrivingDoge",
      props: {
        Stack: "Node.JS / Vanilla JavaScript",
        Type: "Social Media Sentiment Analysis",
        Notes: [
          "DrivingDoge is a social media sentiment analysis app"
        ],
      },
      images: {
        square: drivingDogeSquare,
      },
    },
  ];

  const [state, dispatch] = useContext(Context)

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