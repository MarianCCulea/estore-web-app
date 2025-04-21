'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

function OrderPage({ params }) {
  const { data: session } = useSession();
  const [order, setOrder] = useState();

  useEffect(() => {
    fetch(`http://localhost:3005/orders/${params.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${session.user.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrder(data[0]);
        console.log(order);
      });
  }, []);

  if (!order) return <p>No profile data</p>;
  return (
    <div>
      <main className="max-w-screen-lg p-10 mx-auto">
        <h1 className="pb-1 mb-2 text-3xl border-b border-yellow-400">
          {order._id}
        </h1>

        <div className="flex flex-row space-x-2">
          <div className="flex-col flex-1 p-2 rounded-lg">
            {order.order_lines.map((item, i) => (
              <div key={i}>
                <div className="flex py-2 border-t border-gray-200">
                  <img
                    src={item.product.image}
                    alt="Product Image"
                    className="h-auto w-36"
                  />
                  <div className="ml-auto ">
                    <span className="text-gray-900 ">{item.product.title}</span>
                    <br />
                    <p className="">Quantity {item.quantity}</p>
                  </div>
                </div>
                <span className="ml-auto text-gray-400">
                  {item.product.category}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap flex-1 mx-auto lg:w-4/5">
            <div className="w-full mb-6 lg:pr-10 lg:py-6 lg:mb-0">
              <h2 className="text-sm tracking-widest text-gray-500 title-font">
                #{order._id}
              </h2>
              <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font">
                {order.shipping_address.address_line1}
              </h1>
              <div className="flex mb-4">
                <a className="flex-grow px-1 py-2 text-lg text-yellow-400 border-b-2 border-yellow-400">
                  Description
                </a>

                <a className="flex-grow px-1 py-2 text-lg border-b-2 border-gray-300">
                  Details
                </a>
              </div>
              <p className="mb-4 leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean.
              </p>

              <div className="flex">
                <span className="text-2xl font-medium text-gray-900 title-font">
                  ${order.total}
                </span>
                <button className="flex px-6 py-2 ml-auto text-white bg-yellow-400 border-0 rounded focus:outline-none hover:bg-yellow-600">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default OrderPage;
