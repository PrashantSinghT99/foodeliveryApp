import { useSelector } from "react-redux";

export const useItemTotal = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);

  let total =
    cartItems &&
    Object.values(cartItems)
      .map((item) => (item.price / 100) * item.quantity)
      .reduce((acc, curr) => acc + curr, 0);

  return total;


}