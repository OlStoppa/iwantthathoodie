import React, { useContext, useState } from "react"
import Img from "gatsby-image"
import Modal from "react-modal"
import cartContext from "../context/cartContext"
import Layout from "../components/layout"
import Paypal from "../components/paypal"


const Cart = () => {
  const [state, dispatch] = useContext(cartContext)

  const [purchasedModalOpen, setPurchasedModalOpen] = useState(false)
  const [orderDetails, setOrderDetails] = useState(undefined)
  

  const total = state.reduce((a, b) => { return a + b.salePrice * b.qty},0)

  
  const remove = product => {
    dispatch({ type: "REMOVE_PRODUCT", index: product })
  }

  const closeModal = () => {
    setPurchasedModalOpen(false)
    dispatch({type: "EMPTY_CART"})
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
                <h5>Cart Total: ${total.toFixed(2)}</h5>
                 
                <Paypal
                  cart={state}
                  total={total.toFixed(2)}
                  openModal={setPurchasedModalOpen}
                  setOrderDetails={setOrderDetails}
                />
            </div>
        </div>
        </>
        :
        <p>Your cart is currently empty.</p>
        
        }
        <Modal
          isOpen={purchasedModalOpen}
          onRequestClose={closeModal}
          closeTimeoutMS={200}
          className="modal"
          style={{overlay: {backgroundColor: 'rgba(52, 52, 52, 0.8)'}}}
        >
          <h3>Awesome!</h3>
          {orderDetails &&
          <>
          <p>Your payment has been received. Shipping confirmation will be sent to :</p>
          <p>{orderDetails.payer.email_address}</p>
          </>
          }

        </Modal>
      </div>
      
    </Layout>
  )
}

export default Cart
