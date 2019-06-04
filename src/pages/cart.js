import React, {useContext} from "react"
import  cartContext  from "../context/cartContext"
import Layout from "../components/layout"
const Cart = () => {
    const [state, dispatch] = useContext(cartContext)
    return (
        <Layout>
        <div className="cart-container">
            <div className="cart--heading"><h2>YOUR SHOPPING CART</h2></div>
            {state.map((item, index) => {
                return (<div>{item.title} for {item.salePrice}</div>)
            })}

        </div>
        </Layout>
    )
}

export default Cart