import React, {useReducer, useEffect} from "react"




const CartContext = React.createContext()
     
const CartProvider = (props) => { 
    
    const [state, dispatch] = useReducer(props.cartReducer, props.initialState, () => {
        const localData = localStorage.getItem("hoodieCart");
        return localData ? JSON.parse(localData) : [];
    })

    useEffect(() => {
        localStorage.setItem("hoodieCart", JSON.stringify(state))
    }, [state])
    return (<CartContext.Provider value={[state, dispatch]}>
        {props.children}
    </CartContext.Provider>)
}


export default CartContext

export { CartProvider }


