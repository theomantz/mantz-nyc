import './App.css';
import React, { useState, useEffect } from "react";
import {
  portrait,
  landscape
} from './assets/backgroundPhotos/photos'
import Store from './store/store'
import SpotlightSearch from './components/spotlight-search/SpotlightSearch'

const App = () => {
  
  const [imageURL, setImageURL] = useState(null)


  let imageSize = window.innerWidth >= 650 ? 'landscape' : 'portrait'
  let orientation = imageSize === 'landscape' ? landscape : portrait

  useEffect(() => {

      imageSize = window.innerWidth >= 650 ? "landscape" : "portrait";
      orientation = imageSize === "landscape" ? landscape : portrait;

    fetchUrl()
    
  }, [])


  const fetchUrl = () => {
    let length = orientation.length
    let index = Math.floor( length * Math.random() )
    setImageURL(orientation[index].urls.regular)
  }

  if( imageURL ) {
      return (
        <Store>
          <div 
            className="App safari_only" 
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
