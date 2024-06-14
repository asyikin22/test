import React from 'react'
import { Link } from 'react-router-dom'
import { FcReading } from "react-icons/fc";
import { FaChartSimple } from "react-icons/fa6";
import { FaSearch, FaUserAlt } from "react-icons/fa";
import './Navbar.scss'

const Navbar = () => {
  return (<>

  <div className="navbar">
    <div className="logo">
        <FcReading />
        <span>Goodreads Library</span>
         
    </div>

    <div className="icon">
        <Link to="/analytics">
            <FaChartSimple />
        </Link>

        <Link to="/search">
            <FaSearch />
        </Link>

        <Link to="/Login">
            <FaUserAlt />
        </Link> 
        

    </div>

  </div>
    
</>)
}

export default Navbar