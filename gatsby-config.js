import dotenv from "dotenv";

dotenv.config({ path: ".env" });

export default {
  siteMetadata: {
    title: `kevmiester clothings`,
    siteUrl: "https://gatsby.pizza",
    description:
      "The best Clothing Store for quality hand made designer clothes",
  },

  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "evergreen",
        short_name: "evergreen",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "standalone",
        icon: "src/images/logo.svg",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      //   name of plugin im adding
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "1x3pya0n",
        // projectId: "ocqq3ytl",
        dataset: "production",
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
};
