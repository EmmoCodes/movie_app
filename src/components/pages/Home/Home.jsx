import React, { useEffect, useState } from 'react'
import { apiKey } from '../../../data/api'
import { getAllMovies } from '../../utils/fetches/movieFetch'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import './Home.scss'

function Home() {
  const [popularMovies, setPopularMovies] = useState([])
  const [randomMovies, setRandomMovies] = useState([])

  useEffect(() => {
    getAllMovies(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKey}`,
      setPopularMovies,
      'results',
    )
  }, [])
  console.log(popularMovies)

  useEffect(() => {
    const popularRandomMovies = popularMovies.sort(() => 0.5 - Math.random())
    const topFourMovies = popularRandomMovies.slice(0, 5)
    setRandomMovies(topFourMovies)
  }, [popularMovies])

  return (
    <>
      <div>
        <div>
          <h1>Trending Movies</h1>
          {/* <Link> */}
          <span> See All </span>
          {/* </Link> */}
        </div>
        <section className="slider_wrapper">
          <AwesomeSlider className="aws_btn">
            {randomMovies.map(movie => (
              <article>
                <div>
                  <h2>{movie.title}</h2>
                  <p>{movie.vote_average}</p>
                </div>

                <div key={movie.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt="photos"
                    key={movie.backdrop_path}
                  />
                </div>
              </article>
            ))}
          </AwesomeSlider>
        </section>
      </div>
    </>
  )
}

export default Home
