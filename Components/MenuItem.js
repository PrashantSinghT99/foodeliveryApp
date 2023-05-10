import React from "react";
import { SWIGGY_IMG_URL } from "../utils/constants";

import MenuItemCard from './MenuItemCard'

const MenuItem = ({ m }) => {
  const { itemCards } = m;
  // console.log("menu item",itemCards);

  return (
    <div>
      {itemCards?.map((card, index) => (
        <MenuItemCard key={index} card={card} />
      ))}
    </div>
  );
};

export default MenuItem;
