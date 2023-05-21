import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
     <img src='/weather.png' width={100} alt='logo'/>
      <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
        <h1 className="title-font sm:text-4xl text-xl mb-4 font-medium text-gray-900 mt-5">
        Stay Ahead of the Weather: Silent Weather
        </h1>
        <p className="mb-8 leading-relaxed">
        Welcome to our weather app, the ultimate tool for staying ahead of the weather. With real-time updates and accurate weather forecasts, you can plan your day with confidence and ease. Our user-friendly interface provides you with a comprehensive overview of the weather conditions in your area, including temperature, wind speed, humidity, precipitation, and more. Whether you're planning a weekend getaway, commuting to work, or just want to stay informed, our weather app has got you covered. Download now and never let the weather catch you off guard again.
        </p>
       <Link to="/weather"> <button className='bg-blue-700 p-2 rounded text-white'>Check Weather</button></Link>
       
      </div>
    </div>
  </section>
  
  )
}

export default Home
