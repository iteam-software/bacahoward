import React from 'react'
import Layout from '../components/Layout'
import Staff from '../components/Staff'
import SEO from '../components/seo'
import '../styles/site.scss'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default () => {
  const data = useStaticQuery(graphql`
    query SplashConferenceRoom {
      file(relativePath: {eq: "images/david-nufer/6.jpg"}) {
        childImageSharp {
          fluid(jpegQuality: 100, maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO title="Firm | Baca &amp; Howard P.C." />
      <div className="firm">
        <Layout>
          <Staff />
          <Img fluid={data.file?.childImageSharp?.fluid} className="splash" alt="Baca &amp; Howard Conference Room" />
        </Layout>
      </div> 
    </>
  )
}