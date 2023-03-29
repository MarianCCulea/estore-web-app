'use client';

import CheckoutProduct from 'app/CheckoutProduct';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectItems, selectTotal } from '../../Redux/cartSlice';

function Checkout() {
  const items = useSelector(selectItems);
  const cartTotal = useSelector(selectTotal);
  const { data: session } = useSession();
  return (
    <div className="bg-gray-200">
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
              {items.length === 0 ? 'Your basket is empty' : 'Shopping Basket'}
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
                Subtotal ({items.length} items) :{' '}
                <span className="font-bold">{cartTotal} $</span>
              </h2>

              {session?.user ? (
                <button href="/checkout">Go to Checkout</button>
              ) : (
                <button onClick={() => signIn()}>Sing in to checkout</button>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
