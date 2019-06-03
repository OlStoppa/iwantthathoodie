import React, {useEffect, useState } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Carousel = ({ data }) => {
    
    const [displayedImage, incrementDisplayed] = useState(0)
    
    
    

    useEffect(() => {
        const started = setInterval(() => {
            
            incrementDisplayed( displayedImage => displayedImage < data.CarouselImages.edges.length -1 ? displayedImage + 1 : 0)
            
        }, 8000)
        return () => { clearInterval(started) }
    }, [] )
      
       
    
        let next = displayedImage < data.CarouselImages.edges.length - 1 ? displayedImage + 1 : 0
    
    return (
        <>
        {data.CarouselImages.edges.map((image, index) => {
            let style;
            if(index === displayedImage){
                 style = "top"
            }
            else if(index === next){
                 style = "next"
            }else {
                 style = ""
            }

        return <div className={`top-image-container ${style}`}>
        <Img imgStyle={{opacity: "inherit", transition: "inherit"}} fluid={data.CarouselImages.edges[index].node.childImageSharp.fluid}/>
        </div>})
        }
        
        
        </>
    )
}

export default props => (
    <StaticQuery
      query={graphql`
      query {
        CarouselImages: allFile(
          filter: {
            extension: { regex: "/(jpg)|(png)/" }
            relativeDirectory: { eq: "carousel" }
          }
        ) {
          edges {
            node {
              childImageSharp {
                resize(width: 1500, height: 1500) {
                  src
                }
                fluid(maxWidth: 1300) {
                  ...GatsbyImageSharpFluid
                }
                
              }
            }
          }
        }
        
      }
      
  
      `}
      render={data => <Carousel data={data} {...props} />}
      />
  )