import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `kevmiester clothings`,
    siteUrl: 'https://gatsby.pizza',
    description:
      'The best Clothing Store for quality hand made designer clothes',
  },

  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    // {
    //   resolve: 'gatsby-plugin-postcss',
    //   options: {
    //     postCssPlugins: [require('tailwindcss')('./tailwind.config.js')],
    //     // postCssPlugins: [require('tailwindcss'), require('autoprefixer')],
    //   },
    // },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/, // See below to configure properly
        },
      },
    },
    {
      //   name of plugin im adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'ocqq3ytl',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    // {
    //   //   name of plugin im adding
    //   resolve: 'gatsby-plugin-react-svg',
    //   options: {
    //     rule: {
    //       include: /assets/,
    //     },
    //   },
    // },
  ],
};
