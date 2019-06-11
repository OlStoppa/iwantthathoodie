import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import Slider from "react-slick"

const ProductSlider = ({ data, collection }) => {
  const products = data.allMarkdownRemark.edges.filter(item => item.node.frontmatter.collections[0] === collection)

  
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    className: "slider-custom",

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  }

  return (
    <div style={{ padding: "0 20px", textAlign: "center" }}>
      <Slider {...settings}>
        {products.map(item => (
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
          </Link>
        ))}
      </Slider>
    </div>
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
                collections
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
    render={data => <ProductSlider data={data} {...props} />}
  />
)
