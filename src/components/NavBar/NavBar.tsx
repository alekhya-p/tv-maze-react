import React from 'react'
import './NavBar.css'
// import searchIcon from '../../assets/search_icon.png'
import { FaSearch } from 'react-icons/fa'

const NavBar = () => {
  return (
    <div className='navBar'>
      <ul className='navBar-menu'>
        <a>Home</a>
        <a>Shows</a>
        <a>Movies</a>
        <a>Popular shows</a>
        <a>Browse By Languages</a>
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
