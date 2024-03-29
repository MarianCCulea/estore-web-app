'use client';

import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../Redux/cartSlice';

function CheckoutProduct({
  id,
  title,
  description,
  image,
  price,
  rating,
  hasPrime,
  quantity,
}) {
  const dispatch = useDispatch();
  const removeItem = () => {
    dispatch(removeFromCart({ id }));
  };
  return (
    <div className="grid grid-cols-5">
      <Image
        src={image}
        height={200}
        width={200}
        className="object-contain "
        alt=""
      />
      <div className="col-span-3 mx-5">
        <p>{title} </p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="my-2 text-xs line-clamp-3">{description}</p>
        <div>{price} sadasd$</div>{' '}
        <p className="text-lg text-black"> {quantity}</p>
        {hasPrime && (
          <div className="flex items-center -mt-5 space-x-2">
            <Image
              loading="lazy"
              src="https://links.papareact.com/fdw"
              alt=""
              className="w-12"
              width={500}
              height={500}
            />
            <p className="text-xs text-gray-500"> FreeNext day Delivery</p>
            <p className="text-lg text-black"> {quantity}</p>
          </div>
        )}
      </div>
      <div className="flex flex-col my-auto space-y-2 justify-self-end">
        <button className="mt-auto button">Add more</button>
        <button onClick={removeItem} className="mt-auto button">
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
