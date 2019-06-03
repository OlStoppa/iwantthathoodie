const path = require('path');
const _ = require('lodash')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
      const slug = createFilePath({ node, getNode, basePath: `` })
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
    }
  }

exports.createPages = ({actions, graphql}) => {
    const { createPage } = actions;

    const productTemplate = path.resolve('src/templates/product.js');
    

    return graphql(`
        {
            allMarkdownRemark{
                edges{
                  node{
                      id
                      fields {
                          slug
                      }
                    frontmatter{
                      path
                      title
                      
                      tags
                      
                    }
                  }
                }
              }
            
        }
    `).then(res => {
        if(res.errors) {
            return Promise.reject(res.errors)
        }
        const products = res.data.allMarkdownRemark.edges
        products.forEach(({node}) => {
            createPage({
                path: node.frontmatter.path,
                component: productTemplate,
                context: {
                  slug: node.fields.slug
                }
            })
        })

       
    })


}
