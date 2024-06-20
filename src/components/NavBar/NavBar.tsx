import React, { useState } from 'react'
import './NavBar.css'
// import searchIcon from '../../assets/search_icon.png'
// import { FaSearch } from 'react-icons/fa'
import { Link } from "react-router-dom";
// import SearchDetails from '../../views/SearchDetails/SearchDetails';
import SearchInput from '../SearchInput/SearchInput';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const[input,setInput] = useState<string>('');
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!input.trim()) return;
    navigate(`/searchPage/${input}`);
  }
  return (
    <div className='navBar'>
      <ul className='navBar-menu'>
        <Link to={'/'} style={{ textDecoration: 'none' }} className='link-decoration'>Home</Link>
        <Link to={'/shows'} style={{ textDecoration: 'none' }} className='link-decoration'>Shows</Link>
        <Link to={'/popularShows'} style={{ textDecoration: 'none' }} className='link-decoration'>Popular shows</Link>
      </ul>
      <div className='navBar-right'>
        <form onSubmit={handleSubmit}>
          <SearchInput
          placeHolder= "Search for shows or series..."
          handleOnChange = {handleChange}
          value={input}
          // onClear={() => setInput('')}
          />
        </form>
      </div>
    </div>
  )
}

export default NavBar
