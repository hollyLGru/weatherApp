import { useState, useEffect } from 'react';
import './App.css';

function ForeCast({latitude, longitude}) {
    const [foreCast, setForeCast] = useState({})

    const fetchForeCastData = () => {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=009d68bcca854d40a8f131818232903&q=${latitude}, ${longitude}&days=1&aqi=no&alerts=no
        `)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setForeCast(data.forecast)
        })
    }

    useEffect(() => {
        fetchForeCastData()
        console.log(foreCast)
    }, [])

  return (
    
    <div className="ForeCast" style={{backgroundColor: "pink"}}>
        <div>

        </div>
    </div>
  )
}

export default ForeCast