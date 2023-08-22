import React, { useContext } from 'react'
import '../SearchBar/SearchBar.scss'
import lens from '../../../assets/img/vector.svg'
import { Link, NavLink } from 'react-router-dom'
import { FilterContext } from '../../utils/FilterContext/FilterContext.jsx'

function SearchBar() {
  const { handleGenreSearch } = useContext(FilterContext)

  return (
    <section className="searchbar_wrapper">
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
          <button value="28" onClick={handleGenreSearch}>
            Action
          </button>
        </NavLink>
        <NavLink to="/list" className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}>
          <button value="35" onClick={handleGenreSearch}>
            Comedy
          </button>
        </NavLink>
        <NavLink to="/list" className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}>
          <button value="27" onClick={handleGenreSearch}>
            Horror
          </button>
        </NavLink>
      </div>
    </section>
  )
}

export default SearchBar
