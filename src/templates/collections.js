import React from "react"

import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

const Collections = ({ pageContext, data }) => {
  // const { collection } = pageContext
  const { edges } = data.allMarkdownRemark

  return (
    <Layout>
      
      <div>
        
        <div className="collection-container">
          {edges.map(({ node }) => {
            
            const { title, image, path, salePrice } = node.frontmatter
            return (
              <Link to={path}>
                <div className="collection--product-box">
                  <div className="product-box__image">
                    <Img fluid={image.childImageSharp.fluid} />
                  </div>

                  <div className="product-box__text">
                    <h5>{title}</h5>
                    <p>SALE {salePrice}</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Collections

export const pageQuery = graphql`
  query($collection: String) {
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { collections: { in: [$collection] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            path
            title
            salePrice
            image {
              childImageSharp {
                resize(width: 1500, height: 1500) {
                  src
                }
                fluid(maxWidth: 785) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
