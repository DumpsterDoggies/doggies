const {isFuture} = require('date-fns')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createContentPages (graphql, actions) {
  const {createPage} = actions


  // Creating Post Pages
  const postResult = await graphql(`
    {
      allSanityPost {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)
  
  if (postResult.errors) throw postResult.errors
  
  const postEdges = (postResult.data.allSanityPost || {}).edges || []
  
  postEdges
  .filter(edge => !isFuture(edge.publishedAt))
  .forEach(edge => {
    const id = edge.node.id
    const slug = edge.node.slug.current
    const path = `/post/${slug}/`
    
    createPage({
      path,
      component: require.resolve('./src/templates/post.tsx'),
      context: {id}
    })
  })
  
  
  
  // Creating Dog Pages 
  const dogResult = await graphql(`
    {
      allSanityDog {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)
  if (dogResult.errors) throw dogResult.errors

  const dogEdges = (dogResult.data.allSanityDog || {}).edges || []
  
  dogEdges
    .filter(edge => !isFuture(edge.publishedAt))
    .forEach(edge => {
      const id = edge.node.id
      const slug = edge.node.slug.current
      const path = `/dog/${slug}/`

      createPage({
        path,
        component: require.resolve('./src/templates/dog.tsx'),
        context: {id}
      })
    })
  }
  

exports.createPages = async ({graphql, actions}) => {
  await createContentPages(graphql, actions)
}
