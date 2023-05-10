import React from "react";
import { SWIGGY_IMG_URL } from "../utils/constants"
import { Link } from "react-router-dom";

const RestaurantCard = ({ info }) => {

  // console.log(info.data.cloudinaryImageId);

  return (
    <Link to={`/restaurant/${info.data.id}`}>
      <div className="border h-65 w-64 cursor-pointer p-4 m-3 border-gray-100 bg-gray rounded-md  hover:shadow-2xl bg-gray-50">
        <img src={SWIGGY_IMG_URL + info.data.cloudinaryImageId}
          alt="restro"
        />
        <h3 className="text-sm px-1 font-bold text-black">{info.data.address.substring(0, 25)}</h3>
        <h4 className="text-sm px-1 ">{info.data.name}</h4>
        <h5 className="text-sm px-1">🔴{info.data.lastMileTravelString}</h5>
      </div>
    </Link>
  );
};

export default RestaurantCard;
