


export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            if (state.some(product => product.title === action.title && product.size === action.size)) {
                const newState = state.map((product, index) => {
                    if(product.title === action.title && product.size === action.size){
                        
                        return ({
                            qty: product.qty++,
                            ...product
                            
                        })
                    }else {
                            return product
                        }
                    
                })
                return newState
            }else {

            return [
                ...state,
                { 
                    title: action.title, 
                    salePrice: action.salePrice,
                    image: action.image,
                    size: action.size,
                    qty: 1
                }
            ]
        }
        case 'REMOVE_PRODUCT':
            return [...state.filter((item, index) => index !== action.index)]

        case 'EMPTY_CART': 
            return []
        default:
            return state
    }
}