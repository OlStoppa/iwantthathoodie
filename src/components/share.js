import React from "react"
import { 
    FacebookShareButton,
    TwitterShareButton,
    FacebookIcon,
    TwitterIcon
   
    } from "react-share"


const Share = (props) => (
    <div className="share-block">
        <FacebookShareButton url={props.url}>
            <FacebookIcon size={50} round={true}/>
        </FacebookShareButton>
        <TwitterShareButton url={props.url} >
            <TwitterIcon size={50} round={true}/>
        </TwitterShareButton>
        

    </div>
)

export default Share
    
