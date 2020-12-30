/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Emotivities`,
    titleTemplate: "%s · Emotivities",
    description: `Emotional Activities, A simple list of activites to do depending on your emotions!.`,
    author: `bolu-tife`,
    url: "https://www.doe.com", // No trailing slash allowed!
    image: "/images/icon.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@boluutife",
    
  
  },
  plugins: [
  	'gatsby-plugin-dark-mode',
	{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Emotivities @bolu-tife/Emotivities`,
        short_name: `Emotivities`,
        description: `Emotional Activities, A simple list of activites to do depending on your emotions!.`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.jpg`, // This path is relative to the root of the site.
        icons: [
            {
              "src": "src/images/maskable_icon.png",
              "sizes": "238x238",
              "type": "image/png",
              "purpose": "any maskable"
            },
          ],
      },
  	},
    `gatsby-plugin-offline`,
      

	  {
	      resolve: `gatsby-source-filesystem`,
	      options: {
	        name: `src`,
	        path: `${__dirname}/src/`,
	      },
	    },
	    `gatsby-transformer-remark`,
	  `gatsby-plugin-emotion`,
	    {
	      resolve: `gatsby-plugin-typography`,
	      options: {
	        pathToConfigModule: `src/utils/typography`,
	      },
	    },
	    `gatsby-plugin-react-helmet`,
    ],
    // pathPrefix: `/emotivities`,
}
