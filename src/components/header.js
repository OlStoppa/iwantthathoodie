import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useContext} from "react"
import  cartContext  from "../context/cartContext"
import Navbar from "./navbar"

const Header = ({ siteTitle }) => {

  const [state, dispatch] = useContext(cartContext)
return(
  <header
    style={{
      background: `black`,
      marginBottom: `0.75rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        
      </h3>
      <Link to="/cart">
      <div className="cart-icon__container">
        <span className="material-icons" >shopping_cart</span>
        {state.length > 0 && <span className="cart-counter">{state.length}</span>}
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
