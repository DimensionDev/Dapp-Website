module.exports = {
    siteMetadata: {
        siteUrl: `https://d.app`,
    },
    plugins: [
        "gatsby-plugin-postcss",
        `gatsby-plugin-image`,
        {
          resolve: `gatsby-plugin-sharp`,
          options: {
            defaultQuality: 80,
          },
        },
        `gatsby-transformer-sharp`,
        "gatsby-plugin-cname",
        "gatsby-plugin-use-query-params",
        "gatsby-plugin-react-helmet",
    ],
    pathPrefix: "/dapp-website"
}
