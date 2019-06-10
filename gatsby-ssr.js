import React from "react"

import { CartProvider } from "./src/context/cartContext"
import {cartReducer} from "./src/reducers/cartReducer"

export const wrapRootElement = ({ element }) => (
  <CartProvider cartReducer={cartReducer} initialState={[]}>{element}</CartProvider>
)