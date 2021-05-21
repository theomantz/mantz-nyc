import './App.css';
import React, { useState, useEffect } from "react";
import keys  from './config/keys'
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
      return res.data.urls.full
    } else {
      console.log(res)
    }
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
