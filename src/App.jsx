import { useState } from 'react';
import './App.css';
import Weather from './Weather'
import Forms from './Forms'

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [locationFound, setLocationFound] = useState(false)

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  }

  const successCallback = (position) => {
    setLatitude(position.coords.latitude)
    setLongitude(position.coords.longitude)
    console.log(latitude, longitude)
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
    <div className="App" style={{backgroundImage: `url(
      https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?cs=srgb&dl=pexels-pixabay-147411.jpg&fm=jpg
    )`, paddingTop: "3%"}}>
      {locationFound === true ?
      <Weather latitude={latitude} longitude={longitude} locationFound={locationFound} /> : ''}
      {/* weather information will only be rendered if user's location has been found */}
      <Forms/>
    </div>
  )
}

export default App
