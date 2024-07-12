import sunny from '../assets/images/sunny.png'
import cloudy from '../assets/images/cloudy.png'
import rainy from '../assets/images/rainy.png'
import snowy from '../assets/images/snowy.png'
import { useState, useEffect } from 'react'



const WeatherApp = () => {

    const[data,setData]=useState({})
    const[city,setCity]=useState('')
    const api_key='e3cbfb4d5977e0836d2d9620549fb036'
    useEffect(()=>{
        const defaultWeather=async()=>{
            const defaultCity='kochi'
            const url =`https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&units=Metric&appid=${api_key}`
            const res = await fetch(url)
            const defaultData= await res.json()
            setData(defaultData)
        }
        defaultWeather()
    },[])
    
    const handleInputChnage =(e)=>{
        setCity(e.target.value)
    }
    const search=async()=>{
        if(city.trim()!==''){
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${api_key}`
        const res= await fetch(url)
        const searchData=await res.json()
        console.log(searchData)
        setData(searchData)
        }
    }

    const keyPress=(e)=>{
        if(e.key=='Enter'){
            search()
        }
    }
  return (
    <div className='container'>
        <div className="weather-app">
            <div className="search">
                <div className="search-top">
                    <i className="fa-solid fa-location-dot"></i>
                    <div className="location">{data.name}</div>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Enter Location" value={city} onChange={handleInputChnage} onKeyDown={keyPress} />
                    <i className="fa-solid fa-magnifying-glass" onClick={search}></i>
                </div>
            </div>
            <div className="weather">
                <img src={sunny} alt="sunny" />
                <div className="weather-type">{data.weather ? data.weather[0].main : null }</div>
                <div className="temp">{data.main ? `${Math.floor(data.main.temp)}C` : null}°</div>

            </div>
            <div className="weather-date">
                <p>Friday July 12</p>
            </div>
            <div className="weather-data">
                <div className="humidity">
                    <div className="data-name">Humidity</div>
                    <i className="fa-solid fa-droplet"></i>
                    <div className="data">{data.main ? data.main.humidity : null}%</div>
                </div>
                <div className="wind">
                <div className="data-name">wind</div>
                    <i className="fa-solid fa-wind"></i>
                    <div className="data">{data.wind ? data.wind.speed : null }</div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default WeatherApp