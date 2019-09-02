import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const PureImage = ({ data, filename, alt }) => {
  console.log(filename)

  const image = data.images.edges.find(n => {
    return n.node.relativePath.includes(filename)
  })
  if (!image) {
    return null
  }

  const imageSizes = image.node.childImageSharp.sizes
  return <Img alt={alt} sizes={imageSizes} />
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 1030) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}
    render={data => <PureImage data={data} {...props} />}
  />
)
