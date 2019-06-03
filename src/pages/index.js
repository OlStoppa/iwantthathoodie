import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Carousel from '../components/carousel'
import Image from "../components/image"
import SEO from "../components/seo"
import ProductSlider from "../components/productSlider"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container-home__top">
      <div className="carousel">
        <Carousel />
        <div className= "carousel-footer">
          <h1>SAVE UP TO</h1>
          <h1 className="sale-h1">50%</h1>
          <div className="shop-now">SHOP</div>
        </div>
      </div>
      <div className="home-top__right">
        <div className="home-top__right--box">
          <Image
            filename="festival.jpg"
          />
          <div className="box-footer">
            <h4>HUGE FESTIVAL SEASON DISCOUNTS</h4>
            <div className="shop-now">SHOP</div>
          </div>
        </div>
        <div className="home-top__right--box bottom">
          <Image
            filename="anime-front.PNG"
          />
          <div className="box-footer">
            <h4>THE RAWEST NEW JAPANESE DESIGNS</h4>
            <div className="shop-now">SHOP</div>
          </div>
        </div>
        
      </div>
    </div>
    <div className="product-slider">
      <ProductSlider />
    </div>
  </Layout>
)

export default IndexPage
