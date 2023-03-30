import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState, useEffect } from 'react';
import './App.css';
import AirIcon from '@mui/icons-material/Air';

function Desktop({latitude, longitude, locationFound,setWeatherData, setLocation, weather, location}) {

    const date = new Date();
    const options = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
    };
    const timeString = date.toLocaleString('en-US', options);




  return (
    <div>
        <div className="Desktop">
            <div className='weatherInfo'>
                <div style={{marginLeft: "2%", letterSpacing: '.2rem'}}>
                    <div style={{display: 'flex'}}>
                        <LocationOnIcon style={{paddingTop: '2%'}}/>
                        <h2 >{location.name}, {location.region}</h2>
                    </div>
                    <h3>{timeString}</h3>
                </div>

                <div className="temperature">
                    <div style={{paddingTop: '5%'}}>
                        <p style={{fontSize: "80%",marginBottom: "-1%"}}>Today</p>
                        <div style={{display: 'flex'}}>
                            <h1 style={{fontSize:'600%', marginTop: "-5%", marginBottom: "-5%"}}>{weather.temp_f}</h1> 
                            <span style={{fontSize:"150%", marginTop:'-3%'}}>°F</span>
                        </div>
                    </div>
                </div>
                <div className='current'>
                        <div>
                            <img src={weather.condition.icon} />
                            <p>{weather.condition.text}</p>
                        </div>
                        <div>
                            <AirIcon style={{fontSize: '50px'}} />
                            <p>{weather.wind_mph}mph {weather.wind_dir}</p>
                        </div>
                        <div>
                            <img src={weather.condition.icon} />
                            <p>{weather.condition.text}</p>
                        </div>
                        <div>
                            <img src={weather.condition.icon} />
                            <p>{weather.condition.text}</p>
                            <FontAwesomeIcon icon={faHumidity} style={{color: "#ffffff",}} />
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Desktop