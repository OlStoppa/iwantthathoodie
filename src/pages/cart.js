import React, { useContext } from "react"
import Img from "gatsby-image"
import cartContext from "../context/cartContext"
import Layout from "../components/layout"
const Cart = () => {
  const [state, dispatch] = useContext(cartContext)
  const remove = product => {
    dispatch({ type: "REMOVE_PRODUCT", index: product })
  }
  
  return (
    <Layout>
      <div className="cart-container">
        <div className="cart--heading">
          <h2>YOUR SHOPPING CART</h2>
        </div>
        {state.length > 0 ?
        <>
        <table>
          <tr>
            <th>Contents</th>

            <th>Qty</th>
            <th />
            <th>Price</th>
          </tr>
          {state.map((item, index) => {
            return (
              <tr className="cart-item">
                <td>
                  <div className="cart--main-cell">
                    <div className="cart--main-cell__image">
                      <Img fluid={item.image} />
                    </div>
                    {item.title} - {item.size}
                  </div>
                </td>
                <td>{item.qty}</td>
                <td>
                  <span
                    className="material-icons"
                    onClick={() => remove(index)}
                  >
                    delete_forever
                  </span>
                </td>
                <td>${item.salePrice * item.qty}</td>
              </tr>
            )
          })}
        </table>
        <div className="checkout-row">
            <div className="checkout">
                <h5>Cart Total: ${state.reduce((a, b) => { return a + b.salePrice * b.qty},0)}</h5>
                <button>Checkout</button>
            </div>
        </div>
        </>
        :
        <p>Your cart is currently empty.</p>
        
        }
      </div>
    </Layout>
  )
}

export default Cart
