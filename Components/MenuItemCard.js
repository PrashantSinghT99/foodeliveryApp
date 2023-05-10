import React from "react";
import { NO_IMG_URL } from "../utils/constants";
import { SWIGGY_IMG_URL } from "../utils/constants";

const Menu = (card) => {
  const { info } = card.card.card;
  console.log("info", info?.name);
//    console.log("info", info?.imageId);
  //  console.log("info", info?.price);

  return (
    <>
      <div>
        <img
          src={
            !info.imageId
              ? NO_IMG_URL
              : SWIGGY_IMG_URL + info.imageId
          }
          className="w-48 rounded-md "
        />
        <h1> {info?.name}</h1>
        <h1>{info?.price / 100}</h1>
      </div>
    </>
  );
};

const MenuItemCard = ({ card }) => {
  console.log("card", card);
  return <div> <Menu card={card} /></div>;
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
