import React from "react";
import { SWIGGY_IMG_URL } from "../utils/constants";
import { NO_IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
// import { deleteCartItemSlice } from "../../Store/cartSlice";
import { cartItemsSlice } from "../../Store/cartSlice";
import { removeItem } from "../../Store/cartSlice";
const Cart = ({ card }) => {
  const dispatch = useDispatch();
  //  console.log(card);

  // const handleDelete = () => {
  //   dispatch(deleteCartItemSlice(card.id));
  // };
  // console.log(card);

  return (
    <div className="flex flex-col h-[300px] w-52 my-5 font-bold shadow-md justify-center">
      <div className="flex flex-col">
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
          <h1 className="mt-2">₹{(card.price / 100* card.quantity)}</h1>
        </div>
      </div>
      <div className="flex w-[90%] items-center justify-between mt-3">
        <div>
          <button
            onClick={() => {
              dispatch(cartItemsSlice(card));
            }}
            className="bg-green-700 h-10 w-12 text-white rounded-md hover:bg-green-400"
          >
            +
          </button>
        </div>
        <div>
          <p className="">{card.quantity}</p>
        </div>
        <div>
          <button
            className="bg-red-700 h-10 w-12 text-white rounded-md hover:bg-red-400 "
            onClick={() => {
              dispatch(removeItem(card.id));
            }}
          >
            -
          </button>
        </div>
      </div>
      {/* <div>
        <button
          className="bg-red-500 text-white mt-2 w-[100%]"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div> */}
    </div>
  );
};

export default Cart;
