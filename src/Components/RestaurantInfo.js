import React from "react";
import {SWIGGY_IMG_URL} from '../utils/constants'

const RestaurantInfo = ( menuData ) => {

  const{name,areaName,city,avgRatingString,costForTwoMessage,cloudinaryImageId}=menuData;
// console.log(menuData);

  // console.log(name,areaName,city,avgRatingString,costForTwoMessage);

  return ( 
  <div className="flex h-80 w-screen bg-blue-950 justify-center text-center">
    <div>
      <img src={`${SWIGGY_IMG_URL}${cloudinaryImageId}`} className="h-60 w-80 mt-9" alt="restaurantInfo"/>
    </div>
      <div className="px-2 py-20 mt-4 text-white font-bold text-2xl">
      <h1 >{name}</h1>
      <h2 className="text-xl"><span>🔴</span>{areaName},{city}</h2>
      <h2 className="text-xl"><span>⭐</span>{avgRatingString}</h2>
      <h2 className="text-xl"><span>🍟</span>{costForTwoMessage}</h2>
    </div>
    </div>
  );
};

export default RestaurantInfo;
