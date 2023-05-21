import React from 'react'
import links from '../api/NavbarApi'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to="/">
        <img src='/weather.png' alt='weather logo' width={50}/>
      <span className="ml-3 text-xl">Silent Weather</span>
      
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
    {
        links.map((link)=>{
            return(
                <Link key={link.path} to={link.path} className='mr-5 hover:text-gray-900'>{link.name}</Link>
            )
        })
    }
    </nav>
  </div>
</header>

  )
}

export default Navbar
