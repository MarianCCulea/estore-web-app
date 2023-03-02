"use client";

import CheckoutProduct from "app/CheckoutProduct";
import { selectItems, selectTotal } from "../../Redux/cartSlice";
import Header from "app/Header";
import Image from "next/image";
import { useSelector } from "react-redux";

function Checkout() {
  const items = useSelector(selectItems);
  const cartTotal = useSelector(selectTotal);
  const session = false;
  return (
    <div className="bg-gray-200">
      <Header />
      <main className="max-w-screen-xl mx-auto lg:flex">
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            alt=""
            height={1020}
            width={250}
            className="object-contain "
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="pb-4 text-3xl border-b ">
              {items.length === 0 ? "Your basket is empty" : "Shopping Basket"}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct key={i} {...item} />
            ))}
          </div>
        </div>
        <div className="flex flex-col p-10 bg-white shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items) :{" "}
                <span className="font-bold">{cartTotal} $</span>
              </h2>
              <button
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Sing in to checkout" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
