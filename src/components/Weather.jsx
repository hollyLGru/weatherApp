import { React, useState, useEffect, useRef } from 'react';
import '../App.css';
import Desktop from './Desktop';
import Mobile from './Mobile'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
    return {
      width, height
    };
}
// function to retrieve screen dimensions so that components are rendered correctly

function Weather({latitude, longitude, locationFound,setWeatherData, setLocation, weather, location}) {
    const [updated, setUpdated] = useState(false);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const width = windowDimensions.width;

    const date = new Date();
    const options = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
    };
    const timeString = date.toLocaleString('en-US', options);
    // provides current date  to display time

    const fetchData = async () => {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=009d68bcca854d40a8f131818232903&q=${latitude}, ${longitude}&aqi=no`);
      const data = await response.json();
      setWeatherData(data.current);
      setLocation(data.location)
      setUpdated(true);
  };  
    // fetches data from weather API



    useEffect(() => {
          fetchData();
          function handleResize() {
            setWindowDimensions(getWindowDimensions());
          }
      
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }, [])
        // this fetches the data but also gives me height and width to change from mobile to desktop component


  return (
    <div className="Weather">{updated == true && width > 950 ?
          <Desktop timeString={timeString} latitude={latitude} longitude={longitude} locationFound={locationFound} weather={weather} setWeatherData={setWeatherData} location={location} setLocation={setLocation}/>
    : ""}
      <div>
      {updated == true && width <= 950 ? 
        <Mobile timeString={timeString}  latitude={latitude} longitude={longitude} locationFound={locationFound} weather={weather} setWeatherData={setWeatherData} location={location} setLocation={setLocation}/>
       : ""}
      </div>
    </div>
  )
}

export default Weather
