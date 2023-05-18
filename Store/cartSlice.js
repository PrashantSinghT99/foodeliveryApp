import { createSlice } from '@reduxjs/toolkit'
const cartSlice = createSlice({
  name: "cart",
  initialState:
  {
    cartItems: {},
    totalItemsCount: 0,
  },
  reducers: {
    cartItemsSlice: (state, action) => {
      // state.cartItems.push(actions.payload)
      const item = state.cartItems[action.payload.id];
      const quantity = item && item.hasOwnProperty("quantity") ? state.cartItems[action.payload.id]?.quantity + 1 : 1;
      state.cartItems[action.payload.id] = { ...action.payload, quantity };
      state.totalItemsCount = state.totalItemsCount + 1;
    },
    clearCartItemsSlice: (state) => {
      state.cartItems = {};
      state.totalItemsCount = 0;
    },
    removeItem: (state, action) => {
      const item = state.cartItems[action.payload];
      if (!item) return;
      if (item.quantity > 1) {
        item.quantity -= 1;
        state.totalItemsCount--;
      } else {
        state.totalItemsCount--;
        delete state.cartItems[action.payload];
      }
    },
    // deleteCartItemSlice: (state, actions) => {
    //     state.cartItems = state.cartItems.filter(item => item.itemId !== actions.payload);
    // },
    // increaseCount: (state, actions) => {
    //     const { id } = actions.payload;
    //     const cartItems = state.cartItems.find(item => item.itemId === id);
    //     if (cartItems) {
    //         cartItems.count++;
    //     }
    // },
    // decreaseCount: (state, actions) => {
    //     const { id } = actions.payload;
    //     const cartItems = state.cartItems.find(item => item.itemId === id);
    //     if (cartItems && cartItems.count > 0) {
    //         cartItems.count--;
    //     }
    // },
  }
})
export const { cartItemsSlice, clearCartItemsSlice, removeItem } = cartSlice.actions;
export default cartSlice.reducer;