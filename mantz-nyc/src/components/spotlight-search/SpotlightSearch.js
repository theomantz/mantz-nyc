import React, { useState, useEffect, useContext } from 'react'
import Typed from 'typed.js'
import SearchList from '../search-list/SearchList'
import { Context } from '../../store/store'
import { useSpring, config, animated } from "react-spring";
import {
  DIMS,
} from '../../reducers/uiReducer'
import {
  ReactComponent as SearchIcon 
} from '../../assets/searchIcon.svg'
import {
  ReactComponent as ContactIcon 
} from '../../assets/contactIcon.svg'
import './SpotlightSearch.css'


const SpotlightSearch = () => {

  
  const [state, dispatch] = useContext(Context)
  const [active, setActive] = useState(false);
  const [search, setSearch] = useState('');
  
  const vhToPixel = value => `${(window.innerHeight * value) / 100}px`
  const vwToPixel = value => `${(window.innerWidth * value) / 100}px`

  let springConfig
  if (!active && !state.ui) {
    springConfig = {
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
        height: '50px',
        width: vwToPixel(50)
      }
    }
  } else if (active && !state.ui) {
    springConfig = {
      config: {...config.stiff},
      from: {
        height: '50px',
        width: vwToPixel(50)
      },
      to: {
        height: '300px',
        width: vwToPixel(50)
      }
    }
  } else if (state.ui) {
    springConfig = {
      config: {...config.stiff},
      to: {
        height: vhToPixel(85),
        width: vwToPixel(85)
      }
    }
  }

  let spotlightContainerSpring = useSpring(springConfig);

  useEffect(() => {
    getWindowDimensions()
    const typed = new Typed("#inputArea", {
      strings: [
        "Software Engineer",
        "Software Developer ",
        "Good jokes",
        "Theo Mantz",
      ],
      smartBackspace: true,
      typeSpeed: 50,
      backSpeed: 50,
      onComplete: (self) => {
        setSearch("Theo Mantz");
        setActive(true);
      },
    });
    return () => {
      typed.destroy()
    }
  }, [])

  const activeIcon = () => {
    switch(state.icon) {
      case "Contact":
        return <ContactIcon id="input-icon"/>
      default:
        return null
    }
  }

  const getWindowDimensions = () => {
    const root = document.querySelector('#root')
    const window = root.getBoundingClientRect()

    dispatch({type: DIMS, payload: { x: window.width, y: window.height } } )
  }

  let inputArea;
  if( !state.ui ) {
    inputArea = (
      <input
        type="text"
        id="inputArea"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
        onClick={(e) => setActive(true)}
      />
    );
  } else {
    inputArea = (
      <span
        id='inputArea'>
        Theo Mantz
      </span>
    )
  }

  return (
    <animated.div 
      id="spotlight-container"
      style={spotlightContainerSpring}
    >
      <div id="spotlight-inner">
        <div id="searchIcon-container">
          <SearchIcon id="searchIcon" />
        </div>
        <div id="inputArea-container">
          {inputArea}
          {activeIcon()}
        </div>
    </div>
      <SearchList active={active} />
    </animated.div>
  );
}

export default SpotlightSearch;