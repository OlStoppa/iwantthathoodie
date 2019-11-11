import React, { useState, useContext } from "react"
import { graphql } from "gatsby"
import Modal from "react-modal"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SizeSelect from "../components/size-select"
import cartContext from "../context/cartContext"
import ProductInfo from "../components/productInfo"
import Share from "../components/share"
import ProductImagePicker from "../components/productImagePicker"
import ProductModalInner from "../components/productModalInner"


export default function Product({ data }) {
  const [state, dispatch] = useContext(cartContext)
  const [selectedImage, setSelected] = useState(0)
  const [size, selectSize] = useState("")
  const [modalOpen, setModalOpen] = useState(undefined)
  
  const { title, path, image, salePrice, listPrice } = data.markdownRemark.frontmatter
  const images = data.allFile.edges

  const orderedImages =
    image.childImageSharp.fluid.src !==
    images[0].node.childImageSharp.fluid.src
      ? [images[1], images[0]]
      : images

  
  const selectImage = index => {
    setSelected(index)
  }

  const closeModal = () => {
    setModalOpen(undefined)
  }

 

  const handleSelectSize = e => {
    selectSize(e)
  }

  const addToCart = () => {
    if (!size) {
      alert("please select a size")
      return
    }
    dispatch({
      type: "ADD_PRODUCT",
      title: title,
      salePrice: salePrice,
      image: image.childImageSharp.fluid,
      size,
    })
  }

  return (
    <Layout>
      <SEO title={title} image={image.childImageSharp.fluid}/>
      <div className="container__product">
        <ProductImagePicker
          orderedImages={orderedImages}
          selectedImage={selectedImage}
          selectImage={selectImage}
        />

        <div className="product-data">
          <h2 className="title">{title}</h2>
          <h4>
            List Price:{" "}
            <span className="list-price">
              {listPrice}
            </span>
          </h4>
          <h2 className="sale-price">
            Sale Price: {salePrice}
          </h2>
          <SizeSelect handleSelectSize={handleSelectSize} />
          <h4 className="size-chart" onClick={() => setModalOpen('size')}>See Size Chart</h4>
          
          <button onClick={addToCart}>ADD TO CART</button>
          
          <ProductInfo />
          <Share url={`https://www.thishoodie.com${path}`} />
          <div className="product-options">
            <ul>
              <li onClick={() => setModalOpen('shipping')}>Shipping</li>
              <li onClick={() => setModalOpen('returns')}>Returns</li>
              <li onClick={() => setModalOpen('contact')}>Contact</li>
            </ul>
          </div>
        </div>
      </div>
      <Modal
        isOpen={!!modalOpen}
        onRequestClose={closeModal}
        className="modal"
        ariaHideApp={false}
        
      >
       <ProductModalInner content={modalOpen}/> 
      </Modal>
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
