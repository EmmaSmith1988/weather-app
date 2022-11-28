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
    <div className="bg-weather bg-cover lg:w-1/2 h-40 lg:h-96 text-center rounded-2xl text-gray-800">
        <p className='lg:p-16 font-sans text-2xl lg:text-4xl font-bold'>Good {greeting}</p>
        {weather && <p className='text-xl lg:text-2xl'>The current weather in {weather.name} is {weather.temperature} degrees</p>}
        {weather && <img className='m-auto lg:w-36' src={weather.image} alt="weather icon" />}
      </div>
  )
}

export default Weather