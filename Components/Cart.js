import React from "react";
import { SWIGGY_IMG_URL } from "../utils/constants";
import {NO_IMG_URL} from '../utils/constants'
const Cart = ({ card }) => {
  return (
    <div className="flex flex-col h-56 w-64 mx-2 my-5 font-bold">
      <h1 className="mb-4 "> {card.name}</h1>
      <img className="h-40 w-44" src={!card.imageId ? NO_IMG_URL : SWIGGY_IMG_URL + card.imageId} alt="cartItemLogo"/>
      <h1 className="mt-2">₹{card.price / 100}</h1>
    </div>
  );
};

export default Cart;
