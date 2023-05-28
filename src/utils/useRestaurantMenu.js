import { useState, useEffect } from "react";
import { RESTAURANT_MENU_URL } from "./constants";
const useRestaurantMenu = (id) => {
  // console.log(id);
   
  const [restaurantMenuData, setrestaurantMenuData] = useState(null);
    useEffect(() => {
        callRestaurantMenuApi();
      }, []);

    const callRestaurantMenuApi = async () => {
        console.log("menu api call made");
        try {
            const data = await fetch(`${RESTAURANT_MENU_URL}${id}`);
            // console.log(data);
            const res_data = await data.json();
            const menuItemsList = res_data?.data?.cards[2]["groupedCard"]?.cardGroupMap?.REGULAR?.cards;
            const itemCategory = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
            const NestedItemCategory = "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";
                //console.log(menuItemsList)
            const menu = menuItemsList.map((item) => {
                if (
                    item.card.card["@type"] === itemCategory ||
                    item.card.card["@type"] === NestedItemCategory
                ) {
                    return item?.card?.card;
                }
            });
            const modifiedData = {
                info: res_data.data.cards[0].card.card.info,
                menu: menu.filter((value) => value !== undefined),
            };
            // console.log(modifiedData);
            setrestaurantMenuData(modifiedData);
  
        } catch (error) {
            console.log(error);
        }
      
     
      
    };
    //   console.log("restaurantMenuData",restaurantMenuData);
        return restaurantMenuData;

}
export default useRestaurantMenu;
