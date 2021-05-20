import React, { useContext, useEffect, useState } from 'react'
import { Context } from "../../store/store";
import './SearchList.css'
import { v4 as uuidv4 } from 'uuid'
import AboutCard from '../about-card/AboutCard'
import ProjectCard from '../project-card/ProjectCard'
import ContactCard from '../contact-card/ContactCard'
import { useSpring, animated, config } from "react-spring";
import {
  EXPANDED,
  ACTIVE_CARD,
  ACTIVE_ICON,
  SPOTLIGHT_REMS
} from '../../reducers/uiReducer'

const SearchList = ({ active }) => {

  // State hooks
  const [state, dispatch] = useContext(Context)

  const vhInnerToPixel = (value) => `${(( window.innerHeight - 50)* value) / 100}px`;
  const vwToPixel = (value) => `${(window.innerWidth * value) / 100}px`;

  const contentSpring = useSpring({
    config: {...config.stiff},
    from: {
      opacity: 0,
    },
    to: { 
      opacity: 1,
      height: vhInnerToPixel(85),
      width: state.card === 'Projects' ? vwToPixel(65) : vwToPixel(85)
    },
  });

  const handleClick = (type) => {
    return (e) => {
      dispatch({ type: ACTIVE_CARD, payload: type });
      dispatch({ type: EXPANDED, payload: true });
      dispatch({ type: ACTIVE_ICON, payload: type });
    };
  };

  const sectionHeaders = {
    About: [
      <div onClick={handleClick("About")}>
        <AboutCard />
      </div>,
    ],
    Work: [
      <div onClick={handleClick("Projects")}>
        <ProjectCard />
      </div>,
      "Skills",
    ],
    Experience: ["Experience placeholder"],
    Education: ["Education"],
    Contact: [
      <div onClick={handleClick("Contact")}>
        <ContactCard />
      </div>,
    ],
  };
  
  const remCalc = () => {

    let remCount = 0;
    Object.entries(sectionHeaders).forEach(([_, v]) => {
      remCount += 1;
      v.forEach((e) => remCount += 2);
    });

    dispatch({type: SPOTLIGHT_REMS, payload: remCount})
    
  }

  useEffect(() => {
    if(!state.spotlightRems) {
      remCalc()
    }
  })
  
  if(!active) return null

  let contentAreaStyle = {
    flexDirection: 'row',
    height: '100%'
  }

  const renderCard = () => {
    const { card } = state
    if(!card) return null
    let contentCard
    if(card === 'Contact') {
      contentCard = <ContactCard active={card === 'Contact'}/>
    } else if (card === 'About') {
      contentCard = <AboutCard active={card === 'About'} />
    } else if (card === 'Projects' || card === 'Project Details') {
      contentCard = (
        <ProjectCard
          active={card === "Projects" || card === "Project Details"}
        />
      );
    }
    return (
      <animated.div style={contentSpring}>
        {contentCard}
      </animated.div>
    )
  };
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
  
  if(state.ui) {
    contentAreaStyle = {
      flexDirection: 'column',
      height: '100%',
    }
  }

  const renderSearchList = () => {
    if(state.ui) return null
    return (
      <ul 
        className="search-list-container"
      >
        {searchList}
      </ul>
    );
  }

  return (
    <div 
      className='content-area-container'
      style={contentAreaStyle}
    >
      {renderSearchList()}
      {renderCard()}
    </div>
  )
  
}

export default SearchList