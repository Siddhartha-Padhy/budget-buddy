import React from 'react'
// import { Link } from 'react-router-dom'

export default function Navbar({ active }) {
  return (
    <nav className="navbar navbar-dark bg-dark px-2">
      <span className="navbar-brand mb-0 h1 me-auto text-success">
        Budget Buddy
      </span>
      <a href="/" className="nav-link text-white">
        <i className="fa fa-home" aria-hidden="true"></i>&nbsp;Home
      </a>
      <a href="/" className="nav-link text-white">
        <i className="fa fa-bar-chart" aria-hidden="true"></i>&nbsp;Stocks
      </a>
    </nav>
  )
}

/* <Link
          className={
            active === 'home' ? 'nav-item nav-link active' : 'nav-item nav-link'
          }
          style={{ paddingRight: '1vw' }}
          to="/home"
        >
          Home
        </Link> */
