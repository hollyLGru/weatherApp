import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState, useEffect } from 'react';
import './App.css';
import '../backgroundImage.png'

function Desktop({latitude, longitude, locationFound,setWeatherData, setLocation, weather, location}) {

    const date = new Date();
    const options = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
    };
    const timeString = date.toLocaleString('en-US', options);


  return (
    <div>{updated == true ? 
        <div className="Desktop" style={{backgroundImage: 'url(backgroundImage.png)', backgroundSize: "100% 100%", width: 'screen', height: '800px'}}>
            <LocationOnIcon/>
            <h1>Hey</h1>
        </div>
    : ""}</div>
  )
}

export default Desktop