import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import PracticeAreaCard from "../components/PracticeAreaCard"
import "../styles/site.scss"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query SplashBuildingOutside {
      file(relativePath: { eq: "images/david-nufer/8.web.jpg" }) {
        childImageSharp {
          fluid(jpegQuality: 100, maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      markdownRemark(
        fields: {
          slug: { eq: "/practice-areas/Baca and Howard Practice Areas/" }
        }
      ) {
        id
        frontmatter {
          Practice_Area {
            content
            title
          }
        }
      }
    }
  `)

  const {
    file: {
      childImageSharp: { fluid },
    },
    markdownRemark: {
      id,
      frontmatter: { Practice_Area: practiceAreas },
    },
  } = data

  return (
    <>
      <SEO title="Practice Areas | Baca &amp; Howard P.C." />
      <div className="practice-areas">
        <Layout>
          <div className="container">
            <h1>Practice Areas</h1>
            <section className="card">
              {practiceAreas.map(pa => (
                <PracticeAreaCard
                  key={`${id}-${pa.title}`}
                  title={pa.title}
                  content={pa.content}
                />
              ))}
            </section>
          </div>
          <Img
            fluid={fluid}
            className="splash"
            alt="Baca &amp; Howard Building - Outside"
          />
        </Layout>
      </div>
    </>
  )
}
