import React, { useEffect, useState } from 'react'
import star from '../../../assets/img/polygon.svg'
import bookmark from '../../../assets/img/bookmark.svg'
import punkt from '../../../assets/img/Ellipse.svg'
import { Link } from 'react-router-dom'
import { apiKey } from '../../../data/api.js'
import { getAllMovies } from '../../utils/fetches/movieFetch.js'

function MovieItem({ movie }) {
  const [movieId, setMovieId] = useState(movie.id)
  const [movieDetails, setMovieDetails] = useState({})

  useEffect(() => {
    getAllMovies(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`, setMovieDetails)
  }, [])

  // console.log(movieDetails)

  if (!movieDetails.id) {
    return <p>Is Loading...</p>
  }
  return (
    <div className="movie_frame">
      <Link to={`/details/${movie.id}`}>
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" />
      </Link>
      <div className="movie_frame_text">
        <div className="frame_text_headline">
          <h1>{movie.title}</h1>
          <img src={bookmark} alt="Bookmark Icon" />
        </div>
        <div className="frame_text_info">
          <p>
            <span className="imdb"></span>
            {movie.vote_average}
            <img src={punkt} alt="Punkt Icon" className="punkt" />
          </p>
          <p>
            {movie.release_date.slice(0, 4)}
            <img src={punkt} alt="Punkt Icon" className="punkt" />
          </p>
          <p>
            {movieDetails.genres.find(genre => genre.id === 27).name}
            <img src={punkt} alt="Punkt Icon" className="punkt" />
          </p>
          <p>{movieDetails.runtime} m</p>
        </div>
      </div>
    </div>
  )
}

export default MovieItem
