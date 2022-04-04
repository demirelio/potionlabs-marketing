/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-tawk.to`,
      options: {
        tawkId: "624b51fc2abe5b455fc4964e",
        tawkKey: "69c4885378135ad5b30dc93f0a8fd103e5e91900",
        // get this from the tawk script widget
      },
    },
  ],
}
