import React from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../components/graphql-error-list";
import Post from "../components/templates/Post";
import SEO from "../components/seo";


export const query = graphql`
  query postTemplateQuery($id: String!) {
    sanityPost(id: {eq: $id}) {
      _id
      publishedAt
      title
      slug {
        current
      }
      excerpt{
        _rawChildren(resolveReferences: {maxDepth: 10})
        children {
          marks
          text
        }
      }
      members {
        person {
          _id
          name
          slug {
            current
          }
          image {
            alt
            asset {
              _id
              url
            }
          }
        }
      }
      mainImage {
        alt
        asset {
          _id
          title
        }
      }
      body{
        _rawChildren
        children {
          marks
          text
        }
      }
      relatedProjects {
        _id
        title
        publishedAt
        excerpt{
          _rawChildren(resolveReferences: {maxDepth: 10})
          children {
            marks
            text
          }
        }
      }
      relatedDogs {
        _id
        bio {
          _rawChildren
        }
        slug {
          current
        }
        name
        image {
          asset {
            url
          }
          alt
        }
      }
    }
  }
`;

const PostTemplate = props => {
  const { data, errors } = props;
  const post = data && data.sanityPost;
  
  return (
    <>
      {errors && <SEO title="GraphQL Error" />}
      {post && <SEO title={post.title || "Untitled"} />}

      {errors && (
        // <Container>
          <GraphQLErrorList errors={errors} />
        // </Container>
      )}
      {post && <Post {...post} />}
    </>
  );
};

export default PostTemplate;
