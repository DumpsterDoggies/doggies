import React from "react";
import Helmet from "react-helmet";
import {StaticQuery, graphql} from "gatsby";

interface SEOProp{
  title: string;
  description?: string;
}

const SEO = ({ title, description }:SEOProp) => {
  
  const detailsQuery = graphql`
  query DefaultSEOQuery {
    site: sanitySiteSettings(_id: { eq: "siteSettings" }) {
      title
      description
      keywords
      author {
        name
      }
    }
  }
`;

  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        
        const metaDescription = description || (data.site && data.site.description) || "";
        const siteTitle = (data.site && data.site.title) || "";
        const siteAuthor = (data.site && data.site.author && data.site.author.name) || "";
        return (
    <Helmet
      htmlAttributes={{
        lang: `en`,
      }}
      title={title}
      defaultTitle={siteTitle}
      titleTemplate={`%s | ${metaDescription}`}
    >

      <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600&family=Zilla+Slab:wght@500;600;700&display=swap" rel="stylesheet"/>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* General tags */}
          {/* <meta name="image" content={image} /> */}
          <meta name="description" content={metaDescription} />

          {/* OpenGraph tags */}
          <meta property="og:title" content={title} />
          {/* <meta property="og:image" content={metaImage} /> */}
          <meta property="og:description" content={metaDescription} />

          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          {/* <meta name="twitter:image" content={metaImage} /> */}
          <meta name="twitter:description" content={metaDescription} />
    </Helmet>
  )}} /> );
  
};

export default SEO;





