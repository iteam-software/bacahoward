import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'
import '../styles/site.scss'

const deadEnd = () => {
  return (
    <>
      <SEO title="404 | Baca &amp; Howard P.C." />
      <Layout>
        <div className="container">
          <h2 className="no-exist">This page does not exist</h2>
          <p className="no-exist"><Link to="/">Click here to go back to the Home Page</Link></p>
        </div>
      </Layout>
    </>
  )
}

export default deadEnd
