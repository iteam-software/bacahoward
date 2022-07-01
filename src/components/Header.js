import React from 'react'
import { Link } from 'gatsby'
import '../styles/site.scss'

export default function Header(props) {
  return (
    <header>
      <div className="container">
        <Link alt="company logo" className="brand-logo" to="/" />
        <span className="links">
          <Link to="/" className="link" >Home</Link>
          <Link to="/firm" className="link" activeClassName="active" >Firm</Link>
          <Link to="/practice-areas" className="link" activeClassName="active" >Practice Areas</Link>
          <Link to="/careers" className="link" activeClassName="active" >Careers</Link>
        </span>
      </div>
    </header>
  )
}

