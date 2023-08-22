import React, { useEffect, useState } from 'react'
import { getAllMovies } from '../../utils/fetches/movieFetch.js'
import { apiKey } from '../../../data/api'
import MovieItem from '../../shared/MovieItem/MovieItem.jsx'


function MovieList() {
  const [movieData, setMovieData] = useState([])
  useEffect(() => {
    getAllMovies(
      ` https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=horror&api_key=${apiKey}`,
      setMovieData,
      'results',
    )
  }, [])
  // console.log(movieData)

  return (
    <div>
      <section className="movie_wrapper">
        {movieData.map(movie => (
          <MovieItem key={movie.id}  movie={movie} id={movie.id}/>
        ))}
      </section>
    </div>
  )
}

export default MovieList
