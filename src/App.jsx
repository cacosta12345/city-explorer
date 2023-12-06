import { useState } from 'react';
import CityForm from './components/CityForm'
import Header from './components/Header';
import Map from './components/Map';
import './styles.css';

import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY;
const API = import.meta.env.VITE_API_URL;

function App() {
  const [city, setCity] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [data, setData] = useState({});

  function changeCity(newCity) {
    getLocation(newCity);
  }

  async function getData(lat, lon, cityQuery) {
    try {
      let response = await axios.get(`${API}/weather?lat=${lat}&lon=${lon}&searchQuery=${cityQuery}`);
      console.log(response.data)
      setData(response.data);

    } catch (e) {
      console.error(e.message)
    }
  }



  async function getLocation(cityName) {
    let url = `https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${cityName}&format=json`;
    try {
      let response = await axios.get(url);
      // 2. Put the city into state
      console.log(response.data)
      setCity(response.data[0].display_name)
      console.log(city)

      // 3. Put the lat/lon into state
      setLatitude(response.data[0].lat);
      setLongitude(response.data[0].lon);

      let splitCity = response.data[0].display_name.split(',');
      let cityToSend = `${splitCity[0]}`;
      console.log(cityToSend)
      getData(latitude, longitude, cityToSend);



    } catch (error) {
      console.error(error.message)
      alert('Invalid city format')
    }
  }


  return (
    <>
      <Header></Header>
      <CityForm city={city} handleChangeCity={changeCity} longitude={longitude} latitude={latitude}></CityForm>
      <Map latitude={latitude} longitude={longitude}></Map>
      
    </>
  )
}

export default App
