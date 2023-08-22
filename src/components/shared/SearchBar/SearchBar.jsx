import React from 'react'
import '../SearchBar/SearchBar.scss'
import lens from '../../../assets/img/vector.svg'
import { Link, NavLink } from 'react-router-dom'

function SearchBar() {
  return (
    <section>
      <div className="search_bar">
        <form>
          <label htmlFor="search"></label>
          <input type="text" name="search" id="search" placeholder="Search Movie..." />
        </form>
        <button className="lens">
          <img src={lens} alt="" />
        </button>
      </div>
      <div className="genre_buttons">
        <NavLink to="/list" className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}>
          <button>Action</button>
        </NavLink>
        <NavLink to="/list" className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}>
          <button>Comedy</button>
        </NavLink>
        <NavLink to="/list" className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}>
          <button>Horror</button>
        </NavLink>
      </div>
    </section>
  )
}

export default SearchBar
