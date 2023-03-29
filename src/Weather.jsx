import { useState, useEffect } from 'react';
import './App.css';

function Weather({latitude, longitude, locationFound,setWeatherData, setLocation, weather, location}) {
    const [updated, setUpdated] = useState(false);

    const date = new Date();
    const options = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
    };
    const timeString = date.toLocaleString('en-US', options);

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=009d68bcca854d40a8f131818232903&q=${latitude}, ${longitude}&aqi=no`);
          const data = await response.json();
          setWeatherData(data.current);
          setLocation(data.location)
          console.log(weather)
          setUpdated(true)
      };
          fetchData();
        }, [])


  return (
    <div>{updated == true ? 
        <div className="Weather">
            <div style={{display: 'flex', justifyContent:'space-between'}}>
                <div className='location'>
                    <h1 style={{marginBottom: "1%", }}>{timeString}</h1>
                    <h1 style={{margin: "-1%"}}>{location.name}, {location.region}</h1>
                    <p>{location.country}</p>
                </div>

                <div className='weatherbox'>
                    <img src={weather.condition.icon} height='50%' style={{float: 'right', padding: "0%", margin: ".5%"}}/>
                    <div style={{float: 'right'}}>
                        <h2 style={{marginTop: "-1%"}}>{weather.condition.text}</h2>
                        <h4>{weather.temp_f} F, <span style={{color: 'rgb(163, 162, 162)'}}>{weather.temp_c} C</span> </h4>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    : ""}</div>
  )
}

export default Weather
