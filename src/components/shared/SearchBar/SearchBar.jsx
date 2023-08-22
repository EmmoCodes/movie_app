import React from 'react'
import '../SearchBar/SearchBar.scss'
import lens from '../../../assets/img/vector.svg'
import { Link, NavLink } from 'react-router-dom'
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

  return (
    <section>
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
