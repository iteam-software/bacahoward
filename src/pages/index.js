import React from 'react'
import Layout from '../components/Layout'
import CompanyCard from '../components/CompanyCard'
import SEO from '../components/seo'
import '../styles/site.scss'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default () => {
  const data = useStaticQuery(graphql`
    query SplashOffice {
      file(relativePath: {eq: "images/david-nufer/1.web.jpg"}) {
        childImageSharp {
          fluid(jpegQuality: 100, maxWidth: 3080, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)



  return (
    <>
      <SEO title="Home | Baca &amp; Howard P.C." />
      <div className="home">
        <Layout>
          <Img fluid={data.file?.childImageSharp?.fluid} className="splash" alt="Baca &amp; Howard Office" />
          <CompanyCard />
        </Layout>
      </div>
    </>
  )
}
