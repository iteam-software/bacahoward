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
          <a className="button" target="_blank" rel="noopener noreferrer" href="https://stats.slimcd.com/soft/multisession.asp?sessionid=7EC058719423C4257C49D1D5569B301146D111C6">
            Pay Online
          </a>
        </span>
      </div>
    </header>
  )
}

