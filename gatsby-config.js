require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Potato Insight`,
    author: {
      name: `netbeen`,
      mail: `netbeen.cn@gmail.com`,
      summary: `Record each recordable thing in my life.`,
    },
    description: `Potato Insight`,
    projectUrl: `https://github.com/netbeen/gatsby-blog`,
    // nav: ['frontend', 'cs', 'embeded', 'etc'],
    nav: [],
    siteUrl: `https://blog.netbeen.top`,
  },
  plugins: [
    {
      // define your .md posts path
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      // define your posts media path
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `media`,
        path: `${__dirname}/content/media`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            // remark plugin: support local images, and add figcaption for local image
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              maxWidth: 1000,
              showCaptions: ['alt'],
              wrapperStyle: (fluidResult) =>
                `width: ${fluidResult.presentationWidth}px;`,
            },
          },
          { // remark plugin: image figure caption for online image
            resolve: `gatsby-remark-figure-caption`,
            options: {figureClassName: 'online-image-figure'},
          },
          {
            // remark plugin: math equation support
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`,
            },
          },
          {
            // remark plugin: iframe
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            // remark plugin: custom blocks
            resolve: 'gatsby-remark-custom-blocks',
            options: {
              blocks: {
                danger: {
                  classes: 'danger pseudo-fa',
                  title: 'optional',
                },
                info: {
                  classes: 'info pseudo-fa',
                  title: 'optional',
                },
                togglelist: {
                  classes: 'togglelist pseudo-fa',
                  title: 'optional',
                },
              },
            },
          },
          {
            // remark plugin: autolink headers, !!!should before the prismjs plugin
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: `<svg aria-hidden="true" width="8" height="8" viewBox="0 0 8 8"><path d="M0.408 3.156L0.624 1.932H2.052L2.4 0H3.624L3.276 1.932H4.452L4.8 0H6.024L5.676 1.932H7.104L6.888 3.156H5.46L5.244 4.332H6.684L6.468 5.556H5.028L4.692 7.488H3.468L3.804 5.556H2.628L2.292 7.488H1.068L1.404 5.556H0L0.216 4.332H1.62L1.836 3.156H0.408ZM3.06 3.156L2.844 4.332H4.02L4.236 3.156H3.06Z" fill-rule="evenodd"/></path></svg>`,
              className: `heading-anchor`,
              removeAccents: true,
            },
          },
          `gatsby-remark-code-titles`, // should before all code related plugin
          {
            // remark plugin: add copy button to code block
            resolve: `gatsby-remark-code-buttons`,
            options: {
              buttonText: `COPY`,
              toasterText: `COPIED`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`, // punctuation marks
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Potato Insight`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon-light.svg`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    // {
    //   resolve: `gatsby-plugin-posthog-analytics`,
    //   options: {
    //     apiKey: process.env.POSTHOG_API_KEY,
    //     appHost: process.env.POSTHOG_HOST,
    //     head: true,
    //     isEnabledDevMode: false
    //   },
    // },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
  ],
};
