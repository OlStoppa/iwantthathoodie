import React, {useReducer} from "react"




const CartContext = React.createContext()
     
const CartProvider = (props) => { 
    
    const [state, dispatch] = useReducer(props.cartReducer, props.initialState)
    return (<CartContext.Provider value={[state, dispatch]}>
        {props.children}
    </CartContext.Provider>)
}


export default CartContext

export { CartProvider }


