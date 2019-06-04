

export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [
                ...state,
                { title: action.title, salePrice: action.salePrice}
            ]

        default:
            return state
    }
}