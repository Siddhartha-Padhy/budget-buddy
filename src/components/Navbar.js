import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ active }) {
  return (
    <nav className="navbar navbar-dark bg-dark px-2">
      <span
        className="navbar-brand mb-0 me-auto text-primary"
        style={{
          'font-family': "'Dancing Script', cursive",
          fontSize: '1.4em',
        }}
      >
        🤖 Budget Buddy
      </span>
      <Link className="nav-link text-warning" to="/">
        <i className="fa fa-home" aria-hidden="true"></i>&nbsp;Home
      </Link>
      <Link className="nav-link text-warning" to="/market">
        <i className="fa fa-bar-chart" aria-hidden="true"></i>&nbsp;Market
      </Link>
    </nav>
  )
}
