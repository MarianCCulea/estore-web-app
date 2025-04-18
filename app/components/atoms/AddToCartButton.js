"use client";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

function AddToCartButton({
  id,
  title,
  description,
  category,
  image,
  price,
  // rating,
  // hasPrime,
  size,
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
    <>
      {!size ? (
        <button
          onClick={addItemToCart}
          className="w-full mt-auto rounded-full button"
        >
          Add to basket
        </button>
      ) : (
        <button
          onClick={addItemToCart}
          className="p-1 text-xs border border-yellow-300 rounded-lg md:text-xs bg-gradient-to-b from-yellow-200 to-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500"
        >
          Add to basket
        </button>
      )}
    </>
  );
}

export default AddToCartButton;
