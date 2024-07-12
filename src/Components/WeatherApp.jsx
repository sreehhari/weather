import sunny from '../assets/images/sunny.png'
import cloudy from '../assets/images/cloudy.png'
import rainy from '../assets/images/rainy.png'
import snowy from '../assets/images/snowy.png'
import { useState } from 'react'


const WeatherApp = () => {
    const[data,setData]=useState({})
    const api_key='e3cbfb4d5977e0836d2d9620549fb036'
    const city='London'
    const search=async()=>{
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
        const res= await fetch(url)
    }
  return (
    <div className='container'>
        <div className="weather-app">
            <div className="search">
                <div className="search-top">
                    <i className="fa-solid fa-location-dot"></i>
                    <div className="location">Kochi</div>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Enter Location" />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            <div className="weather">
                <img src={sunny} alt="sunny" />
                <div className="weather-type">Clear</div>
                <div className="temp">38°C</div>

            </div>
            <div className="weather-date">
                <p>Friday July 12</p>
            </div>
            <div className="weather-data">
                <div className="humidity">
                    <div className="data-name">Humidity</div>
                    <i className="fa-solid fa-droplet"></i>
                    <div className="data">35%</div>
                </div>
                <div className="wind">
                <div className="data-name">wind</div>
                    <i className="fa-solid fa-wind"></i>
                    <div className="data">3kmph</div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default WeatherApp