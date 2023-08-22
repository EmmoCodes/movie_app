import React, { useContext } from 'react'
import '../SearchBar/SearchBar.scss'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import lens from '../../../assets/img/vector.svg'
import { FilterContext } from '../../utils/Contexts/FilterContext.jsx'
import { InputContext, InputValueContext } from '../../utils/Contexts/InputContext.jsx'

function SearchBar() {
  const { handleGenreSearch } = useContext(FilterContext)
  const { handleInputSearch, handleSearch, inputSearch } = useContext(InputContext)
  const { inputValue } = useContext(InputValueContext)

  return (
    <section className="searchbar_wrapper">
      <div className="search_bar">
        <div>
          <label htmlFor="search"></label>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search Movie..."
            onChange={handleInputSearch}
            defaultValue={inputValue}
          />
          <button className="lens" type="button" onClick={handleSearch}>
            <img src={lens} alt="" />
          </button>
        </div>
      </div>
      <div className="genre_buttons">
        <NavLink to="/list" className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}>
          <button type="button" value="28" onClick={handleGenreSearch}>
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
