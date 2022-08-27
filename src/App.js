import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'

function App() {
  return (
    <Router>
      <Navbar active="home" />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
      </Routes>
    </Router>
  )
}

export default App
