import axios from "axios";
import { useState } from "react"
import CityComponent from "./CityComponent.js";
import WeatherComponent from "./WeatherInfoComponent";
import './Homepage.css'
const API_K="452c0f36bef65e371e0fef4d0aa653ce";
function Homepage() {
  const [city, updateCity] = useState();
  const[weather , updateWeather] = useState();
  const saveLocation =async (position)=>{
      const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_K}`);
      updateWeather(response.data);
      updateCity(response.data.name);
  }
  const fetchLoc = async(e)=>{
      e.preventDefault();
      await window.navigator.geolocation.getCurrentPosition(saveLocation)
  }
  const fetchWeather = async(e)=>{
    e.preventDefault();
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_K}`)
    updateWeather(response.data);
  }
  return (
    <div className="text-dark Box col-8 col-sm-6 col-md-4 mx-auto block"> 
      <div className="applabel"> React Weather App </div>
      {weather ? (
        <WeatherComponent  weather={weather} />
      ) : (
      <CityComponent updateCity={updateCity}  fetchWeather={fetchWeather} fetchLoc={fetchLoc} />
      )}
    </div>
  );
}
export default Homepage;
