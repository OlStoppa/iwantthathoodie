import React, { useState, useContext } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SizeSelect from "../components/size-select"
import cartContext from "../context/cartContext"

export default function Product({ data }) {
  const productData = data.markdownRemark
  const [selectedImage, setSelected] = useState(0)
  const [size, selectSize] = useState("")
  const selectImage = index => {
    setSelected(index)
  }

  const [state, dispatch] = useContext(cartContext)

  const handleSelectSize = e => {
    console.log(e)
    selectSize(e)
  }

  const addToCart = () => {
    if (!size) {
      alert("please select a size")
      return
    }
    dispatch({
      type: "ADD_PRODUCT",
      title: productData.frontmatter.title,
      salePrice: productData.frontmatter.salePrice,
      image: productData.frontmatter.image.childImageSharp.fluid,
      size,
    })
  }
  return (
    <Layout>
      <div className="container__product">
        <div className="product-image">
          <div className="image-picker">
            <div className="main-image">
              {data.allFile.edges && (
                <Img
                  fluid={
                    data.allFile.edges[selectedImage].node.childImageSharp.fluid
                  }
                />
              )}
            </div>

            <div className="thumbs">
              {data.allFile.edges.map(({ node }, index) => (
                <div
                  className={
                    selectedImage === index ? "thumb selected" : "thumb"
                  }
                  onClick={() => selectImage(index)}
                >
                  <Img key={index} fluid={node.childImageSharp.fluid} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="product-data">
          <h2 className="title">{productData.frontmatter.title}</h2>
          <h4>
            List Price:{" "}
            <span className="list-price">
              {productData.frontmatter.listPrice}
            </span>
          </h4>
          <h2 className="sale-price">
            Sale Price: {productData.frontmatter.salePrice}
          </h2>
          <SizeSelect handleSelectSize={handleSelectSize} />
          <div dangerouslySetInnerHTML={{ __html: productData.html }} />
          <button onClick={addToCart}>ADD TO CART</button>
        </div>
      </div>
    </Layout>
  )
}

export const productQuery = graphql`
  query productByPath($path: String, $slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        listPrice
        title
        salePrice
        tags
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

    allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)/" }
        relativeDirectory: { regex: $slug }
      }
    ) {
      edges {
        node {
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
`
