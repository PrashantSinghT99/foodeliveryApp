import React, { useState } from "react";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { clearCartItemsSlice } from '../Store/cartSlice'
const CartList = () => {
  // const [Items,setItems]=useState([]);

  const cartItems = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();
  // console.log(cartItems[0]);
  const clearCart=()=>
{
  console.log("cart cleared");
  dispatch(clearCartItemsSlice());
}
  // console.log(Items);

  return (
    <div className="w-[100%] mt-8 ml-4 flex flex-col">
      <div className="flex items-center">
        <div>
          <h1 className="font-bold text-4xl ml-4 mr-4">{`Cart(${cartItems.length})`}</h1>
        </div>
        <div>
          <button className="h-14 w-32 text-xl bg-green-700 hover:bg-green-400 text-white rounded-xl" onClick={clearCart}>
            Clear Chart
          </button>
        </div>
      </div>

      <div className="flex mt-6 text-xl items-center flex-wrap mb-10">
        {cartItems.map((card) => (
          <Cart key={card.itemId} card={card}></Cart>
        ))}
      </div>

    </div>
  );
};

export default CartList;
