import React, { useState } from "react";
import { NO_IMG_URL } from "../utils/constants";
import { SWIGGY_IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { cartItemsSlice } from "../../Store/cartSlice";

import { removeItem } from "../../Store/cartSlice";
// import { useParams } from "react-router-dom";
// import MenuCard from "./MenuCard";
// import { useSelector } from "react-redux";

const MenuItemCards = ({ card }) => {
  const infoData = card?.card?.info;
  const [itemCount, setitemCount] = useState(0);
  const id = infoData?.id;

  console.log(infoData.itemAttribute.vegClassifier);
  //veg/non veg

  // const cartItems = useSelector((store) => store.cart.cartItems);

  // console.log(id);
  const dispatch = useDispatch();

  const addItemToCart = (infoData) => {
    console.log("item to be added");

    // dispatch(
    //   cartItemsSlice({
    //     itemId: infoData.id,
    //     name: infoData.name,
    //     imageId: infoData.imageId,
    //     price: infoData.price,
    //     count: 1,
    //   })
    // );
    dispatch(cartItemsSlice(infoData));
    setitemCount(itemCount + 1);
  };

  // const handleIncrease = () => {
  //   dispatch(increaseCount({ id }));
  // };

  // const handleDecrease = () => {
  //   dispatch(decreaseCount({ id }));
  // };
  const handleDecrease = (id) => {
    let updatedCount;
    dispatch(removeItem(id));
    updatedCount = itemCount > 0 ? itemCount - 1 : 0;
    setitemCount(updatedCount);
  };

  return (
    <div
      className="flex justify-center m2 p-4 items-center shadow-md w-full"
      data-testid="menu"
    >
      <div>
        <p className="mr-6 font-bold">
          {infoData?.itemAttribute?.vegClassifier === "VEG"
            ? "VEG🟢"
            : "NONVEG🔴"}
        </p>
      </div>
      <div>
        <img
          src={
            !infoData?.imageId ? NO_IMG_URL : SWIGGY_IMG_URL + infoData?.imageId
          }
          className="w-56 P-4"
        />
        <h1 className="text-sm font-bold w-32 mt-2">{infoData?.name}</h1>
      </div>

      <div className="flex flex-col w-10 ml-4">
        <h1 className="mt-2 font-bold text-lg">₹{infoData?.price / 100}</h1>
      </div>

      <div className="ml-10">
        {/* <button
          className="bg-green-700 h-10 p-2 px-3 mx-10 text-white rounded-md hover:bg-green-400"
          onClick={addItemToCart}
        >
          Add
        </button> */}

        <button
          data-testid="addMenuItemBtn"
          className="bg-green-600 h-10 p-2 px-3 mx-10 text-white rounded-md hover:bg-green-400 text-sm"
          onClick={() => addItemToCart(infoData)}
        >
          ADD
        </button>
        <span>{itemCount}</span>
        <button
          data-testid="removeMenuItemBtn"
          className="bg-red-600 h-10 p-2 px-3 mx-8 text-white rounded-md hover:bg-red-400 text-sm"
          onClick={() => handleDecrease(id)}
        >
          REMOVE
        </button>
      </div>
    </div>
  );
};
//   return (
//     <div>
//       <MenuCard card={card} />
//     </div>
//   );
// };

export default MenuItemCards;
