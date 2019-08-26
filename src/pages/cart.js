import React, { useContext, useEffect } from "react"
import { useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"
import cartContext from "../context/cartContext"
import Layout from "../components/layout"

const Cart = () => {
  const [state, dispatch] = useContext(cartContext)
  let stripe
  useEffect(() => {
    
    stripe = window.Stripe('pk_test_xAWn75YLPUHCnnZufMNVkmc400sZ7mb3rc')
    
  })

  const data = useStaticQuery(graphql`
    query SkuQuery {
      allStripeSku {
        edges {
          node {
            id,
            attributes {
              name
            }
            
          }
        }
      }
    }
  `)

  console.log(data)
  const remove = product => {
    dispatch({ type: "REMOVE_PRODUCT", index: product })
  }

  const checkOut = async () => {
    
    const items = state.map((product) => {
      console.log(`${product.title} - ${product.size}`)
      const sku = data.allStripeSku.edges.find((element) => element.node.attributes.name === `${product.title} - ${product.size}`) 
       
      return {
        sku: sku.node.id,
        quantity: product.qty
      }
    })
     await stripe.redirectToCheckout({
    items,
    successUrl: 'https://example.com/success',
    cancelUrl: 'https://example.com/cancel',
  }).then((result) => {
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `result.error.message`.
  });
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
          <tbody>
          <tr className="table-headings">
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
                    <div style={{display: "block"}}>
                    {item.title} - {item.size}
                    </div>
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
          </tbody>
        </table>
        <div className="checkout-row">
            <div className="checkout">
                <h5>Cart Total: ${state.reduce((a, b) => { return a + b.salePrice * b.qty},0)}</h5>
                <button onClick={checkOut}>Checkout</button>
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
