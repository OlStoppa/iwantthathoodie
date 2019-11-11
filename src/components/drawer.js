import React from "react"

import { Link } from "gatsby"


const Drawer = props => {
  

  return (
    <div className={props.isOpen ? "drawer open" : "drawer"}>
      
      <div className="mobile-nav-container">
        <ul>
        <Link to="/collection/pullover"><li>Pullovers</li></Link>
        <Link to="/collection/t-shirt"><li>T-Shirts</li></Link>
        <Link to="/collection/pullover"><li>New</li></Link>
         
          <Link to="/contact"><li>Contact Us</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Drawer
