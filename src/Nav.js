import React, { createContext, useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from './context/DataContext'

const Nav = () => {
  const {search,setSearch} = useContext(DataContext)
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light">
      <div className='navbar nav'>
        <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
          <label htmlFor='search '></label>
            <input type='text'
              id="search"
              placeholder='Search posts'
              value ={search}
              onChange={(e)=>setSearch(e.target.value)}
            >
            </input>
        </form>
        <ul className='navbar-nav'>
          <li className='nav-item active ms-2'><Link to="/">Home</Link></li>
          <li className='nav-item ms-2'><Link to="/about">About</Link></li>
          <li  className='nav-item ms-2 ' ><Link to="/posts">Posts</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
