/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Auto al Top",
    motto: "Reinigen Sie die Arterien für unseren Motor",
    description:
      "Technische Informationen zu Zusatzstoffen und Reinigern für Autos",
    author: "Nicola",
    person: {
      age: 33,
      gender: "Male",
    },
    hobby: ["guidare", "meccanica", "mangiare"],
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `twamhnvz5inz`,
        accessToken: process.env.GATSBY_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `detergenti`,
        path: `${__dirname}/content/detergenti`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `prodotti`,
        path: `${__dirname}/content/prodotti`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
