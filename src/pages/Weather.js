import React, { useState } from 'react';
import DefaultWeather from './DefaultWeather';

function Weather() {
  const apiKey = "eb3e45369ea4ca4b45dd43ba83cf4c68";
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleButtonClick = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => setWeather(data))
      .catch(error => console.log(error));
  };

  return (
    <>
      <div className="w-full max-w-xs mx-auto flex flex-col justify-center items-center mt-4">
        <div className="w-full">
          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full  mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Enter city name"

              value={city} onChange={handleInputChange}
            />
            <button
              className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="submit" onClick={handleButtonClick}
            >
              Get Weather
            </button>
          </div>
          <div id="weather" className="mt-4">
        <h1 className="text-xl font-bold mb-2 ">Weather in {city}</h1>
        {/* Display weather here */}
      </div>
        </div>
      </div>

     

      {weather && (
        <div className='text-center mt-5 text-2xl'>
          <h2>Current weather in {weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Description: {weather.weather[0].description}</p>
        </div>
      )}
      <DefaultWeather />
    </>
  );
}

export default Weather;
