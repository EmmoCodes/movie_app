import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Landingpage from './components/pages/Landingpage/Landingpage'
import GetStarted from './components/pages/GetStarted/GetStarted'
import NavbarMobile from './components/shared/NavbarMobile/NavbarMobile'

function App() {
  return (
    <>
      <Routes>
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/landingpage" element={<Landingpage />} />
      </Routes>
      <NavbarMobile />
    </>
  )
}

export default App
