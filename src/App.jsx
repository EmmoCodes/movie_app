import { Route, Routes } from 'react-router-dom'
import './App.scss'
import GetStarted from './components/pages/GetStarted/GetStarted'
import LoginPage from './components/pages/LoginPage/LoginPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App
