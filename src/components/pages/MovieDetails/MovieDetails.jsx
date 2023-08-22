import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { apiKey } from '../../../data/api.js'
import { getAllMovies } from '../../utils/fetches/movieFetch.js'
import button from '../../../assets/img/backbuttondetails.svg'
import './MovieDetails.scss'
const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState({})
  const params = useParams()

  useEffect(() => {
    getAllMovies(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}`, setMovieDetail)
  }, [params.id])

  if (!movieDetail.id) {
    return <p>Is Loading...</p>
  }

  return (
    <div className="details_wrapper">
      <Link to="/list">
        <div>
          <img src={button} alt="" />
        </div>
      </Link>

      <img src={`https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}`} alt="Photo" className="mainimg" />
      <div className="relativ_headline">
        <p>Movie Details</p>
        <h1>{movieDetail.title}</h1>
        <div className="date_duration_genre">
          <p>{movieDetail.vote_average}</p>
          <p>{movieDetail.release_date}</p>
          <p>{movieDetail.genres[0].name}</p>
          <p>{movieDetail.runtime} min</p>
        </div>
      </div>

      <div className="overview_wrapper">
        <h2>Overview</h2>
        <p>{movieDetail.overview}</p>
      </div>

      <div className="genre_box">
        <h3>Genre</h3>
        <div className="genre_name">
          <p>{movieDetail.genres[0].name}</p>
          <p>{movieDetail.genres[1]?.name}</p>
          <p>{movieDetail.genres[2]?.name}</p>
          <p>{movieDetail.genres[3]?.name}</p>
        </div>
      </div>

      <div className="language_box">
        <h3>Languages</h3>
        <div className="languages">
          <p>{movieDetail.spoken_languages[0].name}</p>
          <p>{movieDetail.spoken_languages[1]?.name}</p>
          <p>{movieDetail.spoken_languages[2]?.name}</p>
          <p>{movieDetail.spoken_languages[3]?.name}</p>
        </div>
      </div>
      <div className="buttonbox">
        <button type="button" className="watch_movie_button">
          Watch Trailer
        </button>
      </div>
    </div>
  )
}

export default MovieDetails
