import React, {useContext} from "react"
import Img from "gatsby-image"
import  cartContext  from "../context/cartContext"
import Layout from "../components/layout"
const Cart = () => {
    const [state, dispatch] = useContext(cartContext)
    const remove = (product) => {
        dispatch({type: 'REMOVE_PRODUCT', title: product.title})
    } 
    return (
        <Layout>
        <div className="cart-container">
            <div className="cart--heading"><h2>YOUR SHOPPING CART</h2></div>
            {state.map((item, index) => {
                return (
                <div style={{height: "200px", display: "flex", justifyContent: "space-evenly"}}onClick={() =>remove({title: item.title}) }>
                    <div style={{width: "10%"}}>
                    <Img fluid={item.image} />
                    </div>
                    <div >
                    {item.title} for {item.salePrice}
                    </div>
                    
                </div>)
            })}

        </div>
        </Layout>
    )
}

export default Cart