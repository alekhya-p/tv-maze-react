import React from 'react'
import './NavBar.css'
// import searchIcon from '../../assets/search_icon.png'
import { FaSearch } from 'react-icons/fa'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className='navBar'>
      <ul className='navBar-menu'>
        <Link to={'/'} style={{ textDecoration: 'none' }} className='link-decoration'>Home</Link>
        <Link to={'/shows'} style={{ textDecoration: 'none' }} className='link-decoration'>Shows</Link>
        <Link to={'/popularShows'} style={{ textDecoration: 'none' }} className='link-decoration'>Popular shows</Link>
      </ul>
      <div className='navBar-right'>
      <FaSearch />
      <input className= "input" type="text" placeholder="Search.." name="search" />
      {/* <img src={searchIcon} alt="" /> */}
      </div>
    </div>
  )
}

export default NavBar
