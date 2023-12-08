import { useState } from 'react';
import CityForm from './components/CityForm'
import Header from './components/Header';
import Map from './components/Map';
import Weather from './components/Weather';
import Footer from './components/Footer';
import ErrorComponent from './components/ErrorComponent';
import Movie from './components/Movie';


import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY;
const API = import.meta.env.VITE_API_URL;


function App() {
  const [city, setCity] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [forecast, setForecast] = useState(null);
  const [searchQuery, setSearchQuery] = useState(null);
  const [movies, setMovies]= useState([]);

  function updateCity(e) {
    setSearchQuery(e.target.value);
  }

  async function getLocation() {
    const url = `https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${searchQuery}&format=json`;

    try {
      const response = await axios.get(url);

      if (response.data && response.data.length > 0) {
        setCity(response.data[0].display_name)
        setLatitude(response.data[0].lat);
        setLongitude(response.data[0].lon);
        setErrorMessage('');

        getWeatherData(response.data[0].lat, response.data[0].lon);
        getMoviesData(searchQuery);
      } else {
        setErrorMessage(`${searchQuery} not found. Please try again`)
      }

    } catch (error) {
      console.error(error.message)
      setErrorMessage('Error getting weather data. Please try again')
    }
  }


  async function getWeatherData(lat, lon) {
    try {
      let response = await axios.get(`${API}/weather`,
        {
          params: {
            lat: lat,
            lon: lon,
          }
        });
      setForecast(response.data);
     


    } catch (err) {
      console.error('Error getting weather data:', err);
    }
  }

  async function getMoviesData(city){
    try {
      const response = await axios.get(`${API}/movies`,{
        params: {
          city: city,
        }
      });
      setMovies(response.data);
      console.log(response.data)
    } catch(error){
      console.error('Error getting movies', error)
    }
  }



 


  return (
    <div className="app-container">
      <Header />
      {errorMessage && <ErrorComponent message={errorMessage} />}
      <div className="form-container">
        <CityForm updateCity={updateCity} city={city} handleGetLocation={getLocation} />
        {latitude && longitude && <Map latitude={latitude} longitude={longitude} city={city} />}
        {forecast && <Weather forecast={forecast} city={city} />}
        <Movie movies={movies}/>
        <Footer />
      </div>
    </div>
  );
}

export default App
