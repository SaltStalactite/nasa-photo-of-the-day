import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Photo from './Photo'


function App() {

  const [nasaData, setNasaData] = useState([])

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=WM8HGgEkFZvr8UCpth0UL75qYckZOHzs0QkP3V6I')
      .then(res => {
        console.log(res)
        setNasaData(res.data)
      })
      .catch(err => {
        console.error(err)
      })
      .finally(() => {
        console.log('axios apod api get resuqest made')
      })
  }, [])

  console.log(nasaData)

  return (
    <div className="App">
      <Photo nasaData={nasaData} />
    </div>
  );
}

export default App;
