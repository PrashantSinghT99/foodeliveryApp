import React, { useEffect, useState } from "react";
import RestaurantList from "./RestaurantList";
import { RESTAURANT_API_URL } from "../utils/constants";
import Footer from "./Footer";
const Body = () => {
  const [RestroData, setRestroData] = useState([]);

  // console.log(RestroData);
  useEffect(() => {
    restaurantApiCall();
  }, []);

  const restaurantApiCall = async () => {
    const data = await fetch(RESTAURANT_API_URL);
    const json = await data.json();
    // console.log(json.data.cards[2].data.data.cards);

    setRestroData(json?.data?.cards[2]?.data?.data?.cards);
  };
  return (
    <div className="text-center mt-2">
      <input type="text" placeholder="Search" className=" h-8 mt-2 w-[400px]  p-4 border border-gray-300 rounded-md focus:outline-none placeholder:" />
      <button className="h-8 w-20 ml-4 bg-gray-600 text-white rounded-lg">Search</button>
      <div className="flex flex-wrap justify-center border-none mb-6">
        <RestaurantList data={RestroData}/>
      </div>
    </div>
  );
};

export default Body;

