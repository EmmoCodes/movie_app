import React, { useEffect, useState } from 'react'
//import star from '../../../assets/img/start.svg'
import { Link } from 'react-router-dom'
import { apiKey } from '../../../data/api.js'
import { getAllMovies } from '../../utils/fetches/movieFetch.js'

function MovieItem({ movie }) {
  const [movieId, setMovieId] = useState(movie.id)
  const [movieDetails, setMovieDetails] = useState({})

  useEffect(() => {
    getAllMovies(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`, setMovieDetails)
  }, [])

  console.log(movieDetails)

  if (!movieDetails.id) {
    return <p>Is Loading...</p>
  }

  return (
    <div className="movie_frame">
      <Link to="/details">
        <img src={`https://image.tmdb.org/t/p/w200${movie.backdrop_path}`} alt="" />
      </Link>
      <div className="movie_frame_text">
        <h1>{movie.title}</h1>
        <div>
          <p>{movie.vote_average}</p>
          <p>{movie.release_date}</p>
          <p>{movieDetails.runtime}</p>
          <p>{movieDetails.genres[0].name}</p>
          <p>{movieDetails.genres[1]?.name}</p>
          <p>{movieDetails.genres[2]?.name}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieItem
