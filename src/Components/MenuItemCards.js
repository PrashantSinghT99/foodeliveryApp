import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import MenuCard from "./MenuCard";


const MenuItemCards = ({ card }) => {
  // console.log("menu-card", card);
  return (
    <div>
      <MenuCard card={card} />
    </div>
  );
};

export default MenuItemCards;