/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-github-api',
      options: {
        // token: required by the GitHub API
        token: process.env.MY_ENV_VAR,

        // GraphQLquery: defaults to a search query
        graphQLQuery: `{
            search(query: "example", type: USER, first: 20) {
              repositoryCount
              edges {
                node {
                  ... on User {
                    bio
                    name
                    login
                    location
                    avatarUrl
                  }
                }
              }
            }
          }`,

        //   // variables: defaults to variables needed for a search query
        //   variables: someObject
      },
    },
  ],
}
