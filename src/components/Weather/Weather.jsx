import React, {useState, useEffect, useContext} from 'react'
import PropTypes from 'prop-types'
import getTime from './date'
import './Weather.scss'
import { ThemeContext } from '../../contexts/ThemeProvider'

const Weather = ({city, onClose}) => {
    
    const key = 'df9a09b67acfebced052a719b4cfaea8'
    const [weatherForcast, setWeatherForcast] = useState(null)

    const {theme} = useContext(ThemeContext)

    useEffect(() => {
        const getData = async () => {
            const forcast = await getWeatherForcast(key,city);
            setWeatherForcast(forcast)
        }
        getData()
    }, [])
    
    const getWeatherForcast = async (key,city,lang='en') => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=${lang}&appid=${key}`)
        const data = await response.json()
        return data
    }


    return (
        <div className='weather-card'>
            {weatherForcast 
            && <div className="weather-card__content">
                    <button 
                        className='btn close' 
                        onClick={() => onClose(false)}
                        style={{backgroundColor: theme.color}}
                    >&larr;</button>
                    <p style={{color:'green'}} style={{color: theme.color}}>{getTime()}</p>
                    <h1>{weatherForcast.name}, {weatherForcast.sys.country}</h1>
                    <div className="weather-card__content__main-des" style={{borderRightColor: theme.color}}>
                        <img src={`http://openweathermap.org/img/wn/${weatherForcast.weather[0].icon}@2x.png`} alt="" />
                        <h2 className='weather-temp'>{weatherForcast.main.temp}°C</h2>
                        <p className="weather-des">{weatherForcast.weather[0].description}</p>
                    </div>
                    <div className="weather-card__content__detailed-des">
                        <p>{Math.round(weatherForcast.main.temp_max)}/{Math.round(weatherForcast.main.temp_min)}°C</p>
                        <p>Humidity: {weatherForcast.main.humidity}%</p>
                        <p>Pressure: {weatherForcast.main.pressure}hPa</p>
                        <p>wind speed: {weatherForcast.wind.speed} m/s</p>
                    </div>
               </div>}
        </div>
    )
}

Weather.propTypes = {

}

export default Weather
