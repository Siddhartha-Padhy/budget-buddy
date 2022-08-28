import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import MarketPage from './pages/MarketPage'

function App() {
  return (
    <Router>
      <Navbar active="home" />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/market" element={<MarketPage />}></Route>
      </Routes>
    </Router>
  )
}

export default App
