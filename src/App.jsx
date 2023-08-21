import { Route, Routes } from 'react-router-dom'
import './App.scss'
import MovieList from './components/pages/MovieList/MovieList'
import LoginPage from './components/pages/LoginPage/LoginPage'
import Landingpage from './components/pages/Landingpage/Landingpage'
import GetStarted from './components/pages/GetStarted/GetStarted'

function App() {
  return (
    <>
      <Routes>
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/landingpage" element={<Landingpage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/list" element={<MovieList />} />
      </Routes>
    </>
  )
}

export default App
