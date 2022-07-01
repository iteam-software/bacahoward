/* exports.onCreateNode = ({ node }) => {
  console.log(node.internal.type)
} */
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions

  const employeePage = path.resolve(`./src/templates/employee-page.js`)
  const result = await graphql(
    `
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create employee pages
  const pages = result.data.allMarkdownRemark.edges

  pages.forEach((page) => {
    createPage({
      path: page.node.fields.slug,
      component: employeePage,
      context: {
        slug: page.node.fields.slug
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode, actions })
    const slug = createFilePath({ node, getNode, basePath: `staff` })
    createNodeField({
      name: `slug`,
      node,
      value: slug,
    })
  }
}
