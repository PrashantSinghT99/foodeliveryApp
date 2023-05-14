import React from "react";
import { SWIGGY_IMG_URL } from "../utils/constants";
import { NO_IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { deleteCartItemSlice } from "../../Store/cartSlice";
const Cart = ({ card }) => {
  const dispatch = useDispatch();
  //  console.log(card);

    const handleDelete = () => {
      dispatch(deleteCartItemSlice(card.itemId));
    };

  

  return (
    <div className="flex flex-col h-64 w-52 my-5 font-bold shadow-md justify-center">
      <div>
        <h1 className="mb-4">{card.name.substring(0, 20)}</h1>
      </div>
      <div>
        <img
          className="h-40 w-44"
          src={!card.imageId ? NO_IMG_URL : SWIGGY_IMG_URL + card.imageId}
          alt="cartItemLogo"
        />
      </div>
      <div>
        <h1 className="mt-2">₹{card.price / 100}</h1>
      </div>
      <div>
        <button
          className="bg-red-500 text-white mt-2 w-[100%]"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Cart;
