import { createSlice } from '@reduxjs/toolkit'
const cartSlice = createSlice({
    name: "cart",
    initialState:
    {
        cartItems: [],
    },
    reducers: {
        cartItemsSlice: (state, action) => {
            state.cartItems.push(action.payload);
        }
    }
})
export const { cartItemsSlice } = cartSlice.action;
export default cartSlice.reducer;