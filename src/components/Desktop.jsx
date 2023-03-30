import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState, useEffect } from 'react';
import '../App.css';
import AirIcon from '@mui/icons-material/Air';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import Forms from './Forms'

function Desktop({latitude, longitude, locationFound,setWeatherData, setLocation, weather, location}) {
const [celcius, setCelcius] = useState(false);

    const date = new Date();
    const options = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
    };
    const timeString = date.toLocaleString('en-US', options);


const handleClickC = () => {
    setCelcius(true)
}

const handleClickF = () => {
    setCelcius(false)
}


  return (
    <div>
        <div className="Desktop">
            <div style={{display: 'flex'}}>
            <div className='weatherInfo'>
                <div style={{marginLeft: "2%", letterSpacing: '.2rem'}}>
                    <div style={{display: 'flex'}}>
                        <LocationOnIcon style={{fontSize: '30px',paddingTop: '2.5%', marginRight: '1%'}}/>
                        <h1 >{location.name}, {location.region}</h1>
                    </div>
                </div>

                <div className="temperature">
                    <div style={{paddingTop: '5%'}}>
                        <p style={{fontSize: "80%",marginBottom: "-1%"}}>Today</p>
                        <div style={{display: 'flex'}}>
                            {celcius === false ? 
                            <h1 style={{fontSize:'600%', marginTop: "-5%", marginBottom: "-5%"}}>{weather.temp_f}</h1>
                            : 
                            <h1 style={{fontSize:'600%', marginTop: "-5%", marginBottom: "-5%"}}>{weather.temp_c}</h1>
                            }
                            <span className='F' onClick={handleClickF} style={celcius == false ? {fontSize:"80%", marginTop:'-3%', cursor: 'pointer'} 
                            : {fontSize:"80%", marginTop:'-3%', cursor: 'pointer', color: 'rgb(199,111,161)'} }>°F/</span>
                            <span className='C' onClick={handleClickC} style={celcius == true ? {fontSize:"80%", marginTop:'-3%', cursor: 'pointer'} 
                            : {fontSize:"80%", marginTop:'-3%', cursor: 'pointer', color: 'rgb(199,111,161)'} } >°C</span>
                        </div>
                    </div>
                </div>
                <div className='current'>
                        <div >
                            <AccessTimeIcon style={{fontSize: '40px', height: '70px'}}/>
                            <p>{timeString}</p>
                        </div>
                        <div>
                            <img src={weather.condition.icon} style={{height: '70px'}} />
                            <p>{weather.condition.text}</p>
                        </div>
                        <div>
                            <AirIcon style={{fontSize: '50px', height: '70px'}} />
                            <p>{weather.wind_mph} mph {weather.wind_dir}</p>
                        </div>
                        <div>
                            <ThunderstormIcon style={{fontSize: '50px', height: '70px'}} />
                            <p>{weather.precip_in} in</p>                        
                        </div>
                    </div>
            </div>
            <Forms/>
            </div>
        </div>

    </div>
  )
}

export default Desktop