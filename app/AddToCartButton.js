"use client";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";

function AddToCartButton({
  id,
  title,
  description,
  category,
  image,
  price,
  // rating,
  // hasPrime,
}) {
  const dispatch = useDispatch();
  const addItemToCart = () => {
    const product = {
      id,
      title,
      description,
      category,
      image,
      price,
      // rating,
      // hasPrime,
    };
    dispatch(addToCart(product));
  };
  return (
    <button onClick={addItemToCart} className="mt-auto button">
      Add to basket
    </button>
  );
}

export default AddToCartButton;
