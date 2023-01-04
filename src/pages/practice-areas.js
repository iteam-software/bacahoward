import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import PracticeAreaCard from '../components/PracticeAreaCard'
import '../styles/site.scss'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default () => {
  const data = useStaticQuery(graphql`
    query SplashBuildingOutside {
      file(relativePath: {eq: "images/david-nufer/8.jpg"}) {
        childImageSharp {
          fluid(jpegQuality: 100, maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      markdownRemark {
        frontmatter {
          Practice_Area {
            content
            title
          }
        }
      }
    }
  `);

  const {
    file:{
      childImageSharp:{
        fluid
      }
    },
    markdownRemark:{
      frontmatter:{
        Practice_Area
      }
    }
  } = data;

  return (
    <>
      <SEO title="Practice Areas | Baca &amp; Howard P.C." />
      <div className="practice-areas">
        <Layout>
          <div className="container">
            <h1>Practice Areas</h1>
            <section className="card">
              {
                Practice_Area && Practice_Area.map(item => (
                  <PracticeAreaCard 
                    title={item.title} 
                    content={item.content}
                  />
                ))
              }
              {
                Practice_Area || (<em>There are no practice areas.</em>)
              }
            </section>
          </div>
          <Img fluid={fluid} className="splash" alt="Baca &amp; Howard Building - Outside" />
        </Layout>
      </div> 
    </>
  )
}