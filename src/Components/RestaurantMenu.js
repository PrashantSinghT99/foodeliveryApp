import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantInfo from "./RestaurantInfo";
import { RESTAURANT_MENU_URL } from "../utils/constants";
import MenuitemList from "./MenuitemList";
import Shimmer from "./Shimmer";
import useRestaurantMenu from '../utils/useRestaurantMenu'
const RestaurantMenu = () => {
  const { id } = useParams();

  // const [restaurantMenuData, setrestaurantMenuData] = useState(null);
  // const menuData = restaurantMenuData;

  // useEffect(() => {
  //   callRestaurantMenuApi();
  // }, []);

  //  restaurantMenuData = useRestaurantMenu(id);
  //   menuData = restaurantMenuData;
  //   console.log(menuData);
  const menuData =
    useRestaurantMenu(
      id
    );
  // const callRestaurantMenuApi = async () => {
  //   console.log("menu api call made");
  //   try {
  //     const data = await fetch(`${RESTAURANT_MENU_URL}${id}`);

  //     // console.log(data);
  //     const res_data = await data.json();
  //     const menuItemsList =
  //       res_data?.data?.cards[2]["groupedCard"]?.cardGroupMap?.REGULAR?.cards;
  //     const itemCategory =
  //       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
  //     const NestedItemCategory =
  //       "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";
  //     // setrestaurantMenuData(await  json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  //     const menu = menuItemsList.map((item) => {
  //       if (
  //         item.card.card["@type"] === itemCategory ||
  //         item.card.card["@type"] === NestedItemCategory
  //       ) {
  //         return item?.card?.card;
  //       }
  //     });
  //     const modifiedData = {
  //       info: res_data.data.cards[0].card.card.info,
  //       menu: menu.filter((value) => value !== undefined),
  //     };
  //     setrestaurantMenuData(modifiedData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


  return !menuData ? (
    <Shimmer />
  ) : (
    <div className="mt-2">
      <RestaurantInfo {...menuData.info} />
      <div className="w-screen mb-10" >
        <MenuitemList menulist={menuData.menu} />
      </div>
    </div>
  );
};

export default RestaurantMenu;