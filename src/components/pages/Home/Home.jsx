import React, { useEffect, useState } from 'react'
import AwesomeSlider from 'react-awesome-slider'
import { apiKey } from '../../../data/api'
import { getAllMovies } from '../../utils/fetches/movieFetch'
import 'react-awesome-slider/dist/styles.css'
import './Home.scss'
import SearchBar from '../../shared/SearchBar/SearchBar.jsx'

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
      <section className="home">
        <h1>Welcome</h1>
        <SearchBar />
        <div>
          <div className="trending">
            <h2>Trending Movies</h2>
            <span>See All</span>
          </div>


          <article className="slider_wrapper">
            <AwesomeSlider className="aws_btn">
              {randomMovies.map(movie => (
                <div key={movie.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt="photos"
                    key={movie.backdrop_path}
                  />
                  <h2>{movie.title}</h2>
                  <p>{movie.vote_average} / 10.0</p>
                </div>
              ))}
            </AwesomeSlider>
          </article>
        </div>
      </section>

    </>
  )
}

export default Home
