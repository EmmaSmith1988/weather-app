import { useEffect, useState } from 'react';
import './App.css';
import FetchWrapper from './fetch-wrapper';

function App() {
  

  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [temperature, setTemperature] = useState(0)
  const [location, setLocation] = useState('')
  const [time, setTime] = useState(0)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(() => {
        return position.coords.latitude
      })
      setLongitude(() => {
        return position.coords.longitude
      })
    })
    const API = new FetchWrapper('http://api.weatherapi.com/v1/forecast.json?')
    API.get(`key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${latitude},${longitude}&aqi=no`)
    .then(data => {
      setTemperature(() => {
        return data.current.temp_c
      })
      setLocation(() => {
        return data.location.name
      })
      setTime(() => {
        return parseInt(data.location.localtime.slice(-5,-3))
      })
    })
    .catch(error => {
      console.error(error)
    })
  }, [latitude, longitude])

  let greeting: string = ''
  if (time < 12) {
    greeting = 'morning'
  }
  if (time >=12 && time < 17) {
    greeting = 'afternoon'
  }
  if (time >= 17 && time < 24) {
    greeting = 'evening'
  }
  
  return (
    <div className="App">
      <h1>Weather App</h1>
      <p>Good {greeting}, how are you?</p>
      <p>The current weather in {location} is {temperature} degrees</p>
      
    </div>
  );
}

export default App;
