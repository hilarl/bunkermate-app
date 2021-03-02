const googleAnalyticsId = `UA-XXXXX`

module.exports = {
  pathPrefix: `/gatsbystarter/gatsby-starter-mapbox-examples`,
  siteMetadata: {
    siteUrl: `https://astridx.github.io/gatsbystarter/gatsby-starter-mapbox-examples/`,
    title: `Gatsby Mapbox GL Starter`,
    description: `Get up and running quickly with a Gatsby starter that includes a basic setup for Mapbox GL`,
    author: `Brendan C. Ward`,
    googleAnalyticsId,
    mapboxToken: process.env.GATSBY_MAPBOX_API_TOKEN,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== `production`,
        fileName: false,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `./config/typography.js`,
      },
    },
    `gatsby-plugin-catch-links`,
   // `gatsby-plugin-sitemap`,
   // {
    //  resolve: `gatsby-plugin-google-analytics`,
     // options: {
     //   trackingId: googleAnalyticsId,
     //   anonymize: true,
     // },
    //},
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
