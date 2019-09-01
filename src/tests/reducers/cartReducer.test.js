import { cartReducer } from '../../reducers/cartReducer';
import cart from '../fixtures/cart'



test('should set empty state', () => {
    const state = cartReducer(cart, {type: 'EMPTY_CART'});
    expect(state).toEqual([]);
});

test('should set default state', () => {
    const state = cartReducer(cart, {type: ''});
    expect(state).toEqual(cart);
});

test('should remove product by index', () => {
    const state = cartReducer(cart, {type: 'REMOVE_PRODUCT', index: 0});
    expect(state).toEqual([]);
});

test('should add product', () => {
    const product = {
        
            title: "olsprod", 
            salePrice: "39.99",
            image: "testImage.png",
            size: "L",
            qty: 1
        };
        const action = {
            type: 'ADD_PRODUCT',
            ...product
        };    
    const state = cartReducer(cart, action);
    expect(state).toEqual([...cart, product]);
});

test('should update the quantity of cart item', () => {
    const product = {
        title: "test product", 
            salePrice: "20.99",
            image: "testImage.png",
            size: "L",
            qty: 1
    };

    const action = {
        type: 'ADD_PRODUCT',
        ...product
    }
    const state = cartReducer(cart, action);
    expect(state[0].qty).toBe(2);
})