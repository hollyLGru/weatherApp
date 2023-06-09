import { useState, useEffect } from 'react';
import './App.css';
import Weather from './components/Weather'

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [locationFound, setLocationFound] = useState(false)
  const [weather, setWeatherData] = useState({})
  const [location, setLocation] = useState({})


  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  }

  const successCallback = (position) => {
    setLatitude(position.coords.latitude)
    setLongitude(position.coords.longitude)
    setLocationFound(true)
  };
  // we are setting the user's longitutde and latitide with the useState hook if we receive successful callback
  
  const errorCallback = (error) => {
    console.log(error);
  };
  // if we have an error on the callback, the error will be in the console. 
  
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options)
  // this will retrieve the location of the user. 
  

  return (
    <div className="App">
      {locationFound === true ?
      <Weather latitude={latitude} longitude={longitude} locationFound={locationFound} weather={weather} setWeatherData={setWeatherData} location={location} setLocation={setLocation} /> : ''}
      {/* weather information will only be rendered if user's location has been found */}
    </div>
  )
}

export default App
