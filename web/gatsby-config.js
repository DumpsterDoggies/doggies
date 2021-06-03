// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})
const path = require(`path`)

const clientConfig = require('./client-config')
const token = process.env.SANITY_READ_TOKEN

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteMetadata: {
    siteUrl: 'https://dumpsterdoggies.com/',
    image: './src/assets/images/favicon.svg',
    menuLinks: [
      {
        name: 'Home',
        slug: '/',
      },
      {
        name: 'About',
        slug: '/about/',
      },
      {
        name: 'Adopt',
        slug: '/adopt/',
      },
      {
        name: 'Blog',
        slug: '/blog/',
      },
      {
        name: 'Contact',
        slug: '/contact/',
      },
      {
        name: 'Spenden',
        slug: '/spenden/',
      },
      {
        name: 'Sponsor a Doggie',
        slug: '/sponsor/',
      },
      {
        name: 'Volunteer',
        slug: '/volunteer/',
      },
    ],
    postsPerFirstPage: 7,
    postsPerPage: 6,
    basePath: '/',
  },
  plugins: [
    'gatsby-plugin-sharp',
    `gatsby-plugin-image`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-transition-link',
      options: {
        layout: require.resolve(`./src/components/Layout.tsx`),
      },
    },
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`,`assets`, `images`),
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          modules: {
            exportLocalsConvention: 'camelCaseOnly'
          }
        }
      }
  },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token,
        watchMode: !isProd,
        overlayDrafts: !isProd && token
      }
    }
  ]
}
