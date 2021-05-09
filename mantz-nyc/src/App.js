import './App.css';
import React, { useState, useEffect } from 'react'
import keys  from './config/keys'
import axios from 'axios'
import SpotlightSearch from './components/spotlight-search/SpotlightSearch'

const App = () => {
  
  const [imageURL, setImageURL] = useState(null)

  const imageSize = window.innerWidth >= 650 ? 'landscape' : 'portrait'

  const defaultBackground = {backgroundColor: "white"}

  useEffect(() => {
    if(!imageURL) {
      fetchUrl()
    }
    window.addEventListener('resize', () => {
      fetchUrl()
    })
  })

  const fetchUrl = async () => {
    const res = await axios
      .get("https://api.unsplash.com/photos/random/", {
        headers: {
          Authorization: `Client-ID ${keys().unsplashAccessKey}`,
        },
        params: {
          content_filter: "high",
          orientation: imageSize,
          topics: "wallpapers",
        },
      })
      
    if (res.status === 200) {
      setImageURL(res.data.urls.full)
      console.log(res.data)
      return res.data.urls.full
    } else {
      console.log(res)
    }
  }

  if( imageURL ) {
      return (
        <div className="App" style={imageURL ? 
        {backgroundImage: `url(${imageURL})`} : 
        defaultBackground} 
        >
          <div id='BackgroundCenter'>
            <SpotlightSearch/>
          </div>
        </div>
    );
  } else {
    return (
      null
    )
  }
  
}

export default App;
