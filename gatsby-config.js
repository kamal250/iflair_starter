require('dotenv').config();
module.exports = {
  siteMetadata: {
    title: `iflair starter`,
    description: `Theme Development for demo`,
    author: `@joshi_kamal250`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ilajna-starter`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: process.env.WP_BASE_URL,
        // The protocol. This can be http or https.
        protocol: "https",
        // The rest api route prefix that your WordPress site is using.
        // Sometimes this is modified by WordPress plugins.
        // If not set, it uses the default of "wp-json"
        restApiRoutePrefix: "wp-json",
        // Indicates whether the site is hosted on wordpress.com.
        // If false, then the assumption is made that the site is self hosted.
        // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
        // If your site is hosted on wordpress.org, then set this to false.
        hostingWPCOM: false,
        // Set cookies that should be send with requests to WordPress as key value pairs
        cookies: {},
        // Set verboseOutput to true to display a verbose output on `npm run develop` or `npm run build`
        // It can help you debug specific API Endpoints problems.
        verboseOutput: false,
        // Set how many pages are retrieved per API request.
        perPage: 100,
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 10,
        // Whitelisted routes using glob patterns
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
          "**/navigation",
        ],
        // Set this to keep media sizes.
        // This option is particularly useful in case you need access to
        // URLs for thumbnails, or any other media detail.
        // Defaults to false
        keepMediaSizes: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

