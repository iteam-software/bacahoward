module.exports = {
  siteMetadata: {
    title: `Baca & Howard P.C.`,
    description: `Baca & Howard P.C.`,
    author: `iTeam Consulting`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Baca & Howard P.C.`,
        short_name: `Baca & Howard P.C.`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/icons/android-chrome-192x192.png`, 
      },
    },
    `gatsby-plugin-preload-link-crossorigin`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `media`,
        path: `${__dirname}/content/`
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1080,
      },
    },
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`
  ]
}
