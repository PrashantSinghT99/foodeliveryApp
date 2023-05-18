import React, { useState } from "react";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { clearCartItemsSlice } from '../../Store/cartSlice'
import { useItemTotal } from '../utils/useItemTotal'
const CartList = () => {
  // const [Items,setItems]=useState([]);
  // const [TotalPrice,setTotalPrice]=useState(0);
  const cartItems = useSelector((store) => store.cart.cartItems);
  const totalItemsCount = useSelector((store) => store.cart.totalItemsCount);

  console.log(totalItemsCount);
  const dispatch = useDispatch();

  // console.log(cartItems[0]);
  const clearCart = () => {
    console.log("cart cleared");
    dispatch(clearCartItemsSlice());
  }
  // console.log(Items);
  const calculateTotalPrice = () => {
    const price = cartItems.reduce((accumulator, item) => {
      return accumulator + item.price;
    }, 0);
    return price;
  }

  const getItemTotal = useItemTotal;


  return (
    <div className="w-[100%] mt-8 ml-4 flex flex-col">
      <div className="flex items-center">
        <div>
          <h1 className="font-bold text-3xl mob:text-sm xsm:text-sm ml-4 mr-4">{`Cart(${totalItemsCount})`}</h1>
          {/* <h1 className="font-bold text-3xl mob:text-sm xsm:text-sm ml-4 mr-4">{`Cart(${cartItems.length})`}</h1> */}
          <h1 className="font-bold text-xl mob:text-sm xsm:text-sm ml-4 mr-4">TotalCost:₹{getItemTotal()}</h1>
        </div>
        <div>
          <button className="h-14 w-32 text-xl mob:text-sm mob:w-20 mob:h-10 xsm:text-sm xsm:w-20 bg-red-700 hover:bg-red-400 text-white rounded-xl" onClick={clearCart}>
            Clear Chart
          </button>
        </div>
      </div>

      <div className="flex gap-8 mt-6 text-xl mob:text-sm xsm:text-sm items-center flex-wrap mb-10">
        {/* {cartItems.map((card) => (
          <Cart key={card.itemId} card={card} />
        ))} */}
        {
          Object.values(cartItems).map((card) => (
            <Cart key={card.id} card={card} />
          ))
        }
      </div>

    </div>
  );
};

export default CartList;