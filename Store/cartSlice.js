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
        },
        deleteCartItemSlice:(state,actions)=>
        {
            state.cartItems = state.cartItems.filter(item => item.itemId !== actions.payload);
        }
    }
})
export const { cartItemsSlice, clearCartItemsSlice,deleteCartItemSlice } = cartSlice.actions;
export default cartSlice.reducer;