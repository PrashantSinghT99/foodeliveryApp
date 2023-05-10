import React from "react";
import { NO_IMG_URL } from "../utils/constants";
import { SWIGGY_IMG_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const Menu = (card) => {
  const { info } = card.card.card;
  // console.log("info", info?.name);
  //    console.log("info", info?.imageId);
  //  console.log("info", info?.price);

// const {id}= useParams();


const addItemToCart=()=>
{

}

  return (
    <>
      <div className="flex justify-center m2 p-4 items-center shadow-md w-full">
        <div>
          <img
            src={!info.imageId ? NO_IMG_URL : SWIGGY_IMG_URL + info.imageId}
            className="w-56 "
          />
        </div>
        <div className="flex flex-col w-10 ml-4">
          <h1 className="text-sm font-bold"> {info?.name}</h1>
          <h1 className="mt-2">₹{info?.price / 100}</h1>
        </div>

        <div>
          <button className="bg-green-700 h-10 p-2 px-3 mx-10 text-white rounded-md" onClick={addItemToCart}>
            Add
          </button>
        </div>
      </div>
    </>
  );
};

const MenuItemCard = ({ card }) => {
  // console.log("card", card);
  return (
    <div>
      <Menu card={card} />
    </div>
  );
};

export default MenuItemCard;

// const MenuItemCard = ({ card }) => {
//   // const { info } = card;
//   // console.log("MenuItemCard",card);
//   return (
//     <>
//       {info?.map((info, index) => (
//         <MenuItemCardArray key={index} arr={arr} />
//       ))}
//     </>
//   );
// };
