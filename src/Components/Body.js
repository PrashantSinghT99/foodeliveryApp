import React, { useEffect, useState } from "react";
import RestaurantList from "./RestaurantList";
import { RESTAURANT_API_URL } from "../utils/constants";
import { filterData } from '../utils/useSearch'
import Shimmer from '../Components/Shimmer'
const Body = () => {
  const [RestroData, setRestroData] = useState([]);
  const [SearchData, setSearchData] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    restaurantApiCall();
  }, []);

  useEffect(() => {
    const data = filterData(SearchData, RestroData);
    // update the state - restaurants
    setFilteredRestaurants(data);
  }, [SearchData]);

  const restaurantApiCall = async () => {
    const data = await fetch(RESTAURANT_API_URL);
    const json = await data.json();
    // console.log(json.data.cards[2].data.data.cards);
    setRestroData(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };

  if (!RestroData) return null;

  return RestroData?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="text-center mt-6 h-[80%] w-[100%]">
      <input type="text"
        placeholder="Search restaurant"
        className=" h-8 mt-2 w-[400px] p-4 border border-gray-300 rounded-md focus:outline-none xsm:w-[180px] mob:w-[180px]"
        value={SearchData}
        onChange={(e) => setSearchData(e.target.value)}
      />
      <button className="h-8 w-20 ml-4 bg-gray-600 text-white rounded-lg hover:bg-green-500  xsm:h-6,w-15 mob:h-6,w-15"
        onClick={() => {
          const data = filterData(SearchData, RestroData);
          setFilteredRestaurants(data);
        }}>Search</button>
      <div className="flex flex-wrap justify-center border-none mb-6">
        <RestaurantList data={filteredRestaurants} />
      </div>
    </div>

  );
};

export default Body;
