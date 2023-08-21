import React, { useEffect, useState } from 'react'
import { getAllMovies } from '../../../utils/fetches/MovieFetch.js'
import { apiKey } from '../../../data/api.js'

function MovieItem({ movie }) {
  return (
    <div className="movie_frame">
      <img src={movie.poster_path} alt="" />
      <h1>{movie.title}</h1>
      <p>{movie.vote_average}</p>
      <p>{movie.release_date}</p>
    </div>
  )
}

export default MovieItem
