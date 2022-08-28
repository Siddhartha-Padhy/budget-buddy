import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ active }) {
  return (
    <nav className="navbar navbar-dark bg-dark px-2">
      <span className="navbar-brand mb-0 h1 me-auto text-success">
        Budget Buddy
      </span>
      <Link
        className={
          active === 'home' ? 'nav-link text-success' : 'nav-link text-white'
        }
        to="/"
      >
        <i className="fa fa-home" aria-hidden="true"></i>&nbsp;Home
      </Link>
      <Link
        className={
          active === 'market' ? 'nav-link text-success' : 'nav-link text-white'
        }
        to="/market"
      >
        <i className="fa fa-bar-chart" aria-hidden="true"></i>&nbsp;Market
      </Link>
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
