import React, { useState, useEffect, useContext } from 'react'
import Typed from 'typed.js'
import SearchList from '../search-list/SearchList'
import { Context } from '../../store/store'
import {
  ReactComponent as SearchIcon 
} from '../../assets/searchIcon.svg'

import './SpotlightSearch.css'

const SpotlightSearch = () => {

  
  const [state, dispatch] = useContext(Context)
  const [active, setActive] = useState(false);
  const [search, setSearch] = useState('');
  const [firstScale, setFirstScale] = useState({})

  useEffect(() => {
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
    return (
      null
    )
  }
  
  return (
    <div 
      id="spotlight-container"

    >
      <div id="spotlight-inner">
        <div id="searchIcon-container">
          <SearchIcon id="searchIcon" />
        </div>
        <div id="inputArea-container">
          <input 
            type="text" 
            id="inputArea"
            placeholder='Search'
            value={search}
            onChange={
              e => setSearch(e.currentTarget.value)
            }
            onClick={e => setActive(true)}
          />
          {activeIcon()}
        </div>
    </div>
      <SearchList active={active} />
    </div>
  );
}

export default SpotlightSearch;