/* eslint-disable react/jsx-key */
'use client';

import Link from 'next/link';
function Order({
  _id,
  total,
  status,
  shipping_address,
  order_lines,
  shipping_method,
  createdAt,
}) {
  function getAmountOfItems() {
    let sum = 0;
    order_lines.forEach((element) => {
      sum += element.quantity;
    });
    return sum;
  }
  //let order = use(getOrder(params.id));
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center p-5 space-x-10 text-sm text-gray-600 bg-gray-100">
        <div>
          <p className="text-xs font-bold">ORDER {status}</p>
          <div>{createdAt}</div>
        </div>

        <div>
          <p className="text-xs font-bold">TOTAL {total}</p>
          <div>
            <p>{shipping_method.name} Delivery</p>
          </div>
        </div>

        <p className="self-end flex-1 text-sm text-right text-blue-500 whitespace-nowrap sm:text-xl">
          {getAmountOfItems()} items
        </p>

        <p className="absolute w-40 text-xs truncate top-2 right-2 lg:w-72 whitespace-nowrap">
          <span className="font-bold">Order #</span> {_id}
        </p>
        <p className="absolute w-40 text-xs truncate top-6 right-2 lg:w-72 whitespace-nowrap">
          <span className="font-bold">Address</span>
          {' : '}
          {shipping_address.address_line1}
        </p>
      </div>{' '}
      <Link href={`/orders/${_id}`}>
        <div className="p-5 sm:p-10">
          <div className="flex space-x-6 overflow-auto ">
            {order_lines.map((item, i) => (
              <img
                key={i}
                src={item.product.image}
                alt=""
                className="object-contain h-20 sm:h-32"
              />
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}
export default Order;
