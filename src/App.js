import './App.css';
import Heading from './Components/Heading';
import Weather from './Components/Weather';
import WeatherDetails from './Components/WeatherDetails';
import HourlyForecast from "./Components/HourlyForecast";
import SearchBar from './Components/SearchBar';
import LineGraph from './Components/LineGraph';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import { useState } from 'react';
function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  const handleSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
    const ForecastWeatherFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
  
    Promise.all([currentWeatherFetch, ForecastWeatherFetch])
    .then(async (response) =>{
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();
      
      setCurrentWeather({city: searchData.label, ...weatherResponse})
      setForecastWeather({city: searchData.label, ...forecastResponse})
    })
    .catch((err) => console.log(err));
  }

  console.log(currentWeather);
  console.log(forecastWeather);

  return (
    <div className="App">
      <SearchBar onSearchChange={handleSearchChange} />
      <Heading />
      <Weather />
      <LineGraph />
      <HourlyForecast />
      <WeatherDetails />
    </div>
  );
}

export default App;
