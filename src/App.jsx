import { Route, Routes, useLocation } from 'react-router-dom'
import './App.scss'
import { useEffect, useState } from 'react'
import Home from './components/pages/Home/Home'
import MovieList from './components/pages/MovieList/MovieList'
import RegisterForm from './components/pages/RegisterForm/RegisterForm.jsx'
import Landingpage from './components/pages/Landingpage/Landingpage'
import GetStarted from './components/pages/GetStarted/GetStarted'
import NavbarMobile from './components/shared/NavbarMobile/NavbarMobile'
import MovieDetails from './components/pages/MovieDetails/MovieDetails'
import Trailer from './components/pages/Trailer/Trailer.jsx'
import LoginForm from './components/pages/LoginForm/LoginForm'
import { FilterContext } from './components/utils/Contexts/FilterContext.jsx'
import { InputContext } from './components/utils/Contexts/InputContext.jsx'
import { MovieContext } from './components/utils/Contexts/MovieContext.jsx'
import { getAllMovies } from './components/utils/fetches/movieFetch.js'
import { apiKey } from './data/api.js'
import PopularList from './components/pages/PopularList/PopularList.jsx'
import FavPage from './components/pages/FavPage/FavPage.jsx'
import ProfilePage from './components/pages/ProfilePage/ProfilePage.jsx'
import { FavoritesContext } from './components/utils/Contexts/FavoritesContext.jsx'

function App() {
  const location = useLocation()
  const [genreValue, setGenreValue] = useState('27')
  const [inputSearch, setInputSearch] = useState('')
  const [movieData, setMovieData] = useState([])
  const [favorites, setFavorites] = useState(() => {
    const localFavorites = JSON.parse(localStorage.getItem('favorites'))
    return localFavorites ? localFavorites : []
  })

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const handleGenreSearch = event => {
    setGenreValue(event.target.value)
  }

  const handleInputSearch = event => {
    setInputSearch(event.target.value.toLowerCase())
  }

  const handleSearch = event => {
    if (inputSearch === '') return
    getAllMovies(
      `https://api.themoviedb.org/3/search/movie?query=${inputSearch}&include_adult=false&language=en-US&page=1&api_key=${apiKey}`,
      setMovieData,
      'results',
    )
  }

  return (
    <section className="app_background">
      <FilterContext.Provider value={{ genreValue, handleGenreSearch }}>
        <InputContext.Provider value={{ inputSearch, handleInputSearch, handleSearch, setInputSearch }}>
          <MovieContext.Provider value={{ movieData, setMovieData }}>
            <FavoritesContext.Provider value={{ favorites, setFavorites }}>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/getstarted" element={<GetStarted />} />
                <Route path="/" element={<Landingpage />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/list" element={<MovieList />} />
                <Route path="/details/:id" element={<MovieDetails />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/popular" element={<PopularList />} />
                <Route path="/trailer/:id" element={<Trailer />} />
                <Route path="/favorites" element={<FavPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Routes>
            </FavoritesContext.Provider>
          </MovieContext.Provider>
        </InputContext.Provider>
      </FilterContext.Provider>

      {location.pathname !== '/' &&
        location.pathname !== '/getstarted' &&
        location.pathname !== '/login' &&
        location.pathname !== '/register' && <NavbarMobile />}
    </section>
  )
}

export default App
