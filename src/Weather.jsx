import { useState, useEffect } from 'react';
import './App.css';
import '../backgroundImage.png'
import Desktop from './Desktop'

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
        <Desktop latitude={latitude} longitude={longitude} locationFound={locationFound} weather={weather} setWeatherData={setWeatherData} location={location} setLocation={setLocation}/>
    : ""}</div>
  )
}

export default Weather
