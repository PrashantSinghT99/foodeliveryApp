import { useState, useEffect } from "react";
import { RESTAURANT_MENU_URL } from "./constants";
const useRestaurantMenu = (id) => {
    const [restaurantMenuData, setrestaurantMenuData] = useState([]); // console.log(id);
// console.log(restaurantMenuData);
//    console.log(restaurantMenuData.name); 
//    console.log(restaurantMenuData.price/100); 
//    console.log(restaurantMenuData.imageId); 
// const name=restaurantMenuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info?.name;
//const imageId=restaurantMenuData?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info.imageId;
//const price=restaurantMenuData?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info.price
    // console.log(restaurantMenuData?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info.name,
    //     restaurantMenuData?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info.imageId,
    //     restaurantMenuData?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info.price);
// console.log(name);
    useEffect(() => {
        callRestaurantMenuApi();
    }, []);

    const callRestaurantMenuApi = async () => {
        // console.log("api call made");

        const data = await fetch(`${RESTAURANT_MENU_URL}${id}`);
        const json = await data.json();
        setrestaurantMenuData(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    };
    return restaurantMenuData;

}
export default useRestaurantMenu;
