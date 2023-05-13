import React from "react";
import { SWIGGY_IMG_URL } from "../utils/constants";

import MenuItemCards from './MenuItemCards'

const MenuItem = ({ m }) => {
  const { itemCards } = m;
  // console.log("menu itemcards",itemCards);

  return (
    <div>
      {itemCards?.map((card, index) => (
        <MenuItemCards key={index} card={card} />
      ))}
    </div>
  );
};

export default MenuItem;
