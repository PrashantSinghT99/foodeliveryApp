import React from 'react'
import { NO_IMG_URL } from "../utils/constants";
import { SWIGGY_IMG_URL } from "../utils/constants";
import { useDispatch } from 'react-redux';
import { cartItemsSlice } from '../Store/cartSlice';
const MenuCard = (card) => {
    const { info } = card.card.card;
    const dispatch = useDispatch();


    // console.log(info?.id);
    // console.log("info", info?.name);
    //    console.log("info", info?.imageId);
    //  console.log("info", info?.price);
    const addItemToCart = () => {
        console.log("item to be added")

        dispatch(cartItemsSlice(
            {
                itemId:info.id,
                name: info.name,
                imageId: info.imageId,
                price: info.price,
            }))

    }

    return (
        <>
            <div className="flex justify-center m2 p-4 items-center shadow-md w-full">
                <div>
                    <img
                        src={!info.imageId ? NO_IMG_URL : SWIGGY_IMG_URL + info.imageId}
                        className="w-56 "
                    />
                </div>
                <div className="flex flex-col w-10 ml-4">
                    <h1 className="text-sm font-bold"> {info?.name}</h1>
                    <h1 className="mt-2">₹{info?.price / 100}</h1>
                </div>

                <div>
                    <button className="bg-green-700 h-10 p-2 px-3 mx-10 text-white rounded-md hover:bg-green-400" onClick={addItemToCart}>
                        Add
                    </button>
                </div>
            </div>
        </>
    );
};

export default MenuCard