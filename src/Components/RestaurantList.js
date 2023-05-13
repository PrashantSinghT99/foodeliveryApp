import React from "react";
import RestaurantCard from "./RestaurantCard";
import Link from "react-router-dom";
const RestaurantList = ({ data }) => {
  return (
    <>
      {data.map((d) => (
        <RestaurantCard key={d.data.id} info={d} />
      ))}
    </>
  );
};

export default RestaurantList;

// to={"/watch?v=" + video.id}


