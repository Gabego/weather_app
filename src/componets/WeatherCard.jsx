import React from 'react'
import { useState } from 'react'

const WeatherCard = ({ weather }) => {
  const tempC = ((Math.round((weather?.main.temp - 273.15) * 10)) / 10)
  const tempF = (Math.round(((tempC * (9 / 5)) + 32) * 10) / 10)



  const [isCen, setIsCen] = useState(false)
  const handleBoolean = () => setIsCen(!isCen)


  console.log(weather)
  return (
    <article className='card'>
      <div className='card__title'>Weather App</div>
      <div className='card_name'>{`${weather?.name}, ${weather?.sys.country}`}</div>

      <div>
        {/* <img className='img__weather' src={weather && `../public/${weather?.weather[0].icon}.png`} alt="" /> */}
        <img className='img__weather' src={weather && `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
      </div>
      <div><span className='card__description'>{weather?.weather[0].description}</span></div>

      <div><span className='card__data'>Wind Speed: </span>{`${weather?.wind.speed}m/s`}</div>
      <div><span className='card__data'>Clouds: </span>{`${weather?.clouds.all}%`}</div>
      <div><span className='card__data'>Pressure: </span>{`${weather?.main.pressure}hPa`}</div>

      <div>
        {
          isCen ?
            <div className='card__temp'>{`${tempF} ⁰F`}</div>
            :
            <div className='card__temp'>{`${tempC} ⁰C`}</div>
        }
      </div>
      <div>
        <button className='card__button' onClick={handleBoolean}>
          {
            isCen ?
              'Change to ⁰C'
              :
              'Change to ⁰F'
          }

        </button>
      </div>





    </article >


  )
}

export default WeatherCard