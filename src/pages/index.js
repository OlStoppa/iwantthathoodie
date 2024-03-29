import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Carousel from "../components/carousel"
import Image from "../components/image"
import SEO from "../components/seo"
import ProductSlider from "../components/productSlider"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="container-home__top">
        <div className="carousel">
          <Carousel />
          <div className="carousel-footer">
            <h1>SAVE UP TO</h1>
            <h1 className="sale-h1">50%</h1>
            <Link to="/collection/pullover"><div className="shop-now">SHOP</div></Link>
          </div>
        </div>
        <div className="home-top__right">
          <div className="home-top__right--box">
            <Image filename="festival.jpg" />
            <div className="box-footer">
              <h4>HUGE FESTIVAL SEASON DISCOUNTS</h4>
              <Link to="/collection/pullover"><div className="shop-now">SHOP</div></Link>
            </div>
          </div>
          <div className="home-top__right--box bottom">
            <Image filename="anime-front.PNG" />
            <div className="box-footer">
              <h4>THE RAWEST NEW JAPANESE DESIGNS</h4>
              <Link to="/collection/pullover"><div className="shop-now">SHOP</div></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="section-heading">
        <span>
          <span />
        </span>
        <h4>New Designs</h4>
        <span>
          <span />
        </span>
      </div>
      <div className="product-slider">
        <ProductSlider collection={"pullover"} />
      </div>
      <div className="section-heading">
        <span>
          <span />
        </span>
        <h4>T-Shirts</h4>
        <span>
          <span />
        </span>
      </div>
      <div className="product-slider">
        <ProductSlider collection={"t-shirt"} />
      </div>
    </Layout>
  )
}

export default IndexPage
