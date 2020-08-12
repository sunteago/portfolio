const path = require(`path`)

module.exports = {
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `assets`, `images`),
      },
    },
  ],
}
