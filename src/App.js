import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Title from "./Title";
import Photo from './Photo';
import Info from './Info';

function App() {

  const today = new Date().toISOString().slice(0, 10)
  const [nasaData, setNasaData] = useState([])
  const [date, setDate] = useState(today)
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=WM8HGgEkFZvr8UCpth0UL75qYckZOHzs0QkP3V6I')
      .then(res => {
        setNasaData(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])


  const change = (event) => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=WM8HGgEkFZvr8UCpth0UL75qYckZOHzs0QkP3V6I&date=${event.target.value}`)
      .then(res => {
        setNasaData(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }

  return (
    <div className="App">
      <Title nasaData={nasaData} />
      <Photo change={change} nasaData={nasaData} date={date} />
      <Info nasaData={nasaData} />
    </div>
  );
}

export default App;
