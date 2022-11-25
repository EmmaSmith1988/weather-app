import './Weather.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import useGeolocation from "react-hook-geolocation";
type WeatherObj = {
  name: string,
  temperature: number,
  image: string,
  time: number
}

const Weather = () => {

  
    const [weather, setWeather] = useState<WeatherObj>()

    const geolocation = useGeolocation()

    useEffect(() => {
    const getWeather = () => {
            axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${geolocation.latitude},${geolocation.longitude}&aqi=no`)
            .then((res) => {
            setWeather({
              name: res.data.location.name,
              temperature: res.data.current.temp_c,
              image: res.data.current.condition.icon,
              time: parseInt(res.data.location.localtime.slice(-5,-3)) 
            })
            })
        }

        
          getWeather()   
        }, [geolocation])
    
        let greeting: string = ''
  if (weather && weather.time < 12) {
    greeting = 'morning'
  }
  if (weather && (weather.time >=12 && weather.time < 17)) {
    greeting = 'afternoon'
  }
  if (weather && (weather.time >= 17 && weather.time < 24)) {
    greeting = 'evening'
  }


  return (
    <div className="weather">
   
        <h1 className='weather-title'>Weather App</h1>
        <p className='weather-text'>Good {greeting}, how are you?</p>
        {weather && <p className='weather-text'>The current weather in {weather.name} is {weather.temperature} degrees</p>}
        {weather && <img className='weather-image' src={weather.image} alt="weather icon" />}
      </div>
  )
}

export default Weather