import Link from "next/link";
import React from "react";

function Order() {
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center p-5 space-x-10 text-sm text-gray-600 bg-gray-100">
        <div>
          <p className="text-sm font-bold"> ORDER PLACED </p>
          <p>date</p>
        </div>
        <div>
          <p className="text-xs font-bold">Total</p>
          <p>213 -next daydelivery - 500</p>
        </div>
        <p className="self-end flex-1 text-sm text-right text-blue-500 whitespace-nowrap sm:text-xl">
          {selectItems.length} items
        </p>
        <p className="absolute w-40 text-xs truncate top-2 right-2 lg:w-72 whitespace-nowrap">
          Order# {id}
        </p>
      </div>
      <Link href={`/orders/${id}`}>
        <div className="p-5 sm:p-10">
          <div className="flex space-x-6 overflow-x-auto">
            {images.map((image, i) => (
              <img
                key={i}
                src={image}
                className="object-contain h-20 sm:h-32"
                alt=""
              />
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Order;
