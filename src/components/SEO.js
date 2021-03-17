import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql, Link } from 'gatsby';

const SEO = ({ children, location, description, title, image }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
      <html lang="en" />
      <title>{title}</title>
      {/* Required Core Stylesheet for glider carousel */}
      <link
        rel="stylesheet"
        href="node_modules/@glidejs/glide/dist/css/glide.core.min.css"
      />

      {/* Optional Theme Stylesheet  for glider carousel */}
      <link
        rel="stylesheet"
        href="node_modules/@glidejs/glide/dist/css/glide.theme.min.css"
      />

      {/* fav icons */}

      <Link rel="icon" type="image/svg+xml" href="/logo.svg" />
      <Link rel="alternate icon" href="/logo.svg" />
      {/* meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content={site.siteMetadata.description} />
      {/* open graph */}
      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:image" content={image || '/logo.svg'} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta
        property="og:site_name"
        content={site.siteMetadata.title}
        key="ogsitename"
      />
      <meta property="og:description" content={description} key="ogdesc" />
      {children}
    </Helmet>
  );
};

export default SEO;
