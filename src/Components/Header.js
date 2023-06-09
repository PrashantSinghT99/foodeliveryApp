import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

  const cartItems = useSelector((store) => store.cart.cartItems);
  const totalItemsCount = useSelector((store) => store.cart.totalItemsCount);

  return (
    <div className="flex w-[100%] items-center justify-between mob:justify-start shadow-lg h-14 left-0 top-0">
      <Link to="/">
        <div className="flex items-center">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjunLTj0CdbpCMM0yRd61KuvwQyvVf8O-DKg&usqp=CAU"
              data-testid="appLogo"
              alt="logo"
              className="h-16 p-2 mx-2 xsm:h-12 mob:h-8"
            />
          </div>
          <div>
            <p className="font-bold  text-xl sm:text-sm xsm:text-xs mob:text-xs">FOODELIVERY</p>
          </div>
        </div>
      </Link>
      <div>
        <ul className="flex text-xl sm:text-lg xsm:text-xs mob:text-xs">
          <Link to='/'>
          <li className="px-4 xsm:px-2 mob:px-1 cursor-pointer hover:bg-[#db7c38] hover:text-white">Home</li>
          </Link>
          <li className="px-4 xsm:px-2 mob:px-1 cursor-pointer  hover:bg-[#db7c38] hover:text-white">Contact</li>
          <Link to='/instamart'>
          <li className="px-4 xsm:px-2 mob:px-1 cursor-pointer  hover:bg-[#db7c38] hover:text-white">Instamart</li>
          </Link>
          <Link to='/FAQs'>
          <li className="px-4 xsm:px-2 mob:px-1 cursor-pointer  hover:bg-[#db7c38] hover:text-white">FAQs</li>
          </Link>
        </ul>
      </div>
      <Link to="/cart">
        <div className="flex items-center">
          <div>
            <img
              className="h-16 p-2 xsm:h-12 mob:h-10 mob:p-0"
              data-testid="cartIcon"
              src="data:image/jpeg;base64,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"
              alt="cart"
            />
          </div>
          <div className="mr-4" >
            <span  data-testid="cart-count" className="text-2xl text-red-600 xsm:text-lg mob:text-sm font-bold">{`(${totalItemsCount})`}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Header;