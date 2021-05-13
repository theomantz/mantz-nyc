import React, { useContext } from 'react'
import { Context } from "../../store/store";
import './SearchList.css'
import { v4 as uuidv4 } from 'uuid'
import AboutCard from '../about-card/AboutCard'
import ContactCard from '../contact-card/ContactCard'
import { useSpring, animated, config } from "react-spring";
import {
  EXPANDED,
  ACTIVE_CARD,
  ACTIVE_ICON,
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
      width: vwToPixel(85)
    },
  });
  
  if(!active) return null

  let contentAreaStyle = {
    flexDirection: 'row',
    height: '100px'
  }

  const renderCard = () => {
    const { card } = state
    if(!card) return null
    let contentCard
    if(card === 'Contact') {
      contentCard = <ContactCard active={state.card === 'Contact'}/>
    } else if (card === 'About') {
      contentCard = <AboutCard active={state.card === 'About'} />
    }
    return (
      <animated.div style={contentSpring}>
        {contentCard}
      </animated.div>
    )
  };

  const handleClick = (type) => {
    return (
      e => {
        dispatch({type: ACTIVE_CARD, payload: type})
        dispatch({type: EXPANDED, payload: true })
        dispatch({type: ACTIVE_ICON, payload: type})
      }
    )
  }


  
  const sectionHeaders = {
    'About': [
      <div onClick={handleClick('About')}>
        <AboutCard />
      </div>
    ],
    'Work': ['Projects', 'Skills'],
    'Experience': ['Experience placeholder'],
    'Education': ['Education'],
    'Contact': [
      <div onClick={handleClick("Contact")} >
        <ContactCard />
      </div>
    ]
  }

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