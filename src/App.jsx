import { Route, Routes, useLocation } from 'react-router-dom'
import './App.scss'
import Home from './components/pages/Home/Home'
import MovieList from './components/pages/MovieList/MovieList'
import LoginPage from './components/pages/LoginPage/LoginPage'
import Landingpage from './components/pages/Landingpage/Landingpage'
import GetStarted from './components/pages/GetStarted/GetStarted'
import NavbarMobile from './components/shared/NavbarMobile/NavbarMobile'

function App() {
  const location = useLocation()
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/list" element={<MovieList />} />
      </Routes>
      {location.pathname !== '/' && location.pathname !== '/getstarted' && location.pathname !== '/login' && (
        <NavbarMobile />
      )}
    </>
  )
}

export default App
