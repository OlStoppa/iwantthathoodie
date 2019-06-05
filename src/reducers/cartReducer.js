

export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [
                ...state,
                { 
                    title: action.title, 
                    salePrice: action.salePrice,
                    image: action.image
                }
            ]
        case 'REMOVE_PRODUCT':
            return [...state.filter((item) => item.title !== action.title)]
        default:
            return state
    }
}