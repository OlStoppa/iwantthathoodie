import React from "react"
import Img from "gatsby-image"

const ProductImagePicker = (props) => (
    <div className="product-image">
          <div className="image-picker">
            <div className="main-image">
              {props.orderedImages && (
                <Img
                  fluid={
                    props.orderedImages[props.selectedImage].node.childImageSharp.fluid
                  }
                />
              )}
            </div>

            <div className="thumbs">
              {props.orderedImages.map(({ node }, index) => (
                <div
                  className={
                    props.selectedImage === index ? "thumb selected" : "thumb"
                  }
                  onClick={() => props.selectImage(index)}
                >
                  <Img key={index} fluid={node.childImageSharp.fluid} />
                </div>
              ))}
            </div>
          </div>
        </div>
)

export default ProductImagePicker

