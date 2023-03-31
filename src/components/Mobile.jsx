import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState, useEffect } from 'react';
import '../App.css';
import AirIcon from '@mui/icons-material/Air';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import FormsMobile from './FormsMobile'


function Mobile({weather, location, timeString}) {
    const [celcius, setCelcius] = useState(false);
    const [connected, setConnected] = useState(false);

    const HandleClickConnect = () => {
        setConnected(true)
    }
    // changes the weather to form

    const handleClickC = () => {
        setCelcius(true)
    }
    // toggles C
    const handleClickF = () => {
        setCelcius(false)
    }
    // toggles farenheight

  return (
    <div> {connected === false ? 
    <div className="Mobile">
        <div className="MobileInner" style={{backdropFilter: 'blur(2px)'}}>
            <div style={{display: 'flex', margin: "5%"}}>
                <LocationOnIcon style={{fontSize: '30px',paddingTop: '2.5%', marginRight: '1%'}}/>
                <h3 >{location.name}, {location.region}</h3>
            </div>
            <div className='tempMobile' style={{display: 'flex', justifyContent: "center"}}>
                <div style={{display: 'flex'}}>
                    {celcius === false ? 
                    <h1 style={{fontSize:'800%', marginTop: "-5%", marginBottom: "-5%"}}>{weather.temp_f}</h1>
                            : 
                <h1 style={{fontSize:'800%', marginTop: "-5%", marginBottom: "-5%"}}>{weather.temp_c}</h1>
                        }
                    <span className='F' onClick={handleClickF} style={celcius == false ? {fontSize:"80%", marginTop:'-3%', cursor: 'pointer'} 
                        : {fontSize:"80%", marginTop:'-3%', cursor: 'pointer', color: 'purple'} }>°F/</span>
                    <span className='C' onClick={handleClickC} style={celcius == true ? {fontSize:"80%", marginTop:'-3%', cursor: 'pointer'} 
                        : {fontSize:"80%", marginTop:'-3%', cursor: 'pointer', color: 'purple'} } >°C</span>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div className='currentMobile'>
                            <div  style={{textAlign: "center", width: '50px'}}>
                                <AccessTimeIcon style={{fontSize: '25px', height: '35px'}}/>
                                <p>{timeString}</p>
                            </div>
                            <div style={{textAlign: "center", width: '50px'}}>
                                <img src={weather.condition.icon} style={{height: '35px'}} />
                                <p>{weather.condition.text}</p>
                            </div>
                            <div style={{textAlign: "center", width: '50px'}}>
                                <AirIcon style={{fontSize: '25px', height: '25px'}} />
                                <p>{weather.wind_mph} mph {weather.wind_dir}</p>
                            </div>
                            <div style={{textAlign: "center", width: '50px'}}>
                                <ThunderstormIcon style={{fontSize: '25px', height: '25px'}} />
                                <p>{weather.precip_in} in</p>                        
                            </div>
                </div>
                
            </div>
            <div className="LetsConnectMobile" style={{ width: '70%', margin: 'auto'}}>
                <h1 onClick={HandleClickConnect} style={{textAlign:"center", letterSpacing: '.2rem', borderTop: "1px solid white", padding: "5%"}}>
                    Lets Connect.
                </h1>
            </div>
        </div>
        </div>
        : <FormsMobile connected={connected}  setConnected={setConnected}/>}
    </div>
  )
}

export default Mobile