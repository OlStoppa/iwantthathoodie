import React from "react"
import Header from "../../components/header"
import {render, cleanup } from "@testing-library/react"
import CartContext from "../../context/cartContext";

afterEach(cleanup)

it("renders", () => {

    const state = [[]]
    const {asFragment} = render(
        <CartContext.Provider value={state}>
        <Header />
        </CartContext.Provider>
        );
    expect(asFragment()).toMatchSnapshot();

});

test("renders the cart count", () => {
    const state =[[{qty: 1}, {qty: 3}]];
    const tree = (
        <CartContext.Provider value={state}>
        <Header />
        </CartContext.Provider>
    )

    const {getByTestId} = render(tree);
    expect(getByTestId('cart-counter').textContent).toBe('4');
})

