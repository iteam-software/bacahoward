import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import logo from "../images/bacahoward-logo.png"

const CompanyCard = () => {
  const data = useStaticQuery(graphql`
    query Monument {
      file(relativePath: {eq: "images/david-nufer/5.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <div className="container">
        <section className="card">
          <Img fluid={data.file?.childImageSharp?.fluid} className="image" alt="Baca &amp; Howard Monument" />
          <div className="content">
            <div className="wrapper">
              <img src={logo} alt="Baca &amp; Howard Logo" />
              <p>Baca &amp; Howard P.C. takes great pride in its technical ability as well as its outstanding client service.</p>
              <p>The firm has established a strong reputation for its quality and objectivity. We make a point to keep current on new legislation, technology, and best practices.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default CompanyCard
