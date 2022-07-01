import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Employee from '../components/Employee'
import '../styles/site.scss'

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        firstName
        middleName
        lastName
        email
        phone
        photo {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        credentials {
          credential
        }
        affiliations {
          affiliation
        }
      }
      html
    }
  }
`

const EmployeePageTemplate = ({data}) => {
  return (
    <div className="profile">
      <Layout className="profile">
        <Employee 
          employee={data.markdownRemark}
        />
      </Layout>
    </div>
  )
}

export default EmployeePageTemplate