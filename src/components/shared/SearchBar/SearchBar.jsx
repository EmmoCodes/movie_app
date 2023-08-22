import React, { useContext } from 'react'
import '../SearchBar/SearchBar.scss'
import lens from '../../../assets/img/vector.svg'
import { Link, NavLink } from 'react-router-dom'
import { FilterContext } from '../../utils/FilterContext/FilterContext.jsx'
import { apiKey } from '../../../data/api'
import { useState, useEffect } from 'react'
import { getAllMovies } from '../../utils/fetches/movieFetch'

function SearchBar() {
  const [searchInput, setSearchInput] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    if (searchInput !== ' ') {
      getAllMovies(
        `https://api.themoviedb.org/3/search/movie?query=${searchInput}&include_adult=false&language=en-US&page=1&api_key=${apiKey}`,
        setResults,
      )
    }
  }, [searchInput])
  console.log(results)

  const handleSearch = event => {
    event.preventDefault()
    if (searchInput === '') return
    getAllMovies(
      `https://api.themoviedb.org/3/search/movie?query=${searchInput}&include_adult=false&language=en-US&page=1&api_key=${apiKey}`,
      setResults,
    )
    console.log(results)
  }

  function SearchBar() {
    const { handleGenreSearch } = useContext(FilterContext)

    return (
      <section className="searchbar_wrapper">
        <div className="search_bar">
          <form onSubmit={handleSearch}>
            <label htmlFor="search"></label>
            <input
              type="text"
              value={searchInput}
              name="search"
              id="search"
              placeholder="Search Movie..."
              onChange={event => setSearchInput(event.target.value)}
            />
            <button className="lens" type="submit">
              <img src={lens} alt="" />
            </button>
          </form>
        </div>
        <div className="genre_buttons">
          <NavLink
            to="/list"
            className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}>
            <button value="28" onClick={handleGenreSearch}>
              Action
            </button>
          </NavLink>
          <NavLink
            to="/list"
            className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}>
            <button value="35" onClick={handleGenreSearch}>
              Comedy
            </button>
          </NavLink>
          <NavLink
            to="/list"
            className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}>
            <button value="27" onClick={handleGenreSearch}>
              Horror
            </button>
          </NavLink>
        </div>
      </section>
    )
  }
}

export default SearchBar
