import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import keys from './components/keys' 
import { VideoS } from './components/VideoS';
import { VideoR } from './components/VideoR';
import { VideoC } from './components/VideoC';
import './App.css'

const api = {
  key: keys.API_KEY,
  base: keys.BASE_URL
}

function App() {
  
  const databuild = (d) =>{
    let date = String(new window.Date());
    date = date.slice(3, 15);
    return date;
  }

  const [query,setQuery] = useState("");
  const [weather,setWeather] =useState("");
  const search = (e) =>{
    if(e.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) =>{
        setQuery("")
        setWeather(result)
        console.log(result)
      })
    }
  }

  return (
      <div className="app">
        {/* <div className="overlay"></div> */}
        {/* <video src={videoBg} autoPlay loop muted></video> */}
        {typeof weather.main != "undefined" 
        ? weather.weather[0].main == "Clouds"
        ?<VideoS ></VideoS> 
        :<VideoR></VideoR>
        :<VideoC></VideoC>}
        {/* <VideoC></VideoC> */}
        <div className="search">
          <input
            onChange={(e) => setQuery(e.target.value)}
            placeholder='City...'
            value={query}
            onKeyDown={search}
            type="text" />
        </div>
        {typeof weather.main != "undefined" ?(
          <div className="container">
            <div className="top">
              <div className="location">
                <p>{weather.name} , {weather.sys.country}</p>
              </div>
              <div className="temp">  
                <h1>{weather.main.temp} °C</h1>
                <h2>{weather.main.temp_min} ~ {weather.main.temp_max} </h2>
              </div>
              <div className="description">
                <h2>{weather.weather[0].main}</h2>
              </div>
            </div>
            <div className="bottom">
              <div className="feel">
                <p>Feel Like</p>
                <p>{weather.main.feels_like} °C</p>
              </div>
              <div className="humidity">
                <p>Humidity</p>
                <p>{weather.main.humidity} RH</p>
              </div>
              <div className="windspeed">
                <p>Wind Speed</p>
                <p>{weather.wind.speed} m/s</p>
              </div>
            </div>
          </div>
          ):(
          ""
        )}
    </div>
  );
}

export default App
