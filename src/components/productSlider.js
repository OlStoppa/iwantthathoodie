import React from "react"
import { graphql, StaticQuery, Link} from "gatsby"
import Img from "gatsby-image"

const ProductSlider = ({data}) => {

    const products = data.allMarkdownRemark.edges
    console.log(products)
    return (
        <>
            {products.map(item => 
            <Link to={item.node.frontmatter.path}>
            <div className="product-box">
                <div className="product-box__image">
                <Img
                    fluid={item.node.frontmatter.image.childImageSharp.fluid}
                    />
                </div>
                
            <div className="product-box__text">
            <h5>{item.node.frontmatter.title}</h5>
            <p>SALE {item.node.frontmatter.salePrice}</p>
            </div>
            </div>
            </Link>)}
        </>
    )
}

export default props => (
    <StaticQuery
        query={graphql`
        query {
            allMarkdownRemark {
                edges {
                  node {
                    frontmatter {
                      path
                      title
                      salePrice
                      image {
                        childImageSharp {
                                    resize(width: 500, height: 500) {
                                      src
                                    }
                                    fluid(maxWidth: 500) {
                                        ...GatsbyImageSharpFluid
                                      }
                                    
                                }
                      }
                    }
                  }
                }
              }
        }
    `}
    render={data => <ProductSlider data={data} {...props}/>}
    />
)