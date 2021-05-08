import './App.css';
import React, { useState, useEffect } from 'react'
import keys  from './config/keys'
import axios from 'axios'
import SpotlightSearch from './components/spotlight-search/spotlight-search'

const App = () => {
  
  const [imageURL, setImageURL] = useState(null)

  const imageSize = window.innerWidth >= 650 ? 'landscape' : 'portrait'

  const useEffect = () => {
    fetchUrl()
  }

  const fetchUrl = () => {
    axios
      .get("https://api.unsplash.com/photos/random/", {
        headers: {
          Authorization: `Client-ID ${keys.unsplashAccessKey}`,
        },
        params: {
          content_filter: "high",
          orientation: imageSize,
          topics: "wallpapers",
        },
      })
      .then((res) => {
        debugger
        setImageURL(res.urls.full);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="App" style={{backgroundImage: `url(${imageURL})`}}>
      <header className="App-header">

      </header>
        <SpotlightSearch/>
    </div>
  );
  
}

export default App;
