import React from "react";
import { SWIGGY_IMG_URL } from "../utils/constants";
import MenuItemCards from './MenuItemCards'
// import { useSelector } from "react-redux";
const MenuItem = ({ m }) => {
  const { itemCards } = m;
  // console.log("menu itemcards",itemCards);
  // const cartItems = useSelector((store) => store.cart.cartItems);

  return (
    <div>
      {itemCards?.map((card, index) => (
        <MenuItemCards key={index} card={card}/>
      ))}
    </div>
  );
};

export default MenuItem;
