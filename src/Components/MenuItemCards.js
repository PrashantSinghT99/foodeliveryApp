import React from 'react';
import {NO_IMG_URL} from '../utils/constants';
import {SWIGGY_IMG_URL} from '../utils/constants';
import { useDispatch } from 'react-redux';
import { cartItemsSlice } from '../../Store/cartSlice';
// import { useParams } from "react-router-dom";
// import MenuCard from "./MenuCard";


const MenuItemCards = ({ card }) => {
  const infoData = card.card.info;


  const dispatch = useDispatch();


  const addItemToCart = () => {
    console.log("item to be added")

    dispatch(cartItemsSlice(
      {
        itemId: infoData.id,
        name: infoData.name,
        imageId: infoData.imageId,
        price: infoData.price,
      }))

  }

  return ( <div className="flex justify-center m2 p-4 items-center shadow-md w-full">
        <div>
          <img
            src={!infoData.imageId ? NO_IMG_URL : SWIGGY_IMG_URL + infoData.imageId}
            className="w-56 "
          />
        </div>
        <div className="flex flex-col w-10 ml-4">
          <h1 className="text-sm font-bold"> {infoData?.name}</h1>
          <h1 className="mt-2">₹{infoData?.price / 100}</h1>
        </div>

        <div>
          <button className="bg-green-700 h-10 p-2 px-3 mx-10 text-white rounded-md hover:bg-green-400" onClick={addItemToCart}>
            Add
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