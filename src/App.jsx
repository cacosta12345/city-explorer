import { useState } from 'react';
import CityForm from './components/CityForm'
import Header from './components/Header';
import Map from './components/Map';
import './styles.css';

import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [city, setCity]= useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  function changeCity(newCity){
    getLocation(newCity);
  }

  async function getLocation(cityName){
    let url = `https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${cityName}&format=json`;
    try {
      let response = await axios.get(url);
      // 2. Put the city into state
      setCity(response.data[0].display_name)

      // 3. Put the lat/lon into state
      setLatitude(response.data[0].lat);
      setLongitude(response.data[0].lon);

    } catch(error) {
      console.error(error.message)
      alert('Invalid city format')
    }
  }
  
  
  return (
    <>
      <Header></Header>
      <CityForm city = {city} handleChangeCity = {changeCity} longitude={longitude} latitude = {latitude}></CityForm>
      <Map latitude={latitude} longitude={longitude}></Map>
    </>
  )
}

export default App
