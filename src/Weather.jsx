import { useState, useEffect } from 'react';
import './App.css';

function Weather({latitude, longitude}) {
  const [weather, setWeatherData] = useState({})
  const [location, setLocation] = useState({})


  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=009d68bcca854d40a8f131818232903&q=${latitude}, ${longitude}&aqi=no`);
        const data = await response.json();
        setWeatherData(data.current);
        setLocation(data.location)
        console.log(weather, location)
    };
    fetchData();
    }, [])

  return (
    <div className="Weather">
        <div style={{display: 'flex'}}>
            <img src={weather.condition.icon} height='100px' style={{margin: '1%'}}/>
            <div className='location'>
                <h1>{location.name}, {location.region}</h1>
                <p>{location.country}</p>
            </div>
        </div>
      

    </div>
  )
}

export default Weather
