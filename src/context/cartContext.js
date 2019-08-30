import React, {useReducer, useEffect, useState} from "react"




const CartContext = React.createContext()
     
const CartProvider = (props) => { 
    
    const [state, dispatch] = useReducer(props.cartReducer, props.initialState, () => {

        const localData = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("hoodieCart")) : undefined
        return localData ? localData : []
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


