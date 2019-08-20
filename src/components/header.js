import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useContext} from "react"
import  cartContext  from "../context/cartContext"
import Navbar from "./navbar"
import Logo from "../images/hoodie-logo.inline.svg"

const Header = ({ siteTitle }) => {

  const [state, dispatch] = useContext(cartContext) 
return(
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1200,
        padding: `0.5rem 1.45rem 0rem`,
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <Logo className="logo"/>
        </Link>
        
      
      <Link to="/cart">
      <div className="cart-icon__container">
        <span className="material-icons" >shopping_cart</span>
        {state.length > 0 && <span className="cart-counter">{state.reduce((a, b)  => a + b.qty,0 )}</span>}
      </div>
      </Link>
      
    </div>
    <Navbar />
  </header>
)
        }

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
