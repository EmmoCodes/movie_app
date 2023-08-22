import { Route, Routes, useLocation } from 'react-router-dom'
import './App.scss'
import { useState } from 'react'
import Home from './components/pages/Home/Home'
import MovieList from './components/pages/MovieList/MovieList'
import RegisterForm from './components/pages/RegisterForm/RegisterForm.jsx'
import Landingpage from './components/pages/Landingpage/Landingpage'
import GetStarted from './components/pages/GetStarted/GetStarted'
import NavbarMobile from './components/shared/NavbarMobile/NavbarMobile'
import MovieDetails from './components/pages/MovieDetails/MovieDetails'
import SearchBar from './components/shared/SearchBar/SearchBar'

import LoginForm from './components/pages/LoginForm/LoginForm'

import { FilterContext } from './components/utils/FilterContext/FilterContext.jsx'


function App() {
  const location = useLocation()
  const [genreValue, setGenreValue] = useState('27')

  const handleGenreSearch = event => {
    setGenreValue(event.target.value)
  }

  return (
    <>

      <FilterContext.Provider value={{ genreValue, handleGenreSearch }}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/getstarted" element={<GetStarted />} />
          <Route path="/" element={<Landingpage />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/list" element={<MovieList />} />
          <Route path="/details/:id" element={<MovieDetails />} />
             <Route path="/login" element={<LoginForm />} />
        </Routes>
      </FilterContext.Provider>

      {location.pathname !== '/' && location.pathname !== '/getstarted' && location.pathname !== '/login' && (
        <NavbarMobile />
      )}
    </>
  )
}

export default App
