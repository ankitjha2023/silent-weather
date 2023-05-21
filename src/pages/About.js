import React from 'react'

const About = () => {
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto flex flex-col">
      <div className="lg:w-4/6 mx-auto">
        <div className="rounded-lg h-64 overflow-hidden">
          <img
            alt="content"
            className="object-cover object-center h-full w-full"
            src="/bg.jpg"
          />
        </div>
        <div className="flex flex-col sm:flex-row mt-10">
          <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            
              <img src='/mylogo.png' alt='logo' className='rounded-full mx-auto' width={100}/>
           
            <div className="flex flex-col items-center text-center justify-center">
              <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
               Ankit Jha
              </h2>
              <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
              <p className="text-base">
              Welcome to Silent Weather, a weather app that provides you with up-to-date and accurate weather information.
              </p>
            </div>
          </div>
          <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <p className="leading-relaxed text-lg mb-4">
            Our mission is to make your daily routine easier and more convenient by providing you with the latest weather updates and forecast. At Silent Weather, we believe that accurate weather information is essential for planning your day, whether you are going to work, school, or simply enjoying your leisure time. We understand the importance of timely and precise weather data, and that's why we have developed our app to be the most reliable and user-friendly weather app on the market. Our team is dedicated to providing you with the most accurate and detailed weather information. We use the latest technology to collect data from multiple sources, including satellites, weather stations, and other meteorological services. Our team of experts then analyze the data and provide you with the most precise and accurate forecast for your location.
            </p>
           
          </div>
        </div>
      </div>
    </div>
  </section>
  
   
  )
}

export default About
