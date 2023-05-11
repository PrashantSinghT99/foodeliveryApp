import { createSlice } from '@reduxjs/toolkit'
const cartSlice = createSlice({
    name: "cart",
    initialState:
    {
        cartItems: [],
    },
    reducers: {
        cartItemsSlice: (state, actions) => {
            state.cartItems.push(actions.payload);

        },
        clearCartItemsSlice: (state) => {
            state.cartItems = [];
        }
    }
})
export const { cartItemsSlice, clearCartItemsSlice } = cartSlice.actions;
export default cartSlice.reducer;