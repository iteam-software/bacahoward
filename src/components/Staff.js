import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import EmployeeCard from './EmployeeCard'
import { filter } from 'lodash'

const Staff = () => {
  const {allMarkdownRemark:{nodes}} = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: {fields: frontmatter___lastName}) {
        nodes {
          frontmatter {
            group
            firstName
            lastName
            middleName
            title
          }
          fields {
            slug
          }
          id
        }
      }
    }
  `)

  const directors = filter(nodes, node => node.frontmatter?.group === "Directors")
  const accountants = filter(nodes, node => node.frontmatter?.group === "Accountants")
  const managers = filter(nodes, node => node.frontmatter?.group === "Managers")
  const staff = filter(nodes, node => node.frontmatter?.group === "Office Staff")

  return (
    <>
      <div className="container">
        <h1>Firm</h1>
        <section>
          <h2>Directors</h2>
          <div className="employees">
            {directors.map(item => (
              <EmployeeCard 
                employee={item.frontmatter}
                slug={item.fields.slug} 
                key={item.id} 
              />
            ))}
          </div>
        </section>
        <section>
          <h2>Managers</h2>
          <div className="employees">
            {managers.map(item => (
              <EmployeeCard 
                employee={item.frontmatter}
                slug={item.fields.slug} 
                key={item.id} 
              />
            ))}
          </div>
        </section>
        <section>
          <h2>Accountants</h2>
          <div className="employees">
            {accountants.map(item => (
              <EmployeeCard 
                employee={item.frontmatter}
                slug={item.fields.slug} 
                key={item.id} 
              />
            ))}
          </div>
        </section>
        <section>
          <h2>Office Staff</h2>
          <div className="employees">
            {staff.map(item => (
              <EmployeeCard 
                employee={item.frontmatter}
                slug={item.fields.slug} 
                key={item.id} 
              />
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default Staff