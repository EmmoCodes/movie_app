import React, { useContext, useEffect, useState } from 'react'
import { getAllMovies } from '../../utils/fetches/movieFetch.js'
import { apiKey } from '../../../data/api'
import MovieItem from '../../shared/MovieItem/MovieItem.jsx'
import './MovieList.scss'
import SearchBar from '../../shared/SearchBar/SearchBar.jsx'
import { FilterContext } from '../../utils/Contexts/FilterContext.jsx'
import { InputContext } from '../../utils/Contexts/InputContext.jsx'
import { MovieContext } from '../../utils/Contexts/MovieContext.jsx'
import button from '../../../assets/img/backbuttondetails.svg'

function MovieList() {
  const { movieData, setMovieData } = useContext(MovieContext)
  const [loading, setLoading] = useState(false)

  const { genreValue } = useContext(FilterContext)
  const { inputSearch, handleSearch } = useContext(InputContext)

  const [sortedMovieData, setSortedMovieData] = useState(null)
  const [isSorted, setIsSorted] = useState(false)
  const [isSortedZA, setIsSortedZA] = useState(false)

  useEffect(() => {
    setLoading(true)

    getAllMovies(
      ` https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreValue}&api_key=${apiKey}`,
      setMovieData,
      'results',
    )
    const searchTimeout = setTimeout(() => {
      if (inputSearch !== undefined) {
        handleSearch()
      }
    }, 300)
    clearTimeout(searchTimeout)

    setLoading(false)
  }, [genreValue])

  if (loading === true) {
    return <p>Is Loading....</p>
  }

  function sortMovies() {
    if (isSorted) {
      setSortedMovieData(null)
      setIsSorted(false)
    } else {
      const sortedData = [...movieData].sort((a, b) => {
        if (a.title < b.title) {
          return -1
        }
        if (a.title > b.title) {
          return 1
        }
        return 0
      })
      setSortedMovieData(sortedData)
      setIsSorted(true)
    }
  }
  function sortMoviesZA() {
    if (isSortedZA) {
      setSortedMovieData(null)
      setIsSortedZA(false)
    } else {
      const sortedData = [...movieData].sort((a, b) => {
        if (a.title > b.title) {
          return -1
        }
        if (a.title < b.title) {
          return 1
        }
        return 0
      })
      setSortedMovieData(sortedData)
      setIsSortedZA(true)
    }
  }

  return (
    <>
      <section className="movie_wrapper">
        <SearchBar />
        <article className="Sort_button_wrapper">
          <button type="button" className="sort_button" onClick={sortMovies}>
            Sort: A-Z
          </button>
          <button type="button" className="sort_button" onClick={sortMoviesZA}>
            Sort Z-A
          </button>
        </article>

        {sortedMovieData !== null
          ? sortedMovieData.map(movie => <MovieItem key={movie.id} movie={movie} id={movie.id} />)
          : movieData.map(movie => <MovieItem key={movie.id} movie={movie} id={movie.id} />)}

        <div className="scroll_to_topbutton" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={button} alt="button icon" />
        </div>
      </section>
    </>
  )
}

export default MovieList
