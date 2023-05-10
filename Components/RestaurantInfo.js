import React from "react";

const RestaurantInfo = ( menuData ) => {

  const{name,areaName,city,avgRatingString,costForTwoMessage}=menuData;

  console.log(name,areaName,city,avgRatingString,costForTwoMessage);

  return ( 
  <div className="h-60 w-screen bg-blue-900 text-center ">
      <div className="p-20 text-white font-bold text-xl">
      <h1>{name}</h1>
      <h1>{areaName},{city}</h1>
      <h1>{avgRatingString}</h1>
      <h1> {costForTwoMessage}</h1>
    </div>
    </div>
  );
};

export default RestaurantInfo;
