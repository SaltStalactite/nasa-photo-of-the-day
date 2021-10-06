import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Photo from './Photo'


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
      .finally(() => {
        console.log('axios apod api get request made')
      })
  }, [])

  // const submit = (event) => {
  //   event.preventDefault()

  // }
  const change = (event) => {
    console.log(event.target.value)
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
      <Photo change={change} nasaData={nasaData} date={date} />
    </div>
  );
}

export default App;
