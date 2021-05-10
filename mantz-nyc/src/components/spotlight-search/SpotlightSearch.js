import React, { useState, useEffect } from 'react'
import Typed from 'typed.js'
import SearchList from '../search-list/SearchList'
import { 
  ReactComponent as SearchIcon 
} from '../../assets/searchIcon.svg'

import './SpotlightSearch.css'

const SpotlightSearch = () => {

  const [active, setActive] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if(!active) {
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
    }
  })

  const activeIcon = () => {
    return (
      null
    )
  }
  
  return (
    <div id="spotlight-container">
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
          />
          {activeIcon()}
        </div>
    </div>
      <SearchList active={active} />
    </div>
  );
}

export default SpotlightSearch;