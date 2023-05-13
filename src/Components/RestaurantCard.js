import React from "react";
import { SWIGGY_IMG_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = ({ info }) => {
  // console.log(info.data.cloudinaryImageId);


  const ratingColor = () => {
    if (info.data.avgRating != "--" && info.data.avgRating < 4) {
      return (style = " px-1 text-white h-6 w-12 bg-[#db7c38]");
    } else if (info.data.avgRating != "--" && info.data.avgRating >=4) {
      return (style = " px-1 text-white h-6 w-12 bg-[#48c479]");
    }
  };

  return (
    <Link to={`/restaurant/${info.data.id}`}>
      <div className="text-sm border h-65 w-64 cursor-pointer p-4 m-3 border-gray-100 bg-gray rounded-md  hover:shadow-2xl bg-gray-50">
        <img src={SWIGGY_IMG_URL + info.data.cloudinaryImageId} alt="restro" />
        <h3 className=" px-1 font-bold text-black">
          {info.data.address.substring(0, 25)}
        </h3>
        <h4 className=" px-1 my-1">{info.data.name}</h4>
        <div className="flex justify-between mt-2">
          <span className={ratingColor()}>☆{info.data.avgRating}</span>
          <span className=" px-1">⏱️{info.data.maxDeliveryTime} MINS</span>
          <span className=" px-1">🔴{info.data.lastMileTravelString}</span>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
