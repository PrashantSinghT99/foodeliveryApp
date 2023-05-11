import { useState, useEffect } from "react";
import { RESTAURANT_MENU_URL } from "./constants";
const useRestaurantMenu = (id) => {
    const [restaurantMenuData, setrestaurantMenuData] = useState([]); // console.log(id);

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
