import React from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../components/graphql-error-list";
import Dog from "../components/templates/Dog";
import SEO from "../components/Seo";


export const query = graphql`
  query dogTemplateQuery($id: String!) {
    sanityDog(id: {eq: $id}) {
      _id
      id
      publishedAt
      name
      slug {
        current
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
      image {
        alt
        asset {
          url
        }
      }
      bio {
        _rawChildren
        children {
          text
          marks
        }
      }
    }
  }
`;

const dogTemplate = props => {
  const { data, errors } = props;
  const dog = data && data.sanityDog;
  
  return (
    <>
      {errors && <SEO title="GraphQL Error" />}
      {dog && <SEO title={dog.title || "Untitled"} />}

      {errors && (
        // <Container>
          <GraphQLErrorList errors={errors} />
        // </Container>
      )}
      {dog && <Dog {...dog} />}
    </>
  );
};

export default dogTemplate;
