import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import WeatherCard from './componets/WeatherCard'
import Loading from './componets/Loading'
import video_fondo from '/video_fondo.mp4'


function App() {
  //Esta es la funcion que se ejecuta cuando lega la informacion de nuestra ubicacion
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()

  useEffect(() => {
    const success = pos => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }

      setCoords(obj)
    }

    //esto hace el llamdo a la API del navegador, para usar la ubicacion actual
    navigator.geolocation.getCurrentPosition(success)
  }, [])


  console.log(coords)

  //-------------peticion del clima---------------//
  useEffect(() => {
    if (coords) {
      const APIKEY = '725102c9f30d61a331726f1bc1908539'
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`;
      axios.get(URL)
        .then(res => setWeather(res.data))
        .catch(err => console.log(err))
    }
  }, [coords])


  return (

      <div className='app'>
        <video src={video_fondo} autoPlay loop muted/>
        <div className='content'>
          {
          weather ?
            <WeatherCard weather={weather} />
            :
            <Loading />
        }
        </div>
      </div>






  )
}

export default App
