import React, { useState, useEffect } from 'react';

function DefaultWeather() {
  const api_key = "eb3e45369ea4ca4b45dd43ba83cf4c68";
  const [delhiWeather, setDelhiWeather] = useState(null);
  const [newYorkWeather, setNewYorkWeather] = useState(null);
  const [londonWeather, setLondonWeather] = useState(null);

  useEffect( () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=New Delhi&appid=${api_key}&units=metric`)
    .then(response => response.json())
    .then(data => setDelhiWeather(data));

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${api_key}&units=metric`)
      .then(response => response.json())
      .then(data => setNewYorkWeather(data));

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${api_key}&units=metric`)
      .then(response => response.json())
      .then(data => setLondonWeather(data));
  }, [api_key]);

  return (
    <>
    <section className=" body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col">
      <div className="h-1 bg-gray-200 rounded overflow-hidden">
        <div className="w-24 h-full bg-indigo-500" />
      </div>
      <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 className="sm:w-2/5  font-medium title-font text-2xl mb-2 sm:mb-0">
         Silent Weather
        </h1>
        <p className="sm:w-3/5 leading-relaxed text-2xl sm:pl-10 pl-0">
          Some Popular cities Weather
        </p>
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img
            alt="content"
            className="object-cover object-center h-full w-full"
            src="https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg"
          />
        </div>
        <h2 className="text-xl font-medium title-font  mt-5">
         New Delhi
        </h2>
        <p className="text-base leading-relaxed mt-2">
        {delhiWeather && (
        <div>
         
          <p>Temperature: {delhiWeather.main.temp} °C</p>
          <p>Humidity: {delhiWeather.main.humidity}%</p>
          <p>Description: {delhiWeather.weather[0].description}</p>
        </div>
      )}

        </p>
      
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img
            alt="content"
            className="object-cover object-center h-full w-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/1200px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg"
          />
        </div>
        <h2 className="text-xl font-medium title-font  mt-5">
          New York
        </h2>
        <p className="text-base leading-relaxed mt-2">
        {newYorkWeather && (
        <div>
          
          <p>Temperature: {newYorkWeather.main.temp} °C</p>
          <p>Humidity: {newYorkWeather.main.humidity}%</p>
          <p>Description: {newYorkWeather.weather[0].description}</p>
        </div>
      )}

        </p>
       
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img
            alt="content"
            className="object-cover object-center h-full w-full"
            src="https://www.touristengland.com/wp-content/uploads/2020/09/london-3598397_640.jpg"
          />
        </div>
        <h2 className="text-xl font-medium title-font  mt-5">
          London
        </h2>
        <p className="text-base leading-relaxed mt-2">
        {londonWeather && (
        <div>
          
          <p>Temperature: {londonWeather.main.temp} °C</p>
          <p>Humidity: {londonWeather.main.humidity}%</p>
          <p>Description: {londonWeather.weather[0].description}</p>
        </div>
      )}
        </p>
       
      </div>
    </div>
  </div>
</section>

    
    </>
  );
}

export default DefaultWeather;
