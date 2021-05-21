import './App.css';
import React, { useState, useEffect } from "react";
import {
  portrait,
  landscape
} from './assets/backgroundPhotos/photos'
import axios from 'axios'
import Store from './store/store'
import SpotlightSearch from './components/spotlight-search/SpotlightSearch'

const App = () => {
  
  const [imageURL, setImageURL] = useState(null)


  const imageSize = window.innerWidth >= 650 ? 'landscape' : 'portrait'

  useEffect(() => {

    fetchUrl()

    window.addEventListener('resize', () => {
      fetchUrl()
    })
    
  }, [])

  let orientation = imageSize === 'landscape' ? landscape : portrait

  const fetchUrl = () => {
    let length = orientation.length
    let index = Math.floor( length * Math.random() )
    setImageURL(orientation[index].urls.regular)
  }

  if( imageURL ) {
      return (
        <Store>
          <div 
            className="App" 
            style={{backgroundImage: `url(${imageURL})`}}>

            <div id='BackgroundCenter'>
              <SpotlightSearch/>
            </div>

          </div>
        </Store>
    );
  } else {
    return (
      null
    )
  }
  
}

export default App;
